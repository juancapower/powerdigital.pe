import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { METHOD_STEPS } from '../data/method';
import methodCraftImg from '../assets/images/method_editorial_craft_1794964565021.jpg';

interface MethodSectionProps {
  onCtaClick: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onCtaClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      id="enfoque"
      className="py-24 sm:py-32 bg-[#0B0D17] text-[#F8F9FA] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="max-w-3xl mb-14 sm:mb-20 text-left">
          <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#DEB660] font-medium mb-3">
            Nuestro Enfoque
          </p>
          <h2 className="text-editorial-title font-bold text-white mb-5">
            Primero entendemos. Después creamos. Siempre evolucionamos.
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Cuatro etapas ordenadas para evitar improvisaciones y construir activos digitales con
            dirección comercial.
          </p>
        </div>

        {/* Sticky Narrative Split on Desktop / Natural Vertical Sequence on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Sticky Column (Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            {/* Active Stage Readout + Visual */}
            <div className="relative rounded-3xl overflow-hidden bg-[#131624] border border-white/12">
              <div className="aspect-4/3 w-full overflow-hidden">
                <img
                  src={methodCraftImg}
                  alt="Cuatro bloques arquitectónicos ascendentes simbolizando el proceso de Power Digital"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: `scale(${1 + activeIndex * 0.025})`,
                  }}
                />
              </div>

              <div className="p-6 sm:p-7 border-t border-white/10 bg-[#131624]">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-mono-code text-xs uppercase tracking-[0.2em] text-[#DEB660]">
                    Fase {currentStep.step} / 04
                  </span>
                  <span className="font-mono-code text-[11px] text-white/55">
                    {currentStep.deliverableCue}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{currentStep.name}</h3>
                <p className="text-sm text-white/70">{currentStep.summary}</p>

                {/* Progress Indicator */}
                <div
                  className="grid grid-cols-4 gap-2 mt-6"
                  role="tablist"
                  aria-label="Fases de trabajo"
                >
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
                          className={`block h-[3px] rounded-full transition-colors duration-300 mb-2 ${
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
          </div>

          {/* Right Vertical Narrative Steps */}
          <div className="lg:col-span-7 divide-y divide-white/12">
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
                  className={`py-8 sm:py-12 first:pt-0 transition-opacity duration-300 text-left ${
                    isActive ? 'opacity-100' : 'opacity-75 lg:opacity-55 hover:opacity-100'
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-mono-code text-xl sm:text-2xl font-medium transition-colors ${
                          isActive ? 'text-[#4361EE]' : 'text-white/40'
                        }`}
                      >
                        {item.step}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
                        {item.name}
                      </h3>
                    </div>
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#DEB660]">
                      {item.focus}
                    </span>
                  </div>

                  <p className="text-lg sm:text-xl font-semibold text-white/90 mb-3">
                    {item.summary}
                  </p>

                  <p className="text-sm sm:text-base text-white/65 leading-relaxed max-w-2xl mb-4">
                    {item.description}
                  </p>

                  <p className="font-mono-code text-xs text-white/45">{item.deliverableCue}</p>
                </div>
              );
            })}

            {/* Action Anchor after 4 steps */}
            <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <p className="text-sm text-white/65 max-w-md">
                ¿Quieres revisar en qué etapa se encuentra hoy tu marca y cuál sería el punto de
                partida más inteligente?
              </p>
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-6 py-3.5 rounded-xl text-sm font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0"
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
