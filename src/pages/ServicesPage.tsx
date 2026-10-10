import React, { useState } from 'react';
import { PowerDiscoveryExperience } from '../components/services/PowerDiscoveryExperience';
import { MasterCatalogDrawer } from '../components/services/MasterCatalogDrawer';
import { ProposalModal } from '../components/services/ProposalModal';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { ServiceItem } from '../data/servicesData';
import { GOOGLE_CALENDAR_AGENDA_URL } from '../config/servicesObjectivesAssets';
import { ArrowLeft, BookOpen, Calendar, ExternalLink } from 'lucide-react';

interface ServicesPageProps {
  onNavigateHome: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateHome }) => {
  // Modal & Drawer State
  const [isCatalogDrawerOpen, setIsCatalogDrawerOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // User objective tracking for context
  const [userObjective, setUserObjective] = useState<string>('');
  const [userContext, setUserContext] = useState<{
    objective?: string;
  }>({});

  const handleOpenProposal = (service?: ServiceItem, context?: { objective: string }) => {
    setSelectedService(service || null);
    if (context) {
      setUserContext(context);
      if (context.objective) {
        setUserObjective(context.objective);
      }
    }
    setIsProposalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0B0D17] flex flex-col font-sans selection:bg-[#4361EE]/15 selection:text-[#4361EE]">
      {/* =========================================================================
          HEADER MINIMALISTA DE /SERVICIOS
          - Logo original
          - Volver al inicio
          - Enlace discreto "Ver catálogo"
          - Enlace "Agenda gratis" (Google Calendar oficial)
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-[#0B0D17]/8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Volver a Inicio + Logo Oficial */}
            <div className="flex items-center gap-3 sm:gap-5">
              <button
                type="button"
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B0D17]/70 hover:text-[#4361EE] bg-white border border-[#0B0D17]/8 px-3 py-1.5 rounded-xl transition-all hover:border-[#4361EE]/30 cursor-pointer shadow-2xs"
                title="Volver a la portada principal de Power Digital"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Inicio</span>
              </button>

              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateHome();
                }}
                className="flex items-center"
                aria-label="Power Digital Home"
              >
                <img
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790715607/PowerDigital_LogoHorizontal_Transparente_yfoawp.png"
                  alt="Power Digital Logo"
                  className="h-8 sm:h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>

            {/* Right: Enlace discreto "Ver catálogo" + Enlace "Agenda gratis" */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setIsCatalogDrawerOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B0D17]/80 hover:text-[#4361EE] bg-white border border-[#0B0D17]/10 px-3.5 py-2 rounded-xl transition-all shadow-2xs hover:border-[#4361EE]/30 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#DEB660]" />
                <span>Ver catálogo</span>
              </button>

              <a
                href={GOOGLE_CALENDAR_AGENDA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                title="Agendar sesión estratégica gratuita de 30 min en Google Calendar"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agenda gratis</span>
                <ExternalLink className="w-3 h-3 text-white/80 hidden sm:inline" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          UNA SOLA EXPERIENCIA INTERACTIVA:
          ESTADO A: Selección del objetivo (¿Qué quieres potenciar hoy? + 6 tarjetas)
          ESTADO B: Exploración contextual de soluciones + Agenda gratuita
          (Sin secciones largas debajo)
          ========================================================================= */}
      <main className="flex-1 flex flex-col justify-center">
        <PowerDiscoveryExperience
          onSelectServiceForDetails={(service, context) =>
            handleOpenProposal(service, context)
          }
          onOpenCatalogDrawer={() => setIsCatalogDrawerOpen(true)}
          onUserObjectiveChange={(objTitle) => setUserObjective(objTitle)}
        />
      </main>

      {/* =========================================================================
          CATÁLOGO COMPLETO BAJO DEMANDA (Drawer lateral, NO permanente en página)
          ========================================================================= */}
      <MasterCatalogDrawer
        isOpen={isCatalogDrawerOpen}
        onClose={() => setIsCatalogDrawerOpen(false)}
        onSelectServiceForProposal={(service) => handleOpenProposal(service)}
      />

      {/* Modal de Detalle de Solución / Consulta rápida */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        service={selectedService}
        userContext={userContext}
        onClose={() => setIsProposalModalOpen(false)}
      />

      {/* Footer Minimalista */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
};
