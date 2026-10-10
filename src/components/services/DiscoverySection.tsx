import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Layers,
  Monitor,
  TrendingUp,
  Cpu,
  Compass,
  ArrowRight,
  RotateCcw,
  Check,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import {
  DISCOVERY_OBJECTIVES,
  SERVICES_CATALOG,
  ServiceItem,
} from '../../data/servicesData';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

interface DiscoverySectionProps {
  onSelectServiceForProposal: (service: ServiceItem, context: any) => void;
  onExploreFullCatalog: () => void;
  onSelectObjectiveChange?: (objectiveTitle: string) => void;
}

export const DiscoverySection: React.FC<DiscoverySectionProps> = ({
  onSelectServiceForProposal,
  onExploreFullCatalog,
  onSelectObjectiveChange,
}) => {
  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string>('');
  const [selectedStage, setSelectedStage] = useState<'empezando' | 'presencia' | 'escalar'>('presencia');

  const getObjectiveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles;
      case 'Layers':
        return Layers;
      case 'Monitor':
        return Monitor;
      case 'TrendingUp':
        return TrendingUp;
      case 'Cpu':
        return Cpu;
      case 'Compass':
      default:
        return Compass;
    }
  };

  const selectedObjective = DISCOVERY_OBJECTIVES.find((o) => o.id === selectedObjectiveId);

  const handleSelectObjective = (id: string) => {
    setSelectedObjectiveId(id);
    const obj = DISCOVERY_OBJECTIVES.find((o) => o.id === id);
    if (obj && onSelectObjectiveChange) {
      onSelectObjectiveChange(obj.title);
    }
  };

  const handleReset = () => {
    setSelectedObjectiveId('');
    if (onSelectObjectiveChange) {
      onSelectObjectiveChange('');
    }
  };

  // Recommendation Scoring Logic - limits to top 3 prioritized solutions
  const getRecommendedServices = (): { service: ServiceItem; rankBadge: string }[] => {
    if (!selectedObjectiveId) return [];

    const scored = SERVICES_CATALOG.map((service) => {
      let score = 0;
      const rec = service.recommendedFor;

      if (rec) {
        if (rec.objectives.includes(selectedObjectiveId)) {
          score += 12;
        }
        if (rec.stages.includes(selectedStage)) {
          score += 6;
        }
      }

      // Contextual boosts
      if (
        (selectedObjectiveId === 'ordenar-marca' || selectedObjectiveId === 'mejorar-contenido') &&
        service.category === 'contenido'
      ) {
        score += 3;
      }
      if (selectedObjectiveId === 'mejorar-web' && service.category === 'web') {
        score += 4;
      }
      if (
        selectedObjectiveId === 'anuncios-captacion' &&
        (service.category === 'web' || service.category === 'estrategia')
      ) {
        score += 4;
      }
      if (selectedObjectiveId === 'automatizar-ia' && service.category === 'ia') {
        score += 5;
      }
      if (
        selectedObjectiveId === 'acompanamiento-estrategico' &&
        service.category === 'estrategia'
      ) {
        score += 6;
      }

      return { service, score };
    });

    scored.sort((a, b) => b.score - a.score);

    const top = scored.slice(0, 3);
    const badges = ['Solución Principal Recomendada', 'Solución Complementaria', 'Alternativa Ágil'];

    return top.map((item, index) => ({
      service: item.service,
      rankBadge: badges[index] || 'Recomendación',
    }));
  };

  const recommendedItems = getRecommendedServices();

  return (
    <section id="descubrimiento" className="py-24 md:py-32 bg-[#F8F9FA] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4361EE] mb-3">
            <span>Power Discovery 2.0</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/50 font-normal">Recomendación Rápida</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-tight mb-4 font-title">
            ¿Qué quieres potenciar hoy?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#0B0D17]/70 font-normal leading-relaxed max-w-2xl mx-auto text-pretty">
            Selecciona tu prioridad actual en un solo clic. Te sugerimos la ruta más eficiente sin
            formularios eternos ni compromisos.
          </p>
        </div>

        {/* The 6 Objective Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
          {DISCOVERY_OBJECTIVES.map((obj) => {
            const Icon = getObjectiveIcon(obj.icon);
            const isSelected = selectedObjectiveId === obj.id;

            return (
              <motion.button
                key={obj.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectObjective(obj.id)}
                className={`p-6 sm:p-7 rounded-3xl border text-left transition-all duration-200 relative flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-white border-[#4361EE] ring-2 ring-[#4361EE]/20 shadow-lg'
                    : 'bg-white/80 hover:bg-white border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/30 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#4361EE] text-white'
                          : 'bg-[#F8F9FA] border border-[#0B0D17]/8 text-[#0B0D17] group-hover:bg-[#4361EE] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'border-[#4361EE] bg-[#4361EE] text-white'
                          : 'border-[#0B0D17]/20 group-hover:border-[#4361EE]'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0B0D17] mb-2 tracking-tight group-hover:text-[#4361EE] transition-colors">
                    {obj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0B0D17]/70 leading-relaxed font-normal">
                    {obj.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B0D17]/6 flex items-center justify-between text-xs font-semibold text-[#4361EE]">
                  <span>{isSelected ? 'Prioridad seleccionada' : 'Elegir esta prioridad'}</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Fluid Inline Results Panel (Revealed smoothly on selection) */}
        <AnimatePresence>
          {selectedObjective && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl mx-auto mt-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#0B0D17]/10 shadow-xl"
            >
              {/* Context Bar & Quick Stage Refinement */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#0B0D17]/8 mb-10">
                <div className="text-left">
                  <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase text-[#4361EE] mb-1">
                    <span>Prioridad activa:</span>
                    <span className="text-[#DEB660]">✦</span>
                    <span className="text-[#0B0D17]">{selectedObjective.title}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B0D17] tracking-tight">
                    Ruta recomendada para tu marca
                  </h3>
                </div>

                {/* Optional Quick Stage Filter */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-[#0B0D17]/60 font-medium mr-1">Etapa:</span>
                  {(
                    [
                      { id: 'empezando', label: 'Empezando' },
                      { id: 'presencia', label: 'Con presencia' },
                      { id: 'escalar', label: 'Escalando' },
                    ] as const
                  ).map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setSelectedStage(st.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        selectedStage === st.id
                          ? 'bg-[#0B0D17] text-white shadow-xs'
                          : 'bg-[#F8F9FA] text-[#0B0D17]/70 hover:text-[#0B0D17] border border-[#0B0D17]/8'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}

                  <button
                    onClick={handleReset}
                    className="ml-2 inline-flex items-center gap-1 text-xs text-[#0B0D17]/50 hover:text-[#4361EE] font-medium transition-colors cursor-pointer"
                    title="Restablecer selección"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reiniciar</span>
                  </button>
                </div>
              </div>

              {/* Top 3 Prioritized Recommendation Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
                {recommendedItems.map(({ service, rankBadge }, index) => {
                  const isTop = index === 0;

                  return (
                    <div
                      key={service.id}
                      className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 relative ${
                        isTop
                          ? 'bg-[#F8F9FA] border-[#4361EE] shadow-md ring-1 ring-[#4361EE]/20'
                          : 'bg-white border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/30'
                      }`}
                    >
                      <div>
                        {/* Priority Badge */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span
                            className={`text-[11px] font-mono-code uppercase font-bold px-2.5 py-1 rounded-md ${
                              isTop
                                ? 'bg-[#4361EE] text-white'
                                : 'bg-[#0B0D17]/6 text-[#0B0D17]/70'
                            }`}
                          >
                            {rankBadge}
                          </span>

                          <span className="text-[11px] font-mono-code font-semibold text-[#DEB660]">
                            {service.modalityLabel}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-[#0B0D17] mb-2 tracking-tight">
                          {service.name}
                        </h4>

                        <p className="text-xs sm:text-sm text-[#0B0D17]/75 font-normal leading-relaxed mb-4">
                          {service.shortDescription}
                        </p>

                        {/* Problem solved */}
                        <div className="p-3 rounded-xl bg-white border border-[#0B0D17]/6 mb-4">
                          <span className="text-[10px] font-mono-code font-bold uppercase text-[#4361EE] block mb-0.5">
                            RESUELVE:
                          </span>
                          <p className="text-xs text-[#0B0D17]/70 leading-snug">
                            {service.problemSolved}
                          </p>
                        </div>

                        {/* Deliverables snippet */}
                        <div className="space-y-1.5 mb-6">
                          <span className="text-[10px] font-mono-code font-bold uppercase text-[#0B0D17]/50 block">
                            QUÉ INCLUYE:
                          </span>
                          {service.includes.slice(0, 3).map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-[#0B0D17]/75">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#4361EE] shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA on each card */}
                      <div className="pt-4 border-t border-[#0B0D17]/8">
                        <button
                          onClick={() =>
                            onSelectServiceForProposal(service, {
                              objective: selectedObjective.title,
                              stage: selectedStage,
                            })
                          }
                          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                            isTop
                              ? 'bg-[#4361EE] hover:bg-[#3451DE] text-white shadow-md'
                              : 'bg-[#0B0D17] hover:bg-[#4361EE] text-white'
                          }`}
                        >
                          <span>Conversemos sobre esta solución</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom discovery strip with direct WhatsApp & Full catalog option */}
              <div className="pt-6 border-t border-[#0B0D17]/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <p className="text-xs text-[#0B0D17]/60">
                  ¿Quieres evaluar opciones adicionales o una combinación de servicios?
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={onExploreFullCatalog}
                    className="text-xs font-bold text-[#4361EE] hover:underline cursor-pointer"
                  >
                    Abrir catálogo completo →
                  </button>

                  <a
                    href={`https://wa.me/51920690260?text=${encodeURIComponent(
                      `Hola Juan Carlos y equipo Power Digital, estuve en el Discovery de /servicios con prioridad: ${selectedObjective.title} (etapa ${selectedStage}). Me gustaría agendar una conversación estratégica de 30 minutos.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Sesión de 30 min por WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
