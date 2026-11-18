import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const MANIFESTO_LINE_ONE = ['No', 'hacemos', 'piezas', 'sueltas.'];
const MANIFESTO_LINE_TWO = ['Construimos', 'marcas', 'con', 'dirección.'];

export const ManifestoSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Manifiesto de marca Power Digital"
      className="relative bg-[#0B0D17] text-[#F8F9FA] py-28 sm:py-36 md:py-44 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Eyebrow Column */}
          <div className="lg:col-span-3">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#DEB660]">
              Estrategia · Propósito · IA
            </p>
            <div className="mt-4 h-[1px] w-14 bg-white/20" aria-hidden="true" />
          </div>

          {/* Oversized Typography Statement */}
          <div className="lg:col-span-9">
            <h2 className="text-editorial-manifesto font-bold tracking-tight">
              <span className="block text-white/45 mb-2 sm:mb-3">
                {MANIFESTO_LINE_ONE.map((word, idx) => (
                  <motion.span
                    key={`l1-${word}-${idx}`}
                    initial={prefersReducedMotion ? false : { opacity: 0.18, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{
                      duration: 0.48,
                      delay: idx * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block mr-[0.26em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>

              <span className="block text-white">
                {MANIFESTO_LINE_TWO.map((word, idx) => (
                  <motion.span
                    key={`l2-${word}-${idx}`}
                    initial={prefersReducedMotion ? false : { opacity: 0.15, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{
                      duration: 0.52,
                      delay: 0.24 + idx * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`inline-block mr-[0.26em] ${
                      word === 'dirección.' ? 'text-[#4361EE]' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h2>

            {/* Asymmetric Editorial Explanation */}
            <div className="mt-12 sm:mt-16 pt-10 border-t border-white/12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <p className="md:col-span-7 text-base sm:text-lg text-white/80 leading-relaxed">
                Cada identidad, campaña audiovisual, experiencia web y flujo de inteligencia
                artificial responde a un mismo sistema. Conectamos visión comercial, diseño y
                tecnología para que cada entregable cumpla un propósito medible en el crecimiento de
                tu marca.
              </p>
              <div className="md:col-span-5 text-sm text-white/60 leading-relaxed">
                <p>
                  De la improvisación visual a una arquitectura coherente: ingeniería de sistemas,
                  comunicación estratégica y ejecución creativa en una sola mesa de trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
