import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
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
    let text = 'Hola Juan Carlos y equipo Power Digital, estuve en /servicios y me gustaría coordinar una conversación estratégica gratuita de 30 minutos.';
    if (userObjective) {
      text += ` Mi prioridad principal es: ${userObjective}.`;
    }
    return `https://wa.me/51920690260?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-24 md:py-36 bg-white relative border-t border-[#0B0D17]/8 overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-[#4361EE]/8 via-[#DEB660]/4 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#DEB660] mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Dirección de Crecimiento</span>
        </div>

        {/* Mandatory Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0D17] tracking-tight leading-[1.12] mb-6 text-balance font-title">
          El siguiente paso de tu marca empieza aquí.
        </h2>

        {/* Mandatory Subtext */}
        <p className="text-base sm:text-xl text-[#0B0D17]/75 font-normal leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          No necesitas tener todas las respuestas resueltas hoy. Conversemos en una <strong>sesión estratégica gratuita de 30 minutos</strong> con nuestro fundador y diseñemos la mejor ruta para tu crecimiento.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 max-w-md mx-auto">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Sesión estratégica de 30 min</span>
          </a>

          <button
            onClick={onOpenProposalModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
          >
            <span>Consultar propuesta</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Reassurance note */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#0B0D17]/50">
          <ShieldCheck className="w-4 h-4 text-[#4361EE]" />
          <span>Atención personalizada por Juan Carlos Cabrera y el equipo directivo</span>
        </div>
      </div>
    </section>
  );
};
