import React from 'react';
import { ArrowDown, Sparkles, BookOpen, Layers, CheckCircle2, Compass } from 'lucide-react';

interface ServicesHeroProps {
  activeMode: 'discovery' | 'catalog';
  onSelectMode: (mode: 'discovery' | 'catalog') => void;
  onScrollToDiscovery: () => void;
  onScrollToCatalog: () => void;
}

export const ServicesHero: React.FC<ServicesHeroProps> = ({
  activeMode,
  onSelectMode,
  onScrollToDiscovery,
  onScrollToCatalog,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F8F9FA] overflow-hidden border-b border-[#0B0D17]/8">
      {/* Premium Abstract Background Artwork (Translucent Orb + Soft Glows) */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[900px] md:h-[900px] pointer-events-none select-none"
      >
        {/* Soft Radial Core */}
        <div className="absolute inset-0 rounded-full bg-radial from-[#4361EE]/10 via-[#DEB660]/5 to-transparent blur-3xl opacity-80" />

        {/* Ambient Ring Layers */}
        <div className="absolute inset-16 rounded-full border border-[#4361EE]/12 opacity-60 animate-pulse duration-1000" />
        <div className="absolute inset-32 rounded-full border border-[#DEB660]/15 opacity-50" />
        <div className="absolute inset-48 rounded-full border border-[#0B0D17]/5 opacity-40" />

        {/* Floating gradient points */}
        <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-[#4361EE]/15 blur-2xl" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-[#DEB660]/12 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Eyebrow / Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B0D17]/8 shadow-xs text-xs font-semibold text-[#0B0D17] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#4361EE] animate-ping" />
          <span className="font-mono-code uppercase tracking-wider text-[#4361EE]">
            Brochure Interactivo
          </span>
          <span aria-hidden="true" className="text-[#DEB660]">·</span>
          <span className="text-[#0B0D17]/60">Catálogo Inteligente 2026</span>
        </div>

        {/* Main Impact Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B0D17] tracking-tight leading-[1.08] max-w-5xl mx-auto mb-6 text-balance font-title">
          Diseñamos crecimiento con{' '}
          <span className="text-[#4361EE]">estrategia</span>, creatividad y{' '}
          <span className="relative inline-block">
            <span>tecnología</span>
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 right-0 h-2 bg-[#DEB660]/30 rounded-full -rotate-1"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#0B0D17]/75 font-normal leading-relaxed max-w-3xl mx-auto mb-10 text-pretty">
          Power Digital no vende piezas sueltas. Te ayudamos a encontrar, construir e implementar la
          solución correcta para tu marca.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 max-w-md mx-auto">
          <button
            onClick={() => {
              onSelectMode('discovery');
              onScrollToDiscovery();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#DEB660]" />
            <span>Descubrir mi solución</span>
          </button>

          <button
            onClick={() => {
              onSelectMode('catalog');
              onScrollToCatalog();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F1F3F5] active:scale-98 text-[#0B0D17] px-7 py-4 rounded-xl text-sm font-semibold border border-[#0B0D17]/10 transition-all shadow-xs hover:border-[#0B0D17]/25 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#4361EE]" />
            <span>Ver catálogo completo</span>
          </button>
        </div>

        {/* Hybrid Navigation Switcher (Discovery vs Full Catalog) */}
        <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#0B0D17]/10 shadow-xs max-w-xl mx-auto">
          <button
            onClick={() => {
              onSelectMode('discovery');
              onScrollToDiscovery();
            }}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeMode === 'discovery'
                ? 'bg-[#4361EE] text-white shadow-xs'
                : 'text-[#0B0D17]/70 hover:text-[#0B0D17]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>1. Modo Descubrimiento</span>
            <span className="hidden md:inline text-[11px] font-mono-code font-normal opacity-80">
              (Recomendación guiada)
            </span>
          </button>

          <button
            onClick={() => {
              onSelectMode('catalog');
              onScrollToCatalog();
            }}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeMode === 'catalog'
                ? 'bg-[#4361EE] text-white shadow-xs'
                : 'text-[#0B0D17]/70 hover:text-[#0B0D17]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. Catálogo Directo</span>
            <span className="hidden md:inline text-[11px] font-mono-code font-normal opacity-80">
              (4 bloques y filtros)
            </span>
          </button>
        </div>

        {/* Trust & Structure Micro-badges */}
        <div className="mt-12 pt-8 border-t border-[#0B0D17]/8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#0B0D17]/60">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#4361EE]" />
            <span>Enfoque Growth Partner (No agencia convencional)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#DEB660]" />
            <span>Sin precios fijos genéricos · Propuestas a medida</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#4361EE]" />
            <span>Sistemas, PNL, IA y Adquisición unificados</span>
          </div>
        </div>
      </div>
    </section>
  );
};
