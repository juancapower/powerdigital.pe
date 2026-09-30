import React, { useState } from 'react';
import { SERVICES_DATA, ServiceBlock } from '../data/services';
import { Check, Compass, Palette, Bot, Globe, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (id: string) => {
    switch (id) {
      case 'estrategia-growth':
        return Compass;
      case 'contenido-marca':
        return Palette;
      case 'ia-automatizacion':
        return Bot;
      case 'web-adquisicion':
        return Globe;
      default:
        return Compass;
    }
  };

  const filteredServices =
    activeTab === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === activeTab);

  return (
    <section id="servicios" className="py-24 md:py-36 bg-[#FFFFFF] border-b border-[#0B0D17]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4361EE] mb-4">
            <span>Soluciones Estratégicas</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/55">4 Ejes de Intervención</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-[1.15] mb-5">
            Ecosistema de soluciones para tu crecimiento
          </h2>
          <p className="text-base sm:text-lg text-[#0B0D17]/75 font-normal leading-relaxed text-pretty">
            No vendemos piezas sueltas ni publicaciones decorativas. Construimos e implementamos
            soluciones con estrategia detrás, diseñadas para integrarse en un sistema comercial que
            escala de forma predecible.
          </p>
        </div>

        {/* Tab Selector - Clean Segmented Control */}
        <div className="flex items-center gap-2 pb-6 mb-12 overflow-x-auto border-b border-[#0B0D17]/10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#0B0D17] text-white shadow-xs'
                : 'text-[#0B0D17]/70 hover:text-[#0B0D17] hover:bg-[#F8F9FA]'
            }`}
          >
            Todos los servicios (4)
          </button>
          {SERVICES_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === service.id
                  ? 'bg-[#4361EE] text-white shadow-xs'
                  : 'text-[#0B0D17]/70 hover:text-[#0B0D17] hover:bg-[#F8F9FA]'
              }`}
            >
              {service.number}. {service.title}
            </button>
          ))}
        </div>

        {/* Services Grid - High breathing room, single elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredServices.map((service) => {
            const Icon = getIcon(service.id);
            return (
              <div
                key={service.id}
                className="bg-[#F8F9FA] rounded-3xl p-8 sm:p-12 border border-[#0B0D17]/10 hover:border-[#4361EE]/40 transition-all duration-300 shadow-2xs hover:shadow-xl flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Top Bar of Service Card */}
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#0B0D17]/10 text-[#4361EE] flex items-center justify-center shadow-2xs group-hover:bg-[#4361EE] group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-mono-code font-bold text-[#DEB660] block">
                        BLOQUE {service.number}
                      </span>
                      <span className="text-xs text-[#0B0D17]/50 font-medium">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B0D17] mb-2 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#4361EE] uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-[#0B0D17]/75 leading-relaxed mb-8 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables / Scope */}
                  <div className="space-y-3 mb-10 pt-6 border-t border-[#0B0D17]/10">
                    <span className="text-xs font-bold text-[#0B0D17] uppercase tracking-wider block mb-3">
                      Entregables estratégicos:
                    </span>
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#0B0D17]/80">
                        <div className="w-4 h-4 rounded-full bg-[#4361EE]/10 text-[#4361EE] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact & Action */}
                <div className="pt-6 border-t border-[#0B0D17]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="text-xs text-[#0B0D17]/65">
                    <span className="font-bold text-[#0B0D17] block mb-0.5">Retorno esperado:</span>
                    <span>{service.growthImpact}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0B0D17] hover:bg-[#4361EE] active:scale-98 py-3 px-5 rounded-xl transition-all cursor-pointer shrink-0 shadow-xs"
                  >
                    <span>Consultar este bloque</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
