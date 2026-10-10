/**
 * POWER DIGITAL | Centralized Configuration for Objectives & Photographic Assets
 * Definitive 2K Cloudinary assets with f_auto, q_auto and responsive transforms.
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
    rawImageUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791661824/CATEGORY-MY-BRAND-A-creative-brand-dir_kbuwxp.png',
    imageUrl: getCloudinaryUrl('v1791661824/CATEGORY-MY-BRAND-A-creative-brand-dir_kbuwxp.png', 'f_auto,q_auto,w_900'),
    srcSet: getCloudinarySrcSet('v1791661824/CATEGORY-MY-BRAND-A-creative-brand-dir_kbuwxp.png'),
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
    rawImageUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791661823/CATEGORY-MY-PRODUCTIVITY-Photoreal-edi_geb92e.png',
    imageUrl: getCloudinaryUrl('v1791661823/CATEGORY-MY-PRODUCTIVITY-Photoreal-edi_geb92e.png', 'f_auto,q_auto,w_900'),
    srcSet: getCloudinarySrcSet('v1791661823/CATEGORY-MY-PRODUCTIVITY-Photoreal-edi_geb92e.png'),
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
    rawImageUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791661824/CATEGORY-MY-GROWTH-Cinematic-aspiratio_wqpkgf.png',
    imageUrl: getCloudinaryUrl('v1791661824/CATEGORY-MY-GROWTH-Cinematic-aspiratio_wqpkgf.png', 'f_auto,q_auto,w_900'),
    srcSet: getCloudinarySrcSet('v1791661824/CATEGORY-MY-GROWTH-Cinematic-aspiratio_wqpkgf.png'),
    imageAlt: 'Dirección de escala, visión de negocio y crecimiento estratégico',
    objectPosition: 'center center',
    serviceIds: ['sesion-growth', 'plan-growth-partner-power', 'plan-growth-flex-power'],
  },
];
