import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass,
  Sparkles,
  Cpu,
  Layers,
  ArrowRight,
  X,
  Check,
  ChevronRight,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { SERVICES_ASSETS } from '../../config/servicesAssets';
import {
  SERVICES_CATALOG,
  StrategicCategory,
  ServiceItem,
} from '../../data/servicesData';

interface UniversesBentoSectionProps {
  onSelectServiceForProposal: (service: ServiceItem) => void;
  onOpenMasterCatalog: () => void;
}

interface UniverseInfo {
  id: StrategicCategory;
  number: string;
  title: string;
  quote: string;
  description: string;
  image: {
    url: string;
    alt: string;
    fallbackGradient: string;
  };
  accentColor: string;
  highlightedCount: number;
}

const UNIVERSES: UniverseInfo[] = [
  {
    id: 'estrategia',
    number: '01',
    title: 'Estrategia y Growth',
    quote: 'Crecimiento con dirección.',
    description:
      'Alineación de modelo comercial, dirección ejecutiva de crecimiento y acompañamiento como Growth Partner.',
    image: SERVICES_ASSETS.strategy,
    accentColor: '#4361EE',
    highlightedCount: 5,
  },
  {
    id: 'contenido',
    number: '02',
    title: 'Contenido y Marca',
    quote: 'Ideas que conectan.',
    description:
      'Sistemas de identidad visual profunda, narrativas con psicología humana y producción audiovisual de alto estándar.',
    image: SERVICES_ASSETS.content,
    accentColor: '#DEB660',
    highlightedCount: 14,
  },
  {
    id: 'ia',
    number: '03',
    title: 'IA y Automatización',
    quote: 'Tecnología que potencia.',
    description:
      'Avatares fotorrealistas, clonación de voz, síntesis audiovisual asistida por IA y automatización de flujos de trabajo.',
    image: SERVICES_ASSETS.ai,
    accentColor: '#4361EE',
    highlightedCount: 5,
  },
  {
    id: 'web',
    number: '04',
    title: 'Web y Adquisición',
    quote: 'Experiencias que convierten.',
    description:
      'Landing pages de alta conversión, arquitecturas web a medida y campañas pagadas en Meta & TikTok Ads.',
    image: SERVICES_ASSETS.web,
    accentColor: '#4361EE',
    highlightedCount: 7,
  },
];

