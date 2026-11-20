import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * POWER IN MOTION — Signature Vector Visual System
 * Inspired directly by Power Digital's isotipo geometry:
 * - Interlocking cobalt blue arc ("p" connection loop)
 * - Ascending golden-brass directional wings ("d" evolution trajectory)
 * - Precision architectural nodes & axes (purposeful direction)
 */

export const HeroIsotipoKineticCanvas: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setPointer({ x: nx, y: ny });
  };

  const handleMouseLeave = () => {
    setPointer({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={prefersReducedMotion ? false : { clipPath: 'inset(0 0 100% 0)', opacity: 0.2 }}
      animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[500px] bg-[#0B0D17] overflow-hidden select-none"
      aria-label="Sistema cinético Power in Motion basado en el isotipo de Power Digital"
    >
      {/* Subtle architectural coordinate grid */}
      <svg
        viewBox="0 0 600 560"
        className="w-full h-full block"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pd-cobalt-arc" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3451DE" />
            <stop offset="55%" stopColor="#4361EE" />
            <stop offset="100%" stopColor="#7C93FF" />
          </linearGradient>
          <linearGradient id="pd-gold-ray" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A6B20" />
            <stop offset="50%" stopColor="#DEB660" />
            <stop offset="100%" stopColor="#F5DC9C" />
          </linearGradient>
          <linearGradient id="pd-cobalt-soft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4361EE" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#4361EE" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Architectural Grid Axes */}
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
          <line x1="120" y1="0" x2="120" y2="560" />
          <line x1="300" y1="0" x2="300" y2="560" />
          <line x1="480" y1="0" x2="480" y2="560" />
          <line x1="0" y1="140" x2="600" y2="140" />
          <line x1="0" y1="280" x2="600" y2="280" />
          <line x1="0" y1="420" x2="600" y2="420" />
        </g>

        {/* Directional Diagonal Trajectory Guide (from P-stem toward Evolution rays) */}
        <motion.line
          x1="115"
          y1="445"
          x2="510"
          y2="90"
          stroke="rgba(222,182,96,0.22)"
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={prefersReducedMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Subtle Orbital Track Ring */}
        <motion.circle
          cx="300"
          cy="280"
          r="185"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: pointer.x * -6,
                  y: pointer.y * -6,
                }
          }
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />

        {/* Main Parallax Group responding smoothly to cursor */}
        <motion.g
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: pointer.x * 12,
                  y: pointer.y * 12,
                }
          }
          transition={{ type: 'spring', stiffness: 110, damping: 18 }}
        >
          {/* Ambient Geometric Sector behind Isotipo */}
          <circle cx="275" cy="285" r="128" fill="url(#pd-cobalt-soft)" />

          {/* Pillar 1 — CONEXIÓN: Precision interlocking 'P' continuous arc from Power Digital isotipo */}
          <motion.path
            d="M 162 412 L 220 226 C 232 188 265 170 306 170 C 358 170 388 206 376 254 C 365 298 324 326 276 326 L 236 326"
            fill="none"
            stroke="url(#pd-cobalt-arc)"
            strokeWidth="26"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={prefersReducedMotion ? false : { pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.05, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Secondary precision hairline echoing the P-curve */}
          <motion.path
            d="M 188 424 L 240 250 C 250 218 274 202 306 202 C 344 202 365 228 355 262"
            fill="none"
            stroke="rgba(124,147,255,0.45)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={prefersReducedMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Pillar 2 — EVOLUCIÓN: Ascending Golden Wing Vectors (inspired by the upward golden sweep of Power Digital's isotipo) */}
          <motion.path
            d="M 278 286 Q 368 232 456 122"
            fill="none"
            stroke="url(#pd-gold-ray)"
            strokeWidth="16"
            strokeLinecap="round"
            initial={prefersReducedMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.path
            d="M 304 316 Q 392 266 476 172"
            fill="none"
            stroke="url(#pd-gold-ray)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeOpacity="0.88"
            initial={prefersReducedMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.path
            d="M 332 342 Q 412 298 486 226"
            fill="none"
            stroke="url(#pd-gold-ray)"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeOpacity="0.65"
            initial={prefersReducedMotion ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.66, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.g>

        {/* Pillar 3 — DIRECCIÓN: Precision Nodes connecting P-curve and Evolution Trajectory */}
        <motion.g
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  x: pointer.x * 18,
                  y: pointer.y * 18,
                }
          }
          transition={{ type: 'spring', stiffness: 140, damping: 20 }}
        >
          {/* Origin Anchor Node */}
          <circle cx="162" cy="412" r="7" fill="#0B0D17" stroke="#7C93FF" strokeWidth="2.5" />
          {/* Intersection Pivot Node */}
          <circle cx="278" cy="286" r="8" fill="#0B0D17" stroke="#DEB660" strokeWidth="3" />
          {/* Summit Direction Node */}
          <motion.circle
            cx="456"
            cy="122"
            r="7"
            fill="#DEB660"
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.25, 1], opacity: [0.85, 1, 0.85] }
            }
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '456px 122px' }}
          />
        </motion.g>

        {/* Architectural Corner Crosshairs */}
        <g stroke="rgba(255,255,255,0.22)" strokeWidth="1">
          <path d="M 36 36 L 52 36 M 36 36 L 36 52" />
          <path d="M 564 524 L 548 524 M 564 524 L 564 508" />
        </g>
      </svg>

      {/* Clean Architectural Legend at Bottom of Composition */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between gap-4 bg-gradient-to-t from-[#0B0D17] via-[#0B0D17]/70 to-transparent">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono-code uppercase tracking-[0.18em] text-[#F8F9FA]/75">
          <span className="text-[#DEB660]">Conexión</span>
          <span aria-hidden="true">·</span>
          <span>Evolución</span>
          <span aria-hidden="true">·</span>
          <span>Dirección</span>
        </div>
        <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-white/45 whitespace-nowrap">
          Power Digital · PE
        </span>
      </div>
    </motion.div>
  );
};

