import React, { useState } from 'react';
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

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

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

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0B0D17] flex flex-col font-sans selection:bg-[#4361EE]/15 selection:text-[#4361EE]">
      {/* Top Navbar */}
      <Navbar onOpenContact={scrollToContact} />

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