export const UniversesBentoSection: React.FC<UniversesBentoSectionProps> = ({
  onSelectServiceForProposal,
  onOpenMasterCatalog,
}) => {
  // Contextual modal / panel state for active universe
  const [activeUniverseId, setActiveUniverseId] = useState<StrategicCategory | null>(null);

  const activeUniverse = UNIVERSES.find((u) => u.id === activeUniverseId);
  const activeUniverseServices = activeUniverseId
    ? SERVICES_CATALOG.filter((s) => s.category === activeUniverseId)
    : [];

  return (
    <section id="universos" className="py-24 md:py-36 bg-[#FFFFFF] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4361EE] mb-3">
            <span>Arquitectura Comercial</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/50 font-normal">Showroom Principal</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-tight mb-4 font-title">
            Los Cuatro Universos Power
          </h2>

          <p className="text-base sm:text-lg text-[#0B0D17]/70 font-normal leading-relaxed max-w-2xl mx-auto text-pretty">
            Cada área aborda una dimensión crítica de tu marca. Elige un universo para explorar sus
            soluciones sin perder la visión de conjunto.
          </p>
        </div>

        {/* Bento Grid: Asymmetrical, High-Impact 4-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {UNIVERSES.map((universe, index) => {
            // Bento asymmetry: 1st and 4th occupy 7 cols or balanced 6/6
            // 01: 7 cols, 02: 5 cols, 03: 5 cols, 04: 7 cols
            const colSpan =
              index === 0
                ? 'md:col-span-7'
                : index === 1
                ? 'md:col-span-5'
                : index === 2
                ? 'md:col-span-5'
                : 'md:col-span-7';

            return (
              <motion.div
                key={universe.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`${colSpan} group relative rounded-3xl overflow-hidden border border-[#0B0D17]/10 bg-[#0B0D17] text-white shadow-lg cursor-pointer min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-7 sm:p-9`}
                onClick={() => setActiveUniverseId(universe.id)}
              >
                {/* Background Image with Fallback and Smooth Zoom on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{ background: universe.image.fallbackGradient }}
                  />
                  <img
                    src={universe.image.url}
                    alt={universe.image.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Multi-layered gradient scrim for flawless contrast and readability */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B0D17] via-[#0B0D17]/65 to-black/30"
                  />
                </div>

                {/* Top Corner Badge: Number & Solutions Count */}
                <div className="relative z-10 flex items-center justify-between mb-auto pb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono-code text-white/40 group-hover:text-white transition-colors">
                    {universe.number}
                  </span>

                  <span className="text-xs font-mono-code uppercase font-semibold text-white/80 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15">
                    {universe.highlightedCount} Soluciones
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 text-left">
                  {/* Poetic / Impact Quote */}
                  <div className="inline-flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#DEB660] mb-2">
                    <span>{universe.quote}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2.5 tracking-tight group-hover:text-[#4361EE] transition-colors font-title">
                    {universe.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/75 font-normal leading-relaxed max-w-lg mb-6 line-clamp-2">
                    {universe.description}
                  </p>

                  {/* Interactive Action Button */}
                  <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#DEB660] transition-colors">
                    <span>Explorar soluciones</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Catalog Gateway Banner */}
        <div className="bg-[#F8F9FA] rounded-3xl p-8 sm:p-10 border border-[#0B0D17]/8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xs">
          <div className="space-y-1">
            <span className="text-xs font-mono-code uppercase font-bold text-[#4361EE] tracking-wider block">
              Catálogo Bajo Demanda
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-[#0B0D17] tracking-tight">
              ¿Deseas consultar el listado maestro completo?
            </h4>
            <p className="text-xs sm:text-sm text-[#0B0D17]/65 max-w-xl">
              Filtra las 32+ soluciones por modalidad (servicios puntuales, packs o planes continuos)
              con buscador reactivo.
            </p>
          </div>

          <button
            onClick={onOpenMasterCatalog}
            className="inline-flex items-center justify-center gap-2.5 bg-[#0B0D17] hover:bg-[#4361EE] active:scale-98 text-white px-7 py-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#DEB660]" />
            <span>Ver todos los servicios</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CONTEXTUAL MODAL / EXPANSION FOR SELECTED UNIVERSE           */}
      {/* ============================================================ */}
      <AnimatePresence>
        {activeUniverse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0B0D17]/70 backdrop-blur-xs transition-opacity"
              onClick={() => setActiveUniverseId(null)}
              aria-hidden="true"
            />

            {/* Contextual Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-10 border border-[#0B0D17]/10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveUniverseId(null)}
                className="absolute top-6 right-6 p-2 rounded-xl text-[#0B0D17]/50 hover:text-[#0B0D17] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                aria-label="Cerrar universo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-8 pr-10">
                <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase text-[#4361EE] mb-2">
                  <span>Universo {activeUniverse.number}</span>
                  <span className="text-[#DEB660]">·</span>
                  <span>{activeUniverse.quote}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0B0D17] tracking-tight mb-2">
                  {activeUniverse.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0B0D17]/70 leading-relaxed max-w-2xl">
                  {activeUniverse.description}
                </p>
              </div>

              {/* List of Services in this Universe */}
              <div className="space-y-4 mb-8">
                {activeUniverseServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-5 sm:p-6 rounded-2xl bg-[#F8F9FA] border border-[#0B0D17]/8 hover:border-[#4361EE]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                  >
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-mono-code uppercase font-bold text-[#4361EE] bg-[#4361EE]/10 px-2 py-0.5 rounded-md">
                          {service.modalityLabel}
                        </span>
                        {service.badge && (
                          <span className="text-[10px] font-mono-code uppercase text-[#9C7924] bg-[#DEB660]/20 px-2 py-0.5 rounded-md">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#0B0D17] tracking-tight group-hover:text-[#4361EE] transition-colors">
                        {service.name}
                      </h4>

                      <p className="text-xs text-[#0B0D17]/70 mt-1 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <div className="mt-2 text-[11px] text-[#0B0D17]/60">
                        <strong>Para quién: </strong>
                        <span>{service.forWhom}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setActiveUniverseId(null);
                        onSelectServiceForProposal(service);
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#0B0D17] hover:bg-[#4361EE] active:scale-98 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
                    >
                      <span>Consultar propuesta</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Modal Footer Note */}
              <div className="pt-4 border-t border-[#0B0D17]/8 flex items-center justify-between text-xs text-[#0B0D17]/60">
                <span>
                  Total de soluciones en este universo:{' '}
                  <strong className="text-[#0B0D17]">{activeUniverseServices.length}</strong>
                </span>
                <button
                  onClick={() => {
                    setActiveUniverseId(null);
                    onOpenMasterCatalog();
                  }}
                  className="text-xs font-bold text-[#4361EE] hover:underline cursor-pointer"
                >
                  Abrir explorador general con filtros →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
