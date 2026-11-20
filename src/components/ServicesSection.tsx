import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { DisciplineVectorStage } from './motion/PowerMotionArt';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onNavigateToServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onNavigateToServices,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeId) || SERVICES_DATA[0];

  return (
    <section
      id="servicios"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#0B0D17] border-t border-[#0B0D17]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Studio Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Ecosistema de Soluciones
            </p>
            <h2 className="text-editorial-title font-bold text-[#0B0D17]">
              Una estrategia. Múltiples formas de crecer.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4 text-left lg:text-right">
            <p className="text-sm sm:text-base text-[#0B0D17]/70 leading-relaxed max-w-md">
              Cinco disciplinas conectadas para estructurar marca, contenido, web e IA en un mismo
              rumbo comercial.
            </p>
            {onNavigateToServices && (
              <a
                href="/servicios"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToServices();
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4361EE] hover:text-[#0B0D17] transition-colors whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Explorar catálogo completo en /servicios</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Asymmetric Interactive Index (Eliminates repetitive cards completely) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left 6 Columns: Typographic Hairline Discipline List */}
          <div className="lg:col-span-6 divide-y divide-[#0B0D17]/12 border-t border-b border-[#0B0D17]/12">
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === activeId;
              return (
                <div key={service.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    onMouseEnter={() => setActiveId(service.id)}
                    aria-expanded={isActive}
                    className="w-full py-5 sm:py-6 flex items-start justify-between gap-4 text-left group cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-5">
                      <span
                        className={`font-mono-code text-xs sm:text-sm transition-colors ${
                          isActive ? 'text-[#4361EE] font-semibold' : 'text-[#0B0D17]/40'
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3
                          className={`text-lg sm:text-2xl font-bold tracking-tight transition-colors ${
                            isActive
                              ? 'text-[#0B0D17]'
                              : 'text-[#0B0D17]/65 group-hover:text-[#0B0D17]'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#0B0D17]/55 mt-1">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className={`w-5 h-5 shrink-0 mt-1 transition-all duration-200 ${
                        isActive
                          ? 'text-[#4361EE] translate-x-0.5 -translate-y-0.5'
                          : 'text-[#0B0D17]/30 group-hover:text-[#0B0D17]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Mobile inline reveal panel (avoids endless scroll stack) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden overflow-hidden pb-6"
                      >
                        <div className="bg-[#0B0D17] text-white p-5 space-y-4">
                          <DisciplineVectorStage activeId={service.id} />
                          <p className="text-sm text-white/80 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-1.5 text-xs text-white/70 border-t border-white/10 pt-3">
                            {service.items.map((item) => (
                              <li key={item}>· {item}</li>
                            ))}
                          </ul>
                          <button
                            type="button"
                            onClick={() => onSelectService(service.title)}
                            className="inline-flex items-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-5 py-3 text-xs font-bold transition-colors cursor-pointer"
                          >
                            <span>Consultar por {service.title}</span>
                            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right 6 Columns: Exhibition Stage (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 lg:sticky lg:top-28">
            <div className="bg-[#0B0D17] text-[#F8F9FA] p-8 border border-[#0B0D17]">
              <DisciplineVectorStage activeId={activeService.id} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-7 text-left"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#DEB660]">
                      {activeService.number} · {activeService.badge}
                    </span>
                    <span className="font-mono-code text-[11px] text-white/50">
                      {activeService.tagline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{activeService.title}</h3>

                  <p className="text-sm sm:text-[15px] text-white/75 leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  <ul className="space-y-2 border-t border-white/12 pt-5 mb-7 text-sm text-white/80">
                    {activeService.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="text-[#DEB660]" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => onSelectService(activeService.title)}
                      className="inline-flex items-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-6 py-3.5 text-sm font-semibold transition-colors cursor-pointer"
                    >
                      <span>Consultar por este servicio</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </button>

                    {onNavigateToServices && (
                      <button
                        type="button"
                        onClick={onNavigateToServices}
                        className="text-xs font-mono-code uppercase tracking-wider text-white/70 hover:text-[#DEB660] transition-colors cursor-pointer"
                      >
                        Ver en catálogo →
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
