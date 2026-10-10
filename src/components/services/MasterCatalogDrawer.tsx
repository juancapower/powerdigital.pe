import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Search,
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Filter,
  CheckCircle2,
} from 'lucide-react';
import {
  CATEGORIES,
  MODALITIES,
  SERVICES_CATALOG,
  StrategicCategory,
  ModalityType,
  ServiceItem,
} from '../../data/servicesData';

interface MasterCatalogDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceForProposal: (service: ServiceItem) => void;
}

export const MasterCatalogDrawer: React.FC<MasterCatalogDrawerProps> = ({
  isOpen,
  onClose,
  onSelectServiceForProposal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<StrategicCategory | 'todos'>('todos');
  const [selectedModality, setSelectedModality] = useState<ModalityType | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

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

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#0B0D17]/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer (Desktop: full height slide from right; Mobile: full screen) */}
      <motion.aside
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl bg-white h-full shadow-2xl flex flex-col z-10 text-left overflow-hidden"
        aria-label="Catálogo Maestro Completo"
      >
        {/* Drawer Header */}
        <div className="p-6 sm:p-8 border-b border-[#0B0D17]/10 bg-[#F8F9FA] flex items-center justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#4361EE] mb-1">
              <BookOpen className="w-3.5 h-3.5 text-[#DEB660]" />
              <span>Catálogo Maestro Bajo Demanda</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B0D17] tracking-tight">
              Todas las Soluciones Power Digital
            </h3>
            <p className="text-xs text-[#0B0D17]/65 mt-0.5">
              32+ servicios organizados por categoría y modalidad sin precios públicos.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl text-[#0B0D17]/50 hover:text-[#0B0D17] hover:bg-white border border-transparent hover:border-[#0B0D17]/10 transition-colors cursor-pointer"
            aria-label="Cerrar catálogo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls (Sticky below header) */}
        <div className="p-5 sm:p-6 border-b border-[#0B0D17]/8 bg-white shrink-0 space-y-4 shadow-xs">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0B0D17]/40 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, entregable o palabra clave..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#0B0D17]/10 text-xs sm:text-sm text-[#0B0D17] placeholder-[#0B0D17]/40 focus:border-[#4361EE] focus:bg-white focus:outline-hidden transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#0B0D17]/40 hover:text-[#0B0D17] cursor-pointer"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'todos'
                  ? 'bg-[#0B0D17] text-white shadow-xs'
                  : 'bg-[#F8F9FA] text-[#0B0D17]/70 hover:text-[#0B0D17]'
              }`}
            >
              Todos los bloques
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#4361EE] text-white shadow-xs'
                    : 'bg-[#F8F9FA] text-[#0B0D17]/70 hover:text-[#0B0D17]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Modality Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs pt-1">
            <span className="text-[11px] font-mono-code uppercase font-bold text-[#0B0D17]/40 mr-1 shrink-0">
              Modalidad:
            </span>
            {MODALITIES.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setSelectedModality(mod.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] transition-all whitespace-nowrap cursor-pointer ${
                  selectedModality === mod.id
                    ? 'bg-[#DEB660]/20 text-[#9C7924] font-bold border border-[#DEB660]/40'
                    : 'text-[#0B0D17]/60 hover:text-[#0B0D17] hover:bg-[#F8F9FA]'
                }`}
              >
                {mod.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Results List */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 bg-[#F8F9FA]">
          <div className="flex items-center justify-between text-xs text-[#0B0D17]/60 pb-2">
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
                Restablecer filtros
              </button>
            )}
          </div>

          {filteredServices.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border border-[#0B0D17]/8 p-8">
              <BookOpen className="w-8 h-8 text-[#0B0D17]/30 mx-auto mb-2" />
              <p className="text-sm font-bold text-[#0B0D17]">No se encontraron soluciones</p>
              <p className="text-xs text-[#0B0D17]/60 mt-1">
                Prueba ajustando la búsqueda o seleccionando "Todos los bloques".
              </p>
            </div>
          ) : (
            filteredServices.map((service) => {
              const isExpanded = expandedId === service.id;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-5 border border-[#0B0D17]/8 shadow-xs hover:border-[#4361EE]/30 transition-all text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-mono-code uppercase font-bold text-[#4361EE] bg-[#4361EE]/10 px-2 py-0.5 rounded-md">
                          {service.modalityLabel}
                        </span>
                        <span className="text-[10px] font-mono-code uppercase text-[#0B0D17]/40">
                          {service.categoryLabel}
                        </span>
                        {service.badge && (
                          <span className="text-[10px] font-mono-code font-bold uppercase text-[#9C7924] bg-[#DEB660]/20 px-1.5 py-0.5 rounded-md">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-[#0B0D17] tracking-tight">
                        {service.name}
                      </h4>

                      <p className="text-xs text-[#0B0D17]/75 mt-1 leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectServiceForProposal(service);
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#0B0D17] hover:bg-[#4361EE] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer mt-1"
                    >
                      <span>Consultar</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Expand / Collapse Details Trigger */}
                  <div className="mt-3 pt-3 border-t border-[#0B0D17]/6 flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="text-xs font-semibold text-[#4361EE] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Ocultar detalles' : 'Ver qué incluye y para quién es'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <span className="text-[11px] text-[#0B0D17]/45 font-mono-code">
                      {service.includes.length} entregables
                    </span>
                  </div>

                  {/* Expanded Drawer Area */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-[#0B0D17]/6 space-y-3 text-xs"
                    >
                      <div>
                        <strong className="text-[#0B0D17] font-semibold block mb-0.5">Para quién es:</strong>
                        <p className="text-[#0B0D17]/70">{service.forWhom}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#0B0D17]/6">
                        <strong className="text-[#4361EE] font-mono-code uppercase text-[10px] block mb-0.5">
                          PROBLEMA QUE RESUELVE:
                        </strong>
                        <p className="text-[#0B0D17]/75">{service.problemSolved}</p>
                      </div>

                      <div>
                        <strong className="text-[#0B0D17] font-semibold block mb-1.5">Qué incluye:</strong>
                        <ul className="space-y-1">
                          {service.includes.map((inc, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[#0B0D17]/75">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#4361EE] shrink-0 mt-0.5" />
                              <span className="leading-snug">{inc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </motion.aside>
    </div>
  );
};
