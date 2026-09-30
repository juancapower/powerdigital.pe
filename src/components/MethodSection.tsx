import React from 'react';
import { METHOD_STEPS } from '../data/method';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface MethodSectionProps {
  onCtaClick: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="metodo" className="py-24 md:py-36 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4361EE] mb-4">
            <span>Metodología de Crecimiento</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/55">De Principio a Fin</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-[1.15] mb-5">
            Cómo estructuramos y ejecutamos tu crecimiento
          </h2>
          <p className="text-base sm:text-lg text-[#0B0D17]/75 font-normal leading-relaxed text-pretty">
            No empezamos lanzando campañas al azar. Primero diagnosticamos y entendemos a fondo tu
            negocio; después construimos los activos y la tecnología, y finalmente ejecutamos con
            precisión.
          </p>
        </div>

        {/* 5 Steps Grid with high breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {METHOD_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl p-7 border border-[#0B0D17]/10 hover:border-[#4361EE]/40 transition-all duration-300 shadow-2xs hover:shadow-lg flex flex-col justify-between text-left group"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-black font-mono-code text-[#4361EE]/25 group-hover:text-[#4361EE] transition-colors">
                    {step.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#DEB660]" />
                </div>

                <h3 className="text-xl font-bold text-[#0B0D17] mb-1.5 tracking-tight">
                  {step.name}
                </h3>
                <p className="text-xs font-semibold text-[#4361EE] mb-3 leading-snug">
                  {step.summary}
                </p>
                <p className="text-xs sm:text-sm text-[#0B0D17]/70 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#0B0D17]/10">
                <span className="text-[11px] font-medium text-[#0B0D17]/60 block leading-tight">
                  Foco: <strong className="text-[#0B0D17]">{step.focus}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Executive Banner */}
        <div className="bg-white border border-[#0B0D17]/10 rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs text-left">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#4361EE]/10 text-[#4361EE] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#0B0D17]">
                ¿Listo para construir el siguiente paso de tu negocio?
              </h4>
              <p className="text-sm text-[#0B0D17]/70 mt-1">
                Agendemos una sesión de diagnóstico inicial para evaluar tus canales y definir prioridades.
              </p>
            </div>
          </div>

          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2.5 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-7 py-4 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Quiero hacer crecer mi negocio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
