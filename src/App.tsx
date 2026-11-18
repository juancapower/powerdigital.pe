import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsSection } from './components/ClientsSection';
import { ManifestoSection } from './components/ManifestoSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { MethodSection } from './components/MethodSection';
import { FounderSection } from './components/FounderSection';
import { EvidenceSection } from './components/EvidenceSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServicesPage } from './pages/ServicesPage';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  // Route state: 'home' | 'servicios'
  const [currentRoute, setCurrentRoute] = useState<'home' | 'servicios'>(() => {
    const redirectKey =
      typeof window !== 'undefined' ? sessionStorage.getItem('powerdigital_redirect') : null;
    const path = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '';
    const search = typeof window !== 'undefined' ? window.location.search.toLowerCase() : '';
    const hash = typeof window !== 'undefined' ? window.location.hash.toLowerCase() : '';

    if (
      redirectKey === '/servicios' ||
      path.startsWith('/servicios') ||
      path.startsWith('/brochure') ||
      path.startsWith('/catalogo') ||
      search.includes('route=servicios') ||
      hash === '#catalogo' ||
      hash === '#servicios-catalogo'
    ) {
      return 'servicios';
    }
    return 'home';
  });

  // Preserve all static client redirects & route syncing
  useEffect(() => {
    const redirectKey = sessionStorage.getItem('powerdigital_redirect');
    const search = window.location.search.toLowerCase();

    const clientPath = window.location.pathname.replace(/^\//, '').replace(/\/$/, '').toLowerCase();
    const clientRedirects: Record<string, string> = {
      anatoliazapata: 'https://drive.google.com/open?id=1hn1NMOm4IE2sFTz96UxapVm06BHTUAF8&usp=drive_fs',
      anataoliazapata: 'https://drive.google.com/open?id=1hn1NMOm4IE2sFTz96UxapVm06BHTUAF8&usp=drive_fs',
      carmengiraldo: 'https://drive.google.com/drive/folders/1Xalofgv8jlzYgvB24VAJUeaBvLpYx5jo',
      eversafefinancial: 'https://drive.google.com/open?id=1Mwb1Vu7Cn5cZkZezQuZZgUfgWnpfCE-F&usp=drive_fs',
      gabrielavargas: 'https://drive.google.com/open?id=1we5-g_M4SbJTMDM5wWaVEkmiDKuxSHzR&usp=drive_fs',
      graceramirez: 'https://drive.google.com/open?id=1-6r7lgE_Dd7cTAFkh6qGX95_2M_jwMta&usp=drive_fs',
      heydycoach: 'https://drive.google.com/drive/folders/15wtnpdOHNiimTNZKS5mYlvAZF9HwJ2aq',
      hugodam: 'https://drive.google.com/open?id=1MT6W5zPFqrI_SXe1pphmrfox7CnXmCt1&usp=drive_fs',
      juancapower: 'https://drive.google.com/open?id=1Lhcy969VYNyzE8wr5D80_wv8aJDOROhx&usp=drive_fs',
      karlaserna: 'https://drive.google.com/drive/folders/1r-lVAQIiZrcDmArwttsViyBjOyQJHvrf?usp=sharing',
      lizbetquispe: 'https://drive.google.com/open?id=1UfIeHarVnyUHueYgDHz1X1W8gUlGuOgy&usp=drive_fs',
      levitas: 'https://drive.google.com/drive/folders/1Y373nKOT-Gx_uKhe96TABTSqWpqn_3TZ',
      negociacionesgabyval: 'https://drive.google.com/open?id=1p-vK1l6t3EC-pDrOMp2TAJ4PRBYgFkC_&usp=drive_fs',
      puntodequiebre: 'https://drive.google.com/drive/folders/125qs-LgVIWt06T7xuH6BkSuoFNOYWTX_?usp=sharing',
    };
    if (clientRedirects[clientPath]) {
      window.location.replace(clientRedirects[clientPath]);
      return;
    }

    if (redirectKey === '/servicios' || search.includes('route=servicios')) {
      sessionStorage.removeItem('powerdigital_redirect');
      window.history.replaceState({}, '', '/servicios');
      setCurrentRoute('servicios');
    }

    const handlePopState = () => {
      const isServicios = window.location.pathname.toLowerCase().startsWith('/servicios');
      setCurrentRoute(isServicios ? 'servicios' : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToServices = () => {
    window.history.pushState({}, '', '/servicios');
    setCurrentRoute('servicios');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToContact();
  };

  if (currentRoute === 'servicios') {
    return <ServicesPage onNavigateHome={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0B0D17] flex flex-col font-sans selection:bg-[#4361EE]/15 selection:text-[#4361EE]">
      {/* Sección 01: Navbar Premium */}
      <Navbar onOpenContact={scrollToContact} onNavigateToServices={navigateToServices} />

      <main className="flex-1">
        {/* Sección 02: Hero Cinemático */}
        <Hero onCtaClick={scrollToContact} onNavigateToServices={navigateToServices} />

        {/* Sección 03: Social Proof (Editorial Logo Wall) */}
        <ClientsSection />

        {/* Sección 04: Manifiesto de Marca */}
        <ManifestoSection />

        {/* Sección 05: Proyectos Seleccionados */}
        <ProjectsSection onSelectService={handleSelectService} />

        {/* Sección 06: Ecosistema de Soluciones (Editorial Bento Grid) */}
        <ServicesSection
          onSelectService={handleSelectService}
          onNavigateToServices={navigateToServices}
        />

        {/* Sección 07: Nuestro Enfoque (Sticky Storytelling) */}
        <MethodSection onCtaClick={scrollToContact} />

        {/* Sección 08: Diferencial Humano y Tecnológico (Fundador) */}
        <FounderSection />

        {/* Sección 09: Evidencia y Confianza + FAQ */}
        <EvidenceSection />
        <FaqSection />

        {/* Sección 10: Conversión */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Footer Monumental */}
      <Footer onNavigateToServices={navigateToServices} />

      {/* Canal Flotante */}
      <FloatingWhatsApp />
    </div>
  );
}
