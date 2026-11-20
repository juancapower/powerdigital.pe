import React from 'react';
import { CLIENT_LOGOS } from '../data/clients';

const DELIVERABLE_PILLARS = [
  {
    code: '01',
    title: 'Claridad y Posicionamiento',
    detail: 'Arquitectura de mensaje y lineamientos para que tu marca hable con coherencia.',
  },
  {
    code: '02',
    title: 'Identidad y Piezas Visuales',
    detail: 'Sistemas gráficos y contenido audiovisual con dirección de arte consistente.',
  },
  {
    code: '03',
    title: 'Activos Web de Conversión',
    detail: 'Sitios corporativos y catálogos rápidos, legibles y preparados para captar.',
  },
  {
    code: '04',
    title: 'IA y Flujos Operativos',
    detail: 'Automatizaciones y formatos generativos adaptados a la capacidad de tu equipo.',
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
      className="py-20 sm:py-28 bg-[#F8F9FA] text-[#0B0D17] border-t border-[#0B0D17]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Capacidad Real
            </p>
            <h2 className="text-editorial-title font-bold text-[#0B0D17]">
              Entregables concretos, sin cifras fabricadas.
            </h2>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right">
            <p className="text-sm sm:text-base text-[#0B0D17]/65 leading-relaxed max-w-md lg:ml-auto">
              Trabajamos con activos tangibles y sectores reales en Perú y Latinoamérica.
            </p>
          </div>
        </div>

        {/* Deliverable Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#0B0D17]/12 divide-y md:divide-y-0 md:divide-x divide-[#0B0D17]/10 mb-16">
          {DELIVERABLE_PILLARS.map((item) => (
            <div key={item.code} className="py-7 md:px-6 first:pl-0 last:pr-0 text-left">
              <span className="font-mono-code text-xs text-[#4361EE] font-medium block mb-2.5">
                {item.code}
              </span>
              <h3 className="text-lg font-bold text-[#0B0D17] mb-2">{item.title}</h3>
              <p className="text-sm text-[#0B0D17]/68 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Verified Roster by Sector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#8A6B20] mb-2">
              Presencia Multisectorial
            </p>
            <h3 className="text-2xl font-bold text-[#0B0D17] mb-2">
              {CLIENT_LOGOS.length} marcas verificadas
            </h3>
            <p className="text-sm text-[#0B0D17]/65 leading-relaxed">
              Firmas legales, empresas tecnológicas, marcas personales y proyectos educativos en
              cartera activa.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {SECTOR_GROUPS.map((group) => (
              <div key={group.sector} className="border-t border-[#0B0D17]/12 pt-4">
                <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#4361EE] font-medium mb-2.5">
                  {group.sector}
                </h4>
                <p className="text-sm font-medium text-[#0B0D17]/85 leading-relaxed">
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
