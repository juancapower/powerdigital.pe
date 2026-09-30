import React, { useState } from 'react';
import { Mail, Instagram, CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    contacto: '',
    mensaje: initialService ? `Hola, me interesa el servicio de ${initialService}. ` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) {
      setErrorMsg('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!formData.contacto.trim()) {
      setErrorMsg('Por favor ingresa tu WhatsApp o correo electrónico.');
      return;
    }
    if (!formData.mensaje.trim()) {
      setErrorMsg('Por favor cuéntanos brevemente en qué podemos ayudarte.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hola Power Digital, soy ${formData.nombre}${
        formData.empresa ? ` de ${formData.empresa}` : ''
      }. Mi contacto es ${formData.contacto}. ${formData.mensaje}`
    );
    return `https://wa.me/51920690260?text=${text}`;
  };

  return (
    <section id="contacto" className="py-24 md:py-36 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Left Column: Direct channels and reassurance */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4361EE] mb-4">
              <span>Sesión de Diagnóstico</span>
              <span aria-hidden="true" className="text-[#DEB660]">·</span>
              <span className="text-[#0B0D17]/55">Conversemos</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-[1.12] mb-6">
              Conversemos sobre el siguiente paso de tu negocio
            </h2>

            <p className="text-base sm:text-lg text-[#0B0D17]/75 font-normal leading-relaxed mb-10 text-pretty">
              Cuéntanos en qué etapa se encuentra hoy tu proyecto. Analizaremos tu presencia con una
              mirada estratégica, tecnológica y humana para proponerte una ruta clara de crecimiento.
            </p>

            {/* Direct Cards */}
            <div className="space-y-4 mb-10">
              <a
                href="https://wa.me/51920690260?text=Hola%20Power%20Digital,%20quiero%20hacer%20crecer%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#0B0D17]/10 hover:border-[#25D366] transition-all duration-200 shadow-2xs hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-[#0B0D17]/55 font-semibold block uppercase tracking-wide">
                    WhatsApp Directo
                  </span>
                  <span className="text-base font-bold text-[#0B0D17] group-hover:text-[#25D366] transition-colors">
                    +51 920 690 260
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@powerdigital.pe"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#0B0D17]/10 hover:border-[#4361EE] transition-all duration-200 shadow-2xs hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4361EE]/10 text-[#4361EE] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-[#0B0D17]/55 font-semibold block uppercase tracking-wide">
                    Correo Corporativo
                  </span>
                  <span className="text-base font-bold text-[#0B0D17] group-hover:text-[#4361EE] transition-colors">
                    info@powerdigital.pe
                  </span>
                </div>
              </a>

              <a
                href="https://instagram.com/powerdigital.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#0B0D17]/10 hover:border-[#DEB660] transition-all duration-200 shadow-2xs hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DEB660]/15 text-[#DEB660] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6 text-[#b9933f]" />
                </div>
                <div className="text-left">
                  <span className="text-xs text-[#0B0D17]/55 font-semibold block uppercase tracking-wide">
                    Redes & Contenido
                  </span>
                  <span className="text-base font-bold text-[#0B0D17] group-hover:text-[#b9933f] transition-colors">
                    @powerdigital.ai
                  </span>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-white/80 border border-[#0B0D17]/10 text-xs text-[#0B0D17]/70 leading-relaxed">
              <span className="font-bold text-[#0B0D17] block mb-1">Acompañamiento personalizado:</span>
              Revisamos cada solicitud directamente para asegurarnos de que podamos aportar un valor sustancial a tu caso.
            </div>
          </div>

          {/* Right Column: Clean, high-converting form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0B0D17]/10 shadow-xl relative">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#4361EE]/10 text-[#4361EE] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B0D17] mb-3">
                    ¡Gracias por escribirnos, {formData.nombre}!
                  </h3>
                  <p className="text-sm sm:text-base text-[#0B0D17]/75 max-w-md mx-auto mb-8 leading-relaxed">
                    Hemos recibido tus datos con éxito. Para agilizar la conversación y coordinar de
                    inmediato, también puedes continuar el diálogo directamente por WhatsApp.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white px-7 py-4 rounded-xl text-sm font-bold transition-all shadow-md w-full sm:w-auto justify-center"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Abrir conversación en WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ nombre: '', empresa: '', contacto: '', mensaje: '' });
                      }}
                      className="text-xs font-semibold text-[#0B0D17]/60 hover:text-[#0B0D17] py-2 cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B0D17] mb-1.5">
                      Solicita tu sesión de diagnóstico
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0B0D17]/60">
                      Completa los siguientes campos para evaluar el potencial de expansión de tu marca.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold text-[#0B0D17] mb-2 uppercase tracking-wide">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0B0D17]/15 focus:border-[#4361EE] focus:ring-2 focus:ring-[#4361EE]/20 outline-hidden transition-all text-sm text-[#0B0D17] placeholder:text-[#0B0D17]/35 bg-[#F8F9FA]/40"
                    />
                  </div>

                  {/* Empresa o marca [opcional] */}
                  <div>
                    <label htmlFor="empresa" className="block text-xs font-bold text-[#0B0D17] mb-2 uppercase tracking-wide">
                      Empresa o marca <span className="text-[#0B0D17]/40 font-normal lowercase">[opcional]</span>
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      placeholder="Ej. Mi Marca Personal o Nombre Comercial"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0B0D17]/15 focus:border-[#4361EE] focus:ring-2 focus:ring-[#4361EE]/20 outline-hidden transition-all text-sm text-[#0B0D17] placeholder:text-[#0B0D17]/35 bg-[#F8F9FA]/40"
                    />
                  </div>

                  {/* WhatsApp o correo */}
                  <div>
                    <label htmlFor="contacto" className="block text-xs font-bold text-[#0B0D17] mb-2 uppercase tracking-wide">
                      WhatsApp o correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contacto"
                      name="contacto"
                      required
                      placeholder="Ej. +51 987 654 321 o carlos@empresa.com"
                      value={formData.contacto}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0B0D17]/15 focus:border-[#4361EE] focus:ring-2 focus:ring-[#4361EE]/20 outline-hidden transition-all text-sm text-[#0B0D17] placeholder:text-[#0B0D17]/35 bg-[#F8F9FA]/40"
                    />
                  </div>

                  {/* ¿En qué podemos ayudarte? */}
                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-bold text-[#0B0D17] mb-2 uppercase tracking-wide">
                      ¿En qué podemos ayudarte? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      placeholder="Cuéntanos brevemente qué buscas lograr o qué cuello de botella afronta hoy tu negocio..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#0B0D17]/15 focus:border-[#4361EE] focus:ring-2 focus:ring-[#4361EE]/20 outline-hidden transition-all text-sm text-[#0B0D17] placeholder:text-[#0B0D17]/35 bg-[#F8F9FA]/40 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#4361EE] hover:bg-[#3451DE] active:scale-[0.99] text-white px-7 py-4 rounded-xl text-base font-bold transition-all shadow-md hover:shadow-xl disabled:opacity-70 cursor-pointer"
                  >
                    {loading ? (
                      <span>Procesando...</span>
                    ) : (
                      <>
                        <span>Quiero hacer crecer mi negocio</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#0B0D17]/50 pt-1">
                    Tus datos se manejan con estricta confidencialidad. Sin spam ni llamadas invasivas.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
