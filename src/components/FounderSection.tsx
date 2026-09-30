import React from 'react';
import { Terminal, Brain, Sparkles, HeartHandshake } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const FounderSection: React.FC = () => {
  return (
    <section id="fundador" className="py-24 md:py-36 bg-[#FFFFFF] border-t border-[#0B0D17]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Photo Column - Museum-grade framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Clean hairline offset borders */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 w-full h-full border border-[#4361EE]/20 rounded-3xl -z-10"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-full h-full border border-[#DEB660]/30 rounded-3xl -z-10"
              />

              <div className="relative rounded-3xl overflow-hidden bg-[#F8F9FA] shadow-xl border border-[#0B0D17]/10 aspect-4/5 sm:aspect-square lg:aspect-4/5">
                <img
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717890/hf_20260929_213557_0943d7bf-70be-4d3e-b17b-b958a667eb1f_dvlmap.png"
                  alt="Juan Carlos Cabrera - Fundador de Power Digital"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Quiet caption badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-[#0B0D17]/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-base font-bold block text-white">Juan Carlos Cabrera</span>
                    <span className="text-xs text-[#DEB660] font-medium">Fundador · Power Digital</span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#DEB660]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#4361EE] mb-4">
              <span>Liderazgo & Visión</span>
              <span aria-hidden="true" className="text-[#DEB660]">·</span>
              <span className="text-[#0B0D17]/55">Conoce al Fundador</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-[1.12] mb-6">
              Ingeniería, psicología humana y propósito en un solo lugar
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#0B0D17]/80 leading-relaxed font-normal">
              <p>
                <strong>Juan Carlos Cabrera</strong> fundó Power Digital con una convicción clara:{' '}
                <em>las estrategias de crecimiento más efectivas son aquellas donde la precisión técnica se encuentra con la genuina comprensión de las personas.</em>
              </p>
              <p className="text-sm sm:text-base text-[#0B0D17]/75">
                Con formación en <strong>Ingeniería de Sistemas</strong> y un recorrido enfocado en{' '}
                <strong>estrategia digital</strong>, <strong>marketing de resultados</strong> e{' '}
                <strong>inteligencia artificial aplicada</strong>, Juan Carlos integra herramientas
                de <strong>Programación Neurolingüística (PNL)</strong> para entender qué mueve a los
                clientes a tomar decisiones de compra conscientes.
              </p>
              <p className="text-sm sm:text-base text-[#0B0D17]/75">
                En lugar de promover fórmulas genéricas o métricas vacías, Juan Carlos acompaña a
                emprendedores y empresas a construir sistemas comerciales reales, sostenibles y con
                un sentido claro de propósito.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#0B0D17]/10">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#4361EE]/10 text-[#4361EE] flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B0D17]">Ingeniería de Sistemas</h3>
                  <p className="text-xs text-[#0B0D17]/70 mt-0.5">Arquitectura de procesos, integración y bases técnicas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#DEB660]/15 text-[#DEB660] flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-[#b9933f]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B0D17]">PNL & Factor Humano</h3>
                  <p className="text-xs text-[#0B0D17]/70 mt-0.5">Empatía, comunicación persuasiva y psicología de ventas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#4361EE]/10 text-[#4361EE] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B0D17]">IA Aplicada a Negocios</h3>
                  <p className="text-xs text-[#0B0D17]/70 mt-0.5">Automatizaciones, avatares y flujos de alta eficiencia.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#4361EE]/10 text-[#4361EE] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0B0D17]">Visión con Propósito</h3>
                  <p className="text-xs text-[#0B0D17]/70 mt-0.5">Crecimiento ético, relaciones de confianza y valor genuino.</p>
                </div>
              </div>
            </div>

            {/* Founder quote banner */}
            <div className="mt-8 p-6 rounded-2xl bg-[#F8F9FA] border-l-4 border-[#4361EE] text-[#0B0D17]/85 text-sm sm:text-base italic leading-relaxed">
              “El crecimiento no ocurre por casualidad ni por modas pasajeras. Ocurre cuando unimos
              arquitectura técnica con entendimiento humano y ejecución constante.”
              <span className="block mt-2 font-bold not-italic text-xs text-[#0B0D17]">
                — Juan Carlos Cabrera, Fundador de Power Digital
              </span>
            </div>

            {/* Direct WhatsApp link to Juan Carlos */}
            <div className="mt-8">
              <a
                href="https://wa.me/51920690260?text=Hola%20Juan%20Carlos,%20quiero%20conversar%20sobre%20mi%20negocio%20con%20Power%20Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-bold text-[#0B0D17] hover:text-[#4361EE] transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <span>Conversar directamente con Juan Carlos por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
