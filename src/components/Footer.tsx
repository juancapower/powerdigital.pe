import React from 'react';
import { Mail, Instagram, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0D17] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-5 text-left">
            <a href="#inicio" className="inline-block mb-6">
              <img
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790715607/PowerDigital_LogoHorizontal_Transparente_yfoawp.png"
                alt="Power Digital Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-6 font-normal">
              Growth Partner que combina ingeniería de sistemas, PNL y comprensión humana,
              marketing digital e inteligencia artificial para diseñar crecimiento real y con
              propósito.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20hacer%20crecer%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:info@powerdigital.pe"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#4361EE] text-white flex items-center justify-center transition-colors"
                aria-label="Correo"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/powerdigital.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#DEB660] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#DEB660] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios y Soluciones
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-white transition-colors">
                  Método de Trabajo
                </a>
              </li>
              <li>
                <a href="#marcas" className="hover:text-white transition-colors">
                  Marcas Impulsadas
                </a>
              </li>
              <li>
                <a href="#fundador" className="hover:text-white transition-colors">
                  Conoce al Fundador
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Sesión de Diagnóstico
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#DEB660] mb-4">
              Canales Directos
            </h4>
            <div className="space-y-3 text-sm text-white/75">
              <div>
                <span className="text-xs text-white/45 block">WhatsApp oficial:</span>
                <a
                  href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20hacer%20crecer%20mi%20negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-[#25D366] transition-colors"
                >
                  +51 920 690 260
                </a>
              </div>
              <div>
                <span className="text-xs text-white/45 block">Correo electrónico:</span>
                <a
                  href="mailto:info@powerdigital.pe"
                  className="font-medium text-white hover:text-[#4361EE] transition-colors"
                >
                  info@powerdigital.pe
                </a>
              </div>
              <div>
                <span className="text-xs text-white/45 block">Redes sociales:</span>
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Power Digital. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Growth Partner Estratégico</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
