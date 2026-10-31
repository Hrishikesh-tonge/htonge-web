import React from 'react';

export const IncrementalDagVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0F17]/90 rounded-xl p-3 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-[#8A99AD]">
        <span>INCREMENTAL_DBT_DAG // BOTTLENECK_RESOLVED</span>
        <span className="text-[#10B981]">-62% SNOWFLAKE CREDITS</span>
      </div>

      <div className="relative w-full h-[140px] flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 340 120" className="w-full h-full">
          {/* Defs for gradients */}
          <defs>
            <linearGradient id="dagLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>

          {/* Node 1: SAP ERP Raw Partition */}
          <rect x="10" y="42" width="75" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <text x="47" y="58" fill="#F0F4F8" fontSize="8" textAnchor="middle" fontWeight="bold">RAW_SAP_TX</text>
          <text x="47" y="69" fill="#8A99AD" fontSize="7" textAnchor="middle">12M records/d</text>

          {/* Path to staging */}
          <path d="M 85 59 L 125 35" fill="none" stroke="url(#dagLine)" strokeWidth="1.5" />
          <path d="M 85 59 L 125 85" fill="none" stroke="url(#dagLine)" strokeWidth="1.5" />

          {/* Node 2a: Staging Inventory */}
          <rect x="125" y="18" width="85" height="34" rx="4" fill="rgba(56, 189, 248, 0.1)" stroke="#38BDF8" strokeWidth="1" />
          <text x="167" y="34" fill="#38BDF8" fontSize="8" textAnchor="middle" fontWeight="bold">stg_inventory</text>
          <text x="167" y="45" fill="#8A99AD" fontSize="7" textAnchor="middle">Windowed Partition</text>

          {/* Node 2b: Staging Ledger */}
          <rect x="125" y="68" width="85" height="34" rx="4" fill="rgba(56, 189, 248, 0.1)" stroke="#38BDF8" strokeWidth="1" />
          <text x="167" y="84" fill="#38BDF8" fontSize="8" textAnchor="middle" fontWeight="bold">stg_gl_ledger</text>
          <text x="167" y="95" fill="#8A99AD" fontSize="7" textAnchor="middle">Surrogate Hashing</text>

          {/* Paths to final incremental mart */}
          <path d="M 210 35 L 245 59" fill="none" stroke="#10B981" strokeWidth="1.5" />
          <path d="M 210 85 L 245 59" fill="none" stroke="#10B981" strokeWidth="1.5" />

          {/* Node 3: Incremental Mart (Resolved Bottleneck) */}
          <rect x="245" y="42" width="85" height="36" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" strokeWidth="1.5" />
          <text x="287" y="58" fill="#10B981" fontSize="8" textAnchor="middle" fontWeight="bold">fct_kpi_cebitda</text>
          <text x="287" y="69" fill="#F0F4F8" fontSize="7" textAnchor="middle">18 min (was 3.5h)</text>
        </svg>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#8A99AD] pt-1 border-t border-white/5">
        <span>Optimization: Surrogate Key Merge</span>
        <span className="text-[#38BDF8]">Zero Cartesian Timeouts</span>
      </div>
    </div>
  );
};
