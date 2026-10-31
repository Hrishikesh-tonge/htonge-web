import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Zap, RefreshCw } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  stage: 'raw' | 'prism' | 'governed';
  color: string;
  char?: string;
}

export const DataPrismCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [throughputMode, setThroughputMode] = useState<'nominal' | 'burst'>('nominal');
  const [packetCount, setPacketCount] = useState(1420);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 540);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.min(Math.max(canvas.parentElement.clientWidth * 0.65, 340), 400);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Characters for raw chaotic signals
    const rawChars = ['0', '1', '§', 'Δ', 'λ', '0xFA', 'NULL', 'JSON', 'NaN', 'ERR', 'PARQ', 'dbt'];

    const createParticle = (burst = false): Particle => {
      const isRaw = Math.random() > 0.1;
      return {
        x: Math.random() * (width * 0.25),
        y: Math.random() * height,
        vx: (burst ? 3.5 : 1.4) + Math.random() * 1.2,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2.2 + 1.2,
        alpha: Math.random() * 0.7 + 0.3,
        stage: 'raw',
        color: Math.random() > 0.4 ? '#8A99AD' : '#F59E0B',
        char: rawChars[Math.floor(Math.random() * rawChars.length)]
      };
    };

    // Initialize particles pool
    particlesRef.current = Array.from({ length: 65 }, () => createParticle());

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Background structural grid inside canvas
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const step = 28;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Prism coordinates (Center Transformation Zone)
      const prismX = width * 0.48;
      const prismY = height * 0.5;
      const prismWidth = 36;
      const prismHeight = height * 0.7;

      // Draw Governed Pipeline Rails (Right side structured guide lanes)
      const laneCount = 5;
      const laneSpacing = prismHeight / (laneCount + 1);
      const laneStartY = prismY - prismHeight / 2 + laneSpacing;

      for (let i = 0; i < laneCount; i++) {
        const y = laneStartY + i * laneSpacing;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.moveTo(prismX + prismWidth / 2, y);
        ctx.lineTo(width, y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Lane labels at exit
        if (width > 420) {
          ctx.fillStyle = 'rgba(138, 153, 173, 0.45)';
          ctx.font = '9px "JetBrains Mono", monospace';
          const labels = ['STREAM::ERP', 'LAKEHOUSE::GOLD', 'RAG::EMBEDDINGS', 'AUDIT::BENFORD', 'DBT::INCREMENTAL'];
          ctx.fillText(labels[i % labels.length], width - 110, y - 4);
        }
      }

      // Draw Transformation Prism Core
      const gradient = ctx.createLinearGradient(prismX - prismWidth / 2, 0, prismX + prismWidth / 2, height);
      gradient.addColorStop(0, 'rgba(245, 158, 11, 0.2)');
      gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.35)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.25)');

      // Prism glow
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#F59E0B';
      ctx.fillStyle = gradient;
      ctx.fillRect(prismX - prismWidth / 2, prismY - prismHeight / 2, prismWidth, prismHeight);

      // Prism border & hairline center
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(prismX - prismWidth / 2, prismY - prismHeight / 2, prismWidth, prismHeight);

      // Label inside prism
      ctx.save();
      ctx.translate(prismX, prismY);
      ctx.rotate(-Math.PI / 2);
      ctx.fillStyle = '#F0F4F8';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('ENGINE::TRANSFORM', 0, 3);
      ctx.restore();

      // Spawn new particles periodically
      const spawnRate = throughputMode === 'burst' ? 2 : 4;
      if (frame % spawnRate === 0 && particlesRef.current.length < 110) {
        particlesRef.current.push(createParticle(throughputMode === 'burst'));
      }

      // Update & Render Particles
      particlesRef.current.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Stage transition: entering Prism
        if (p.x >= prismX - prismWidth / 2 && p.x <= prismX + prismWidth / 2) {
          p.stage = 'prism';
          p.color = '#F59E0B';
          // Attract toward nearest lane
          const targetLaneIndex = idx % laneCount;
          const targetY = laneStartY + targetLaneIndex * laneSpacing;
          p.vy = (targetY - p.y) * 0.12;
        } else if (p.x > prismX + prismWidth / 2) {
          // Governed stage: crisp structured laminar flow
          p.stage = 'governed';
          p.color = idx % 2 === 0 ? '#38BDF8' : '#10B981';
          const targetLaneIndex = idx % laneCount;
          const targetY = laneStartY + targetLaneIndex * laneSpacing;
          p.y += (targetY - p.y) * 0.15;
          p.vy = 0;
          p.vx = throughputMode === 'burst' ? 4.2 : 2.8;
        }

        // Draw particle
        if (p.stage === 'raw') {
          // Noisy chaotic symbol or speck
          if (p.char && idx % 3 === 0) {
            ctx.fillStyle = `rgba(138, 153, 173, ${p.alpha * 0.65})`;
            ctx.font = '9px "JetBrains Mono", monospace';
            ctx.fillText(p.char, p.x, p.y);
          } else {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        } else if (p.stage === 'prism') {
          // Spark in prism
          ctx.fillStyle = '#F59E0B';
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Governed structured packet with light streak
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = 0.85;
          ctx.beginPath();
          ctx.moveTo(p.x - 12, p.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();

          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        // Remove off-screen particles
        if (p.x > width + 20 || p.y < -20 || p.y > height + 20) {
          particlesRef.current.splice(idx, 1);
        }
      });

      if (isRunning) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    if (isRunning) {
      animFrameRef.current = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isRunning, throughputMode]);

  const handleInjectBurst = () => {
    setThroughputMode('burst');
    setPacketCount((prev) => prev + 250);
    setTimeout(() => setThroughputMode('nominal'), 1800);
  };

  return (
    <div className="relative w-full rounded-2xl glass-panel p-4 overflow-hidden border border-white/10 shadow-2xl">
      {/* Top HUD Bar */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2 font-mono text-[#8A99AD]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#F0F4F8] font-medium">PIPELINE.DAG // STREAM_INGEST</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#8A99AD]">
          <span>
            THROUGHPUT: <strong className="text-[#F59E0B] font-semibold">{throughputMode === 'burst' ? '4.8M tx/s' : '1.2M tx/s'}</strong>
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">
            RECORDS: <strong className="text-[#38BDF8]">{packetCount.toLocaleString()}</strong>
          </span>
        </div>
      </div>

      {/* Canvas Element */}
      <div className="relative w-full h-[320px] sm:h-[350px] bg-[#0B0F17]/80 rounded-xl overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full block cursor-crosshair"
          title="Raw chaotic signals transforming into governed data pipelines"
        />

        {/* Dynamic Watermark / Schematic Callouts */}
        <div className="absolute top-3 left-3 pointer-events-none text-[10px] font-mono text-[#8A99AD]/70 flex flex-col gap-1">
          <span>SOURCE: [SAP_ERP, AZURE_BLOB, ORACLE_DB]</span>
          <span>FORMAT: [RAW_CDC, UNSTRUCTURED_PDF]</span>
        </div>
        <div className="absolute bottom-3 right-3 pointer-events-none text-[10px] font-mono text-[#38BDF8]/80 text-right">
          <span>GOVERNED: [DELTA_PARQUET, FAISS_VECTORS]</span>
          <span>COMPLIANCE: [BENFORD_VALIDATED, GxP_CHECKED]</span>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="mt-3 pt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsRunning(!isRunning)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#F0F4F8] transition-colors border border-white/5 font-mono text-[11px]"
            aria-label={isRunning ? 'Pause data flow' : 'Resume data flow'}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5 text-[#F59E0B]" /> : <Play className="w-3.5 h-3.5 text-[#10B981]" />}
            <span>{isRunning ? 'Pause Stream' : 'Resume Stream'}</span>
          </button>

          <button
            type="button"
            onClick={handleInjectBurst}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F59E0B]/15 hover:bg-[#F59E0B]/25 text-[#F59E0B] border border-[#F59E0B]/30 transition-all font-mono text-[11px]"
            title="Simulate high-throughput ERP batch ingestion"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Simulate ERP Burst</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-mono text-[#8A99AD]">
          <span className="text-[#F59E0B]">Raw Chaos</span>
          <span>→</span>
          <span className="text-[#38BDF8]">Transformation Prism</span>
          <span>→</span>
          <span className="text-[#10B981]">Governed Lake</span>
        </div>
      </div>
    </div>
  );
};
