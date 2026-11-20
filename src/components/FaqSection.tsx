import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FAQS_DATA } from '../data/faq';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Preguntas frecuentes"
      className="py-20 sm:py-26 bg-[#FFFFFF] border-t border-[#0B0D17]/10"
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
              Respuestas breves sobre nuestra forma de integrar estrategia, diseño, web e IA.
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
                    className="w-full py-5 sm:py-6 min-h-[52px] flex items-center justify-between text-left gap-6 cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#0B0D17] group-hover:text-[#4361EE] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-8 h-8 flex items-center justify-center shrink-0 border transition-colors ${
                        isOpen
                          ? 'bg-[#0B0D17] border-[#0B0D17] text-white'
                          : 'bg-[#F8F9FA] border-[#0B0D17]/12 text-[#0B0D17]/65 group-hover:border-[#4361EE]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-8 text-sm sm:text-base text-[#0B0D17]/75 leading-relaxed text-left">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
