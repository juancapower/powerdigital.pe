import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsSection } from './components/ClientsSection';
import { ValueProposition } from './components/ValueProposition';
import { ServicesSection } from './components/ServicesSection';
import { MethodSection } from './components/MethodSection';
import { FounderSection } from './components/FounderSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServicesPage } from './pages/ServicesPage';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  // Route state: 'home' | 'servicios'
  const [currentRoute, setCurrentRoute] = useState<'home' | 'servicios'>(() => {
    // Check GitHub Pages redirect flag, path, query param, or hash
    const redirectKey = typeof window !== 'undefined' ? sessionStorage.getItem('powerdigital_redirect') : null;
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

  // Sync address bar on mount if redirected
  useEffect(() => {
    const redirectKey = sessionStorage.getItem('powerdigital_redirect');
    const search = window.location.search.toLowerCase();

    // Check if URL matches a client redirect
    const clientPath = window.location.pathname.replace(/^\//, '').replace(/\/$/, '').toLowerCase();
    const clientRedirects: Record<string, string> = {
      'anatoliazapata': 'https://drive.google.com/open?id=1hn1NMOm4IE2sFTz96UxapVm06BHTUAF8&usp=drive_fs',
      'anataoliazapata': 'https://drive.google.com/open?id=1hn1NMOm4IE2sFTz96UxapVm06BHTUAF8&usp=drive_fs',
      'carmengiraldo': 'https://drive.google.com/drive/folders/1Xalofgv8jlzYgvB24VAJUeaBvLpYx5jo',
      'eversafefinancial': 'https://drive.google.com/open?id=1Mwb1Vu7Cn5cZkZezQuZZgUfgWnpfCE-F&usp=drive_fs',
      'heydycoach': 'https://drive.google.com/drive/folders/15wtnpdOHNiimTNZKS5mYlvAZF9HwJ2aq',
      'hugodam': 'https://drive.google.com/open?id=1MT6W5zPFqrI_SXe1pphmrfox7CnXmCt1&usp=drive_fs',
      'levitas': 'https://drive.google.com/drive/folders/1Y373nKOT-Gx_uKhe96TABTSqWpqn_3TZ',
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

  // If user is on /servicios, render the full interactive brochure experience
  if (currentRoute === 'servicios') {
    return <ServicesPage onNavigateHome={navigateToHome} />;
  }

  // Otherwise render corporate Home
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0B0D17] flex flex-col font-sans selection:bg-[#4361EE]/15 selection:text-[#4361EE]">
      {/* Top Navbar with onNavigateToServices support */}
      <Navbar onOpenContact={scrollToContact} onNavigateToServices={navigateToServices} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onCtaClick={scrollToContact} />

        {/* 2. Marcas Impactadas / Credibility Showcase */}
        <ClientsSection />

        {/* 3. Propuesta de Valor (Por qué Power Digital es diferente) */}
        <ValueProposition onCtaClick={scrollToContact} />

        {/* 4. Servicios Estratégicos Agrupados (4 bloques) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Método de Trabajo (5 pasos) */}
        <MethodSection onCtaClick={scrollToContact} />

        {/* 6. Conoce al Fundador (Juan Carlos Cabrera) */}
        <FounderSection />

        {/* 7. Formulario Corto y Canales Directos */}
        <ContactSection initialService={selectedService} />

        {/* 8. Preguntas Frecuentes */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button (WhatsApp) */}
      <FloatingWhatsApp />
    </div>
  );
}
