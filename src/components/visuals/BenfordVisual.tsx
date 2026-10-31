import React, { useState, useMemo } from 'react';
import { getTheoreticalBenfordProbability, analyzeBenfordDistribution } from '../../utils/benford';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const BenfordVisual: React.FC = () => {
  const [hasInjectedAnomaly, setHasInjectedAnomaly] = useState(true);

  // Generate synthetic numbers
  const sampleData = useMemo(() => {
    const arr: number[] = [];
    // Standard Benford-like distributed amounts
    for (let i = 0; i < 400; i++) {
      // Pareto / exponential distribution roughly approximates Benford
      const val = Math.floor(1000 * Math.pow(Math.random(), -0.6));
      arr.push(val);
    }
    if (hasInjectedAnomaly) {
      // Inject suspicious cluster of transactions starting with 7 (e.g. $7,450 approval limit evasion)
      for (let i = 0; i < 110; i++) {
        arr.push(7400 + Math.floor(Math.random() * 99));
      }
    }
    return arr;
  }, [hasInjectedAnomaly]);

  const analysis = useMemo(() => {
    return analyzeBenfordDistribution(sampleData, 5.0);
  }, [sampleData]);

  // Width & height for SVG
  const width = 360;
  const height = 150;
  const padding = { top: 18, bottom: 26, left: 32, right: 16 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Maximum percentage (around 35%)
  const maxPct = 36;

  return (
    <div className="w-full bg-[#0B0F17]/90 rounded-xl p-3 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[#8A99AD]">BENFORD_LOGARITHMIC_DISTRIBUTION</span>
          {analysis.anomalyDetected ? (
            <span className="inline-flex items-center gap-1 text-[10px] text-[#F59E0B] bg-[#F59E0B]/10 px-1.5 py-0.5 rounded border border-[#F59E0B]/30 font-semibold">
              <AlertCircle className="w-3 h-3" /> ANOMALY DETECTED (d=7)
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded border border-[#10B981]/30 font-semibold">
              <CheckCircle2 className="w-3 h-3" /> CONFORMS TO LOG10(1 + 1/d)
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setHasInjectedAnomaly(!hasInjectedAnomaly)}
          className="text-[10px] px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[#F0F4F8] border border-white/10 transition-colors"
        >
          {hasInjectedAnomaly ? 'Clear Anomaly' : 'Inject Anomaly (Digit 7)'}
        </button>
      </div>

      {/* SVG Curve & Histogram */}
      <div className="relative w-full h-[150px]">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
          {/* Y Axis Grid lines */}
          {[10, 20, 30].map((pct) => {
            const y = padding.top + graphHeight * (1 - pct / maxPct);
            return (
              <g key={pct}>
                <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <text x={padding.left - 6} y={y + 3} fill="#8A99AD" fontSize="8" textAnchor="end">
                  {pct}%
                </text>
              </g>
            );
          })}

          {/* Theoretical Curve Line */}
          {(() => {
            const points = analysis.stats.map((s, idx) => {
              const x = padding.left + (idx + 0.5) * (graphWidth / 9);
              const y = padding.top + graphHeight * (1 - s.expectedPct / maxPct);
              return `${x},${y}`;
            });
            return (
              <polyline
                fill="none"
                stroke="#38BDF8"
                strokeWidth="1.8"
                strokeDasharray="4 2"
                points={points.join(' ')}
              />
            );
          })()}

          {/* Bars for Observed Digits */}
          {analysis.stats.map((s, idx) => {
            const barW = Math.max(graphWidth / 9 - 8, 14);
            const x = padding.left + (idx + 0.5) * (graphWidth / 9) - barW / 2;
            const barH = (s.observedPct / maxPct) * graphHeight;
            const y = padding.top + graphHeight - barH;
            const isAnomaly = s.isAnomaly;

            return (
              <g key={s.digit}>
                {/* Bar */}
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={barH}
                  rx="2"
                  fill={isAnomaly ? '#F59E0B' : 'rgba(56, 189, 248, 0.45)'}
                  stroke={isAnomaly ? '#F59E0B' : 'rgba(56, 189, 248, 0.8)'}
                  strokeWidth="1"
                >
                  <title>{`Digit ${s.digit}: Observed ${s.observedPct}% (Expected ${s.expectedPct}%)`}</title>
                </rect>

                {/* X label */}
                <text
                  x={x + barW / 2}
                  y={height - padding.bottom + 14}
                  fill={isAnomaly ? '#F59E0B' : '#8A99AD'}
                  fontSize="9"
                  fontWeight={isAnomaly ? 'bold' : 'normal'}
                  textAnchor="middle"
                >
                  d={s.digit}
                </text>

                {/* Anomaly indicator tag */}
                {isAnomaly && (
                  <text
                    x={x + barW / 2}
                    y={Math.max(y - 5, 12)}
                    fill="#F59E0B"
                    fontSize="8"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    +{(s.deviation).toFixed(0)}%
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#8A99AD] pt-1">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-0.5 bg-[#38BDF8]" /> Expected P(d)=log10(1+1/d)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-xs bg-[#F59E0B]" /> ERP Procurement Anomaly
          </span>
        </div>
        <span className="text-[#F0F4F8]">Chi-Sq: {analysis.chiSquareScore}</span>
      </div>
    </div>
  );
};
