import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const FounderSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="nosotros"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#0B0D17] border-t border-[#0B0D17]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Clean Editorial Portrait — No dark scrim obscuring the subject */}
          <div className="lg:col-span-5">
            <motion.figure
              initial={prefersReducedMotion ? false : { clipPath: 'inset(0 0 10% 0)', opacity: 0.4 }}
              whileInView={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md mx-auto lg:mx-0 text-left"
            >
              <div className="aspect-4/5 overflow-hidden bg-[#F8F9FA] border border-[#0B0D17]/10">
                <img
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717890/hf_20260929_213557_0943d7bf-70be-4d3e-b17b-b958a667eb1f_dvlmap.png"
                  alt="Juan Carlos Cabrera Díaz, fundador y director estratégico en Power Digital"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <figcaption className="pt-4 mt-4 border-t border-[#0B0D17]/12 flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-base font-bold text-[#0B0D17] block">
                    Juan Carlos Cabrera Díaz
                  </span>
                  <span className="text-xs text-[#0B0D17]/60">
                    Fundador · Dirección Estratégica e Ingeniería de Sistemas
                  </span>
                </div>
                <span className="font-mono-code text-[10.5px] uppercase tracking-[0.18em] text-[#8A6B20] shrink-0">
                  Power Digital
                </span>
              </figcaption>
            </motion.figure>
          </div>

          {/* Concise Studio Narrative */}
          <div className="lg:col-span-7 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Criterio & Dirección
            </p>

            <h2 className="text-editorial-title font-bold text-[#0B0D17] mb-6">
              Ingeniería, estrategia y creatividad bajo un mismo criterio.
            </h2>

            <p className="text-base sm:text-lg text-[#0B0D17]/75 leading-relaxed mb-10 max-w-2xl">
              En Power Digital cada proyecto es liderado combinando arquitectura técnica propia de
              la Ingeniería de Sistemas, posicionamiento de marca e integración práctica de
              inteligencia artificial.
            </p>

            {/* Unboxed Architectural Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 py-7 border-t border-b border-[#0B0D17]/10 mb-9">
              <div>
                <h3 className="text-sm font-bold text-[#0B0D17] mb-1">
                  Arquitectura y Sistemas
                </h3>
                <p className="text-xs sm:text-sm text-[#0B0D17]/65 leading-relaxed">
                  Bases digitales ordenadas, escalables y libres de fricción operativa.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0B0D17] mb-1">
                  Dirección Estratégica
                </h3>
                <p className="text-xs sm:text-sm text-[#0B0D17]/65 leading-relaxed">
                  Narrativa comercial y posicionamiento pensados para la etapa real del negocio.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0B0D17] mb-1">
                  IA con Criterio Humano
                </h3>
                <p className="text-xs sm:text-sm text-[#0B0D17]/65 leading-relaxed">
                  Automatización y producción audiovisual asistida donde aporta velocidad real.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0B0D17] mb-1">
                  Identidad con Propósito
                </h3>
                <p className="text-xs sm:text-sm text-[#0B0D17]/65 leading-relaxed">
                  Piezas coherentes con la esencia y ambición real de cada empresa.
                </p>
              </div>
            </div>

            <blockquote className="mb-8 text-base sm:text-lg italic text-[#0B0D17]/80 leading-relaxed max-w-2xl">
              “El crecimiento digital sostenible ocurre cuando la precisión tecnológica trabaja al
              servicio de ideas claras y relaciones de confianza.”
            </blockquote>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4361EE] hover:text-[#0B0D17] transition-colors"
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
                <span>Ver metodología</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
