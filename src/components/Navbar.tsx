import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigateToServices?: () => void;
}

const NAV_ITEMS = [
  { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'enfoque', label: 'Método', href: '#enfoque' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onNavigateToServices,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
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
      { rootMargin: '-22% 0px -55% 0px', threshold: [0.1, 0.35] }
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
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center shrink-0 transition-opacity hover:opacity-85"
            aria-label="Power Digital - Volver al inicio"
          >
            <img
              src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790715607/PowerDigital_LogoHorizontal_Transparente_yfoawp.png"
              alt="Power Digital"
              className="h-8 sm:h-9 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Zone 2: Precision Navigation with Shared Sliding Indicator */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-[14px] font-medium"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-[#0B0D17] font-semibold'
                      : 'text-[#0B0D17]/65 hover:text-[#0B0D17]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="pd-nav-active-line"
                      aria-hidden="true"
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 380, damping: 32 }
                      }
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#4361EE]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="hidden md:flex items-center shrink-0">
            <motion.button
              type="button"
              onClick={onOpenContact}
              whileHover={prefersReducedMotion ? undefined : { x: 2 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              className="group inline-flex items-center gap-2 bg-[#0B0D17] hover:bg-[#4361EE] text-white px-5 py-2.5 text-[13.5px] font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer"
            >
              <span>Hablemos</span>
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </motion.button>
          </div>

          {/* Mobile Trigger (>= 44px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-11 h-11 -mr-2 inline-flex items-center justify-center text-[#0B0D17] hover:text-[#4361EE] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Animated Accessible Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-drawer"
              initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-3 pt-4 pb-6 px-5 bg-[#FFFFFF] border border-[#0B0D17]/12 shadow-xl"
            >
              <nav aria-label="Menú móvil" className="flex flex-col divide-y divide-[#0B0D17]/8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="py-3.5 min-h-[44px] text-base font-semibold text-[#0B0D17] hover:text-[#4361EE] flex items-center justify-between transition-colors"
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
                    className="flex items-center justify-center gap-2 px-4 min-h-[44px] border border-[#0B0D17]/15 text-sm font-semibold text-[#0B0D17] hover:border-[#4361EE] transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-[#4361EE]" aria-hidden="true" />
                    <span>Explorar catálogo de soluciones</span>
                  </a>
                )}

                <a
                  href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20conversar%20sobre%20mi%20marca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 min-h-[44px] border border-[#0B0D17]/15 text-sm font-semibold text-[#0B0D17]"
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
                  className="flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-4 min-h-[46px] text-sm font-bold transition-colors cursor-pointer"
                >
                  <span>Hablemos de tu marca</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
