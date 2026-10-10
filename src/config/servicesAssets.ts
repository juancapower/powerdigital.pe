/**
 * POWER DIGITAL | Centralized Visual Assets Configuration for /servicios
 * Five Higgsfield-generated premium assets hosted on Cloudinary
 * with resilient CSS gradient fallbacks.
 */

export interface ServiceAsset {
  url: string;
  alt: string;
  fallbackGradient: string;
  aspectRatio: string;
}

export const SERVICES_ASSETS = {
  hero: {
    url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791589455/HERO_IMAGE_URL_lircxy.png',
    alt: 'Power Digital - Crecimiento estratégico impulsado por creatividad y tecnología',
    fallbackGradient: 'radial-gradient(circle at 60% 40%, rgba(67, 97, 238, 0.18) 0%, rgba(222, 182, 96, 0.12) 40%, rgba(248, 249, 250, 0) 70%)',
    aspectRatio: '16/9',
  },
  strategy: {
    url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791589455/STRATEGY_IMAGE_URL_khtlwt.png',
    alt: 'Universo Estrategia y Growth - Crecimiento con dirección',
    fallbackGradient: 'linear-gradient(135deg, #0B0D17 0%, #151928 60%, #1E2746 100%)',
    aspectRatio: '4/3',
  },
  content: {
    url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791589455/CONTENT_IMAGE_URL_jpm3wx.png',
    alt: 'Universo Contenido y Marca - Ideas que conectan',
    fallbackGradient: 'linear-gradient(135deg, #1C1917 0%, #292524 50%, #44403C 100%)',
    aspectRatio: '4/3',
  },
  ai: {
    url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791589455/AI_IMAGE_URL_djt990.png',
    alt: 'Universo IA y Automatización - Tecnología que potencia',
    fallbackGradient: 'linear-gradient(135deg, #0B132B 0%, #1C2541 60%, #3A506B 100%)',
    aspectRatio: '4/3',
  },
  web: {
    url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/v1791589455/WEB_IMAGE_URL_duq4xk.png',
    alt: 'Universo Web y Adquisición - Experiencias que convierten',
    fallbackGradient: 'linear-gradient(135deg, #0C1222 0%, #13203D 60%, #1E3A8A 100%)',
    aspectRatio: '4/3',
  },
} as const;
