import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigateToServices?: () => void;
}

const NAV_ITEMS = [
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { id: 'enfoque', label: 'Nuestro enfoque', href: '#enfoque' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onNavigateToServices,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen, handleEscape]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      const target = document.getElementById(href.slice(1));
      if (target) {
        e.preventDefault();
        setMobileMenuOpen(false);
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F9FA]/92 backdrop-blur-md border-b border-[#0B0D17]/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center shrink-0 group transition-opacity hover:opacity-90"
            aria-label="Power Digital - Volver al inicio"
          >
            <img
              src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790715607/PowerDigital_LogoHorizontal_Transparente_yfoawp.png"
              alt="Power Digital"
              className="h-8 sm:h-9 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Zone 2: Primary Navigation Links */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-[14px] font-medium text-[#0B0D17]/75"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? 'text-[#0B0D17] font-semibold'
                      : 'text-[#0B0D17]/70 hover:text-[#0B0D17]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#4361EE] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-[#0B0D17] hover:bg-[#4361EE] text-white px-5 py-2.5 rounded-xl text-[13.5px] font-semibold whitespace-nowrap transition-colors duration-200 cursor-pointer"
            >
              <span>Hablemos</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 -mr-2 text-[#0B0D17] hover:text-[#4361EE] rounded-lg transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Accessible Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="md:hidden mt-3 pt-4 pb-6 px-4 bg-[#FFFFFF] border border-[#0B0D17]/10 rounded-2xl shadow-xl"
          >
            <nav aria-label="Menú móvil" className="flex flex-col divide-y divide-[#0B0D17]/6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="py-3.5 text-base font-semibold text-[#0B0D17] hover:text-[#4361EE] flex items-center justify-between transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0B0D17]/40" aria-hidden="true" />
                </a>
              ))}
            </nav>

            <div className="mt-5 pt-4 border-t border-[#0B0D17]/10 flex flex-col gap-2.5">
              {onNavigateToServices && (
                <a
                  href="/servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onNavigateToServices();
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#0B0D17]/12 text-sm font-semibold text-[#0B0D17] hover:border-[#4361EE] transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#4361EE]" aria-hidden="true" />
                  <span>Explorar catálogo interactivo</span>
                </a>
              )}

              <a
                href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20conversar%20sobre%20mi%20marca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#0B0D17]/12 text-sm font-semibold text-[#0B0D17]"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp directo</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-4 py-3.5 rounded-xl text-sm font-bold transition-colors cursor-pointer"
              >
                <span>Hablemos de tu marca</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
