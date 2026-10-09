import React, { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  Check,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Layers,
  BookOpen,
} from 'lucide-react';
import {
  CATEGORIES,
  MODALITIES,
  SERVICES_CATALOG,
  StrategicCategory,
  ModalityType,
  ServiceItem,
} from '../../data/servicesData';

interface CatalogSectionProps {
  onSelectServiceForProposal: (service: ServiceItem) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  onSelectServiceForProposal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<StrategicCategory | 'todos'>('todos');
  const [selectedModality, setSelectedModality] = useState<ModalityType | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  // Filtered and searched services
  const filteredServices = useMemo(() => {
    return SERVICES_CATALOG.filter((item) => {
      // Category filter
      if (selectedCategory !== 'todos' && item.category !== selectedCategory) {
        return false;
      }
      // Modality filter
      if (selectedModality !== 'todos') {
        if (selectedModality === 'partner') {
          if (item.modality !== 'partner' && item.modality !== 'medida') {
            return false;
          }
        } else if (item.modality !== selectedModality) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.shortDescription.toLowerCase().includes(query);
        const matchFor = item.forWhom.toLowerCase().includes(query);
        const matchIncludes = item.includes.some((inc) => inc.toLowerCase().includes(query));
        if (!matchName && !matchDesc && !matchFor && !matchIncludes) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedModality, searchQuery]);

  const toggleExpandCard = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="catalogo" className="py-20 md:py-28 bg-[#FFFFFF] relative border-t border-[#0B0D17]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4361EE] mb-3">
            <span>Catálogo Completo</span>
            <span aria-hidden="true" className="text-[#DEB660]">·</span>
            <span className="text-[#0B0D17]/50">32+ Soluciones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B0D17] tracking-tight leading-tight mb-4">
            Explora todas nuestras capacidades
          </h2>

          <p className="text-sm sm:text-base text-[#0B0D17]/70 font-normal leading-relaxed text-pretty">
            Organizado en 4 bloques estratégicos: Estrategia, Contenido, IA y Web. Filtra por
            modalidad según tus requerimientos.
          </p>
        </div>

        {/* Filter & Search Bar Container */}
        <div className="bg-[#F8F9FA] rounded-3xl p-6 sm:p-8 border border-[#0B0D17]/8 mb-14 shadow-xs">
          {/* Row 1: Search Input */}
          <div className="relative mb-6">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#0B0D17]/40 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, entregable o palabra clave (ej. video, ads, identidad, landing, ia)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#0B0D17]/10 text-sm text-[#0B0D17] placeholder-[#0B0D17]/40 focus:border-[#4361EE] focus:outline-hidden shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#0B0D17]/40 hover:text-[#0B0D17] cursor-pointer"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Row 2: 4 Strategic Blocks Buttons */}
          <div className="mb-6">
            <span className="text-[11px] font-mono-code uppercase font-bold text-[#0B0D17]/60 block mb-2.5">
              BLOQUE ESTRATÉGICO:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('todos')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'todos'
                    ? 'bg-[#0B0D17] text-white shadow-xs'
                    : 'bg-white text-[#0B0D17]/70 border border-[#0B0D17]/8 hover:text-[#0B0D17]'
                }`}
              >
                Todos los bloques
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#4361EE] text-white shadow-xs'
                      : 'bg-white text-[#0B0D17]/70 border border-[#0B0D17]/8 hover:text-[#0B0D17]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Modality Pills */}
          <div>
            <span className="text-[11px] font-mono-code uppercase font-bold text-[#0B0D17]/60 block mb-2.5">
              MODALIDAD DE TRABAJO:
            </span>
            <div className="flex flex-wrap gap-2">
              {MODALITIES.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModality(mod.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedModality === mod.id
                      ? 'bg-[#DEB660]/20 text-[#9C7924] font-bold border border-[#DEB660]/40'
                      : 'bg-white/80 text-[#0B0D17]/65 border border-[#0B0D17]/6 hover:text-[#0B0D17]'
                  }`}
                >
                  {mod.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Result Count */}
          <div className="mt-5 pt-4 border-t border-[#0B0D17]/8 flex items-center justify-between text-xs text-[#0B0D17]/60">
            <span>
              Mostrando <strong className="text-[#0B0D17]">{filteredServices.length}</strong> de{' '}
              {SERVICES_CATALOG.length} soluciones
            </span>
            {(selectedCategory !== 'todos' || selectedModality !== 'todos' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('todos');
                  setSelectedModality('todos');
                  setSearchQuery('');
                }}
                className="text-xs text-[#4361EE] hover:underline font-semibold cursor-pointer"
              >
                Restablecer todos los filtros
              </button>
            )}
          </div>
        </div>

        {/* Catalog Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="py-16 text-center bg-[#F8F9FA] rounded-3xl border border-[#0B0D17]/8">
            <BookOpen className="w-8 h-8 text-[#0B0D17]/30 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0B0D17]">No se encontraron soluciones</h3>
            <p className="text-xs text-[#0B0D17]/60 mt-1 max-w-sm mx-auto">
              Prueba cambiando la palabra de búsqueda o seleccionando "Todos los bloques".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredServices.map((service) => {
              const isExpanded = expandedCardId === service.id;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-7 border border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono-code uppercase font-bold text-[#4361EE] bg-[#4361EE]/10 px-2.5 py-1 rounded-lg">
                        {service.modalityLabel}
                      </span>
                      {service.badge ? (
                        <span className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#9C7924] bg-[#DEB660]/20 px-2 py-0.5 rounded-md">
                          {service.badge}
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono-code uppercase text-[#0B0D17]/40">
                          {service.categoryLabel}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0B0D17] mb-2 tracking-tight group-hover:text-[#4361EE] transition-colors">
                      {service.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#0B0D17]/75 font-normal leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    {/* Target Audience */}
                    <div className="mb-4 text-xs text-[#0B0D17]/70">
                      <strong className="text-[#0B0D17] font-semibold">Para quién: </strong>
                      <span>{service.forWhom}</span>
                    </div>

                    {/* Problem Solved */}
                    <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#0B0D17]/6 mb-4">
                      <span className="text-[10px] font-mono-code font-bold uppercase text-[#4361EE] block mb-0.5">
                        RESUELVE:
                      </span>
                      <p className="text-xs text-[#0B0D17]/75 leading-relaxed">
                        {service.problemSolved}
                      </p>
                    </div>

                    {/* Expandable deliverables list */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono-code font-bold uppercase text-[#0B0D17]/50 block">
                          QUÉ INCLUYE:
                        </span>
                        <button
                          onClick={() => toggleExpandCard(service.id)}
                          className="text-[11px] text-[#4361EE] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isExpanded ? 'Ver menos' : `Ver todo (${service.includes.length})`}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                        </button>
                      </div>

                      {/* Display first 2 items or all if expanded */}
                      {(isExpanded ? service.includes : service.includes.slice(0, 2)).map(
                        (inc, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#0B0D17]/70 pt-1">
                            <Check className="w-3 h-3 text-[#4361EE] shrink-0 mt-0.5" />
                            <span className="leading-snug">{inc}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-[#0B0D17]/8">
                    <button
                      onClick={() => onSelectServiceForProposal(service)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0B0D17] hover:bg-[#4361EE] active:scale-98 text-white px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer group-hover:bg-[#4361EE]"
                    >
                      <span>Consultar propuesta</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
