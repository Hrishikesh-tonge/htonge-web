import React from 'react';
import { X, Layers, Activity, CheckCircle, Database, GitBranch, ArrowRight } from 'lucide-react';
import { SystemArchitecture } from '../utils/portfolioData';
import { BenfordVisual } from './visuals/BenfordVisual';
import { RagMatrixVisual } from './visuals/RagMatrixVisual';
import { IncrementalDagVisual } from './visuals/IncrementalDagVisual';
import { PharmaLineageVisual } from './visuals/PharmaLineageVisual';
import { TemporalSnapshotVisual } from './visuals/TemporalSnapshotVisual';
import { IndexReconciliationVisual } from './visuals/IndexReconciliationVisual';

interface SystemDetailModalProps {
  system: SystemArchitecture | null;
  onClose: () => void;
}

export const SystemDetailModal: React.FC<SystemDetailModalProps> = ({ system, onClose }) => {
  if (!system) return null;

  const renderVisual = () => {
    switch (system.visualType) {
      case 'benford':
        return <BenfordVisual />;
      case 'rag_matrix':
        return <RagMatrixVisual />;
      case 'incremental_dag':
        return <IncrementalDagVisual />;
      case 'pharma_lineage':
        return <PharmaLineageVisual />;
      case 'temporal_snapshot':
        return <TemporalSnapshotVisual />;
      case 'index_reconciliation':
        return <IndexReconciliationVisual />;
      default:
        return null;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Architecture Details for ${system.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#0B0F17] border border-white/15 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#151C28]/90">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 font-bold">
              SYSTEM {system.number}
            </span>
            <span className="text-xs font-mono text-[#8A99AD] hidden sm:inline">
              // {system.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8A99AD] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-display text-white tracking-tight">
              {system.title}
            </h2>
            <p className="text-sm text-[#F59E0B] font-medium mt-1 font-mono">
              {system.subtitle}
            </p>
          </div>

          {/* Interactive Abstract Visual Container */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#8A99AD]">ABSTRACT SCHEMATIC & TELEMETRY</span>
            {renderVisual()}
          </div>

          {/* Production Impact & Brief */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-[#F0F4F8] uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Production Impact & Implementation Context</span>
            </h3>
            <p className="text-sm leading-relaxed text-[#F0F4F8]/90 bg-white/5 p-4 rounded-xl border border-white/10">
              {system.impact}
            </p>
          </div>

          {/* Impact Metrics Grid */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-[#8A99AD] uppercase tracking-wider">
              Quantified Engineering Outcomes
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {system.metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">
                  <div className="text-lg font-bold font-mono text-[#38BDF8]">{m.value}</div>
                  <div className="text-[11px] text-[#8A99AD] mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Deep-Dive Highlights */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-[#F0F4F8] uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Core Architectural Decisions</span>
            </h3>
            <div className="space-y-2">
              {system.architecturalHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#8A99AD] bg-white/5 p-3 rounded-lg border border-white/5">
                  <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-[#F0F4F8]/90 leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <span className="text-xs font-mono text-[#8A99AD]">STACK ARCHITECTURE:</span>
            <div className="flex flex-wrap gap-1.5">
              {system.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-[#151C28] text-xs font-mono text-[#38BDF8] border border-[#38BDF8]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#151C28]/90 flex items-center justify-between text-xs font-mono text-[#8A99AD]">
          <span>EY Enterprise Architecture Dossier</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B] hover:bg-[#F59E0B]/30 transition-colors font-medium"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
