import React from 'react';
import { WORK_PROCESS_STEPS } from '../../data/servicesData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HowWeWorkSectionProps {
  onCtaClick: () => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 md:py-32 bg-[#F8F9FA] border-t border-[#0B0D17]/8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4361EE] mb-3">
            <span>Metodología Power</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/50">5 Fases de Trabajo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-tight mb-4">
            Cómo trabajamos como tu Growth Partner
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#0B0D17]/70 font-normal leading-relaxed text-pretty">
            No somos una agencia que te cobra por publicar cosas sin sentido. Diseñamos,
            construimos y optimizamos soluciones alineadas a las metas reales de tu negocio.
          </p>
        </div>

        {/* 5 Process Steps Horizontal / Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-16">
          {WORK_PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/40 transition-all flex flex-col justify-between text-left group"
            >
              <div>
                {/* Number & Accent Dot */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0B0D17]/8">
                  <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#0B0D17]/25 group-hover:text-[#4361EE] transition-colors">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#DEB660]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0B0D17] mb-1 tracking-tight">
                  {step.title}
                </h3>

                <span className="text-[11px] font-mono-code font-semibold text-[#4361EE] block mb-3">
                  {step.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs text-[#0B0D17]/70 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0B0D17]/6 text-[10px] font-mono-code uppercase text-[#0B0D17]/40">
                Paso {idx + 1} de 5
              </div>
            </div>
          ))}
        </div>

        {/* Growth Partner Commitment Statement */}
        <div className="max-w-4xl mx-auto bg-[#0B0D17] text-white rounded-3xl p-8 sm:p-10 shadow-lg text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#DEB660]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diferencial Operativo</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight">
              ¿Por qué las marcas prefieren un Growth Partner?
            </h4>
            <p className="text-xs sm:text-sm text-white/75 max-w-xl leading-relaxed">
              Porque en lugar de coordinar a 4 freelancers o lidiar con agencias desconectadas de las
              ventas, tienes un solo equipo directivo que vela por la tecnología, el contenido y la
              adquisición.
            </p>
          </div>

          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 whitespace-nowrap cursor-pointer"
          >
            <span>Consultar mi caso</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
