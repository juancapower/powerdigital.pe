import React, { useState } from 'react';
import { X, Check, ArrowRight, Shield, MessageSquare, Send, Calendar, ExternalLink } from 'lucide-react';
import { ServiceItem } from '../../data/servicesData';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { GOOGLE_CALENDAR_AGENDA_URL } from '../../config/servicesObjectivesAssets';

interface ProposalModalProps {
  isOpen: boolean;
  service: ServiceItem | null;
  userContext?: {
    objective?: string;
    stage?: string;
    need?: string;
  };
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  service,
  userContext,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Construct dynamic WhatsApp message
  const constructWhatsAppMessage = () => {
    let msg = 'Hola Juan Carlos y equipo Power Digital, me gustaría coordinar una conversación estratégica gratuita de 30 minutos';
    if (service) {
      msg += ` para evaluar la solución: *${service.name}* (${service.modalityLabel})`;
    } else {
      msg += ' para evaluar la situación de mi marca y encontrar la mejor ruta de crecimiento.';
    }
    if (userContext?.objective) {
      msg += `\n• Mi objetivo principal es: ${userContext.objective}`;
    }
    if (userContext?.stage) {
      msg += `\n• Mi etapa actual: ${userContext.stage}`;
    }
    if (name.trim()) {
      msg += `\n• Mi nombre: ${name.trim()}`;
    }
    if (notes.trim()) {
      msg += `\n• Detalle adicional: ${notes.trim()}`;
    }
    return encodeURIComponent(msg);
  };

  const handleWhatsAppDirect = () => {
    const url = `https://wa.me/51920690260?text=${constructWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open WhatsApp with all compiled data
    setTimeout(() => {
      handleWhatsAppDirect();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B0D17]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#0B0D17]/10 shadow-2xl z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Subtle accent glow */}
        <div
          aria-hidden="true"
          className="absolute -top-24 right-0 w-64 h-64 bg-[#4361EE]/10 rounded-full blur-3xl pointer-events-none"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#0B0D17]/50 hover:text-[#0B0D17] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#4361EE] mb-2">
            <span>{service?.categoryLabel || 'Conversación Estratégica'}</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span>30 Minutos con el Fundador</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B0D17] tracking-tight font-title">
            {service ? service.name : 'Sesión Estratégica Gratuita (30 min)'}
          </h3>

          <p className="text-xs sm:text-sm text-[#0B0D17]/75 mt-2 leading-relaxed">
            Una sesión directa de 30 minutos con <strong>Juan Carlos Cabrera</strong> para diagnosticar tu
            situación actual, explorar soluciones y trazar la ruta de crecimiento más eficiente sin compromisos.
          </p>
        </div>

        {/* Service summary snippet */}
        {service && (
          <div className="bg-[#F8F9FA] rounded-2xl p-4 mb-6 border border-[#0B0D17]/6 text-left">
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#4361EE] block mb-1">
              PROBLEMA QUE RESUELVE
            </span>
            <p className="text-xs text-[#0B0D17]/80 mb-3">{service.problemSolved}</p>

            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#0B0D17]/60 block mb-1.5">
              QUÉ INCLUYE PRINCIPALMENTE:
            </span>
            <ul className="space-y-1">
              {service.includes.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#0B0D17]/70">
                  <Check className="w-3.5 h-3.5 text-[#4361EE] shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Choice: Direct WhatsApp & Google Calendar vs Quick Form */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Sesión por WhatsApp</span>
            </button>

            <a
              href={GOOGLE_CALENDAR_AGENDA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] active:scale-98 text-white px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar en Calendar</span>
              <ExternalLink className="w-3 h-3 text-white/80" />
            </a>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-[#0B0D17]/8"></div>
            <span className="flex-shrink mx-3 text-[11px] font-mono-code uppercase text-[#0B0D17]/40">
              o déjanos tus datos
            </span>
            <div className="flex-grow border-t border-[#0B0D17]/8"></div>
          </div>

          <form onSubmit={handleSubmitForm} className="space-y-3 text-left">
            <div>
              <label className="block text-xs font-semibold text-[#0B0D17] mb-1">
                Tu nombre o marca
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Carmen Giraldo"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#0B0D17]/10 focus:border-[#4361EE] focus:bg-white focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B0D17] mb-1">
                ¿Algún comentario o necesidad puntual? (opcional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej. Necesitamos lanzar en 3 semanas o evaluar presupuesto..."
                rows={2}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#0B0D17]/10 focus:border-[#4361EE] focus:bg-white focus:outline-hidden transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#0B0D17] hover:bg-[#1E2238] active:scale-98 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              <span>{submitted ? 'Preparando mensaje...' : 'Solicitar sesión de 30 min'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[#0B0D17]/50 text-center">
            <Shield className="w-3.5 h-3.5 text-[#DEB660]" />
            <span>Trato directo y confidencial con el equipo de Power Digital</span>
          </div>
        </div>
      </div>
    </div>
  );
};
