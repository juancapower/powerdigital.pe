/**
 * POWER DIGITAL | Centralized Configuration for Objectives & Photographic Assets
 * Optimized luminous assets with responsive transforms and resilient fallbacks.
 */

export const GOOGLE_CALENDAR_AGENDA_URL = 'https://calendar.app.google/tU5gjpgEZKMTGP1h9';

export interface ObjectiveDefinition {
  id: string;
  title: string;
  titleLower: string;
  headline: string;
  subtitle: string;
  rawImageUrl: string;
  imageUrl: string;
  srcSet: string;
  fallbackImageUrl: string;
  imageAlt: string;
  objectPosition?: string;
  serviceIds: string[];
}

/**
 * Utility to generate optimized Cloudinary URLs preserving the exact public ID
 */
const getCloudinaryUrl = (publicPath: string, transform: string = 'f_auto,q_auto,w_900'): string => {
  return `https://res.cloudinary.com/ddn6qh7ve/image/upload/${transform}/${publicPath}`;
};

const getCloudinarySrcSet = (publicPath: string): string => {
  return [
    `${getCloudinaryUrl(publicPath, 'f_auto,q_auto,w_500')} 500w`,
    `${getCloudinaryUrl(publicPath, 'f_auto,q_auto,w_900')} 900w`,
    `${getCloudinaryUrl(publicPath, 'f_auto,q_auto,w_1200')} 1200w`,
  ].join(', ');
};

export const OBJECTIVES_CONFIG: ObjectiveDefinition[] = [
  {
    id: 'mi-marca',
    title: 'Mi marca',
    titleLower: 'tu marca',
    headline: 'Vamos a potenciar tu marca.',
    subtitle: 'Estas soluciones pueden ayudarte a comenzar.',
    rawImageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80',
    srcSet: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=500&q=80 500w',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=80 900w',
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80 1200w',
    ].join(', '),
    fallbackImageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dirección de arte y diseño de identidad de marca profesional',
    objectPosition: 'center center',
    serviceIds: ['identidad-power', 'identidad-visual-base', 'pack-marca-personal-power'],
  },
  {
    id: 'mi-contenido',
    title: 'Mi contenido',
    titleLower: 'tu contenido',
    headline: 'Vamos a potenciar tu contenido.',
    subtitle: 'Estas soluciones pueden ayudarte a comenzar.',
    rawImageUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791661822/CATEGORY-MY-CONTENT-Energetic-behind-t_funqoq.png',
    imageUrl: getCloudinaryUrl('v1791661822/CATEGORY-MY-CONTENT-Energetic-behind-t_funqoq.png', 'f_auto,q_auto,w_900'),
    srcSet: getCloudinarySrcSet('v1791661822/CATEGORY-MY-CONTENT-Energetic-behind-t_funqoq.png'),
    fallbackImageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Producción audiovisual y creación de contenido en estudio',
    objectPosition: 'center center',
    serviceIds: ['pack-contenido-power', 'pack-3-ediciones', 'carrusel-power'],
  },
  {
    id: 'mi-web',
    title: 'Mi web',
    titleLower: 'tu web',
    headline: 'Vamos a potenciar tu web.',
    subtitle: 'Estas soluciones pueden ayudarte a comenzar.',
    rawImageUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791661822/CATEGORY-MY-WEB-Captivating-close-thre_ho7iiu.png',
    imageUrl: getCloudinaryUrl('v1791661822/CATEGORY-MY-WEB-Captivating-close-thre_ho7iiu.png', 'f_auto,q_auto,w_900'),
    srcSet: getCloudinarySrcSet('v1791661822/CATEGORY-MY-WEB-Captivating-close-thre_ho7iiu.png'),
    fallbackImageUrl: 'https://images.unsplash.com/photo-1581291518655-9523c932deb8?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Diseño y desarrollo web interactivo de alto impacto',
    objectPosition: 'center center',
    serviceIds: ['landing-power', 'web-presencia-power', 'catalogo-web-power'],
  },
  {
    id: 'mis-clientes',
    title: 'Mis clientes',
    titleLower: 'tus clientes',
    headline: 'Vamos a potenciar tus clientes.',
    subtitle: 'Estas soluciones pueden ayudarte a comenzar.',
    rawImageUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791661822/CATEGORY-MY-CLIENTS-An-authentic-strik_v0wxnv.png',
    imageUrl: getCloudinaryUrl('v1791661822/CATEGORY-MY-CLIENTS-An-authentic-strik_v0wxnv.png', 'f_auto,q_auto,w_900'),
    srcSet: getCloudinarySrcSet('v1791661822/CATEGORY-MY-CLIENTS-An-authentic-strik_v0wxnv.png'),
    fallbackImageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Captación de clientes, relación comercial y conversión',
    objectPosition: 'center center',
    serviceIds: ['growth-performance', 'meta-ads-launch', 'meta-ads-setup'],
  },
  {
    id: 'mi-productividad',
    title: 'Mi productividad',
    titleLower: 'tu productividad',
    headline: 'Vamos a potenciar tu productividad.',
    subtitle: 'Estas soluciones pueden ayudarte a comenzar.',
    rawImageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    srcSet: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80 500w',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80 900w',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80 1200w',
    ].join(', '),
    fallbackImageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Productividad digital, flujos de trabajo inteligentes y automatización con IA',
    objectPosition: 'center center',
    serviceIds: ['avatar-visual-ia', 'video-ia-60', 'video-mixto-power-60'],
  },
  {
    id: 'mi-crecimiento',
    title: 'Mi crecimiento',
    titleLower: 'tu crecimiento',
    headline: 'Vamos a potenciar tu crecimiento.',
    subtitle: 'Estas soluciones pueden ayudarte a comenzar.',
    rawImageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80',
    srcSet: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80 500w',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80 900w',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80 1200w',
    ].join(', '),
    fallbackImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Dirección de escala, visión de negocio y crecimiento estratégico',
    objectPosition: 'center center',
    serviceIds: ['sesion-growth', 'plan-growth-partner-power', 'plan-growth-flex-power'],
  },
];
