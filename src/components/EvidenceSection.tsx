import React from 'react';
import { CLIENT_LOGOS } from '../data/clients';

const DELIVERABLE_PILLARS = [
  {
    code: '01',
    title: 'Claridad y Posicionamiento',
    detail:
      'Documentos estratégicos, arquitectura de mensaje y lineamientos de marca diseñados para que todo el negocio hable un mismo idioma.',
  },
  {
    code: '02',
    title: 'Identidad y Piezas Visuales',
    detail:
      'Sistemas gráficos, dirección creativa y contenido audiovisual pensado para sostener autoridad sin depender de tendencias pasajeras.',
  },
  {
    code: '03',
    title: 'Activos Web Orientados a Conversión',
    detail:
      'Landing pages, sitios corporativos y experiencias interactivas desarrolladas con enfoque en legibilidad, velocidad y contacto directo.',
  },
  {
    code: '04',
    title: 'IA y Flujos Operativos',
    detail:
      'Integración práctica de inteligencia artificial, avatares y automatizaciones de seguimiento adaptadas a la capacidad real de cada equipo.',
  },
];

const SECTOR_GROUPS = [
  {
    sector: 'Finanzas, Capital y Bienes Raíces',
    brands: ['Serna Estate', 'Warmi Kapital', 'Eversafe Financial', 'HostbyDam'],
  },
  {
    sector: 'Tecnología, Ingeniería y Movilidad',
    brands: ['CR Technologies', 'INNSTRET IT', 'SwellPro Perú', 'LEVITAS', 'Abira Riegos'],
  },
  {
    sector: 'Marcas Personales y Consultoría',
    brands: [
      'HugoDam',
      'Consciente Creativo',
      'Carmen Giraldo Coach',
      'Grace Ramírez',
      'Heydy Coach',
      'JuanCa Power',
    ],
  },
  {
    sector: 'Salud, Educación y Hospitalidad',
    brands: [
      'Tunay Wasi Café',
      'BetoyJennyFit',
      'Elizabeth Laurente Coach',
      'Desafío Ecoaventura',
      'Jardín de Niños Pestalozzi',
    ],
  },
];

export const EvidenceSection: React.FC = () => {
  return (
    <section
      aria-label="Evidencia de trabajo y respaldo"
      className="py-24 sm:py-32 bg-[#F8F9FA] text-[#0B0D17] border-t border-[#0B0D17]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-18">
          <div className="lg:col-span-7 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Evidencia y Criterio
            </p>
            <h2 className="text-editorial-title font-bold text-[#0B0D17]">
              Capacidad comprobable en entregables reales, sin cifras infladas.
            </h2>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right">
            <p className="text-sm sm:text-base text-[#0B0D17]/70 leading-relaxed max-w-md lg:ml-auto">
              Creemos en el trabajo concreto sobre promesas vacías. Estas son las piezas tangibles y
              los sectores donde acompañamos la evolución digital de marcas reales.
            </p>
          </div>
        </div>

        {/* 1. Concrete Deliverable Formats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#0B0D17]/12 divide-y md:divide-y-0 md:divide-x divide-[#0B0D17]/10 mb-18">
          {DELIVERABLE_PILLARS.map((item) => (
            <div key={item.code} className="py-8 md:px-6 first:pl-0 last:pr-0 text-left">
              <span className="font-mono-code text-xs text-[#4361EE] font-medium block mb-3">
                {item.code}
              </span>
              <h3 className="text-lg font-bold text-[#0B0D17] mb-2.5">{item.title}</h3>
              <p className="text-sm text-[#0B0D17]/70 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* 2. Verified Sector Footprint & Real Client Roster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#8A6B20] mb-2">
              Presencia Multisectorial
            </p>
            <h3 className="text-2xl font-bold text-[#0B0D17] mb-3">
              {CLIENT_LOGOS.length} marcas verificadas en portafolio activo
            </h3>
            <p className="text-sm text-[#0B0D17]/65 leading-relaxed">
              Desde firmas legales, fintech y empresas de ingeniería hasta referentes personales y
              educativos que confían en nuestra dirección estratégica y ejecución técnica.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {SECTOR_GROUPS.map((group) => (
              <div
                key={group.sector}
                className="border-t border-[#0B0D17]/12 pt-5"
              >
                <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#4361EE] font-medium mb-3">
                  {group.sector}
                </h4>
                <p className="text-sm sm:text-[15px] font-medium text-[#0B0D17]/85 leading-relaxed">
                  {group.brands.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