interface DisciplineVectorStageProps {
  activeId: string;
}

export const DisciplineVectorStage: React.FC<DisciplineVectorStageProps> = ({ activeId }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-16/11 bg-[#0B0D17] overflow-hidden border border-white/10">
      <svg
        viewBox="0 0 480 330"
        className="w-full h-full block"
        role="img"
        aria-label={`Diagrama visual para disciplina ${activeId}`}
      >
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
          <line x1="120" y1="0" x2="120" y2="330" />
          <line x1="240" y1="0" x2="240" y2="330" />
          <line x1="360" y1="0" x2="360" y2="330" />
          <line x1="0" y1="110" x2="480" y2="110" />
          <line x1="0" y1="220" x2="480" y2="220" />
        </g>

        {activeId === 'estrategia-marca' && (
          <motion.g
            key="estrategia"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: '240px 165px' }}
          >
            <circle cx="240" cy="165" r="96" fill="none" stroke="#4361EE" strokeWidth="1.5" strokeDasharray="5 5" />
            <circle cx="240" cy="165" r="56" fill="rgba(67,97,238,0.14)" stroke="#7C93FF" strokeWidth="2" />
            <line x1="90" y1="165" x2="390" y2="165" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
            <line x1="240" y1="45" x2="240" y2="285" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
            <path d="M 176 228 L 240 165 L 334 78" fill="none" stroke="#DEB660" strokeWidth="4" strokeLinecap="round" />
            <circle cx="240" cy="165" r="7" fill="#DEB660" />
            <circle cx="334" cy="78" r="5" fill="#FFFFFF" />
          </motion.g>
        )}

        {activeId === 'contenido-creativo' && (
          <motion.g
            key="contenido"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <rect x="78" y="64" width="136" height="202" rx="4" fill="rgba(67,97,238,0.14)" stroke="#4361EE" strokeWidth="2" />
            <rect x="234" y="64" width="168" height="106" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <rect x="234" y="186" width="168" height="80" rx="4" fill="rgba(222,182,96,0.10)" stroke="#DEB660" strokeWidth="1.5" />
            <path d="M 134 150 L 164 165 L 134 180 Z" fill="#DEB660" />
            <line x1="252" y1="226" x2="384" y2="226" stroke="#DEB660" strokeWidth="2.5" strokeLinecap="round" />
          </motion.g>
        )}

        {activeId === 'web-experiencia' && (
          <motion.g
            key="web"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <rect x="64" y="54" width="352" height="222" rx="6" fill="#131624" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
            <line x1="64" y1="86" x2="416" y2="86" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
            <circle cx="86" cy="70" r="3.5" fill="#DEB660" />
            <circle cx="99" cy="70" r="3.5" fill="rgba(255,255,255,0.35)" />
            <circle cx="112" cy="70" r="3.5" fill="rgba(255,255,255,0.2)" />
            <rect x="86" y="106" width="170" height="72" fill="rgba(67,97,238,0.22)" stroke="#4361EE" strokeWidth="1.5" />
            <rect x="272" y="106" width="122" height="148" fill="rgba(222,182,96,0.12)" stroke="#DEB660" strokeWidth="1.5" />
            <line x1="86" y1="202" x2="236" y2="202" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
            <line x1="86" y1="222" x2="202" y2="222" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
            <rect x="86" y="236" width="84" height="18" rx="3" fill="#4361EE" />
          </motion.g>
        )}

        {activeId === 'ia-automatizacion' && (
          <motion.g
            key="ia"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: '240px 165px' }}
          >
            <path d="M 96 165 C 144 95 190 95 240 165 C 290 235 336 235 384 165" fill="none" stroke="#4361EE" strokeWidth="4" />
            <path d="M 96 165 C 144 235 190 235 240 165 C 290 95 336 95 384 165" fill="none" stroke="#DEB660" strokeWidth="2.5" strokeDasharray="6 4" />
            <circle cx="96" cy="165" r="7" fill="#FFFFFF" />
            <circle cx="168" cy="112" r="5" fill="#4361EE" />
            <circle cx="240" cy="165" r="9" fill="#0B0D17" stroke="#DEB660" strokeWidth="3" />
            <circle cx="312" cy="218" r="5" fill="#4361EE" />
            <circle cx="384" cy="165" r="7" fill="#DEB660" />
          </motion.g>
        )}

        {activeId === 'growth-acompanamiento' && (
          <motion.g
            key="growth"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <line x1="76" y1="256" x2="404" y2="256" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <path d="M 86 240 Q 170 228 232 168 T 392 78" fill="none" stroke="#DEB660" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 86 248 Q 186 244 260 198 T 392 128" fill="none" stroke="#4361EE" strokeWidth="3" strokeLinecap="round" />
            <circle cx="232" cy="168" r="6" fill="#0B0D17" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="392" cy="78" r="7" fill="#DEB660" />
          </motion.g>
        )}
      </svg>
    </div>
  );
};

