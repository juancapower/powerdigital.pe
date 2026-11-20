import React from 'react';
import { CLIENT_LOGOS, ClientLogo } from '../data/clients';

const LogoItem: React.FC<{ client: ClientLogo }> = ({ client }) => (
  <div
    className="mx-7 sm:mx-11 flex items-center justify-center shrink-0 group py-1.5"
    title={`${client.name} · ${client.sector}`}
  >
    <img
      src={client.logoUrl}
      alt={client.name}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="h-8 sm:h-10 md:h-11 w-auto max-w-[150px] sm:max-w-[180px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
    />
  </div>
);

export const ClientsSection: React.FC = () => {
  const lightLogos = CLIENT_LOGOS.filter((c) => c.theme === 'light');
  const darkLogos = CLIENT_LOGOS.filter((c) => c.theme === 'dark');

  const trackLight = [...lightLogos, ...lightLogos];
  const trackDark = [...darkLogos, ...darkLogos];

  return (
    <section
      id="marcas"
      aria-label="Marcas que confían en Power Digital"
      className="border-t border-[#0B0D17]/10 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="text-left">
          <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-2">
            Marcas en Portafolio
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0D17] tracking-tight">
            Organizaciones que confían en nuestro criterio
          </h2>
        </div>
        <p className="text-sm text-[#0B0D17]/60 max-w-sm text-left md:text-right">
          {CLIENT_LOGOS.length} marcas verificadas entre empresas, firmas y proyectos personales.
        </p>
      </div>

      {/* Light Surface Logo Band */}
      <div className="relative py-7 border-t border-[#0B0D17]/8 bg-[#FFFFFF] overflow-hidden">
        <div className="animate-marquee items-center">
          {trackLight.map((client, idx) => (
            <LogoItem key={`light-${client.id}-${idx}`} client={client} />
          ))}
        </div>
      </div>

      {/* Contrast Obsidian Logo Band */}
      <div className="relative py-7 bg-[#0B0D17] overflow-hidden">
        <div className="animate-marquee-reverse items-center">
          {trackDark.map((client, idx) => (
            <LogoItem key={`dark-${client.id}-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};
