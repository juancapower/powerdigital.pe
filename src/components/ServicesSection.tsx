import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import bentoStrategyImg from '../assets/images/bento_strategy_editorial_1794964564191.jpg';
import bentoAiImg from '../assets/images/bento_ai_automation_1794964564478.jpg';
import { SERVICES_ASSETS } from '../config/servicesAssets';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
  onNavigateToServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onNavigateToServices,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="servicios"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#0B0D17] border-t border-[#0B0D17]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-18">
          <div className="lg:col-span-7">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Ecosistema de Soluciones
            </p>
            <h2 className="text-editorial-title font-bold text-[#0B0D17]">
              Una estrategia. Múltiples formas de crecer.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
            <p className="text-sm sm:text-base text-[#0B0D17]/70 leading-relaxed max-w-md lg:text-right">
              Cinco frentes integrados que diseñan la identidad, comunicación, infraestructura web y
              operación tecnológica de tu marca.
            </p>
            {onNavigateToServices && (
              <a
                href="/servicios"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateToServices();
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4361EE] hover:text-[#3451DE] transition-colors"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span>Explorar catálogo interactivo completo</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isContrast = service.variant === 'contrast';
            const isAccent = service.variant === 'accent';

            // Module visual attachment based on service ID
            let visualUrl: string | null = null;
            let visualAlt = '';
            if (service.id === 'estrategia-marca') {
              visualUrl = bentoStrategyImg;
              visualAlt = 'Composición geométrica de estrategia y arquitectura de marca';
            } else if (service.id === 'contenido-creativo') {
              visualUrl = SERVICES_ASSETS.content.url;
              visualAlt = SERVICES_ASSETS.content.alt;
            } else if (service.id === 'web-experiencia') {
              visualUrl = SERVICES_ASSETS.web.url;
              visualAlt = SERVICES_ASSETS.web.alt;
            } else if (service.id === 'ia-automatizacion') {
              visualUrl = bentoAiImg;
              visualAlt = 'Refracción óptica sobre fondo oscuro representando IA aplicada';
            }

            if (isAccent) {
              // Full-width horizontal strategic band for Module 05: Growth & Acompañamiento
              return (
                <motion.div
                  key={service.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className={`${service.spanClass} bg-[#F8F9FA] border border-[#0B0D17]/10 rounded-3xl p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
                >
                  <div className="lg:col-span-7 text-left">
                    <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#4361EE] mb-2">
                      {service.number} · {service.badge}
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0B0D17] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#0B0D17]/75 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
                    <div className="text-left lg:text-right">
                      <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#8A6B20] block mb-1">
                        Enfoque continuo
                      </span>
                      <p className="text-sm font-semibold text-[#0B0D17]">{service.growthImpact}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className="inline-flex items-center gap-2 bg-[#0B0D17] hover:bg-[#4361EE] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                      >
                        <span>Evaluar acompañamiento</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                      {onNavigateToServices && (
                        <button
                          type="button"
                          onClick={onNavigateToServices}
                          className="inline-flex items-center gap-2 border border-[#0B0D17]/15 hover:border-[#4361EE] bg-white text-[#0B0D17] px-5 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                        >
                          <span>Ver en catálogo</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            }

            const hasSideSplit = service.spanClass.includes('col-span-7');

            return (
              <motion.article
                key={service.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.48,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${service.spanClass} group rounded-3xl overflow-hidden border transition-colors ${
                  isContrast
                    ? 'bg-[#0B0D17] text-white border-white/12 hover:border-white/25'
                    : 'bg-[#F8F9FA] text-[#0B0D17] border-[#0B0D17]/10 hover:border-[#0B0D17]/20'
                }`}
              >
                <div
                  className={`h-full flex flex-col ${
                    hasSideSplit ? 'md:grid md:grid-cols-12' : ''
                  }`}
                >
                  {/* Visual Block */}
                  {visualUrl && (
                    <div
                      className={`relative overflow-hidden ${
                        hasSideSplit
                          ? 'md:col-span-5 aspect-4/3 md:aspect-auto md:h-full'
                          : 'aspect-16/9'
                      } ${isContrast ? 'bg-[#131624]' : 'bg-[#0B0D17]/5'}`}
                    >
                      <img
                        src={visualUrl}
                        alt={visualAlt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}

                  {/* Narrative Block */}
                  <div
                    className={`${
                      hasSideSplit ? 'md:col-span-7' : 'flex-1'
                    } p-6 sm:p-8 flex flex-col justify-between text-left`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span
                          className={`font-mono-code text-[11px] uppercase tracking-[0.18em] ${
                            isContrast ? 'text-[#DEB660]' : 'text-[#4361EE]'
                          }`}
                        >
                          {service.number} · {service.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-3">
                        {service.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed mb-5 ${
                          isContrast ? 'text-white/75' : 'text-[#0B0D17]/70'
                        }`}
                      >
                        {service.description}
                      </p>

                      <ul
                        className={`space-y-1.5 pt-4 border-t mb-6 text-xs sm:text-[13px] ${
                          isContrast
                            ? 'border-white/10 text-white/75'
                            : 'border-[#0B0D17]/8 text-[#0B0D17]/75'
                        }`}
                      >
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span
                              className={isContrast ? 'text-[#DEB660]' : 'text-[#4361EE]'}
                              aria-hidden="true"
                            >
                              ·
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className={`inline-flex items-center gap-2 text-sm font-bold transition-colors cursor-pointer ${
                          isContrast
                            ? 'text-white hover:text-[#DEB660]'
                            : 'text-[#0B0D17] hover:text-[#4361EE]'
                        }`}
                      >
                        <span>Consultar por este servicio</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
