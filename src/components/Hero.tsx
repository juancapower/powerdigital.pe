import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HeroIsotipoKineticCanvas } from './motion/PowerMotionArt';

interface HeroProps {
  onCtaClick: () => void;
  onNavigateToServices?: () => void;
}

const HERO_LINES = [
  { text: 'IMPULSAMOS', highlight: false },
  { text: 'MARCAS CON', highlight: false },
  { text: 'PROPÓSITO.', highlight: true },
];

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onNavigateToServices }) => {
  const prefersReducedMotion = useReducedMotion();

  const handleExploreProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToBrands = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('marcas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative w-full bg-[#F8F9FA] text-[#0B0D17] overflow-x-clip"
    >
      {/* Main Studio Opening Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-30 lg:pt-32 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Dominant Typographic Column */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              {/* Official Triad Pillars */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 text-[11px] sm:text-xs font-mono-code uppercase tracking-[0.24em] text-[#4361EE] mb-6 sm:mb-8"
              >
                <span className="inline-block w-8 h-[1.5px] bg-[#DEB660]" aria-hidden="true" />
                <span>Estrategia · Propósito · IA</span>
              </motion.div>

              {/* Monumental 3-Line Staggered Reveal Headline */}
              <h1
                aria-label="Impulsamos marcas con propósito."
                className="font-display text-editorial-hero-display font-extrabold tracking-tight"
              >
                {HERO_LINES.map((line, index) => (
                  <span key={line.text} className="block overflow-hidden pb-1">
                    <motion.span
                      initial={prefersReducedMotion ? false : { y: '105%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.06 + index * 0.09,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`block ${line.highlight ? 'text-[#4361EE]' : 'text-[#0B0D17]'}`}
                    >
                      {line.text}
                    </motion.span>
                  </span>
                ))}
              </h1>

              {/* Editorial Statement & CTA Cluster */}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7 sm:mt-10 max-w-xl"
              >
                <p className="text-editorial-lead text-[#0B0D17]/75">
                  Estudio digital y Growth Partner en Perú. Conectamos estrategia comercial,
                  creatividad e inteligencia artificial para construir marcas con dirección clara.
                </p>

                <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
                  <motion.button
                    type="button"
                    onClick={onCtaClick}
                    whileHover={prefersReducedMotion ? undefined : { x: 2 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                    className="group inline-flex items-center justify-center gap-3 bg-[#0B0D17] hover:bg-[#4361EE] text-white px-7 py-4 text-sm sm:text-[15px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer"
                  >
                    <span>Hablemos de tu marca</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </motion.button>

                  <a
                    href="#proyectos"
                    onClick={handleExploreProjects}
                    className="inline-flex items-center gap-2 px-5 py-4 text-sm sm:text-[15px] font-semibold text-[#0B0D17] hover:text-[#4361EE] border-b border-[#0B0D17]/25 hover:border-[#4361EE] whitespace-nowrap shrink-0 transition-colors duration-200"
                  >
                    <span>Ver proyectos</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Clean Architectural Footer Index inside Hero Left Column */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10 sm:mt-14 pt-5 border-t border-[#0B0D17]/12 flex flex-wrap items-center justify-between gap-4 text-xs text-[#0B0D17]/65"
            >
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-code uppercase tracking-wider text-[11px]">
                <span>01 Marca</span>
                <span>02 Web</span>
                <span>03 Contenido & IA</span>
              </div>

              {onNavigateToServices && (
                <a
                  href="/servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateToServices();
                  }}
                  className="inline-flex items-center gap-1.5 font-semibold text-[#4361EE] hover:text-[#0B0D17] transition-colors whitespace-nowrap"
                >
                  <span>Catálogo de soluciones</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Original Kinetic Brand Visual Column (Zero 3D stock renders, zero card framing clutter) */}
          <div className="lg:col-span-5 flex">
            <HeroIsotipoKineticCanvas />
          </div>
        </div>
      </div>

      {/* Restrained Scroll Cue Line */}
      <div className="border-t border-[#0B0D17]/10 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4 text-xs text-[#0B0D17]/65">
          <p className="font-medium truncate">
            Acompañamos marcas en su evolución digital con estrategia, diseño e IA aplicada.
          </p>
          <a
            href="#marcas"
            onClick={handleScrollToBrands}
            className="inline-flex items-center gap-1.5 font-mono-code text-[11px] uppercase tracking-wider text-[#0B0D17] hover:text-[#4361EE] whitespace-nowrap shrink-0 transition-colors"
          >
            <span>Explorar</span>
            <motion.span
              animate={prefersReducedMotion ? undefined : { y: [0, 3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex"
            >
              <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
};
