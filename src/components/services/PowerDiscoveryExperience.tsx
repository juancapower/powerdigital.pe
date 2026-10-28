import React, { useState } from 'react';
import {
  OBJECTIVES_CONFIG,
  ObjectiveDefinition,
  GOOGLE_CALENDAR_AGENDA_URL,
} from '../../config/servicesObjectivesAssets';
import { SERVICES_CATALOG, ServiceItem } from '../../data/servicesData';
import { ArrowLeft, ArrowRight, Calendar, Check, ExternalLink, Sparkles } from 'lucide-react';

interface PowerDiscoveryExperienceProps {
  onSelectServiceForDetails: (service: ServiceItem, context: { objective: string }) => void;
  onOpenCatalogDrawer: () => void;
  onUserObjectiveChange?: (objectiveTitle: string) => void;
}

export const PowerDiscoveryExperience: React.FC<PowerDiscoveryExperienceProps> = ({
  onSelectServiceForDetails,
  onOpenCatalogDrawer,
  onUserObjectiveChange,
}) => {
  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string | null>(null);

  const selectedObjective = OBJECTIVES_CONFIG.find((obj) => obj.id === selectedObjectiveId) || null;

  // Retrieve the 2-3 real catalog services for the selected objective
  const matchedServices: ServiceItem[] = selectedObjective
    ? selectedObjective.serviceIds
        .map((id) => SERVICES_CATALOG.find((s) => s.id === id))
        .filter((s): s is ServiceItem => Boolean(s))
    : [];

  const handleSelectObjective = (obj: ObjectiveDefinition) => {
    setSelectedObjectiveId(obj.id);
    if (onUserObjectiveChange) {
      onUserObjectiveChange(obj.title);
    }
    // Smooth scroll to top of experience container
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetObjective = () => {
    setSelectedObjectiveId(null);
    if (onUserObjectiveChange) {
      onUserObjectiveChange('');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 transition-all duration-500">
      {/* =========================================================================
          ESTADO A: SELECCIÓN DEL OBJETIVO
          ========================================================================= */}
      {!selectedObjective ? (
        <section
          key="state-a"
          aria-label="Selección de objetivo"
          className="animate-in fade-in zoom-in-95 duration-500 ease-out"
        >
          {/* Main Question & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0B0D17] tracking-tight leading-[1.15] mb-4">
              ¿Qué quieres <span className="text-[#4361EE]">potenciar</span> hoy?
            </h1>
            <p className="font-sans text-base sm:text-xl text-[#0B0D17]/65 font-normal max-w-xl mx-auto">
              Elige tu próximo gran paso.
            </p>
          </div>

          {/* 6 Photographic Objective Cards: 3 columns x 2 rows on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {OBJECTIVES_CONFIG.map((obj, idx) => (
              <button
                key={obj.id}
                type="button"
                onClick={() => handleSelectObjective(obj)}
                className="group text-left bg-white rounded-2xl sm:rounded-3xl border border-[#0B0D17]/8 hover:border-[#4361EE]/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4361EE] focus-visible:ring-offset-2 cursor-pointer"
              >
                {/* Photographic Header (Luminous Cloudinary 2K transformed image) */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F0F2F5]">
                  <img
                    src={obj.imageUrl}
                    srcSet={obj.srcSet}
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    alt={obj.imageAlt}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (obj.fallbackImageUrl && target.src !== obj.fallbackImageUrl) {
                        target.srcset = '';
                        target.src = obj.fallbackImageUrl;
                      }
                    }}
                    style={{ objectPosition: obj.objectPosition || 'center center' }}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Title & Arrow (Clean, zero clutter) */}
                <div className="p-5 sm:p-6 flex items-center justify-between gap-3 bg-white">
                  <span className="font-display font-bold text-lg sm:text-xl text-[#0B0D17] group-hover:text-[#4361EE] transition-colors">
                    {obj.title}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#F8F9FA] group-hover:bg-[#4361EE] text-[#0B0D17]/60 group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-2xs">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      ) : (
        /* =========================================================================
           ESTADO B: DESCUBRIMIENTO CONTEXTUAL Y SOLUCIONES
           ========================================================================= */
        <section
          key="state-b"
          aria-label={`Soluciones para ${selectedObjective.title}`}
          className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
        >
          {/* Back Action: Cambiar objetivo */}
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <button
              type="button"
              onClick={handleResetObjective}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0B0D17]/70 hover:text-[#4361EE] bg-white border border-[#0B0D17]/10 hover:border-[#4361EE]/30 px-4 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1 text-[#4361EE]" />
              <span>Cambiar objetivo</span>
            </button>

            <button
              type="button"
              onClick={onOpenCatalogDrawer}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0D17]/60 hover:text-[#4361EE] transition-colors cursor-pointer"
            >
              <span>Ver todos los servicios en catálogo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Context Heading */}
          <div className="text-left mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4361EE]/10 text-[#4361EE] text-xs font-mono-code font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Objetivo: {selectedObjective.title}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0B0D17] tracking-tight mb-3">
              {selectedObjective.headline}
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#0B0D17]/70 font-normal">
              {selectedObjective.subtitle}
            </p>
          </div>

          {/* Solutions Cards: Max 3 real catalog services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
            {matchedServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#0B0D17]/8 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#4361EE]/30 transition-all duration-300"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#4361EE]">
                      {service.categoryLabel}
                    </span>
                    {service.badge && (
                      <span className="text-[11px] font-semibold text-[#DEB660] bg-[#DEB660]/10 px-2 py-0.5 rounded-md">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B0D17] tracking-tight mb-2.5">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#0B0D17]/70 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Bullet points: What it includes */}
                  {service.includes && service.includes.length > 0 && (
                    <div className="space-y-2 mb-6 pt-4 border-t border-[#0B0D17]/6">
                      <p className="text-xs font-bold text-[#0B0D17]/80 uppercase tracking-wider">
                        Qué incluye:
                      </p>
                      <ul className="space-y-1.5">
                        {service.includes.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#0B0D17]/75">
                            <Check className="w-3.5 h-3.5 text-[#4361EE] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Actions: Conocer detalles + Agendar sesión */}
                <div className="pt-4 border-t border-[#0B0D17]/6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectServiceForDetails(service, { objective: selectedObjective.title })
                    }
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0B0D17] hover:bg-[#1E2238] active:scale-98 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>Conocer detalles</span>
                  </button>

                  <a
                    href={GOOGLE_CALENDAR_AGENDA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#F8F9FA] active:scale-98 text-[#4361EE] border border-[#4361EE]/30 hover:border-[#4361EE] px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-2xs"
                    title="Agendar sesión gratuita de 30 min en Google Calendar"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar</span>
                    <ExternalLink className="w-3 h-3 text-[#4361EE]/70" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================================
              AGENDA GRATUITA (MANDATORIA)
              ========================================================================= */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#0B0D17]/8 p-8 sm:p-10 shadow-xs relative overflow-hidden">
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#4361EE]/10 via-[#DEB660]/5 to-transparent rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4361EE]/10 text-[#4361EE] text-xs font-mono-code font-bold uppercase tracking-wider mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>Conversación 1 a 1</span>
              </span>

              <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B0D17] tracking-tight mb-3">
                ¿Lo vemos juntos?
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#0B0D17]/75 font-normal leading-relaxed mb-7 max-w-xl mx-auto text-pretty">
                Agenda una sesión estratégica gratuita de 30 minutos con Juan Carlos y encontremos
                la mejor ruta para tu marca.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={GOOGLE_CALENDAR_AGENDA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar mi sesión gratuita</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                </a>

                <button
                  type="button"
                  onClick={handleResetObjective}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#F8F9FA] text-[#0B0D17]/70 hover:text-[#0B0D17] px-4 py-3.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Explorar otro objetivo</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
