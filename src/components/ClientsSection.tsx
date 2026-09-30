import React from 'react';
import { CLIENT_LOGOS } from '../data/clients';

export const ClientsSection: React.FC = () => {
  // Balanced rows for dual harmonious marquee
  const row1 = CLIENT_LOGOS.slice(0, 11);
  const row2 = CLIENT_LOGOS.slice(11);

  return (
    <section id="marcas" className="py-24 md:py-32 bg-[#FFFFFF] border-y border-[#0B0D17]/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Curated Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4361EE] mb-3">
            <span>Alianzas & Trayectoria</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/50">Selección Curada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-[1.12] mb-4 text-balance">
            Marcas que confían en Power Digital
          </h2>

          <p className="text-base sm:text-lg text-[#0B0D17]/70 font-normal leading-relaxed max-w-2xl mx-auto text-pretty">
            Una muestra selecta de empresas consolidadas, marcas personales y proyectos con visión
            que han transformado su presencia digital con nuestra metodología.
          </p>
        </div>

        {/* Exclusive Curated Marquee with Adaptive Contrast per Brand */}
        <div className="relative">
          {/* Subtle gradient scrim masks for soft edge transitions */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-white via-white/85 to-transparent z-10 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-white via-white/85 to-transparent z-10 pointer-events-none"
          />

          {/* Row 1: Smooth Glide */}
          <div className="overflow-hidden py-3">
            <div className="animate-marquee flex gap-6 sm:gap-7 items-center">
              {[...row1, ...row1].map((client, index) => {
                const isDark = client.theme === 'dark';
                return (
                  <div
                    key={`r1-${client.id}-${index}`}
                    className={`h-28 w-60 sm:w-68 shrink-0 rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-center transition-all duration-300 border ${
                      isDark
                        ? 'bg-[#0B0D17] border-[#0B0D17] shadow-xs hover:border-[#DEB660]/50'
                        : 'bg-white border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/30 hover:shadow-md'
                    }`}
                  >
                    {/* Centered logo slot with strict scaling */}
                    <div className="h-14 w-full flex items-center justify-center">
                      <img
                        src={client.logoUrl}
                        alt={`Logo de ${client.name}`}
                        className="max-h-11 max-w-[160px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Discrete sector badge */}
                    <div className="w-full flex items-center justify-between pt-2 border-t border-current/10">
                      <span
                        className={`text-[10px] font-semibold tracking-wider uppercase truncate ${
                          isDark ? 'text-white/60' : 'text-[#0B0D17]/55'
                        }`}
                      >
                        {client.sector}
                      </span>
                      <span
                        className={`text-[9px] font-mono-code ${
                          isDark ? 'text-[#DEB660]' : 'text-[#4361EE]'
                        }`}
                      >
                        PARTNER
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: Reverse Smooth Glide */}
          <div className="overflow-hidden py-3 mt-3">
            <div className="animate-marquee-reverse flex gap-6 sm:gap-7 items-center">
              {[...row2, ...row2].map((client, index) => {
                const isDark = client.theme === 'dark';
                return (
                  <div
                    key={`r2-${client.id}-${index}`}
                    className={`h-28 w-60 sm:w-68 shrink-0 rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-center transition-all duration-300 border ${
                      isDark
                        ? 'bg-[#0B0D17] border-[#0B0D17] shadow-xs hover:border-[#DEB660]/50'
                        : 'bg-white border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/30 hover:shadow-md'
                    }`}
                  >
                    {/* Centered logo slot with strict scaling */}
                    <div className="h-14 w-full flex items-center justify-center">
                      <img
                        src={client.logoUrl}
                        alt={`Logo de ${client.name}`}
                        className="max-h-11 max-w-[160px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Discrete sector badge */}
                    <div className="w-full flex items-center justify-between pt-2 border-t border-current/10">
                      <span
                        className={`text-[10px] font-semibold tracking-wider uppercase truncate ${
                          isDark ? 'text-white/60' : 'text-[#0B0D17]/55'
                        }`}
                      >
                        {client.sector}
                      </span>
                      <span
                        className={`text-[9px] font-mono-code ${
                          isDark ? 'text-[#DEB660]' : 'text-[#4361EE]'
                        }`}
                      >
                        PARTNER
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quiet, Premium Trust Markers */}
        <div className="mt-14 pt-8 border-t border-[#0B0D17]/6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#0B0D17]/60">
          <span>Sectores: Finanzas, Tecnología, Inversión, Coaching y Retail</span>
          <span aria-hidden="true" className="text-[#DEB660]">·</span>
          <span>Estrategias adaptadas al modelo de negocio</span>
          <span aria-hidden="true" className="text-[#DEB660]">·</span>
          <span>Acompañamiento a largo plazo</span>
        </div>
      </div>
    </section>
  );
};
