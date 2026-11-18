import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20conversar%20sobre%20mi%20marca"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Power Digital por WhatsApp"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1fb857] active:scale-95 text-white flex items-center justify-center shadow-lg transition-transform duration-200"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </a>
    </div>
  );
};
