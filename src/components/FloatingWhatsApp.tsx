import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Subtle dismissible greeting tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#0B0D17] text-xs font-semibold py-2 px-3.5 rounded-full shadow-lg border border-[#0B0D17]/10 animate-fade-in">
          <span>¿Hablamos por WhatsApp?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#0B0D17]/40 hover:text-[#0B0D17] p-0.5 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20hacer%20crecer%20mi%20negocio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Power Digital por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative group"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />

        {/* Subtle ping pulse */}
        <span
          aria-hidden="true"
          className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#4361EE] border-2 border-white rounded-full animate-ping"
        />
        <span
          aria-hidden="true"
          className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#4361EE] border-2 border-white rounded-full"
        />
      </a>
    </div>
  );
};
