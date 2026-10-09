import React, { useState } from 'react';
import { ServicesHero } from '../components/services/ServicesHero';
import { DiscoverySection } from '../components/services/DiscoverySection';
import { CatalogSection } from '../components/services/CatalogSection';
import { HowWeWorkSection } from '../components/services/HowWeWorkSection';
import { DynamicCtaSection } from '../components/services/DynamicCtaSection';
import { ProposalModal } from '../components/services/ProposalModal';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { ServiceItem } from '../data/servicesData';
import { ArrowLeft, BookOpen, Compass, Layers } from 'lucide-react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';

interface ServicesPageProps {
  onNavigateHome: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateHome }) => {
  const [activeMode, setActiveMode] = useState<'discovery' | 'catalog'>('discovery');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [userContext, setUserContext] = useState<{
    objective?: string;
    stage?: string;
    need?: string;
  }>({});

  const scrollToDiscovery = () => {
    setActiveMode('discovery');
    const el = document.getElementById('descubrimiento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalog = () => {
    setActiveMode('catalog');
    const el = document.getElementById('catalogo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProposal = (service?: ServiceItem, context?: any) => {
    setSelectedService(service || null);
    if (context) {
      setUserContext(context);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0B0D17] flex flex-col font-sans selection:bg-[#4361EE]/15 selection:text-[#4361EE]">
      {/* Top Specialized Header for /servicios */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-[#0B0D17]/10 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Back to Home + Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0D17]/70 hover:text-[#4361EE] bg-white border border-[#0B0D17]/8 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                title="Volver a la portada principal de Power Digital"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Volver a Inicio</span>
              </button>

              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="flex items-center"
              >
                <img
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790715607/PowerDigital_LogoHorizontal_Transparente_yfoawp.png"
                  alt="Power Digital Logo"
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            {/* Center: Interactive Mode Switcher */}
            <div className="hidden md:flex items-center p-1 rounded-xl bg-white border border-[#0B0D17]/8 text-xs font-semibold">
              <button
                onClick={scrollToDiscovery}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeMode === 'discovery'
                    ? 'bg-[#4361EE] text-white'
                    : 'text-[#0B0D17]/70 hover:text-[#0B0D17]'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Descubrimiento</span>
              </button>
              <button
                onClick={scrollToCatalog}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeMode === 'catalog'
                    ? 'bg-[#4361EE] text-white'
                    : 'text-[#0B0D17]/70 hover:text-[#0B0D17]'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Catálogo Completo</span>
              </button>
            </div>

            {/* Right: Direct WhatsApp + Proposal CTA */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20estoy%20viendo%20el%20cat%C3%A1logo%20de%20servicios%20y%20quiero%20hacer%20una%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0D17]/80 hover:text-[#0B0D17] bg-white border border-[#0B0D17]/8 px-3 py-2 rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              <button
                onClick={() => handleOpenProposal()}
                className="inline-flex items-center gap-1.5 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                <span>Consultar propuesta</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero */}
        <ServicesHero
          activeMode={activeMode}
          onSelectMode={setActiveMode}
          onScrollToDiscovery={scrollToDiscovery}
          onScrollToCatalog={scrollToCatalog}
        />

        {/* 2. Modo Descubrimiento & Diagnóstico Guiado */}
        <DiscoverySection
          onSelectServiceForProposal={(service, context) =>
            handleOpenProposal(service, context)
          }
          onExploreFullCatalog={scrollToCatalog}
        />

        {/* 3. Catálogo Completo con 4 bloques y filtros */}
        <CatalogSection
          onSelectServiceForProposal={(service) => handleOpenProposal(service)}
        />

        {/* 4. Cómo trabajamos (5 pasos) */}
        <HowWeWorkSection onCtaClick={() => handleOpenProposal()} />

        {/* 5. Cierre Dinámico */}
        <DynamicCtaSection
          userObjective={userContext.objective}
          onOpenProposalModal={() => handleOpenProposal()}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Proposal Inquiry Modal */}
      <ProposalModal
        isOpen={modalOpen}
        service={selectedService}
        userContext={userContext}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};
