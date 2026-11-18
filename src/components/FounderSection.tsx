import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section
      id="nosotros"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#0B0D17] border-t border-[#0B0D17]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-18 items-center">
          {/* Editorial Portrait Frame */}
          <div className="lg:col-span-5">
            <figure className="relative rounded-3xl overflow-hidden bg-[#F8F9FA] border border-[#0B0D17]/10 aspect-4/5 max-w-md mx-auto lg:mx-0">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717890/hf_20260929_213557_0943d7bf-70be-4d3e-b17b-b958a667eb1f_dvlmap.png"
                alt="Juan Carlos Cabrera Díaz, fundador y director estratégico de Power Digital"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0B0D17]/90 via-[#0B0D17]/55 to-transparent text-white text-left">
                <span className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-[#DEB660] block mb-1">
                  Dirección y Criterio Técnico
                </span>
                <span className="text-lg font-bold block">Juan Carlos Cabrera Díaz</span>
                <span className="text-xs text-white/75">
                  Fundador · Power Digital
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Editorial Narrative */}
          <div className="lg:col-span-7 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Diferencial Humano y Tecnológico
            </p>

            <h2 className="text-editorial-title font-bold text-[#0B0D17] mb-7">
              Visión estratégica. Mentalidad tecnológica. Creatividad con propósito.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#0B0D17]/75 leading-relaxed mb-10">
              <p>
                Power Digital nace liderada por <strong className="text-[#0B0D17]">Juan Carlos Cabrera Díaz</strong> desde la
                unión poco común entre la <strong className="text-[#0B0D17]">Ingeniería de Sistemas</strong>, la dirección
                estratégica, el diseño digital y la integración práctica de inteligencia artificial.
              </p>
              <p className="text-sm sm:text-base text-[#0B0D17]/70">
                Cada proyecto combina arquitectura técnica ordenada, comprensión real de cómo toman
                decisiones las personas y herramientas de automatización pensadas para que las
                marcas operen con mayor claridad y solidez comercial.
              </p>
            </div>

            {/* Clean Typographic Capability Grid (Zero Cliché Cards / Zero border-l-4) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 pt-8 border-t border-[#0B0D17]/10 mb-10">
              <div>
                <h3 className="text-sm font-bold text-[#0B0D17] mb-1">
                  Ingeniería de Sistemas y Arquitectura
                </h3>
                <p className="text-xs sm:text-sm text-[#0B0D17]/65 leading-relaxed">
                  Bases técnicas limpias, integración de activos digitales y criterio estructurado de
                  producto.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0B0D17] mb-1">
                  Dirección Estratégica de Marcas
                </h3>
                <p className="text-xs sm:text-sm text-[#0B0D17]/65 leading-relaxed">
                  Posicionamiento, narrativa de valor y decisiones enfocadas en la realidad de cada
                  negocio.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0B0D17] mb-1">
                  Inteligencia Artificial Aplicada
                </h3>
                <p className="text-xs sm:text-sm text-[#0B0D17]/65 leading-relaxed">
                  Flujos de producción creativa, avatares y automatizaciones útiles sin complejidad
                  artificial.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0B0D17] mb-1">
                  Comunicación con Propósito
                </h3>
                <p className="text-xs sm:text-sm text-[#0B0D17]/65 leading-relaxed">
                  Cada pieza responde a un objetivo concreto y respeta la identidad genuina de quien
                  está detrás.
                </p>
              </div>
            </div>

            {/* Editorial Pull-Quote with Hairline Top Rule */}
            <blockquote className="pt-6 border-t border-[#0B0D17]/10 mb-8">
              <p className="text-base sm:text-lg italic text-[#0B0D17]/85 leading-relaxed">
                “El crecimiento digital sostenible ocurre cuando la precisión tecnológica trabaja al
                servicio de ideas claras y relaciones de confianza.”
              </p>
            </blockquote>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4361EE] hover:text-[#3451DE] transition-colors"
              >
                <span>Conversemos sobre tu proyecto</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#enfoque"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('enfoque')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B0D17]/65 hover:text-[#0B0D17] transition-colors"
              >
                <span>Ver cómo trabajamos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
