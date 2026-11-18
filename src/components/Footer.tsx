import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateToServices?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToServices }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0D17] text-white pt-16 sm:pt-24 pb-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Multi-Column Editorial Navigation & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a href="#inicio" className="inline-block mb-5" aria-label="Power Digital - Inicio">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790715607/PowerDigital_LogoHorizontal_Transparente_yfoawp.png"
                alt="Power Digital"
                className="h-9 sm:h-10 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="font-mono-code text-xs uppercase tracking-[0.2em] text-[#DEB660] mb-3">
              Estrategia · Propósito · IA
            </p>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Impulsamos marcas con propósito. Acompañamos la evolución digital desde Perú
              conectando estrategia de negocio, creatividad y tecnología.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <h3 className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-white/45 mb-4">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#servicios" className="hover:text-[#4361EE] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:text-[#4361EE] transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#enfoque" className="hover:text-[#4361EE] transition-colors">
                  Nuestro enfoque
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-[#4361EE] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/servicios"
                  onClick={(e) => {
                    if (onNavigateToServices) {
                      e.preventDefault();
                      onNavigateToServices();
                    }
                  }}
                  className="inline-flex items-center gap-1 hover:text-[#4361EE] transition-colors"
                >
                  <span>Catálogo interactivo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#4361EE] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Directory Column */}
          <div className="lg:col-span-4">
            <h3 className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-white/45 mb-4">
              Canales Oficiales
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs text-white/45 block">WhatsApp</span>
                <a
                  href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20conversar%20sobre%20mi%20marca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-[#25D366] transition-colors"
                >
                  +51 920 690 260
                </a>
              </div>
              <div>
                <span className="text-xs text-white/45 block">Correo</span>
                <a
                  href="mailto:info@powerdigital.pe"
                  className="font-medium text-white hover:text-[#4361EE] transition-colors"
                >
                  info@powerdigital.pe
                </a>
              </div>
              <div>
                <span className="text-xs text-white/45 block">Instagram</span>
                <a
                  href="https://instagram.com/powerdigital.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-[#DEB660] transition-colors"
                >
                  @powerdigital.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Monumental Typographic Closure */}
        <div className="py-10 sm:py-14 border-b border-white/10 select-none">
          <p
            className="font-display font-extrabold tracking-[-0.045em] leading-[0.88] text-white/95 text-center w-full"
            style={{ fontSize: 'clamp(2.6rem, 11.8vw, 10.5rem)' }}
          >
            POWER DIGITAL
          </p>
        </div>

        {/* Legal & Bottom Metadata */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} Power Digital · Impulsamos marcas con propósito · Perú.
          </p>
          <div className="flex items-center gap-6">
            <span>Tratamiento confidencial de consultas</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/65 hover:text-white transition-colors cursor-pointer"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
