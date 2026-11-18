import projectArchImg from '../assets/images/project_architecture_showcase_1794964563986.jpg';
import bentoStrategyImg from '../assets/images/bento_strategy_editorial_1794964564191.jpg';
import bentoAiImg from '../assets/images/bento_ai_automation_1794964564478.jpg';
import methodCraftImg from '../assets/images/method_editorial_craft_1794964565021.jpg';
import { SERVICES_ASSETS } from '../config/servicesAssets';

export type ProjectCategory = 'todos' | 'marca' | 'web' | 'contenido-ia';

export interface ProjectCase {
  id: string;
  client: string;
  title: string;
  category: Exclude<ProjectCategory, 'todos'>;
  categoryLabel: string;
  sector: string;
  summary: string;
  context: string;
  deliverables: string[];
  recommendedService: string;
  logoUrl: string;
  logoTheme: 'dark' | 'light';
  visualUrl: string;
  visualAlt: string;
  visualType: 'conceptual' | 'editorial';
  visualNote: string;
  featured?: boolean;
  aspect?: 'wide' | 'portrait' | 'square';
}

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'todos', label: 'Todos los casos' },
  { id: 'marca', label: 'Estrategia y Marca' },
  { id: 'web', label: 'Web y Experiencia' },
  { id: 'contenido-ia', label: 'Contenido e IA' },
];

/**
 * Editable portfolio repository.
 * Note: Uses exclusively real verified Power Digital client brands from src/data/clients.ts.
 * Where final mockup/screenshot photography is pending client sign-off or asset upload,
 * curated editorial placeholder visuals are explicitly tagged via `visualType: 'conceptual'`.
 */
