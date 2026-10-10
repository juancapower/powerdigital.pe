import React from 'react';
import { CLIENT_LOGOS } from '../../data/clients';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

interface RealWorkSectionProps {
  onCtaClick: () => void;
}

export const RealWorkSection: React.FC<RealWorkSectionProps> = ({ onCtaClick }) => {
  // A curated selection of 6 verified client partnerships from existing data
  const featuredClients = CLIENT_LOGOS.slice(0, 6);

  // Concrete delivered categories in Power Digital projects
  const deliveredCapabilities = [
    {
      category: 'Identidad & Marca',
      deliverable: 'Sistemas Visuales y Brandbooks Ejecutivos',
      detail: 'Estructuración tipográfica, paleta técnica y coherencia en cada punto de contacto.',
    },
    {
      category: 'Web & Adquisición',
      deliverable: 'Landing Pages Persuasivas y Sistemas Web',
      detail: 'Arquitecturas ultrarrápidas en React/TypeScript orientadas a conversión directa.',
    },
    {
      category: 'Contenido Audiovisual',
      deliverable: 'Postproducción y Edición de Alta Retención',
      detail: 'Guionización con PNL, ritmo dinámico y formatos verticales para redes.',
    },
    {
      category: 'IA & Automatización',
      deliverable: 'Avatares Digitales y Flujos Asistidos por IA',
      detail: 'Clonación visual/vocal y optimización de tareas operativas para escalar presencia.',
    },
  ];

  return (
    <section id="trabajo-real" className="py-24 md:py-32 bg-[#F8F9FA] border-t border-[#0B0D17]/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4361EE] mb-3">
            <span>Evidencia & Trayectoria</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/50 font-normal">Estándar Power Digital</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-tight mb-4 font-title">
            Trabajo real, marcas con visión
          </h2>

          <p className="text-base sm:text-lg text-[#0B0D17]/70 font-normal leading-relaxed max-w-2xl mx-auto text-pretty">
            Respaldamos cada propuesta con entregables técnicos rigurosos y alianzas con empresas y
            marcas personales activas en el mercado.
          </p>
        </div>

        {/* Real Brand Logos Grid */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#0B0D17]/50">
              MARCAS Y PROYECTOS QUE HAN CONFIADO EN NUESTRA METODOLOGÍA:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredClients.map((client) => {
              const isDark = client.theme === 'dark';
              return (
                <div
                  key={client.id}
                  className={`h-24 rounded-2xl p-4 flex flex-col justify-center items-center transition-all border ${
                    isDark
                      ? 'bg-[#0B0D17] border-[#0B0D17] shadow-xs'
                      : 'bg-white border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/30'
                  }`}
                >
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="max-h-10 w-auto object-contain filter transition-opacity opacity-90 hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <span
                    className={`text-[10px] font-mono-code mt-1 ${
                      isDark ? 'text-white/60' : 'text-[#0B0D17]/50'
                    }`}
                  >
                    {client.sector}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Delivered Capabilities Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-14">
          {deliveredCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#0B0D17]/8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#4361EE] block mb-2">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-[#0B0D17] mb-2 tracking-tight">
                  {item.deliverable}
                </h4>
                <p className="text-xs text-[#0B0D17]/70 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#0B0D17]/6 flex items-center gap-1.5 text-[11px] text-[#0B0D17]/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DEB660]" />
                <span>Estándar verificado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Box */}
        <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-6 border border-[#0B0D17]/8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <ShieldCheck className="w-6 h-6 text-[#4361EE] shrink-0" />
            <p className="text-xs sm:text-sm text-[#0B0D17]/80 font-medium">
              Cada solución incluye acompañamiento directivo por Juan Carlos Cabrera y el equipo
              técnico de Power Digital.
            </p>
          </div>

          <button
            onClick={onCtaClick}
            className="text-xs font-bold text-[#4361EE] hover:underline whitespace-nowrap cursor-pointer"
          >
            Consultar propuesta para tu sector →
          </button>
        </div>
      </div>
    </section>
  );
};
