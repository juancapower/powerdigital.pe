export type ProjectCategory = 'todos' | 'audiovisual' | 'web' | 'marca';

export type SpecimenKind = 'audiovisual' | 'web-mockup' | 'branding-system' | 'vertical-reels';

export interface ProjectCase {
  id: string;
  client: string;
  title: string;
  category: Exclude<ProjectCategory, 'todos'>;
  categoryLabel: string;
  sector: string;
  summary: string;
  context: string;
  scopeNotes: string[];
  recommendedService: string;
  logoUrl: string | null;
  logoTheme: 'dark' | 'light';
  specimenKind: SpecimenKind;
  mediaStatus: 'Pendiente de archivo real';
  requiredAssets: string[];
  featured?: boolean;
}

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'todos', label: 'Todos los casos' },
  { id: 'audiovisual', label: 'Contenido y Audiovisual' },
  { id: 'web', label: 'Web y Experiencia' },
  { id: 'marca', label: 'Identidad y Marca' },
];

/**
 * Repositorio honesto de portafolio Power Digital.
 * - Incluye únicamente clientes reales registrados en Power Digital.
 * - Ninguna cifra inventada ni renders decorativos simulando capturas reales.
 * - Cada caso especifica con transparencia los archivos de producción requeridos para completar la galería final.
 */
