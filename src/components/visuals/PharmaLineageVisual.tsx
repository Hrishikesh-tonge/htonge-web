import React from 'react';

export const PharmaLineageVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0F17]/90 rounded-xl p-3 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-[#8A99AD]">
        <span>PHARMA_CMC_GOVERNANCE_LINEAGE</span>
        <span className="text-[#F59E0B]">GxP_COMPLIANT</span>
      </div>

      <div className="relative w-full h-[140px] flex items-center justify-between gap-1 overflow-hidden">
        {/* Lab LIMS Ingestion */}
        <div className="flex-1 p-2 rounded bg-white/5 border border-white/10 text-center space-y-1">
          <div className="text-[8px] text-[#8A99AD]">LIMS / RAW ASSAY</div>
          <div className="text-[10px] text-[#F0F4F8] font-bold">Batch #B-904</div>
          <div className="text-[8px] text-[#10B981]">Stability Bounds: OK</div>
        </div>

        {/* Lineage Arrow & Schema Assertion */}
        <div className="flex flex-col items-center justify-center px-1">
          <span className="text-[8px] text-[#F59E0B]">dbt test</span>
          <svg className="w-8 h-4 overflow-visible" viewBox="0 0 30 10">
            <line x1="0" y1="5" x2="25" y2="5" stroke="#F59E0B" strokeWidth="1.5" />
            <polygon points="25,2 30,5 25,8" fill="#F59E0B" />
          </svg>
          <span className="text-[7px] text-[#8A99AD]">SHA256 Sign</span>
        </div>

        {/* Governed CMC Mart */}
        <div className="flex-1 p-2 rounded bg-emerald-950/30 border border-emerald-500/40 text-center space-y-1">
          <div className="text-[8px] text-[#10B981]">GOVERNED CMC MART</div>
          <div className="text-[10px] text-[#F0F4F8] font-bold">dim_assay_purity</div>
          <div className="text-[8px] text-[#38BDF8]">Audit Hash Validated</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#8A99AD] pt-1 border-t border-white/5">
        <span>Scientists Models: 40+ Pipelines</span>
        <span className="text-[#10B981]">100% GxP Audit Trace</span>
      </div>
    </div>
  );
};
