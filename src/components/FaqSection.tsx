import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faq';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-24 bg-[#FFFFFF] border-b border-[#0B0D17]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4361EE] mb-2">
            <span>Preguntas Frecuentes</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/60">Claridad Absoluta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B0D17] tracking-tight mb-3">
            Todo lo que necesitas saber antes de empezar
          </h2>
          <p className="text-sm sm:text-base text-[#0B0D17]/70 font-normal">
            Respuestas directas y transparentes sobre nuestra metodología y forma de trabajo.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#0B0D17]/10 rounded-2xl overflow-hidden transition-all bg-[#F8F9FA]/40 hover:bg-[#F8F9FA]"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-hidden focus:bg-[#4361EE]/5"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B0D17]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-[#0B0D17]/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#4361EE]' : 'text-[#0B0D17]/60'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#0B0D17]/75 leading-relaxed font-normal border-t border-[#0B0D17]/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
