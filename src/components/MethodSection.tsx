import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { METHOD_STEPS } from '../data/method';
import { MethodGeometryStage } from './motion/PowerMotionArt';

interface MethodSectionProps {
  onCtaClick: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onCtaClick }) => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 60%', 'end 80%'],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const els = stepRefs.current.filter(Boolean) as HTMLDivElement[];
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-step-index'));
            if (!Number.isNaN(idx)) {
              setActiveIndex(idx);
            }
          }
        });
      },
      { rootMargin: '-32% 0px -45% 0px', threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const currentStep = METHOD_STEPS[activeIndex] || METHOD_STEPS[0];

  const jumpToStep = (idx: number) => {
    setActiveIndex(idx);
    const el = stepRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="enfoque"
      className="py-24 sm:py-32 bg-[#0B0D17] text-[#F8F9FA] border-t border-white/10 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-12 sm:mb-18 text-left">
          <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#DEB660] font-medium mb-3">
            Cómo Trabajamos
          </p>
          <h2 className="text-editorial-title font-bold text-white mb-4">
            Primero entendemos. Después creamos. Siempre evolucionamos.
          </h2>
          <p className="text-sm sm:text-base text-white/65 leading-relaxed">
            Cuatro fases articuladas para construir marcas y activos digitales con dirección clara.
          </p>
        </div>

        {/* Mobile Compact Interactive Stage Selector (Prevents endless vertical stacking) */}
        <div className="lg:hidden space-y-6">
          <div
            className="grid grid-cols-4 gap-2 border-b border-white/15 pb-3"
            role="tablist"
            aria-label="Fases de metodología móvil"
          >
            {METHOD_STEPS.map((step, idx) => {
              const active = idx === activeIndex;
              return (
                <button
                  key={`m-${step.step}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveIndex(idx)}
                  className={`py-2.5 text-left transition-colors cursor-pointer ${
                    active ? 'text-white' : 'text-white/45'
                  }`}
                >
                  <span
                    className={`block h-[2px] mb-2 ${
                      active ? 'bg-[#4361EE]' : 'bg-white/15'
                    }`}
                  />
                  <span className="font-mono-code text-[11px] block">{step.step}</span>
                  <span className="text-xs font-bold block truncate">{step.name}</span>
                </button>
              );
            })}
          </div>

          <MethodGeometryStage activeStep={activeIndex} />

          <div className="text-left pt-2">
            <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#DEB660] block mb-2">
              {currentStep.step} · {currentStep.focus}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{currentStep.name}</h3>
            <p className="text-base font-medium text-white/90 mb-2">{currentStep.summary}</p>
            <p className="text-sm text-white/70 leading-relaxed mb-4">{currentStep.description}</p>
            <p className="font-mono-code text-xs text-white/45 mb-6">
              {currentStep.deliverableCue}
            </p>
            <button
              type="button"
              onClick={onCtaClick}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-6 py-3.5 text-sm font-bold cursor-pointer"
            >
              <span>Conversemos sobre tu proyecto</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop Real Sticky Storytelling Split */}
        <div className="hidden lg:grid grid-cols-12 gap-14 items-start">
          {/* Left Sticky Morphing Visual Stage */}
          <div className="col-span-5 sticky top-28 space-y-6">
            <MethodGeometryStage activeStep={activeIndex} />

            <div className="pt-4 border-t border-white/12 text-left">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="font-mono-code text-xs uppercase tracking-[0.2em] text-[#DEB660]">
                  Fase {currentStep.step} / 04
                </span>
                <span className="font-mono-code text-[11px] text-white/50">
                  {currentStep.deliverableCue}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{currentStep.name}</h3>
              <p className="text-sm text-white/70 mb-5">{currentStep.summary}</p>

              {/* Progress Tabs */}
              <div className="grid grid-cols-4 gap-2" role="tablist" aria-label="Fases de trabajo">
                {METHOD_STEPS.map((step, idx) => {
                  const active = idx === activeIndex;
                  return (
                    <button
                      key={step.step}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => jumpToStep(idx)}
                      className="text-left group cursor-pointer"
                    >
                      <span
                        className={`block h-[3px] transition-colors duration-300 mb-2 ${
                          active ? 'bg-[#4361EE]' : 'bg-white/15 group-hover:bg-white/35'
                        }`}
                      />
                      <span
                        className={`font-mono-code text-[11px] transition-colors ${
                          active ? 'text-white font-semibold' : 'text-white/45'
                        }`}
                      >
                        {step.step}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Vertical Narrative Steps with Vertical Progress Track */}
          <div className="col-span-7 relative pl-8">
            {/* Vertical Scroll Progress Track */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/12"
            >
              <motion.div
                style={prefersReducedMotion ? { height: '100%' } : { height: progressHeight }}
                className="w-full bg-gradient-to-b from-[#4361EE] to-[#DEB660]"
              />
            </div>

            <div className="divide-y divide-white/12">
              {METHOD_STEPS.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={item.step}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    data-step-index={idx}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`py-14 first:pt-0 transition-opacity duration-300 text-left ${
                      isActive ? 'opacity-100' : 'opacity-45 hover:opacity-85'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-4">
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-mono-code text-2xl font-medium transition-colors ${
                            isActive ? 'text-[#4361EE]' : 'text-white/40'
                          }`}
                        >
                          {item.step}
                        </span>
                        <h3 className="text-4xl font-bold text-white uppercase tracking-tight">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#DEB660]">
                        {item.focus}
                      </span>
                    </div>

                    <p className="text-xl font-semibold text-white/90 mb-3">{item.summary}</p>
                    <p className="text-base text-white/65 leading-relaxed max-w-2xl mb-4">
                      {item.description}
                    </p>
                    <p className="font-mono-code text-xs text-white/45">{item.deliverableCue}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-10 border-t border-white/12 flex items-center justify-between gap-6">
              <p className="text-sm text-white/65 max-w-md text-left">
                ¿Revisamos en qué fase se encuentra tu marca hoy?
              </p>
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-6 py-3.5 text-sm font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                <span>Conversemos sobre tu proyecto</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
