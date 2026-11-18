import React from 'react';
import { CLIENT_LOGOS, ClientLogo } from '../data/clients';

const LogoItem: React.FC<{ client: ClientLogo }> = ({ client }) => (
  <div
    className="mx-6 sm:mx-10 flex items-center justify-center shrink-0 group py-2"
    title={`${client.name} · ${client.sector}`}
  >
    <img
      src={client.logoUrl}
      alt={client.name}
      loading="lazy"
      referrerPolicy="no-referrer"
      className="h-9 sm:h-11 md:h-12 w-auto max-w-[155px] sm:max-w-[185px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
      aria-label="Marcas que han confiado en Power Digital"
      className="border-t border-[#0B0D17]/10 bg-[#FFFFFF] overflow-hidden"
    >
      {/* Editorial Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#4361EE] font-medium mb-3">
            Trayectoria compartida
          </p>
          <h2 className="text-editorial-title font-bold text-[#0B0D17]">
            Marcas y organizaciones que confían en nuestro criterio
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#0B0D17]/65 max-w-md leading-relaxed">
          Empresas, firmas profesionales y marcas personales de sectores diversos que han construido
          activos digitales y estrategia junto a Power Digital.
        </p>
      </div>

      {/* Borderless Editorial Logo Band 1 (Light Surface for Dark-Ink Logos) */}
      <div className="relative py-8 border-t border-[#0B0D17]/8 bg-[#FFFFFF] overflow-hidden">
        <div className="animate-marquee items-center">
          {trackLight.map((client, idx) => (
            <LogoItem key={`light-${client.id}-${idx}`} client={client} />
          ))}
        </div>
      </div>

      {/* Borderless Editorial Logo Band 2 (Obsidian Contrast Band for White/Gold Logos) */}
      <div className="relative py-8 bg-[#0B0D17] overflow-hidden">
        <div className="animate-marquee-reverse items-center">
          {trackDark.map((client, idx) => (
            <LogoItem key={`dark-${client.id}-${idx}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};
