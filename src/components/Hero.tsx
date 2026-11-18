import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import heroMonolithImg from '../assets/images/hero_monolith_editorial_1794965069701.jpg';

interface HeroProps {
  onCtaClick: () => void;
  onNavigateToServices?: () => void;
}

const HERO_PILLARS = [
  {
    index: '01',
    title: 'Estrategia & Marca',
    detail: 'Posicionamiento y dirección comercial',
  },
  {
    index: '02',
    title: 'Web & Conversión',
    detail: 'Arquitectura digital de alto nivel',
  },
  {
    index: '03',
    title: 'IA Aplicada',
    detail: 'Sistemas y automatización operativa',
  },
];

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onNavigateToServices }) => {
  const prefersReducedMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  const handleExploreProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('proyectos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToBrands = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('marcas');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full bg-[#F8F9FA] text-[#0B0D17] overflow-hidden"
    >
      {/* Subtle architectural hairline frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-[#0B0D17]/8"
      />

      {/* Above-the-fold Asymmetric Editorial Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: High-Ticket Editorial Statement & Primary Action */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#4361EE] mb-5 sm:mb-6"
              >
                <span className="inline-block w-8 h-[1.5px] bg-[#DEB660]" aria-hidden="true" />
                <span>Estrategia · Propósito · IA</span>
              </motion.div>

              <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-editorial-hero font-bold text-[#0B0D17] tracking-tight"
              >
                Impulsamos marcas{' '}
                <span className="text-[#4361EE]">con propósito.</span>
              </motion.h1>

              <motion.p
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 sm:mt-6 text-editorial-lead text-[#0B0D17]/72 max-w-xl"
              >
                Unimos estrategia, creatividad y tecnología para transformar ideas en marcas que
                conectan, evolucionan y crecen.
              </motion.p>

              {/* Single dominant primary CTA + restrained secondary anchor */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4"
              >
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0B0D17] hover:bg-[#4361EE] text-white px-7 py-4 rounded-xl text-[14.5px] sm:text-[15px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer"
                >
                  <span>Hablemos de tu marca</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href="#proyectos"
                  onClick={handleExploreProjects}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#0B0D17]/15 hover:border-[#4361EE] text-[#0B0D17] hover:text-[#4361EE] text-[14.5px] sm:text-[15px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-200"
                >
                  <span>Explorar proyectos</span>
                </a>
              </motion.div>
            </div>

            {/* Bottom Architectural Pillars Index — Unboxed editorial typography */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 pt-6 border-t border-[#0B0D17]/10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
            >
              {HERO_PILLARS.map((pillar) => (
                <div key={pillar.index} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-medium tabular-nums text-[#8A6B20]">
                      {pillar.index}
                    </span>
                    <span className="text-[13px] font-semibold text-[#0B0D17]">
                      {pillar.title}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#0B0D17]/60">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: High-Ticket Editorial Monolith Showcase */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="group w-full rounded-2xl overflow-hidden bg-[#0B0D17] border border-[#0B0D17]/12 flex flex-col justify-between">
              {/* Gallery Image Slot with styled fallback */}
              <div className="relative flex-1 min-h-[260px] sm:min-h-[340px] lg:min-h-[410px] overflow-hidden bg-gradient-to-br from-[#131624] via-[#0B0D17] to-[#1a2242]">
                {!imageFailed ? (
                  <img
                    src={heroMonolithImg}
                    alt="Escultura arquitectónica de obsidiana, cristal cobalto y latón dorado representando estrategia digital de precisión"
                    referrerPolicy="no-referrer"
                    onError={() => setImageFailed(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-[1.5px] bg-[#DEB660] mb-4" aria-hidden="true" />
                    <p className="font-display text-lg font-semibold text-[#F8F9FA] tracking-tight">
                      Power Digital
                    </p>
                    <p className="text-xs text-[#F8F9FA]/65 mt-1">
                      Estrategia · Propósito · IA
                    </p>
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B0D17]/65 to-transparent"
                />
              </div>

              {/* Obsidian Editorial Studio Strip */}
              <div className="px-5 py-4 sm:px-7 sm:py-5 bg-[#0B0D17] text-[#F8F9FA] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DEB660]">
                    Consultora & Estudio Digital
                  </p>
                  <p className="text-[13.5px] sm:text-sm text-[#F8F9FA]/85 font-medium mt-1">
                    Dirección estratégica · Diseño web · Inteligencia artificial
                  </p>
                </div>

                {onNavigateToServices && (
                  <a
                    href="/servicios"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateToServices();
                    }}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white hover:text-[#DEB660] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Catálogo de soluciones</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Editorial Footer Strip below Hero Viewport */}
      <div className="relative z-10 border-t border-[#0B0D17]/8 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#0B0D17]/68">
          <p className="font-medium leading-relaxed max-w-2xl">
            Acompañamos marcas en su evolución digital, conectando estrategia de negocio,
            creatividad y tecnología.
          </p>

          <a
            href="#marcas"
            onClick={handleScrollToBrands}
            className="inline-flex items-center gap-1.5 font-semibold text-[#0B0D17]/65 hover:text-[#4361EE] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explorar marcas</span>
            <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
