import React from 'react';
import SculptureHero from './ui/liquid-sculpture-hero';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onNavigateToServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onNavigateToServices }) => {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-[#F8F9FA]">
      {/* Liquid Sculpture WebGL2 Interactive Hero — Interwoven Power Digital Infinity Loop */}
      <SculptureHero
        showNav={false}
        height="min(100svh, 940px)"
        background="#F8F9FA"
        darkBackground="#0B0D17"
        textColor="#0B0D17"
        accentColor="#4361EE"
        backdropText="POWER"
        eyebrow={
          <div className="inline-flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#DEB660] animate-pulse shadow-[0_0_8px_#DEB660]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-[#4361EE]">
              GROWTH PARTNER ESTRATÉGICO
            </span>
          </div>
        }
        headline={"Diseñamos crecimiento con\nestrategia y propósito."}
        headlineAccent="estrategia y propósito."
        body="Acompañamos a marcas, emprendedores y empresas a escalar combinando estrategia comercial, inteligencia artificial, tecnología ágil y comprensión humana."
        primaryCta={{
          label: "Quiero hacer crecer mi negocio",
          href: "#contacto",
          onClick: (e) => {
            e.preventDefault();
            onCtaClick();
          },
        }}
        secondaryCta={{
          label: "Ver catálogo de soluciones",
          href: "/servicios",
          onClick: (e) => {
            if (onNavigateToServices) {
              e.preventDefault();
              onNavigateToServices();
            }
          },
        }}
        hint="Mueve el cursor sobre el infinito líquido"
        hintTouch="Toca el infinito para activar las partículas"
        src="/assets/sculpture/power-infinity-light.png"
        darkSrc="/assets/sculpture/power-infinity-dark.png"
        mobileSrc="/assets/sculpture/power-infinity-light.png"
        mobileDarkSrc="/assets/sculpture/power-infinity-dark.png"
        sculptureScale={1.0}
        mobileSculptureScale={1.0}
        sculptureY={-4}
        particleDensity={1.2}
        turbulence={1.05}
        liquid={1.2}
        dotSize={1.1}
        strength={1.15}
        radius={240}
        speed={1}
        showCredit={false}
      />

      {/* Strategic Manifesto & Direct WhatsApp Bar cleanly separated below the hero canvas */}
      <div className="relative z-10 border-t border-[#0B0D17]/8 bg-[#F8F9FA]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#0B0D17]/70">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#DEB660] shrink-0" />
            <span className="font-medium italic">
              “Detrás de cada sistema y cada algoritmo, hay personas construyendo algo que trasciende.”
            </span>
          </div>

          <a
            href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20hacer%20crecer%20mi%20negocio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B0D17]/85 hover:text-[#25D366] transition-colors py-1 px-3 rounded-lg hover:bg-black/5"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Chat directo por WhatsApp: +51 920 690 260</span>
          </a>
        </div>
      </div>
    </section>
  );
};
