import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';

interface DynamicCtaSectionProps {
  userObjective?: string;
  onOpenProposalModal: () => void;
}

export const DynamicCtaSection: React.FC<DynamicCtaSectionProps> = ({
  userObjective,
  onOpenProposalModal,
}) => {
  const getWhatsAppUrl = () => {
    let text = 'Hola Power Digital, estuve revisando el catálogo interactivo de servicios.';
    if (userObjective) {
      text += ` Mi objetivo prioritario es: ${userObjective}.`;
    }
    text += ' Me gustaría coordinar una conversación y evaluar una propuesta a medida.';
    return `https://wa.me/51920690260?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-24 md:py-32 bg-white relative border-t border-[#0B0D17]/8 overflow-hidden">
      {/* Background ambient light */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#4361EE]/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DEB660] mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Siguiente Paso</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0D17] tracking-tight leading-tight mb-6 text-balance">
          ¿Construimos la solución correcta para tu marca?
        </h2>

        <p className="text-base sm:text-lg text-[#0B0D17]/75 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Conversemos sobre tu momento actual. Te orientamos sobre qué piezas priorizar hoy y qué
          dejar para más adelante.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 max-w-lg mx-auto">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Escribir por WhatsApp</span>
          </a>

          <button
            onClick={onOpenProposalModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Consultar propuesta</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Micro-guarantee */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#0B0D17]/50">
          <ShieldCheck className="w-4 h-4 text-[#4361EE]" />
          <span>Respuesta directa por Juan Carlos Cabrera y el equipo directivo · Sin spam</span>
        </div>
      </div>
    </section>
  );
};
