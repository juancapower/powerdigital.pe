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
  catalogCategory: 'estrategia' | 'contenido' | 'web' | 'ia';
  spanClass: string;
  variant: 'light' | 'contrast' | 'accent';
}

export const SERVICES_DATA: ServiceBlock[] = [
  {
    id: 'estrategia-marca',
    number: '01',
    title: 'Estrategia y marca',
    subtitle: 'Identidad visual, posicionamiento y dirección',
    tagline: 'Claridad antes de ejecutar',
    description:
      'Definimos concepto, tono verbal e identidad visual para que tu marca se reconozca con coherencia y autoridad desde el primer contacto.',
    items: [
      'Posicionamiento y propuesta de valor',
      'Identidad visual y sistema gráfico',
      'Narrativa verbal y arquitectura de mensaje',
    ],
    growthImpact: 'Base sólida y diferenciación clara frente al mercado',
    badge: 'Concepto & Identidad',
    catalogCategory: 'estrategia',
    spanClass: 'lg:col-span-7',
    variant: 'light',
  },
  {
    id: 'contenido-creativo',
    number: '02',
    title: 'Contenido y producción creativa',
    subtitle: 'Diseño, redes y audiovisual con IA',
    tagline: 'Piezas con intención comercial',
    description:
      'Diseñamos sistemas de contenido, guiones y producción audiovisual —incluyendo formatos potenciados con IA— alineados a tu estrategia.',
    items: [
      'Diseño editorial para canales digitales',
      'Guionización, edición y formato vertical',
      'Videos asistidos con flujos de IA generativa',
    ],
    growthImpact: 'Consistencia visual y atención cualificada',
    badge: 'Comunicación & Audiovisual',
    catalogCategory: 'contenido',
    spanClass: 'lg:col-span-5',
    variant: 'light',
  },
  {
    id: 'web-experiencia',
    number: '03',
    title: 'Web y experiencia digital',
    subtitle: 'Landing pages, sitios y activos digitales',
    tagline: 'Infraestructura que convierte',
    description:
      'Construimos sitios corporativos, landing pages y catálogos interactivos optimizados en velocidad, diseño y claridad comercial.',
    items: [
      'Sitios corporativos y landing pages',
      'Catálogos interactivos y flujos de contacto',
      'Diseño responsive, SEO técnico y rendimiento',
    ],
    growthImpact: 'Activos digitales propios orientados a conversión',
    badge: 'Plataforma & Conversión',
    catalogCategory: 'web',
    spanClass: 'lg:col-span-5',
    variant: 'light',
  },
  {
    id: 'ia-automatizacion',
    number: '04',
    title: 'Inteligencia artificial y automatización',
    subtitle: 'Flujos inteligentes e integración operativa',
    tagline: 'Tecnología aplicada con criterio humano',
    description:
      'Integramos herramientas de IA, avatares y automatizaciones prácticas que agilizan tu operación y mejoran el seguimiento comercial.',
    items: [
      'Avatares digitales e IA aplicada a contenido',
      'Automatización de procesos y seguimiento',
      'Integración práctica sin complejidad innecesaria',
    ],
    growthImpact: 'Más capacidad de ejecución con menor fricción',
    badge: 'Sistemas & IA',
    catalogCategory: 'ia',
    spanClass: 'lg:col-span-7',
    variant: 'contrast',
  },
  {
    id: 'growth-acompanamiento',
    number: '05',
    title: 'Growth y acompañamiento estratégico',
    subtitle: 'Planeamiento, optimización y dirección continua',
    tagline: 'Evolución constante junto a tu marca',
    description:
      'Acompañamos la toma de decisiones, campañas de adquisición y evolución digital de tu negocio según tu etapa y objetivos.',
    items: [
      'Diagnóstico estratégico y hoja de ruta',
      'Campañas en Meta Ads y TikTok Ads',
      'Iteración y acompañamiento como Growth Partner',
    ],
    growthImpact: 'Decisiones ordenadas y crecimiento sostenible',
    badge: 'Dirección & Escala',
    catalogCategory: 'estrategia',
    spanClass: 'lg:col-span-12',
    variant: 'accent',
  },
];