export const SELECTED_PROJECTS: ProjectCase[] = [
  {
    id: 'serna-estate',
    client: 'Serna Estate',
    title: 'Dirección de marca y presencia digital para firma legal inmobiliaria',
    category: 'marca',
    categoryLabel: 'Estrategia y Marca',
    sector: 'Sector Legal & Inmobiliario',
    summary:
      'Ordenamiento de propuesta de valor, identidad visual sobria y activos de comunicación orientados a transmitir respaldo jurídico y confianza patrimonial.',
    context:
      'Una firma especializada en asesoría legal inmobiliaria necesitaba proyectar autoridad técnica y cercanía ejecutiva en cada punto de contacto digital.',
    deliverables: [
      'Claridad de posicionamiento y tono verbal',
      'Sistema gráfico y piezas de autoridad para canales digitales',
      'Estructura comercial orientada a reuniones consultivas',
    ],
    recommendedService: 'Estrategia y marca',
    logoUrl:
      'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717089/SernaEstate_HorizontalLogoTransparent_f2czvn.png',
    logoTheme: 'light',
    visualUrl: projectArchImg,
    visualAlt: 'Composición arquitectónica de marca para Serna Estate',
    visualType: 'conceptual',
    visualNote: 'Representación visual conceptual · Material de caso real en curaduría',
    featured: true,
    aspect: 'wide',
  },
  {
    id: 'warmi-kapital',
    client: 'Warmi Kapital',
    title: 'Narrativa financiera y ecosistema digital de inversión con propósito',
    category: 'web',
    categoryLabel: 'Web y Experiencia',
    sector: 'Fintech & Capital',
    summary:
      'Conceptualización estratégica y arquitectura digital diseñada para comunicar solidez financiera sin perder calidez ni accesibilidad.',
    context:
      'El desafío central consistió en traducir conceptos financieros complejos en una experiencia comprensible, clara y confiable para nuevas audiencias.',
    deliverables: [
      'Arquitectura de información y narrativa comercial',
      'Diseño de experiencia web y captación estructurada',
      'Lineamientos visuales consistentes entre marca y producto',
    ],
    recommendedService: 'Web y experiencia digital',
    logoUrl:
      'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_Empresa_WarmiKapital_zkguh6.png',
    logoTheme: 'dark',
    visualUrl: SERVICES_ASSETS.web.url,
    visualAlt: 'Exploración de experiencia web para Warmi Kapital',
    visualType: 'conceptual',
    visualNote: 'Presentación visual conceptual · Capturas finales pendientes de publicación',
    aspect: 'square',
  },
  {
    id: 'hugodam',
    client: 'HugoDam',
    title: 'Posicionamiento high-ticket y sistema de contenido de autoridad',
    category: 'contenido-ia',
    categoryLabel: 'Contenido e IA',
    sector: 'Marca Personal & Dirección',
    summary:
      'Alineación de narrativa personal, diseño visual refinado y producción audiovisual asistida por flujos modernos de edición e IA.',
    context:
      'Para sostener una oferta consultiva de alto valor, la presencia digital debía reflejar criterio, orden y consistencia en cada pieza publicada.',
    deliverables: [
      'Dirección creativa de identidad personal',
      'Estructura de guiones y formatos audiovisuales',
      'Activos digitales coordinados para conversión directa',
    ],
    recommendedService: 'Contenido y producción creativa',
    logoUrl:
      'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717370/Logo_GoldWhite_mgcbwv.png',
    logoTheme: 'dark',
    visualUrl: bentoAiImg,
    visualAlt: 'Composición luminosa de tecnología y dirección para HugoDam',
    visualType: 'conceptual',
    visualNote: 'Presentación visual conceptual · Material audiovisual en archivo interno',
    aspect: 'square',
  },
  {
    id: 'levitas',
    client: 'LEVITAS',
    title: 'Identidad corporativa y presencia digital para movilidad empresarial',
    category: 'marca',
    categoryLabel: 'Estrategia y Marca',
    sector: 'Transporte Corporativo',
    summary:
      'Modernización visual y estructuración de comunicación B2B enfocada en puntualidad, seguridad operativa y estándar ejecutivo.',
    context:
      'El servicio requería diferenciarse del transporte convencional mediante una marca sobria, reconocible y alineada a clientes corporativos.',
    deliverables: [
      'Refinamiento visual y lenguaje corporativo',
      'Piezas de presentación comercial y presencia digital',
      'Enfoque comunicacional centrado en confianza operativa',
    ],
    recommendedService: 'Estrategia y marca',
    logoUrl:
      'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048451/ClientesPowerDigital_Empresa_Levitas_kkhggj.png',
    logoTheme: 'dark',
    visualUrl: bentoStrategyImg,
    visualAlt: 'Estudio visual arquitectónico para marca corporativa LEVITAS',
    visualType: 'conceptual',
    visualNote: 'Presentación visual conceptual · Mockups reales por incorporar',
    aspect: 'wide',
  },
  {
    id: 'eversafe-financial',
    client: 'Eversafe Financial',
    title: 'Acompañamiento digital y estructura de captación consultiva',
    category: 'web',
    categoryLabel: 'Web y Experiencia',
    sector: 'Finanzas & Seguros',
    summary:
      'Diseño de piezas claras y canales de contacto orientados a guiar al cliente hacia conversaciones asesoradas sin fricción.',
    context:
      'En servicios financieros, la claridad del mensaje y la transparencia de los pasos iniciales determinan la calidad de cada consulta recibida.',
    deliverables: [
      'Claridad de oferta y mensajería de confianza',
      'Activos digitales preparados para campañas de captación',
      'Flujo directo hacia sesiones de evaluación',
    ],
    recommendedService: 'Growth y acompañamiento estratégico',
    logoUrl:
      'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717066/eversafe-financial-logo-horizontal-full-color_iqkolo.png',
    logoTheme: 'light',
    visualUrl: methodCraftImg,
    visualAlt: 'Sistema estructurado de crecimiento para Eversafe Financial',
    visualType: 'conceptual',
    visualNote: 'Presentación visual conceptual · Material de caso en preparación',
    aspect: 'square',
  },
];