export const SELECTED_PROJECTS: ProjectCase[] = [
  {
    id: 'serna-estate',
    client: 'Serna Estate',
    title: 'Contenido y producción audiovisual para asesoría inmobiliaria y respaldo legal',
    category: 'audiovisual',
    categoryLabel: 'Contenido y Audiovisual',
    sector: 'Sector Legal & Inmobiliario',
    summary:
      'Dirección narrativa y piezas audiovisuales diseñadas para proyectar criterio técnico, orden legal y confianza patrimonial en canales digitales.',
    context:
      'Caso activo con identidad oficial registrada en repositorio. La vitrina muestra el formato de producción audiovisual en espera de incorporar las piezas reales finales de grabación.',
    scopeNotes: [
      'Logotipo oficial verificado en sistema de marca',
      'Guía de formato audiovisual 16:9 / vertical para canales digitales',
      'Material audiovisual final pendiente de carga en repositorio',
    ],
    recommendedService: 'Contenido y producción creativa',
    logoUrl:
      'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717089/SernaEstate_HorizontalLogoTransparent_f2czvn.png',
    logoTheme: 'light',
    specimenKind: 'audiovisual',
    mediaStatus: 'Pendiente de archivo real',
    requiredAssets: [
      'Video reel silencioso (MP4 H.264, máx. 10–15 MB) de producción Serna Estate',
      '2–3 fotogramas reales en alta resolución (16:9) de rodaje o piezas publicadas',
    ],
    featured: true,
  },
  {
    id: 'warmi-kapital',
    client: 'Warmi Kapital',
    title: 'Identidad y presencia digital orientada a solidez y claridad financiera',
    category: 'web',
    categoryLabel: 'Web y Experiencia',
    sector: 'Fintech & Capital',
    summary:
      'Arquitectura de comunicación y presencia digital estructurada para presentar servicios financieros con transparencia visual.',
    context:
      'Caso real con logotipo oficial incorporado. El marco superior reproduce el formato de navegador web en espera de sus capturas reales de producción.',
    scopeNotes: [
      'Logotipo institucional en contraste oscuro verificado',
      'Estructura de navegación y mensaje orientada a claridad financiera',
      'Capturas desktop y mobile pendientes de incorporación',
    ],
    recommendedService: 'Web y experiencia digital',
    logoUrl:
      'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_Empresa_WarmiKapital_zkguh6.png',
    logoTheme: 'dark',
    specimenKind: 'web-mockup',
    mediaStatus: 'Pendiente de archivo real',
    requiredAssets: [
      'Captura real de pantalla completa Desktop (1440×900 PNG/WebP) del sitio Warmi Kapital',
      'Captura real Mobile (390×844) de la vista principal y flujo de contacto',
    ],
  },
  {
    id: 'raiz',
    client: 'RAÍZ',
    title: 'Experiencia web y sistema de marca',
    category: 'web',
    categoryLabel: 'Web y Experiencia',
    sector: 'Marca & Experiencia Web',
    summary:
      'Espacio reservado en galería para presentar el caso real de experiencia web y marca RAÍZ sin recurrir a simulaciones gráficas.',
    context:
      'Caso incorporado por indicación de dirección creativa. No existen archivos multimedia ni logotipo previo de RAÍZ dentro del repositorio actual.',
    scopeNotes: [
      'Espacio editorial preparado en disposición asimétrica web',
      'Sin recursos gráficos falsos ni métricas fabricadas',
      'Requiere carga de logotipo oficial y capturas reales del proyecto',
    ],
    recommendedService: 'Web y experiencia digital',
    logoUrl: null,
    logoTheme: 'light',
    specimenKind: 'web-mockup',
    mediaStatus: 'Pendiente de archivo real',
    requiredAssets: [
      'Logotipo oficial de RAÍZ en SVG o PNG transparente',
      'Capturas reales de la experiencia web publicada (desktop y móvil)',
      'Breve confirmación de alcance real trabajado',
    ],
  },
  {
    id: 'levitas',
    client: 'LEVITAS',
    title: 'Comunicación corporativa y materiales de marca para movilidad B2B',
    category: 'marca',
    categoryLabel: 'Identidad y Marca',
    sector: 'Transporte Corporativo',
    summary:
      'Construcción visual sobria y materiales corporativos alineados con estándares de puntualidad y respaldo empresarial.',
    context:
      'Marca corporativa real con logotipo blanco oficial verificado en Cloudinary y ruta de cliente configurada en el ecosistema.',
    scopeNotes: [
      'Logotipo corporativo LEVITAS verificado',
      'Sistema de contraste alto sobre fondo obsidiana',
      'Piezas impresas/digitales de brandbook pendientes de carga',
    ],
    recommendedService: 'Estrategia y marca',
    logoUrl:
      'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048451/ClientesPowerDigital_Empresa_Levitas_kkhggj.png',
    logoTheme: 'dark',
    specimenKind: 'branding-system',
    mediaStatus: 'Pendiente de archivo real',
    requiredAssets: [
      'Piezas reales de branding LEVITAS (portada de manual o aplicaciones gráficas)',
      'Fotografías o mockups reales de papelería / material comercial corporativo',
    ],
  },
  {
    id: 'hugodam',
    client: 'Hugo Dam',
    title: 'Contenido inmobiliario y sistema de comunicación vertical',
    category: 'audiovisual',
    categoryLabel: 'Contenido y Audiovisual',
    sector: 'Contenido Inmobiliario',
    summary:
      'Estructura de contenido inmobiliario y presencia audiovisual pensada para comunicar criterio y posicionamiento directo.',
    context:
      'Cliente real con logotipo oficial dorado/blanco en repositorio y carpeta de trabajo asignada. Pendiente adjuntar clips y fotografías reales de rodaje.',
    scopeNotes: [
      'Logotipo oficial Hugo Dam Gold/White verificado',
      'Formato vertical 9:16 preparado para piezas inmobiliarias',
      'Clips MP4 y fotografías reales pendientes de publicación',
    ],
    recommendedService: 'Contenido y producción creativa',
    logoUrl:
      'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717370/Logo_GoldWhite_mgcbwv.png',
    logoTheme: 'dark',
    specimenKind: 'vertical-reels',
    mediaStatus: 'Pendiente de archivo real',
    requiredAssets: [
      'Clip vertical silencioso real (MP4 9:16) de propiedad o cápsula Hugo Dam',
      'Fotografía real de producción o retrato en locación inmobiliaria',
    ],
  },
];
