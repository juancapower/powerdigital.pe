import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faq';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Preguntas frecuentes"
      className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-[#0B0D17]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Claridad antes de empezar
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0D17] mb-3">
              Preguntas frecuentes
            </h2>
            <p className="text-sm text-[#0B0D17]/65 leading-relaxed">
              Respuestas directas sobre cómo integramos estrategia, creatividad, desarrollo web e
              inteligencia artificial.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#0B0D17]/10 border-t border-b border-[#0B0D17]/10">
            {FAQS_DATA.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id}>
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left gap-6 cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#0B0D17] group-hover:text-[#4361EE] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#4361EE] text-white' : 'bg-[#F8F9FA] text-[#0B0D17]/60'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm sm:text-base text-[#0B0D17]/75 leading-relaxed text-left">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
