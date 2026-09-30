import React from 'react';
import { Cpu, Brain, TrendingUp, ArrowRight, Sparkles, Check } from 'lucide-react';

interface ValuePropositionProps {
  onCtaClick: () => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ onCtaClick }) => {
  const pillars = [
    {
      num: '01',
      action: 'CONSTRUIR',
      title: 'Tecnología que construye',
      icon: Cpu,
      accentColor: 'text-[#4361EE]',
      badgeBg: 'bg-[#4361EE]/10 text-[#4361EE]',
      description:
        'Diseñamos estructuras, sistemas y automatizaciones que permiten que tu negocio opere con más orden, velocidad y capacidad de crecimiento.',
      elements: [
        'Ingeniería de Sistemas',
        'Inteligencia Artificial aplicada',
        'Automatización',
        'Procesos y estructura digital',
      ],
    },
    {
      num: '02',
      action: 'CONECTAR',
      title: 'Humanidad que conecta',
      icon: Brain,
      accentColor: 'text-[#DEB660]',
      badgeBg: 'bg-[#DEB660]/20 text-[#9C7924]',
      description:
        'Comprendemos cómo piensan, sienten y deciden las personas para construir mensajes y experiencias que conecten de forma auténtica con tu audiencia.',
      elements: [
        'PNL aplicada',
        'Comportamiento humano',
        'Propósito de marca',
        'Comunicación y conexión',
      ],
    },
    {
      num: '03',
      action: 'CONVERTIR',
      title: 'Marketing que convierte',
      icon: TrendingUp,
      accentColor: 'text-[#4361EE]',
      badgeBg: 'bg-[#4361EE]/10 text-[#4361EE]',
      description:
        'Convertimos estrategia y entendimiento del cliente en contenido, publicidad y experiencias digitales diseñadas para atraer, conectar y generar oportunidades comerciales.',
      elements: [
        'Marketing y publicidad digital',
        'Neuromarketing',
        'Adquisición y conversión',
        'Landing pages · Meta Ads & TikTok Ads',
      ],
    },
  ];

  return (
    <section id="metodo" className="py-24 md:py-36 bg-[#F8F9FA] relative border-b border-[#0B0D17]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================ */}
        {/* ENCABEZADO UNIFICADO                                         */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4361EE] mb-4">
            <span>Diferencial Power</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/50">Metodología Integrada</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0D17] tracking-tight leading-[1.12] mb-6 text-balance">
            Crecimiento integrado:{' '}
            <span className="text-[#4361EE]">tecnología, personas</span> y estrategia.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#0B0D17]/75 font-normal leading-relaxed max-w-3xl mx-auto text-pretty mb-10">
            Unimos tecnología, comprensión humana y estrategia comercial para que cada acción de
            tu marca tenga dirección, coherencia y propósito.
          </p>

          {/* Subheading bridge to the 3 pillars */}
          <div className="pt-8 border-t border-[#0B0D17]/8 max-w-2xl mx-auto">
            <span className="text-xs font-mono-code font-bold uppercase tracking-[0.2em] text-[#4361EE] block mb-2">
              LOS 3 PILARES POWER
            </span>
            <p className="text-sm sm:text-base text-[#0B0D17]/70 font-medium">
              Tres capacidades que trabajan juntas para construir, conectar y convertir.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3 CARDS GRANDES Y EQUILIBRADAS                                */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Card Header: Number & Microconcept */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#0B0D17]/8">
                    <span className="text-3xl sm:text-4xl font-black font-mono-code text-[#0B0D17]/25 group-hover:text-[#4361EE] transition-colors">
                      {pillar.num}
                    </span>
                    <span
                      className={`text-xs font-mono-code font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg ${pillar.badgeBg}`}
                    >
                      {pillar.action}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F9FA] border border-[#0B0D17]/8 text-[#0B0D17] flex items-center justify-center mb-6 group-hover:bg-[#4361EE] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B0D17] mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#0B0D17]/75 leading-relaxed font-normal mb-8">
                    {pillar.description}
                  </p>
                </div>

                {/* Áreas integradas */}
                <div className="pt-6 border-t border-[#0B0D17]/8 space-y-2.5">
                  <span className="text-xs font-bold text-[#0B0D17] uppercase tracking-wider block mb-3">
                    Áreas integradas:
                  </span>
                  {pillar.elements.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#0B0D17]/70">
                      <div className="w-4 h-4 rounded-full bg-[#4361EE]/10 text-[#4361EE] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* CIERRE VISUAL: SÍNTESIS BREVE                                 */}
        {/* ============================================================ */}
        <div className="max-w-4xl mx-auto mb-14 bg-white rounded-2xl p-6 sm:p-7 border border-[#0B0D17]/8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#4361EE]/10 text-[#DEB660] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#DEB660]" />
            </div>
            <p className="text-sm sm:text-base text-[#0B0D17]/80 font-medium">
              Power Digital integra estas tres dimensiones en una sola visión de crecimiento.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#4361EE] tracking-wider shrink-0 bg-[#F8F9FA] px-4 py-2 rounded-lg border border-[#0B0D17]/6">
            <span>CONSTRUIR</span>
            <span className="text-[#DEB660]">·</span>
            <span>CONECTAR</span>
            <span className="text-[#DEB660]">·</span>
            <span>CONVERTIR</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CTA SENCILLO Y ELEGANTE                                      */}
        {/* ============================================================ */}
        <div className="bg-white border border-[#0B0D17]/8 rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left max-w-4xl mx-auto">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#0B0D17] tracking-tight">
              ¿Construimos tu siguiente etapa de crecimiento?
            </h4>
            <p className="text-sm text-[#0B0D17]/65 mt-1.5">
              Conversemos sobre cómo activar tecnología, conexión humana y adquisición en tu negocio.
            </p>
          </div>

          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-2.5 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Quiero hacer crecer mi negocio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
