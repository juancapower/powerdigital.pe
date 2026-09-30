import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Método', href: '#metodo' },
    { name: 'Marcas', href: '#marcas' },
    { name: 'Fundador', href: '#fundador' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F9FA]/90 backdrop-blur-md border-b border-[#0B0D17]/10 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Logo horizontal oficial */}
          <a
            href="#inicio"
            className="flex items-center group transition-transform active:scale-98"
            aria-label="Power Digital - Inicio"
          >
            <img
              src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790715607/PowerDigital_LogoHorizontal_Transparente_yfoawp.png"
              alt="Power Digital Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#0B0D17]/75"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#4361EE] transition-colors relative py-1 hover:underline underline-offset-8 decoration-2 decoration-[#4361EE]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: CTA Principal */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20hacer%20crecer%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0D17]/70 hover:text-[#0B0D17] transition-colors py-2 px-3"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-xs hover:shadow-md whitespace-nowrap cursor-pointer"
            >
              <span>Quiero hacer crecer mi negocio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B0D17] hover:text-[#4361EE] rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#4361EE]"
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-5 border-t border-[#0B0D17]/10 bg-[#F8F9FA] rounded-b-2xl shadow-lg px-2">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#0B0D17] hover:text-[#4361EE] hover:bg-[#4361EE]/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20hacer%20crecer%20mi%20negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#0B0D17]/15 rounded-lg text-sm font-semibold text-[#0B0D17] hover:bg-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Escríbenos por WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all shadow-xs"
                >
                  <span>Quiero hacer crecer mi negocio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