interface MethodGeometryStageProps {
  activeStep: number; // 0..3
}

export const MethodGeometryStage: React.FC<MethodGeometryStageProps> = ({ activeStep }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-16/10 bg-[#0F1220] border border-white/12 overflow-hidden">
      <svg
        viewBox="0 0 460 280"
        className="w-full h-full block"
        role="img"
        aria-label={`Representación geométrica fase ${activeStep + 1} de 4`}
      >
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
          <line x1="115" y1="0" x2="115" y2="280" />
          <line x1="230" y1="0" x2="230" y2="280" />
          <line x1="345" y1="0" x2="345" y2="280" />
          <line x1="0" y1="70" x2="460" y2="70" />
          <line x1="0" y1="140" x2="460" y2="140" />
          <line x1="0" y1="210" x2="460" y2="210" />
        </g>

        {/* Continuous connecting baseline */}
        <motion.path
          d="M 75 205 L 178 158 L 282 115 L 385 68"
          fill="none"
          stroke={activeStep >= 2 ? '#DEB660' : '#4361EE'}
          strokeWidth="2.5"
          strokeDasharray={activeStep === 0 ? '4 6' : 'none'}
          initial={false}
          animate={{
            pathLength: (activeStep + 1) / 4,
            opacity: 0.9,
          }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
          }
        />

        {/* Phase 1..4 Nodes shifting cleanly */}
        {[
          { cx: 75, cy: 205, r: activeStep === 0 ? 18 : 8 },
          { cx: 178, cy: 158, r: activeStep === 1 ? 22 : 8 },
          { cx: 282, cy: 115, r: activeStep === 2 ? 26 : 8 },
          { cx: 385, cy: 68, r: activeStep === 3 ? 30 : 8 },
        ].map((node, i) => {
          const isCurrent = i === activeStep;
          const isVisited = i <= activeStep;
          return (
            <g key={i}>
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                initial={false}
                animate={{
                  r: isCurrent ? node.r : 7,
                  opacity: isVisited ? 1 : 0.28,
                }}
                transition={
                  prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                }
                fill={isCurrent ? 'rgba(67,97,238,0.18)' : 'none'}
                stroke={isCurrent ? '#DEB660' : isVisited ? '#4361EE' : 'rgba(255,255,255,0.4)'}
                strokeWidth={isCurrent ? 2.5 : 1.5}
              />
              <circle
                cx={node.cx}
                cy={node.cy}
                r={isCurrent ? 5.5 : 3.5}
                fill={isCurrent ? '#DEB660' : isVisited ? '#4361EE' : 'rgba(255,255,255,0.45)'}
              />
            </g>
          );
        })}

        {/* Directional vector arc unlocked on Activar / Evolucionar */}
        <motion.path
          d="M 110 230 Q 250 220 392 86"
          fill="none"
          stroke="rgba(222,182,96,0.42)"
          strokeWidth="1.5"
          initial={false}
          animate={{ opacity: activeStep >= 2 ? 1 : 0.12 }}
          transition={{ duration: 0.4 }}
        />
      </svg>
    </div>
  );
};
