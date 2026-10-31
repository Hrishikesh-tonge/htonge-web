import React from 'react';

export const RagMatrixVisual: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0F17]/90 rounded-xl p-3 border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5 text-[11px] text-[#8A99AD]">
        <span>UNSTRUCTURED_PDF_TO_VECTOR_KRI</span>
        <span className="text-[#38BDF8]">COS_SIM: 0.892</span>
      </div>

      <div className="relative w-full h-[140px] flex items-center justify-between gap-2 overflow-hidden px-1">
        {/* Step 1: Unstructured Document Blocks */}
        <div className="flex flex-col gap-1.5 w-1/4">
          <span className="text-[9px] text-[#8A99AD]">RAW PDF DOCS</span>
          <div className="p-1.5 rounded bg-white/5 border border-white/10 text-[9px] text-[#8A99AD] space-y-1">
            <div className="h-1.5 w-4/5 bg-white/20 rounded" />
            <div className="h-1.5 w-full bg-white/10 rounded" />
            <div className="h-1.5 w-3/5 bg-[#F59E0B]/60 rounded" />
            <div className="h-1.5 w-5/6 bg-white/10 rounded" />
          </div>
          <div className="p-1.5 rounded bg-white/5 border border-white/10 text-[9px] text-[#8A99AD] space-y-1">
            <div className="h-1.5 w-2/3 bg-white/15 rounded" />
            <div className="h-1.5 w-full bg-[#38BDF8]/50 rounded" />
          </div>
        </div>

        {/* Step 2: Vector Convergence Lines */}
        <div className="flex-1 flex items-center justify-center relative">
          <svg className="w-full h-24 overflow-visible" viewBox="0 0 100 60">
            <path d="M 0 15 C 30 15, 40 30, 50 30" fill="none" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="3 2" />
            <path d="M 0 45 C 30 45, 40 30, 50 30" fill="none" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 2" />
            <circle cx="50" cy="30" r="4" fill="#F59E0B" />
            <path d="M 50 30 L 100 30" fill="none" stroke="#10B981" strokeWidth="1.8" />
          </svg>
          <div className="absolute top-1 text-[8px] text-[#F59E0B] font-mono">FAISS DENSE INDEX</div>
        </div>

        {/* Step 3: Structured Governed JSON */}
        <div className="w-2/5 p-2 rounded bg-black/60 border border-[#10B981]/30 text-[9px] font-mono leading-tight">
          <span className="text-[#10B981] font-semibold">OUTPUT: KRI_SCHEMA</span>
          <pre className="mt-1 text-[8px] text-[#F0F4F8] leading-none overflow-x-hidden">
{`{
 "kri_id": "RISK_084",
 "control": "Three-Way",
 "status": "FAIL",
 "exposure": "$248K"
}`}
          </pre>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#8A99AD] pt-1 border-t border-white/5">
        <span>Model: Azure OpenAI Embeddings</span>
        <span className="text-[#10B981]">Schema: 100% Strict JSON</span>
      </div>
    </div>
  );
};
