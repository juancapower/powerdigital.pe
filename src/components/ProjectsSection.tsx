import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Film, Globe, Layers, Smartphone, X, FolderOpen } from 'lucide-react';
import {
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectCase,
  SELECTED_PROJECTS,
} from '../data/projects';

interface ProjectsSectionProps {
  onSelectService?: (serviceName: string) => void;
}

/**
 * Editorial Visual Specimen — Renders honest client logo + discipline architecture
 * without faking real deliverables with stock images or generic 3D renders.
 */
const ProjectSpecimenFrame: React.FC<{ project: ProjectCase; featured?: boolean }> = ({
  project,
  featured = false,
}) => {
  const isDark = project.logoTheme === 'dark' || project.specimenKind === 'audiovisual' || project.specimenKind === 'vertical-reels';

  return (
    <div
      className={`relative w-full h-full overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
        featured ? 'aspect-16/9 lg:aspect-16/10' : 'aspect-16/11'
      } ${
        isDark
          ? 'bg-[#0B0D17] text-[#F8F9FA]'
          : 'bg-[#FFFFFF] text-[#0B0D17] border border-[#0B0D17]/12'
      }`}
    >
      {/* Subtle architectural reticle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)'
            : 'linear-gradient(to right, rgba(11,13,23,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,13,23,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top Specimen Technical Bar */}
      <div
        className={`relative z-10 flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b text-[10.5px] font-mono-code uppercase tracking-[0.16em] ${
          isDark
            ? 'border-white/10 text-white/60 bg-[#0B0D17]/80'
            : 'border-[#0B0D17]/10 text-[#0B0D17]/60 bg-[#F8F9FA]/90'
        }`}
      >
        <span className="inline-flex items-center gap-2 truncate">
          {project.specimenKind === 'audiovisual' && <Film className="w-3.5 h-3.5 text-[#DEB660]" aria-hidden="true" />}
          {project.specimenKind === 'web-mockup' && <Globe className="w-3.5 h-3.5 text-[#4361EE]" aria-hidden="true" />}
          {project.specimenKind === 'branding-system' && <Layers className="w-3.5 h-3.5 text-[#DEB660]" aria-hidden="true" />}
          {project.specimenKind === 'vertical-reels' && <Smartphone className="w-3.5 h-3.5 text-[#DEB660]" aria-hidden="true" />}
          <span>
            {project.specimenKind === 'audiovisual' && 'Formato Audiovisual · 16:9 Reel'}
            {project.specimenKind === 'web-mockup' && 'Arquitectura Web · Desktop & Mobile'}
            {project.specimenKind === 'branding-system' && 'Sistema de Marca · Identidad'}
            {project.specimenKind === 'vertical-reels' && 'Formato Vertical · 9:16 Inmobiliario'}
          </span>
        </span>
        <span className={isDark ? 'text-[#DEB660]' : 'text-[#8A6B20]'}>
          {project.mediaStatus}
        </span>
      </div>

      {/* Discipline-Specific Architectural Frame Body */}
      <div className="relative z-10 h-[calc(100%-41px)] flex flex-col items-center justify-center p-6 sm:p-10">
        {project.specimenKind === 'web-mockup' ? (
          /* Browser Mockup Frame for Web Cases (Warmi Kapital / RAÍZ) */
          <div
            className={`w-full max-w-md border shadow-sm overflow-hidden ${
              isDark
                ? 'bg-[#131624] border-white/15'
                : 'bg-[#F8F9FA] border-[#0B0D17]/15'
            }`}
          >
            <div
              className={`px-3.5 py-2 border-b flex items-center justify-between text-[10px] font-mono-code ${
                isDark ? 'border-white/10 text-white/45' : 'border-[#0B0D17]/10 text-[#0B0D17]/45'
              }`}
            >
              <span>powerdigital · web showcase</span>
              <span>captura real por cargar</span>
            </div>
            <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px]">
              {project.logoUrl ? (
                <img
                  src={project.logoUrl}
                  alt={`Logotipo oficial ${project.client}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-10 sm:h-12 w-auto max-w-[190px] object-contain mb-4"
                />
              ) : (
                <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B0D17] mb-3">
                  {project.client}
                </p>
              )}
              <p
                className={`text-[11px] font-mono-code uppercase tracking-wider ${
                  isDark ? 'text-white/55' : 'text-[#0B0D17]/55'
                }`}
              >
                Espacio reservado para captura real de pantalla
              </p>
            </div>
          </div>
        ) : project.specimenKind === 'vertical-reels' ? (
          /* Dual Vertical 9:16 Audiovisual Frames for Hugo Dam */
          <div className="flex items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
            <div className="w-28 sm:w-32 aspect-9/14 border border-white/15 bg-[#131624] flex flex-col items-center justify-center p-3 text-center">
              {project.logoUrl && (
                <img
                  src={project.logoUrl}
                  alt={`Logotipo oficial ${project.client}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-7 w-auto object-contain mb-2"
                />
              )}
              <span className="font-mono-code text-[9px] uppercase tracking-wider text-[#DEB660]">
                Clip 01 · 9:16
              </span>
            </div>
            <div className="w-28 sm:w-32 aspect-9/14 border border-[#DEB660]/30 bg-[#131624] translate-y-3 flex flex-col items-center justify-center p-3 text-center">
              <span className="font-mono-code text-[9px] uppercase tracking-wider text-white/75 mb-1">
                Reel MP4
              </span>
              <span className="text-[10px] text-white/45">Por incorporar</span>
            </div>
          </div>
        ) : (
          /* Audiovisual Reel Stage (Serna Estate) or Branding Grid (LEVITAS) */
          <div className="flex flex-col items-center justify-center text-center max-w-lg">
            {project.logoUrl ? (
              <div
                className={`px-6 py-4 mb-5 ${
                  project.logoTheme === 'light'
                    ? 'bg-[#FFFFFF] border border-[#0B0D17]/10'
                    : 'bg-transparent'
                }`}
              >
                <img
                  src={project.logoUrl}
                  alt={`Logotipo oficial ${project.client}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className={`${featured ? 'h-12 sm:h-16' : 'h-10 sm:h-12'} w-auto max-w-[240px] object-contain`}
                />
              </div>
            ) : (
              <p className="font-display text-4xl font-extrabold mb-4">{project.client}</p>
            )}

            <div className="flex items-center gap-3 text-[11px] font-mono-code uppercase tracking-[0.18em] text-white/60">
              <span className="inline-block w-6 h-[1px] bg-[#DEB660]" aria-hidden="true" />
              <span>
                {project.specimenKind === 'audiovisual'
                  ? 'Espacio para reel audiovisual real'
                  : 'Espacio para piezas reales de marca'}
              </span>
              <span className="inline-block w-6 h-[1px] bg-[#DEB660]" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectService }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);
  const [showAssetsRegistry, setShowAssetsRegistry] = useState(false);

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
        {/* Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-14">
          <div className="lg:col-span-7 text-left">
            <p className="font-mono-code text-[11px] uppercase tracking-[0.22em] text-[#4361EE] font-medium mb-3">
              Portafolio de Clientes
            </p>
            <h2 className="text-editorial-title font-bold text-[#0B0D17]">
              Ideas que toman forma.
            </h2>
          </div>

          <div className="lg:col-span-5 text-left lg:text-right">
            <p className="text-sm sm:text-base text-[#0B0D17]/70 leading-relaxed max-w-md lg:ml-auto">
              Marcas reales en construcción, producción audiovisual, identidad y presencia web. Sin
              material ficticio ni métricas inventadas.
            </p>
          </div>
        </div>

        {/* Disciplines Tab Filter + Assets Inventory Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-12 border-b border-[#0B0D17]/12">
          <div
            role="tablist"
            aria-label="Filtrar portafolio por especialidad"
            className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar"
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
                  className={`relative pb-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-[#0B0D17]'
                      : 'text-[#0B0D17]/50 hover:text-[#0B0D17]'
                  }`}
                >
                  <span>{cat.label}</span>
                  {isSelected && (
                    <motion.span
                      layoutId="pd-portfolio-tab-line"
                      aria-hidden="true"
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#4361EE]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setShowAssetsRegistry((prev) => !prev)}
            className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-[#8A6B20] hover:text-[#0B0D17] whitespace-nowrap shrink-0 transition-colors cursor-pointer"
          >
            <FolderOpen className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {showAssetsRegistry ? 'Ocultar lista de recursos' : 'Recursos reales por adjuntar'}
            </span>
          </button>
        </div>

        {/* Transparent Missing-Assets Checklist */}
        <AnimatePresence>
          {showAssetsRegistry && (
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#0B0D17]/12 text-left">
                <p className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#4361EE] mb-2">
                  Inventario exacto de activos reales requeridos
                </p>
                <p className="text-sm text-[#0B0D17]/75 mb-6 max-w-2xl">
                  Para sustituir los marcos de especificación por material final de cliente sin
                  usar imágenes genéricas, carga estos archivos:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SELECTED_PROJECTS.map((item) => (
                    <div key={`req-${item.id}`} className="border-t border-[#0B0D17]/10 pt-3">
                      <p className="text-sm font-bold text-[#0B0D17] mb-1.5">{item.client}</p>
                      <ul className="space-y-1 text-xs text-[#0B0D17]/70">
                        {item.requiredAssets.map((asset) => (
                          <li key={asset}>· {asset}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Open Editorial Gallery Composition (No repetitive rounded boxes) */}
        <div className="space-y-16 sm:space-y-24">
          {/* 1. Dominant Full-Width Lead Case */}
          {featured && (
            <motion.article
              key={`featured-${featured.id}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
            >
              <motion.button
                type="button"
                onClick={() => setSelectedProject(featured)}
                initial={prefersReducedMotion ? false : { clipPath: 'inset(0 0 14% 0)' }}
                whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 w-full text-left cursor-pointer overflow-hidden"
                aria-label={`Ver ficha del proyecto ${featured.client}`}
              >
                <ProjectSpecimenFrame project={featured} featured />
              </motion.button>

              <div className="lg:col-span-5 text-left pb-2">
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-[#0B0D17]/12">
                  <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#4361EE]">
                    01 · {featured.client}
                  </span>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#0B0D17]/55">
                    {featured.categoryLabel}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B0D17] leading-[1.15] mb-4 group-hover:text-[#4361EE] transition-colors">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featured)}
                    className="text-left cursor-pointer"
                  >
                    {featured.title}
                  </button>
                </h3>

                <p className="text-sm sm:text-base text-[#0B0D17]/72 leading-relaxed mb-6">
                  {featured.summary}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedProject(featured)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B0D17] hover:text-[#4361EE] transition-colors cursor-pointer"
                >
                  <span>Abrir ficha y activos requeridos</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          )}

          {/* 2. Asymmetric Rhythmic Editorial Grid (7/5 then 5/7) */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-16">
              {rest.map((project, idx) => {
                // Alternating asymmetric ratios across rows
                const pattern = idx % 4;
                const colClass =
                  rest.length === 1
                    ? 'lg:col-span-12'
                    : pattern === 0 || pattern === 3
                      ? 'lg:col-span-7'
                      : 'lg:col-span-5';

                return (
                  <motion.article
                    key={project.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.58,
                      delay: (idx % 2) * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`${colClass} group flex flex-col justify-between text-left`}
                  >
                    <div>
                      <motion.button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        initial={prefersReducedMotion ? false : { clipPath: 'inset(0 0 12% 0)' }}
                        whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full overflow-hidden mb-5 cursor-pointer block"
                        aria-label={`Ver ficha del caso ${project.client}`}
                      >
                        <ProjectSpecimenFrame project={project} />
                      </motion.button>

                      <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b border-[#0B0D17]/10">
                        <span className="font-mono-code text-[11px] uppercase tracking-[0.18em] text-[#4361EE]">
                          0{idx + 2} · {project.client}
                        </span>
                        <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#0B0D17]/50">
                          {project.sector}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#0B0D17] leading-snug mb-2.5 group-hover:text-[#4361EE] transition-colors">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="text-left cursor-pointer"
                        >
                          {project.title}
                        </button>
                      </h3>

                      <p className="text-sm text-[#0B0D17]/70 leading-relaxed mb-4">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B0D17] hover:text-[#4361EE] transition-colors cursor-pointer"
                      >
                        <span>Ver ficha técnica</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Transparent Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0D17]/80 backdrop-blur-xs"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FFFFFF] text-[#0B0D17] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#0B0D17]/15"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <ProjectSpecimenFrame project={selectedProject} />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Cerrar ficha de proyecto"
                  className="absolute top-3 right-3 z-20 w-10 h-10 bg-[#0B0D17]/85 hover:bg-[#4361EE] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-10 text-left">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-[#0B0D17]/10">
                  <span className="font-mono-code text-xs uppercase tracking-[0.2em] text-[#4361EE]">
                    {selectedProject.client} · {selectedProject.sector}
                  </span>
                  <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#8A6B20]">
                    {selectedProject.categoryLabel}
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
                    Estado verificado en repositorio
                  </h4>
                  <ul className="space-y-2 text-sm text-[#0B0D17]/80">
                    {selectedProject.scopeNotes.map((note) => (
                      <li key={note}>— {note}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 sm:p-5 bg-[#F8F9FA] border border-[#0B0D17]/10 mb-8">
                  <h4 className="font-mono-code text-[11px] uppercase tracking-wider text-[#8A6B20] mb-2">
                    Archivos reales necesarios para publicar caso completo
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#0B0D17]/75">
                    {selectedProject.requiredAssets.map((req) => (
                      <li key={req}>· {req}</li>
                    ))}
                  </ul>
                </div>

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
                    className="inline-flex items-center justify-center gap-2 bg-[#0B0D17] hover:bg-[#4361EE] text-white px-6 py-3.5 text-sm font-bold transition-colors cursor-pointer"
                  >
                    <span>Conversar sobre un proyecto similar</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center px-5 py-3.5 border border-[#0B0D17]/15 text-sm font-semibold text-[#0B0D17] hover:border-[#0B0D17] transition-colors cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
