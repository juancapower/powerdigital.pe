import React, { useState } from 'react';
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
  ChevronRight,
  Sliders,
  BadgeCheck,
  HelpCircle,
} from 'lucide-react';
import {
  DISCOVERY_OBJECTIVES,
  DIAGNOSTIC_QUESTIONS,
  SERVICES_CATALOG,
  ServiceItem,
} from '../../data/servicesData';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

interface DiscoverySectionProps {
  onSelectServiceForProposal: (service: ServiceItem, context: any) => void;
  onExploreFullCatalog: () => void;
}

export const DiscoverySection: React.FC<DiscoverySectionProps> = ({
  onSelectServiceForProposal,
  onExploreFullCatalog,
}) => {
  // Step tracker: 1 = objective, 2 = diagnostic questions, 3 = recommended route
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedObjectiveId, setSelectedObjectiveId] = useState<string>('');

  // Diagnostic Answers
  const [answers, setAnswers] = useState<{
    etapa: 'empezando' | 'presencia' | 'escalar';
    necesidad: 'claridad' | 'ejecucion' | 'continuidad' | 'resultados';
    apoyo: 'puntual' | 'pack' | 'plan' | 'estrategico';
  }>({
    etapa: 'presencia',
    necesidad: 'ejecucion',
    apoyo: 'pack',
  });

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // Objective icon mapper
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
    setCurrentStep(2);
    setActiveQuestionIndex(0);
  };

  const handleSelectAnswer = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));

    if (activeQuestionIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
      setActiveQuestionIndex((prev) => prev + 1);
    } else {
      // Finished all 3 questions, transition to recommendation
      setCurrentStep(3);
    }
  };

  const handleReset = () => {
    setSelectedObjectiveId('');
    setCurrentStep(1);
    setActiveQuestionIndex(0);
  };

  // Recommendation Scoring Logic
  const getRecommendedServices = (): ServiceItem[] => {
    if (!selectedObjectiveId) return [];

    const scored = SERVICES_CATALOG.map((service) => {
      let score = 0;
      const rec = service.recommendedFor;

      if (rec) {
        if (rec.objectives.includes(selectedObjectiveId)) {
          score += 10;
        }
        if (rec.stages.includes(answers.etapa)) {
          score += 4;
        }
        if (rec.supports.includes(answers.apoyo)) {
          score += 5;
        }
      }

      // Bonus if category corresponds to the primary objective
      if (
        (selectedObjectiveId === 'ordenar-marca' || selectedObjectiveId === 'mejorar-contenido') &&
        service.category === 'contenido'
      ) {
        score += 2;
      }
      if (selectedObjectiveId === 'mejorar-web' && service.category === 'web') {
        score += 3;
      }
      if (
        selectedObjectiveId === 'anuncios-captacion' &&
        (service.category === 'web' || service.category === 'estrategia')
      ) {
        score += 3;
      }
      if (selectedObjectiveId === 'automatizar-ia' && service.category === 'ia') {
        score += 4;
      }
      if (
        selectedObjectiveId === 'acompanamiento-estrategico' &&
        service.category === 'estrategia'
      ) {
        score += 5;
      }

      return { service, score };
    });

    // Sort by score descending and take top 3-4
    scored.sort((a, b) => b.score - a.score);
    return scored.filter((item) => item.score > 8).slice(0, 4).map((i) => i.service);
  };

  const recommendedServices = getRecommendedServices();

  return (
    <section id="descubrimiento" className="py-20 md:py-28 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Step Progress Breadcrumb */}
        <div className="max-w-2xl mx-auto mb-12 flex items-center justify-center gap-3 text-xs">
          <button
            onClick={() => setCurrentStep(1)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
              currentStep === 1
                ? 'bg-[#4361EE] text-white shadow-xs'
                : 'bg-white border border-[#0B0D17]/10 text-[#0B0D17]/70 hover:text-[#0B0D17]'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
              1
            </span>
            <span>Objetivo</span>
          </button>

          <ChevronRight className="w-3.5 h-3.5 text-[#0B0D17]/30" />

          <button
            onClick={() => selectedObjectiveId && setCurrentStep(2)}
            disabled={!selectedObjectiveId}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all ${
              !selectedObjectiveId ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
            } ${
              currentStep === 2
                ? 'bg-[#4361EE] text-white shadow-xs'
                : 'bg-white border border-[#0B0D17]/10 text-[#0B0D17]/70 hover:text-[#0B0D17]'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
              2
            </span>
            <span>Diagnóstico</span>
          </button>

          <ChevronRight className="w-3.5 h-3.5 text-[#0B0D17]/30" />

          <button
            onClick={() => selectedObjectiveId && setCurrentStep(3)}
            disabled={!selectedObjectiveId}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold transition-all ${
              !selectedObjectiveId ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
            } ${
              currentStep === 3
                ? 'bg-[#4361EE] text-white shadow-xs'
                : 'bg-white border border-[#0B0D17]/10 text-[#0B0D17]/70 hover:text-[#0B0D17]'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
              3
            </span>
            <span>Ruta Recomendada</span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* PASO 1: ¿QUÉ QUIERES POTENCIAR HOY? (6 TARJETAS)             */}
        {/* ============================================================ */}
        {currentStep === 1 && (
          <div className="max-w-5xl mx-auto text-center">
            <div className="max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono-code uppercase font-semibold text-[#4361EE] tracking-widest block mb-2">
                PASO 1 DE 3 · DESCUBRIMIENTO GUIADO
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-tight">
                ¿Qué quieres potenciar hoy?
              </h2>
              <p className="text-sm sm:text-base text-[#0B0D17]/70 mt-3">
                Selecciona la meta prioritaria de tu marca para personalizar tu recomendación
                estratégica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {DISCOVERY_OBJECTIVES.map((obj) => {
                const IconComponent = getObjectiveIcon(obj.icon);
                const isSelected = selectedObjectiveId === obj.id;
                return (
                  <button
                    key={obj.id}
                    onClick={() => handleSelectObjective(obj.id)}
                    className={`p-7 rounded-3xl bg-white border text-left transition-all duration-200 group relative flex flex-col justify-between hover:shadow-xl hover:border-[#4361EE]/40 cursor-pointer ${
                      isSelected
                        ? 'border-[#4361EE] ring-2 ring-[#4361EE]/20 shadow-md'
                        : 'border-[#0B0D17]/8 shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#F8F9FA] border border-[#0B0D17]/8 text-[#0B0D17] flex items-center justify-center mb-6 group-hover:bg-[#4361EE] group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0B0D17] mb-2 tracking-tight">
                        {obj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0B0D17]/70 leading-relaxed font-normal">
                        {obj.subtitle}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#0B0D17]/6 flex items-center justify-between text-xs font-bold text-[#4361EE]">
                      <span>Continuar diagnóstico</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Direct jump to catalog */}
            <div className="mt-12 text-center">
              <p className="text-xs text-[#0B0D17]/50 mb-2">¿Prefieres ver todo sin diagnóstico?</p>
              <button
                onClick={onExploreFullCatalog}
                className="text-xs font-semibold text-[#0B0D17] hover:text-[#4361EE] underline underline-offset-4 cursor-pointer"
              >
                Explorar el catálogo completo por bloques estratégicos →
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* PASO 2: MINI DIAGNÓSTICO (2 A 3 PREGUNTAS LIGERAS)           */}
        {/* ============================================================ */}
        {currentStep === 2 && selectedObjective && (
          <div className="max-w-3xl mx-auto">
            {/* Context Badge */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#0B0D17]/8">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono-code font-bold uppercase text-[#4361EE]">
                  Objetivo:
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0B0D17] bg-white px-3 py-1 rounded-lg border border-[#0B0D17]/8">
                  {selectedObjective.title}
                </span>
              </div>
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs font-medium text-[#0B0D17]/60 hover:text-[#4361EE] transition-colors cursor-pointer"
              >
                Cambiar objetivo
              </button>
            </div>

            {/* Active Question Box */}
            {(() => {
              const currentQ = DIAGNOSTIC_QUESTIONS[activeQuestionIndex];
              return (
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0B0D17]/8 shadow-xs text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono-code uppercase font-semibold text-[#DEB660]">
                      PREGUNTA {activeQuestionIndex + 1} DE {DIAGNOSTIC_QUESTIONS.length}
                    </span>
                    <span className="text-xs text-[#0B0D17]/40 font-mono-code">
                      Paso 2 · Personalización
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B0D17] mb-2 tracking-tight">
                    {currentQ.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0B0D17]/65 mb-8">{currentQ.subtitle}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentQ.options.map((opt) => {
                      const isSelected =
                        answers[currentQ.id as keyof typeof answers] === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectAnswer(currentQ.id, opt.id)}
                          className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between hover:border-[#4361EE]/40 ${
                            isSelected
                              ? 'border-[#4361EE] bg-[#4361EE]/5 ring-1 ring-[#4361EE]'
                              : 'border-[#0B0D17]/8 bg-[#F8F9FA]/60 hover:bg-white'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-bold text-[#0B0D17]">{opt.label}</span>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isSelected
                                    ? 'border-[#4361EE] bg-[#4361EE] text-white'
                                    : 'border-[#0B0D17]/20'
                                }`}
                              >
                                {isSelected && <Check className="w-2.5 h-2.5" />}
                              </div>
                            </div>
                            <p className="text-xs text-[#0B0D17]/65 leading-relaxed">{opt.hint}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Nav between questions */}
                  <div className="mt-8 pt-6 border-t border-[#0B0D17]/8 flex items-center justify-between">
                    <button
                      onClick={() => {
                        if (activeQuestionIndex > 0) {
                          setActiveQuestionIndex((prev) => prev - 1);
                        } else {
                          setCurrentStep(1);
                        }
                      }}
                      className="text-xs font-semibold text-[#0B0D17]/60 hover:text-[#0B0D17] transition-colors cursor-pointer"
                    >
                      ← Anterior
                    </button>

                    <button
                      onClick={() => {
                        if (activeQuestionIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
                          setActiveQuestionIndex((prev) => prev + 1);
                        } else {
                          setCurrentStep(3);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#4361EE] text-white px-5 py-2.5 rounded-xl hover:bg-[#3451DE] transition-colors cursor-pointer"
                    >
                      <span>
                        {activeQuestionIndex < DIAGNOSTIC_QUESTIONS.length - 1
                          ? 'Siguiente pregunta'
                          : 'Ver mi ruta recomendada'}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ============================================================ */}
        {/* PASO 3: TU RUTA RECOMENDADA                                   */}
        {/* ============================================================ */}
        {currentStep === 3 && selectedObjective && (
          <div className="max-w-6xl mx-auto">
            {/* Header of results */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEB660]/20 text-[#9C7924] text-xs font-bold mb-3">
                <BadgeCheck className="w-3.5 h-3.5" />
                <span>DIAGNÓSTICO COMPLETADO</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-tight mb-4">
                Tu ruta recomendada
              </h2>
              <p className="text-sm sm:text-base text-[#0B0D17]/70 max-w-2xl mx-auto">
                Basado en tu objetivo ({selectedObjective.title}), tu etapa ({answers.etapa}) y
                tu necesidad de {answers.necesidad}.
              </p>

              {/* Reset / re-adjust button */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0D17]/60 hover:text-[#4361EE] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Ajustar respuestas</span>
                </button>
                <span className="text-[#0B0D17]/20">·</span>
                <button
                  onClick={onExploreFullCatalog}
                  className="text-xs font-semibold text-[#4361EE] hover:underline cursor-pointer"
                >
                  Ver el catálogo completo sin filtros
                </button>
              </div>
            </div>

            {/* Recommended Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 text-left">
              {recommendedServices.map((service, index) => {
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-3xl p-7 border border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[11px] font-mono-code uppercase font-bold text-[#4361EE] bg-[#4361EE]/10 px-2.5 py-1 rounded-lg">
                          {service.modalityLabel}
                        </span>
                        {index === 0 ? (
                          <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#9C7924] bg-[#DEB660]/20 px-2 py-0.5 rounded-md">
                            Prioridad #1
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono-code font-bold uppercase text-[#0B0D17]/50">
                            {service.categoryLabel}
                          </span>
                        )}
                      </div>

                      {/* Title & short description */}
                      <h3 className="text-xl font-bold text-[#0B0D17] mb-2.5 tracking-tight group-hover:text-[#4361EE] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0B0D17]/75 font-normal leading-relaxed mb-5">
                        {service.shortDescription}
                      </p>

                      {/* Problem solved */}
                      <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#0B0D17]/6 mb-5">
                        <span className="text-[10px] font-mono-code font-bold uppercase text-[#4361EE] block mb-1">
                          QUÉ RESUELVE:
                        </span>
                        <p className="text-xs text-[#0B0D17]/70 leading-relaxed">
                          {service.problemSolved}
                        </p>
                      </div>

                      {/* Includes checklist */}
                      <div className="space-y-1.5 mb-6">
                        <span className="text-[10px] font-mono-code font-bold uppercase text-[#0B0D17]/50 block mb-1">
                          QUÉ INCLUYE:
                        </span>
                        {service.includes.slice(0, 3).map((inc, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#0B0D17]/70">
                            <Check className="w-3.5 h-3.5 text-[#4361EE] shrink-0 mt-0.5" />
                            <span className="leading-snug">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card CTA */}
                    <div className="pt-4 border-t border-[#0B0D17]/8">
                      <button
                        onClick={() =>
                          onSelectServiceForProposal(service, {
                            objective: selectedObjective.title,
                            stage: answers.etapa,
                            need: answers.necesidad,
                          })
                        }
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        <span>Consultar propuesta</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Support Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#0B0D17]/8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <h4 className="text-lg font-bold text-[#0B0D17]">
                  ¿Tienes dudas entre varias alternativas?
                </h4>
                <p className="text-xs sm:text-sm text-[#0B0D17]/65 mt-1">
                  Escríbenos directamente y un Growth Partner de Power Digital te orientará sin
                  compromiso.
                </p>
              </div>

              <a
                href={`https://wa.me/51920690260?text=${encodeURIComponent(
                  `Hola Power Digital, completé el diagnóstico en /servicios con el objetivo: ${selectedObjective.title} y me gustaría recibir una recomendación directa.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Solicitar recomendación</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
