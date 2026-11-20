import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

export const ManifestoSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 35%'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.75], ['0%', '100%']);
  const firstPhraseOpacity = useTransform(scrollYProgress, [0, 0.35], [0.25, 0.62]);
  const secondPhraseOpacity = useTransform(scrollYProgress, [0.15, 0.65], [0.22, 1]);
  const secondPhraseY = useTransform(scrollYProgress, [0.1, 0.65], [22, 0]);

  return (
    <section
      ref={containerRef}
      aria-label="Manifiesto de marca Power Digital"
      className="relative bg-[#0B0D17] text-[#F8F9FA] py-28 sm:py-36 md:py-44 border-t border-white/10 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Eyebrow & Scroll-Linked Connection Line */}
          <div className="lg:col-span-3 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#DEB660]">
              Estrategia · Propósito · IA
            </p>
            <div className="mt-4 h-[2px] w-full max-w-[140px] bg-white/12 overflow-hidden">
              <motion.div
                style={prefersReducedMotion ? { width: '100%' } : { width: lineWidth }}
                className="h-full bg-gradient-to-r from-[#4361EE] to-[#DEB660]"
              />
            </div>
            <p className="mt-4 font-mono-code text-[10.5px] uppercase tracking-[0.18em] text-white/40">
              Conexión · Evolución · Dirección
            </p>
          </div>

          {/* Kinetic Scroll-Driven Typography */}
          <div className="lg:col-span-9 text-left">
            <h2 className="text-editorial-manifesto font-bold tracking-tight">
              <motion.span
                style={
                  prefersReducedMotion
                    ? { opacity: 0.55 }
                    : { opacity: firstPhraseOpacity }
                }
                className="block text-white mb-2 sm:mb-3"
              >
                No hacemos piezas sueltas.
              </motion.span>

              <motion.span
                style={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: secondPhraseOpacity, y: secondPhraseY }
                }
                className="block text-white"
              >
                Construimos marcas con{' '}
                <span className="text-[#4361EE]">dirección.</span>
              </motion.span>
            </h2>

            {/* Restrained Asymmetric Clarification */}
            <div className="mt-12 sm:mt-16 pt-10 border-t border-white/12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <p className="md:col-span-7 text-base sm:text-lg text-white/78 leading-relaxed">
                Cada identidad, pieza audiovisual, arquitectura web y automatización responde a un
                sistema único. Conectamos visión comercial, diseño y tecnología con intención clara.
              </p>
              <p className="md:col-span-5 text-sm text-white/55 leading-relaxed">
                Menos improvisación estética; más criterio estratégico y capacidad técnica al
                servicio de tu marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
