import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { SERVICES_ASSETS } from '../../config/servicesAssets';

interface ServicesHeroProps {
  onScrollToDiscovery: () => void;
  onScrollToUniverses: () => void;
}

export const ServicesHero: React.FC<ServicesHeroProps> = ({
  onScrollToDiscovery,
  onScrollToUniverses,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F8F9FA] overflow-hidden border-b border-[#0B0D17]/8">
      {/* Subtle Ambient Background Atmosphere */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-radial from-[#4361EE]/8 via-[#DEB660]/4 to-transparent blur-3xl pointer-events-none select-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Copy (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left"
          >
            {/* Kicker label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#4361EE] mb-6">
              <span className="font-mono-code">Power Discovery 2.0</span>
              <span aria-hidden="true" className="text-[#DEB660]">·</span>
              <span className="text-[#0B0D17]/50 font-normal">Showroom de Crecimiento</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-[#0B0D17] tracking-tight leading-[1.08] mb-6 text-balance font-title">
              Tu marca no necesita hacer más.{' '}
              <span className="text-[#4361EE] relative inline-block">
                Necesita crecer mejor.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 right-0 h-2 bg-[#DEB660]/30 rounded-full -rotate-1 pointer-events-none"
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-[#0B0D17]/75 font-normal leading-relaxed max-w-2xl mb-10 text-pretty">
              Estrategia, creatividad, inteligencia artificial y tecnología para transformar tus ideas
              en soluciones.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={onScrollToDiscovery}
                className="inline-flex items-center justify-center gap-2.5 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#DEB660]" />
                <span>Descubrir mi ruta</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToUniverses}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F1F3F5] active:scale-98 text-[#0B0D17] px-7 py-4 rounded-xl text-sm font-semibold border border-[#0B0D17]/10 transition-all shadow-xs hover:border-[#0B0D17]/25 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#4361EE]" />
                <span>Explorar soluciones</span>
              </button>
            </div>

            {/* Micro-proof strip */}
            <div className="pt-6 border-t border-[#0B0D17]/8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#0B0D17]/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4361EE]" />
                <span>4 Universos integrados</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DEB660]" />
                <span>Recomendación en 2 clics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4361EE]" />
                <span>Growth Partner & Soporte directo</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Visual Art (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Soft backdrop frame */}
            <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-white/90 via-white/50 to-white/90 border border-[#0B0D17]/8 shadow-xl">
              {/* Integrated Image Box */}
              <div className="relative w-full aspect-16/9 lg:aspect-4/3 rounded-2xl overflow-hidden bg-[#0B0D17]">
                {/* Fallback CSS gradient while image loads or if error */}
                <div
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: SERVICES_ASSETS.hero.fallbackGradient,
                    opacity: imageLoaded && !imageError ? 0 : 1,
                  }}
                />

                {/* Primary Hero Image */}
                {!imageError && (
                  <img
                    src={SERVICES_ASSETS.hero.url}
                    alt={SERVICES_ASSETS.hero.alt}
                    loading="eager"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                )}

                {/* Subtle bottom gradient scrim to integrate seamlessly */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0D17]/70 via-transparent to-transparent pointer-events-none"
                />

                {/* Editorial Overlay Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-left p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-[#DEB660]">
                      Visión Integral
                    </span>
                    <span className="text-[10px] text-white/70 font-mono-code">
                      Power Digital 2026
                    </span>
                  </div>
                  <p className="text-xs text-white/90 font-medium mt-1 leading-snug">
                    Unimos estrategia, diseño, inteligencia artificial y código en un único ecosistema.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
