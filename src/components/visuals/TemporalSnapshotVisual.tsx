import React from 'react';

export const TemporalSnapshotVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0F17]/90 rounded-xl p-3 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-[#8A99AD]">
        <span>WORKFORCE_HISTORICAL_ACCUMULATOR</span>
        <span className="text-[#38BDF8]">DELTA SCD-2 ENABLED</span>
      </div>

      <div className="relative w-full h-[140px] flex flex-col justify-center gap-2 overflow-hidden px-1">
        {/* Comparison: Prior Snapshot-Only Failure vs New Historical Accumulation */}
        <div className="p-1.5 rounded bg-rose-950/20 border border-rose-500/20 text-[9px] flex items-center justify-between">
          <span className="text-rose-400 font-medium">Prior Snapshot Model:</span>
          <span className="text-[#8A99AD]">Overwrote T-1 data (No YoY/SPLY analysis)</span>
        </div>

        <div className="p-2 rounded bg-cyan-950/20 border border-[#38BDF8]/40 text-[9px] space-y-1">
          <div className="flex items-center justify-between text-[#38BDF8] font-bold">
            <span>Historical Accumulator (Delta Lake):</span>
            <span className="text-[8px] bg-[#38BDF8]/15 px-1 rounded">5-Year SPLY Active</span>
          </div>
          <div className="grid grid-cols-4 gap-1 text-[8px] text-center pt-1 font-mono">
            <div className="p-1 bg-white/5 rounded border border-white/10">FY22: $42.1M</div>
            <div className="p-1 bg-white/5 rounded border border-white/10">FY23: $48.5M</div>
            <div className="p-1 bg-white/5 rounded border border-white/10">FY24: $53.2M</div>
            <div className="p-1 bg-[#10B981]/15 rounded border border-[#10B981]/40 text-[#10B981]">FY25: SPLY OK</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#8A99AD] pt-1 border-t border-white/5">
        <span>Strict Schema Enforcement</span>
        <span className="text-[#10B981]">18 Metric Dimensions</span>
      </div>
    </div>
  );
};
