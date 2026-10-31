import React from 'react';

export const IndexReconciliationVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0F17]/90 rounded-xl p-3 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-[#8A99AD]">
        <span>SIAM_STEEL_PRICE_RECONCILIATION</span>
        <span className="text-[#F59E0B]">CYCLE: 3 WEEKS → 1 DAY</span>
      </div>

      <div className="relative w-full h-[140px] flex items-center justify-between gap-2 overflow-hidden px-1">
        <svg viewBox="0 0 320 100" className="w-full h-full">
          {/* Grid lines */}
          <line x1="20" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <line x1="20" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <line x1="20" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />

          {/* Line 1: SIAM Benchmark Index (External feed) */}
          <path
            d="M 20 65 Q 90 40, 160 55 T 300 25"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.5"
          />
          <text x="302" y="27" fill="#38BDF8" fontSize="7">SIAM Index</text>

          {/* Line 2: Actual Automotive Procurement Rate */}
          <path
            d="M 20 75 Q 90 55, 160 62 T 300 38"
            fill="none"
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <text x="302" y="41" fill="#F59E0B" fontSize="7">Procurement Unit</text>

          {/* Shaded variance area */}
          <rect x="180" y="32" width="60" height="24" rx="2" fill="rgba(245, 158, 11, 0.15)" stroke="#F59E0B" strokeWidth="0.8" />
          <text x="210" y="43" fill="#F59E0B" fontSize="7" textAnchor="middle" fontWeight="bold">Δ VARIANCE</text>
          <text x="210" y="52" fill="#F0F4F8" fontSize="6.5" textAnchor="middle">₹ 4.12 / kg</text>
        </svg>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#8A99AD] pt-1 border-t border-white/5">
        <span>Automated Settlement Vouchers</span>
        <span className="text-[#10B981]">99.98% Accuracy</span>
      </div>
    </div>
  );
};
