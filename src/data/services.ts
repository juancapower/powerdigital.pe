export interface ServiceBlock {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  items: string[];
  growthImpact: string;
  badge: string;
}

export const SERVICES_DATA: ServiceBlock[] = [
  {
    id: 'estrategia-growth',
    number: '01',
    title: 'Estrategia y Growth',
    subtitle: 'Arquitectura de negocio y dirección clara',
    tagline: 'De la improvisación a un roadmap estructurado de crecimiento',
    description:
      'Analizamos tu contexto comercial, tu público y tus canales para diseñar un plan de expansión con cimientos sólidos y metas realistas.',
    items: [
      'Diagnóstico integral de presencia digital y ecosistema',
      'Estrategia de crecimiento y posicionamiento en el mercado',
      'Claridad de marca y propuesta de valor diferenciada',
      'Roadmap digital paso a paso con hitos alcanzables',
      'Acompañamiento estratégico continuo como Growth Partner',
    ],
    growthImpact: 'Dirección clara y foco en acciones con retorno real',
    badge: 'Cimientos & Dirección',
  },
  {
    id: 'contenido-marca',
    number: '02',
    title: 'Contenido y Marca',
    subtitle: 'Narrativa visual, reputación y conexión humana',
    tagline: 'Construye autoridad genuina y comunica con propósito',
    description:
      'Unimos comprensión humana (PNL) y diseño de alto nivel para crear mensajes que cautivan, transmiten valor y generan confianza duradera.',
    items: [
      'Identidad visual moderna y diseño de piezas estratégicas',
      'Estructura de guiones y copywriting persuasivo con PNL',
      'Creación de contenido de alto valor para redes sociales',
      'Edición y postproducción de video dinámico y profesional',
      'Branding con propósito alineado a tu visión de negocio',
    ],
    growthImpact: 'Autoridad inmediata y vínculo genuino con tu audiencia',
    badge: 'Identidad & Autoridad',
  },
  {
    id: 'ia-automatizacion',
    number: '03',
    title: 'IA y Automatización',
    subtitle: 'Eficiencia operativa y tecnología aplicada',
    tagline: 'Multiplica tu capacidad de ejecución sin multiplicar tus costos',
    description:
      'Implementamos soluciones prácticas de Inteligencia Artificial para acelerar la creación de contenidos, sincronizar procesos y atender leads 24/7.',
    items: [
      'Avatares e IA generativa aplicada directamente a tu negocio',
      'Producción de videos acelerada con flujos de IA',
      'Automatización de procesos operativos y flujos de comunicación',
      'Optimización de tiempos de respuesta y seguimiento a prospectos',
      'Apoyo tecnológico para escalar operaciones sin fricción',
    ],
    growthImpact: 'Velocidad de ejecución y sincronía entre ventas y atención',
    badge: 'Escala & Tecnología',
  },
  {
    id: 'web-adquisicion',
    number: '04',
    title: 'Web y Adquisición',
    subtitle: 'Infraestructura de conversión y atracción cualificada',
    tagline: 'Convierte visitas en clientes con activos digitales de alto impacto',
    description:
      'Desarrollamos sitios web y landing pages rápidas y persuasivas, conectadas con campañas publicitarias optimizadas para captación constante.',
    items: [
      'Landing pages y sitios web modernos orientados a conversión',
      'Optimización técnica de presencia y experiencia de usuario',
      'Campañas de tráfico y adquisición en Meta Ads y TikTok Ads',
      'Estructuras completas de captación y nutrición de leads',
      'Medición de eventos clave para decisiones basadas en comportamiento',
    ],
    growthImpact: 'Flujo constante de prospectos listos para tu propuesta',
    badge: 'Conversión & Clientes',
  },
];
