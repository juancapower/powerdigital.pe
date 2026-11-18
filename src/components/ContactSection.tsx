import React, { useState, useEffect } from 'react';
import { Mail, Instagram, ArrowUpRight, CheckCircle2, Copy, Check } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface ContactSectionProps {
  initialService?: string;
}

const SERVICE_OPTIONS = [
  'Estrategia y marca',
  'Contenido y producción creativa',
  'Web y experiencia digital',
  'Inteligencia artificial y automatización',
  'Growth y acompañamiento estratégico',
  'Diagnóstico general / Otro',
];

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    servicio: initialService || SERVICE_OPTIONS[0],
    descripcion: '',
    privacidad: false,
  });

  const [prepared, setPrepared] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        servicio: SERVICE_OPTIONS.includes(initialService)
          ? initialService
          : SERVICE_OPTIONS[0],
        descripcion:
          prev.descripcion ||
          `Hola, me interesa conversar sobre ${initialService} para mi marca.`,
      }));
      setPrepared(false);
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === 'checkbox'
        ? target.checked
        : target.value;
    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const buildSummaryText = () => {
    return [
      `Hola Power Digital, soy ${formData.nombre.trim()}.`,
      formData.empresa.trim() ? `Marca / Empresa: ${formData.empresa.trim()}` : null,
      `Correo: ${formData.correo.trim()}`,
      `Servicio de interés: ${formData.servicio}`,
      `Proyecto: ${formData.descripcion.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const generateWhatsAppLink = () => {
    return `https://wa.me/51920690260?text=${encodeURIComponent(buildSummaryText())}`;
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(
      `Consulta de proyecto: ${formData.servicio} — ${formData.empresa.trim() || formData.nombre.trim()}`
    );
    const body = encodeURIComponent(buildSummaryText());
    return `mailto:info@powerdigital.pe?subject=${subject}&body=${body}`;
  };

  const handleCopyBrief = async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setErrorMsg('No se pudo copiar automáticamente; puedes usar WhatsApp o Correo directo.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) {
      setErrorMsg('Por favor ingresa tu nombre completo.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correo.trim() || !emailRegex.test(formData.correo.trim())) {
      setErrorMsg('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (formData.descripcion.trim().length < 10) {
      setErrorMsg('Por favor cuéntanos brevemente sobre tu proyecto (mínimo 10 caracteres).');
      return;
    }

    if (!formData.privacidad) {
      setErrorMsg('Debes aceptar el consentimiento de privacidad para preparar el envío.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    // Prepare real client-side handoff without faking a non-existent backend API response
    window.setTimeout(() => {
      setLoading(false);
      setPrepared(true);
    }, 250);
  };

  return (
    <section
      id="contacto"
      className="py-24 sm:py-32 pb-28 sm:pb-36 bg-[#F8F9FA] text-[#0B0D17] border-t border-[#0B0D17]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: High-Impact Headline & Path 1 (Direct WhatsApp + Channels) */}
          <div className="lg:col-span-5 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Conversación Inicial
            </p>

            <h2 className="text-editorial-title font-bold text-[#0B0D17] mb-5">
              Tu siguiente etapa comienza con una conversación.
            </h2>

            <p className="text-base sm:text-lg text-[#0B0D17]/70 leading-relaxed mb-10">
              Cuéntanos qué estás construyendo. Descubramos cómo impulsar tu marca.
            </p>

            {/* Primary Direct Path: WhatsApp */}
            <div className="mb-10">
              <a
                href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20estoy%20construyendo%20un%20proyecto%20y%20quiero%20conversar%20sobre%20c%C3%B3mo%20impulsar%20mi%20marca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#0B0D17] hover:bg-[#4361EE] text-white px-6 py-4 rounded-xl text-sm font-bold transition-colors w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <span>Conversación rápida por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Clean Hairline Channels Directory */}
            <div className="divide-y divide-[#0B0D17]/10 border-t border-b border-[#0B0D17]/10">
              <a
                href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20conversar%20sobre%20mi%20marca"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 flex items-center justify-between group"
              >
                <div>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#0B0D17]/50 block">
                    WhatsApp Directo
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#0B0D17] group-hover:text-[#4361EE] transition-colors">
                    +51 920 690 260
                  </span>
                </div>
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              </a>

              <a
                href="mailto:info@powerdigital.pe"
                className="py-4 flex items-center justify-between group"
              >
                <div>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#0B0D17]/50 block">
                    Correo Corporativo
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#0B0D17] group-hover:text-[#4361EE] transition-colors">
                    info@powerdigital.pe
                  </span>
                </div>
                <Mail className="w-5 h-5 text-[#4361EE]" aria-hidden="true" />
              </a>

              <a
                href="https://instagram.com/powerdigital.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 flex items-center justify-between group"
              >
                <div>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#0B0D17]/50 block">
                    Instagram
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#0B0D17] group-hover:text-[#4361EE] transition-colors">
                    @powerdigital.ai
                  </span>
                </div>
                <Instagram className="w-5 h-5 text-[#8A6B20]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Path 2 (Structured Project Form with Honest Direct Dispatch) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] rounded-3xl p-7 sm:p-10 border border-[#0B0D17]/10 shadow-xs text-left">
              {prepared ? (
                <div className="py-4">
                  <div className="flex items-center gap-3 text-[#4361EE] mb-4">
                    <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                    <span className="font-mono-code text-xs uppercase tracking-wider font-semibold">
                      Brief preparado · Listo para enviar
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B0D17] mb-2">
                    Tu resumen está listo, {formData.nombre}
                  </h3>
                  <p className="text-sm text-[#0B0D17]/70 leading-relaxed mb-6">
                    Elige tu canal preferido para enviarnos este detalle directamente sin tener que
                    volver a escribirlo:
                  </p>

                  <pre className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#0B0D17]/10 text-xs sm:text-sm text-[#0B0D17]/85 whitespace-pre-wrap font-sans leading-relaxed mb-6">
                    {buildSummaryText()}
                  </pre>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb857] text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Enviar por WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>

                    <a
                      href={generateMailtoLink()}
                      className="inline-flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-colors"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Abrir en mi correo</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="inline-flex items-center justify-center gap-2 border border-[#0B0D17]/15 hover:border-[#0B0D17] px-5 py-3.5 rounded-xl text-sm font-semibold text-[#0B0D17] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#4361EE]" aria-hidden="true" />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" aria-hidden="true" />
                          <span>Copiar resumen</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPrepared(false)}
                    className="text-xs font-semibold text-[#0B0D17]/60 hover:text-[#0B0D17] underline underline-offset-4 cursor-pointer"
                  >
                    Editar datos del formulario
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B0D17] mb-1">
                      Cuéntanos sobre tu proyecto
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0B0D17]/60">
                      Completa los campos para estructurar tu consulta y abrir el envío directo.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3.5 bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm rounded-xl font-medium"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-nombre"
                        className="block text-xs font-bold text-[#0B0D17] mb-2 uppercase tracking-wide"
                      >
                        Nombre <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-nombre"
                        name="nombre"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#0B0D17]/15 focus:border-[#4361EE] outline-hidden transition-colors text-sm text-[#0B0D17] bg-[#F8F9FA]/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-empresa"
                        className="block text-xs font-bold text-[#0B0D17] mb-2 uppercase tracking-wide"
                      >
                        Marca o empresa{' '}
                        <span className="text-[#0B0D17]/45 font-normal lowercase">(opcional)</span>
                      </label>
                      <input
                        id="contact-empresa"
                        name="empresa"
                        type="text"
                        autoComplete="organization"
                        placeholder="Nombre comercial o marca"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#0B0D17]/15 focus:border-[#4361EE] outline-hidden transition-colors text-sm text-[#0B0D17] bg-[#F8F9FA]/60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-correo"
                        className="block text-xs font-bold text-[#0B0D17] mb-2 uppercase tracking-wide"
                      >
                        Correo electrónico <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-correo"
                        name="correo"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="nombre@empresa.com"
                        value={formData.correo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#0B0D17]/15 focus:border-[#4361EE] outline-hidden transition-colors text-sm text-[#0B0D17] bg-[#F8F9FA]/60"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-servicio"
                        className="block text-xs font-bold text-[#0B0D17] mb-2 uppercase tracking-wide"
                      >
                        Servicio de interés
                      </label>
                      <select
                        id="contact-servicio"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#0B0D17]/15 focus:border-[#4361EE] outline-hidden transition-colors text-sm text-[#0B0D17] bg-[#F8F9FA]/60 cursor-pointer"
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-descripcion"
                      className="block text-xs font-bold text-[#0B0D17] mb-2 uppercase tracking-wide"
                    >
                      Breve descripción del proyecto <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="contact-descripcion"
                      name="descripcion"
                      required
                      rows={4}
                      placeholder="Cuéntanos qué estás construyendo, tu objetivo actual o el principal reto de tu marca..."
                      value={formData.descripcion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#0B0D17]/15 focus:border-[#4361EE] outline-hidden transition-colors text-sm text-[#0B0D17] bg-[#F8F9FA]/60 resize-y"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="contact-privacidad"
                      name="privacidad"
                      type="checkbox"
                      checked={formData.privacidad}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-[#0B0D17]/30 text-[#4361EE] focus:ring-[#4361EE] cursor-pointer"
                    />
                    <label
                      htmlFor="contact-privacidad"
                      className="text-xs text-[#0B0D17]/70 leading-relaxed cursor-pointer"
                    >
                      Acepto compartir estos datos únicamente para evaluar mi proyecto y recibir
                      respuesta directa de Power Digital por WhatsApp o correo electrónico.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#4361EE] hover:bg-[#3451DE] text-white px-7 py-4 rounded-xl text-sm sm:text-base font-bold transition-colors disabled:opacity-60 cursor-pointer"
                  >
                    <span>
                      {loading ? 'Preparando resumen...' : 'Preparar envío de proyecto'}
                    </span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
