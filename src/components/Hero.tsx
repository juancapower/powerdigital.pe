import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] md:min-h-[94vh] flex items-center justify-center pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-[#F8F9FA]"
    >
      {/* Background artwork: full coverage */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none scale-100 transition-transform duration-1000"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790719090/background-hero-powerdigitalpe_dwpbo1.png")',
        }}
      />

      {/* Atmospheric organic lighting: warm golden light meets cobalt clarity */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-radial from-[#DEB660]/12 via-[#4361EE]/8 to-transparent blur-3xl pointer-events-none rounded-full"
      />

      {/* Measured contrast scrim: protects background details while giving text cinematic readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/40 via-[#F8F9FA]/55 to-[#F8F9FA]/75 backdrop-blur-[0.5px] pointer-events-none"
      />

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Human & Purpose Kicker */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DEB660] animate-pulse" />
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.24em] text-[#4361EE]">
            GROWTH PARTNER ESTRATÉGICO
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#DEB660] animate-pulse" />
        </div>

        {/* H1 Title: Bold, sculptural, memorable */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-extrabold text-[#0B0D17] tracking-tight leading-[1.07] max-w-4xl mx-auto mb-8 text-balance">
          Diseñamos crecimiento con{' '}
          <span className="relative inline-block text-[#4361EE]">
            estrategia
            <svg
              aria-hidden="true"
              viewBox="0 0 260 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-1.5 left-0 w-full h-[8px] text-[#DEB660] opacity-80"
            >
              <path
                d="M3 10C65 3 195 2 257 9"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          , tecnología y propósito.
        </h1>

        {/* Subtitle: Warm, human, resolute */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#0B0D17]/80 font-normal leading-relaxed max-w-3xl mx-auto mb-12 text-pretty">
          Acompañamos a marcas, emprendedores y empresas a crecer combinando estrategia,
          tecnología, inteligencia artificial y comprensión humana.
        </p>

        {/* Action Zone: Centered, tactile, high-conviction CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center gap-3 bg-[#4361EE] hover:bg-[#3451DE] active:scale-[0.99] text-white px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-200 shadow-lg shadow-[#4361EE]/25 hover:shadow-xl hover:shadow-[#4361EE]/35 cursor-pointer"
          >
            <span>Quiero hacer crecer mi negocio</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <a
            href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20hacer%20crecer%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white/95 hover:bg-white text-[#0B0D17] border border-[#0B0D17]/12 hover:border-[#25D366]/60 px-7 py-4 rounded-2xl text-base font-semibold transition-all duration-200 shadow-xs hover:shadow-md"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            <span>Escríbenos por WhatsApp</span>
          </a>
        </div>

        {/* Human manifesto touch: replaces cold SaaS badges with authentic human purpose */}
        <div className="flex items-center justify-center gap-2.5 text-xs text-[#0B0D17]/65 tracking-wide pt-4 border-t border-[#0B0D17]/10 max-w-xl mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-[#DEB660] shrink-0" />
          <span className="italic font-medium">
            “Detrás de cada sistema y cada algoritmo, hay personas construyendo algo que trasciende.”
          </span>
        </div>
      </div>
    </section>
  );
};
