import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, X, Check } from 'lucide-react';
import {
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectCase,
  SELECTED_PROJECTS,
} from '../data/projects';

interface ProjectsSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectService }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);

  const filteredProjects =
    activeCategory === 'todos'
      ? SELECTED_PROJECTS
      : SELECTED_PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  const featured = filteredProjects[0];
  const rest = filteredProjects.slice(1);

  return (
    <section
      id="proyectos"
      className="py-24 sm:py-32 bg-[#F8F9FA] text-[#0B0D17] border-t border-[#0B0D17]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Portafolio Seleccionado
            </p>
            <h2 className="text-editorial-title font-bold text-[#0B0D17]">
              Ideas que toman forma.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <p className="text-base sm:text-lg text-[#0B0D17]/70 leading-relaxed max-w-md lg:ml-auto">
              Proyectos donde la estrategia se convierte en experiencias, contenido y marcas.
            </p>
          </div>
        </div>

        {/* Minimal Underlined Filter Controls (Zero-Pill Rule) */}
        <div
          role="tablist"
          aria-label="Filtrar proyectos por disciplina"
          className="flex flex-wrap items-center gap-6 sm:gap-8 pb-6 mb-12 border-b border-[#0B0D17]/10"
        >
          {PROJECT_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative pb-2 text-sm font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? 'text-[#0B0D17]'
                    : 'text-[#0B0D17]/50 hover:text-[#0B0D17]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 bottom-0 h-[2px] bg-[#4361EE] transition-transform duration-200 origin-left ${
                    isSelected ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Showcase Composition */}
        <div className="space-y-12 sm:space-y-16">
          {/* 1. Full-Width Featured Editorial Spread */}
          {featured && (
            <motion.article
              key={`featured-${featured.id}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFFFF] border border-[#0B0D17]/10 rounded-3xl p-5 sm:p-8 lg:p-10 transition-colors hover:border-[#0B0D17]/20"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(featured)}
                className="lg:col-span-7 relative aspect-16/10 rounded-2xl overflow-hidden bg-[#0B0D17]/5 cursor-pointer text-left block w-full"
                aria-label={`Ver detalle del caso ${featured.client}`}
              >
                <img
                  src={featured.visualUrl}
                  alt={featured.visualAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-[#0B0D17]/75 via-[#0B0D17]/30 to-transparent flex items-end justify-between gap-4">
                  <span className="font-mono-code text-[10.5px] uppercase tracking-wider text-white/85">
                    {featured.visualNote}
                  </span>
                </div>
              </button>

              <div className="lg:col-span-5 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg ${
                        featured.logoTheme === 'dark' ? 'bg-[#0B0D17]' : 'bg-[#F8F9FA]'
                      }`}
                    >
                      <img
                        src={featured.logoUrl}
                        alt={featured.client}
                        className="h-6 sm:h-7 w-auto max-w-[140px] object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#0B0D17]/55">
                      {featured.categoryLabel}
                    </span>
                  </div>

                  <p className="font-mono-code text-[11px] uppercase tracking-wider text-[#4361EE] mb-2">
                    {featured.client} · {featured.sector}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B0D17] leading-[1.15] mb-4">
                    {featured.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#0B0D17]/70 leading-relaxed mb-6">
                    {featured.summary}
                  </p>

                  <ul className="space-y-2 border-t border-[#0B0D17]/10 pt-5 mb-8">
                    {featured.deliverables.map((item) => (
                      <li
                        key={item}
                        className="text-xs sm:text-sm text-[#0B0D17]/80 flex items-start gap-2.5"
                      >
                        <span className="text-[#4361EE] font-bold" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featured)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0B0D17] hover:text-[#4361EE] transition-colors cursor-pointer"
                  >
                    <span>Explorar ficha del proyecto</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          )}

          {/* 2. Asymmetric Two-Column Editorial Pairs */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
              {rest.map((project, idx) => {
                // Alternate asymmetric 7/5 & 5/7 widths across rows on large screens
                const isWide = idx % 3 === 0 || idx === rest.length - 1 && rest.length % 2 === 1;
                const colClass =
                  rest.length === 1
                    ? 'lg:col-span-12'
                    : idx === 0
                      ? 'lg:col-span-7'
                      : idx === 1
                        ? 'lg:col-span-5'
                        : isWide
                          ? 'lg:col-span-7'
                          : 'lg:col-span-5';

                return (
                  <motion.article
                    key={project.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`${colClass} group flex flex-col justify-between bg-[#FFFFFF] border border-[#0B0D17]/10 rounded-3xl overflow-hidden transition-colors hover:border-[#0B0D17]/20`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-16/10 w-full overflow-hidden bg-[#0B0D17] cursor-pointer text-left block"
                      aria-label={`Ver detalle del proyecto ${project.client}`}
                    >
                      <img
                        src={project.visualUrl}
                        alt={project.visualAlt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-x-0 bottom-0 px-5 py-4 bg-gradient-to-t from-[#0B0D17]/80 via-[#0B0D17]/25 to-transparent flex items-center justify-between gap-4">
                        <span className="font-mono-code text-[10px] uppercase tracking-wider text-white/85">
                          {project.visualNote}
                        </span>
                      </div>
                    </button>

                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-5">
                          <div
                            className={`inline-flex items-center px-2.5 py-1.5 rounded-lg ${
                              project.logoTheme === 'dark' ? 'bg-[#0B0D17]' : 'bg-[#F8F9FA]'
                            }`}
                          >
                            <img
                              src={project.logoUrl}
                              alt={project.client}
                              className="h-5 sm:h-6 w-auto max-w-[130px] object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#0B0D17]/55">
                            {project.categoryLabel}
                          </span>
                        </div>

                        <p className="font-mono-code text-[11px] uppercase tracking-wider text-[#4361EE] mb-1.5">
                          {project.client} · {project.sector}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0B0D17] leading-snug mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#0B0D17]/70 leading-relaxed mb-6">
                          {project.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#0B0D17]/8 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B0D17] group-hover:text-[#4361EE] transition-colors cursor-pointer"
                        >
                          <span>Ver ficha del caso</span>
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Case Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0D17]/75 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="bg-[#FFFFFF] text-[#0B0D17] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#0B0D17]/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/9 w-full bg-[#0B0D17]">
              <img
                src={selectedProject.visualUrl}
                alt={selectedProject.visualAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar detalle de proyecto"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0B0D17]/80 hover:bg-[#0B0D17] text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10 text-left">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <div
                  className={`inline-flex items-center px-3 py-1.5 rounded-lg ${
                    selectedProject.logoTheme === 'dark' ? 'bg-[#0B0D17]' : 'bg-[#F8F9FA]'
                  }`}
                >
                  <img
                    src={selectedProject.logoUrl}
                    alt={selectedProject.client}
                    className="h-6 w-auto max-w-[140px] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#4361EE]">
                  {selectedProject.categoryLabel} · {selectedProject.sector}
                </span>
              </div>

              <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-sm sm:text-base text-[#0B0D17]/75 leading-relaxed mb-6">
                {selectedProject.context}
              </p>

              <div className="border-t border-[#0B0D17]/10 pt-5 mb-6">
                <h4 className="font-mono-code text-[11px] uppercase tracking-wider text-[#0B0D17]/55 mb-3">
                  Alcance trabajado
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#0B0D17]/85">
                      <Check className="w-4 h-4 text-[#4361EE] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-[#0B0D17]/55 mb-6 font-mono-code">
                {selectedProject.visualNote}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const service = selectedProject.recommendedService;
                    setSelectedProject(null);
                    if (onSelectService) {
                      onSelectService(service);
                    } else {
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3451DE] text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-colors cursor-pointer"
                >
                  <span>Conversar sobre un proyecto similar</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-[#0B0D17]/15 text-sm font-semibold text-[#0B0D17] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
