export interface ClientLogo {
  id: string;
  name: string;
  category: 'empresa' | 'marca_personal' | 'educacion_evento';
  sector: string;
  logoUrl: string;
  theme: 'dark' | 'light'; // 'dark' container for white/light logos, 'light' container for dark logos
}

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: 'eversafe-financial',
    name: 'Eversafe Financial',
    category: 'empresa',
    sector: 'Finanzas & Seguros',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717066/eversafe-financial-logo-horizontal-full-color_iqkolo.png',
    theme: 'light',
  },
  {
    id: 'hugodam',
    name: 'HugoDam',
    category: 'marca_personal',
    sector: 'Marca Personal & High-Ticket',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717370/Logo_GoldWhite_mgcbwv.png',
    theme: 'dark', // Gold & white logo
  },
  {
    id: 'serna-estate',
    name: 'Serna Estate',
    category: 'empresa',
    sector: 'Firma legal inmobiliaria',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717089/SernaEstate_HorizontalLogoTransparent_f2czvn.png',
    theme: 'light',
  },
  {
    id: 'levitas',
    name: 'LEVITAS',
    category: 'empresa',
    sector: 'Transporte corporativo',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048451/ClientesPowerDigital_Empresa_Levitas_kkhggj.png',
    theme: 'dark', // Pure white logo
  },
  {
    id: 'swellpro-peru',
    name: 'SwellPro Perú',
    category: 'empresa',
    sector: 'Tecnología & Drones',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048451/ClientesPowerDigital_Empresa_SwellProPer%C3%BA_yivbes.png',
    theme: 'light',
  },
  {
    id: 'consciente-creativo',
    name: 'Consciente Creativo',
    category: 'empresa',
    sector: 'Consultoría & Creatividad',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048451/ClientesPowerDigital_Empresa_ConscienteCreativo_mdbgjb.png',
    theme: 'dark', // White text logo
  },
  {
    id: 'cr-technologies',
    name: 'CR Technologies',
    category: 'empresa',
    sector: 'Ingeniería & Software',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_Empresa_CRTech_tcotdg.png',
    theme: 'light',
  },
  {
    id: 'warmi-kapital',
    name: 'Warmi Kapital',
    category: 'empresa',
    sector: 'Fintech & Capital',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_Empresa_WarmiKapital_zkguh6.png',
    theme: 'dark', // Pure white logo
  },
  {
    id: 'tunay-wasi',
    name: 'Tunay Wasi Café',
    category: 'empresa',
    sector: 'Gastronomía & Experiencia',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048452/ClientesPowerDigital_Empresa_TunayWasi_elrm3i.png',
    theme: 'light',
  },
  {
    id: 'hostbydam',
    name: 'HostbyDam',
    category: 'empresa',
    sector: 'Hospitalidad & Bienes Raíces',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717242/HbD_LogoHorizontalFondoOscuro_v3kwai.png',
    theme: 'dark', // White horizontal logo
  },
  {
    id: 'innstret-it',
    name: 'INNSTRET IT',
    category: 'empresa',
    sector: 'Servicios de TI',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717165/INNSTRET_HorizontalTransparenteLogo_1_kgporf.png',
    theme: 'light',
  },
  {
    id: 'abira-riegos',
    name: 'Abira Riegos',
    category: 'empresa',
    sector: 'Agrotecnología & Riego',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1775673051/Recurso_1_skrtlj.png',
    theme: 'dark', // Pure white logo
  },
  {
    id: 'carmen-giraldo',
    name: 'Carmen Giraldo Coach',
    category: 'marca_personal',
    sector: 'Coaching Ejecutivo',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_MarcaPersonal_CarmenGiraldo_lmsnky.png',
    theme: 'light',
  },
  {
    id: 'desafio-ecoaventura',
    name: 'Desafío Ecoaventura',
    category: 'empresa',
    sector: 'Deporte de aventura',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048452/ClientesPowerDigital_Empresa_DesafioEcoaventura_d8re8t.png',
    theme: 'dark', // Pure white logo
  },
  {
    id: 'grace-ramirez',
    name: 'Grace Ramírez',
    category: 'marca_personal',
    sector: 'Marca Personal & Mentoring',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_MarcaPersonal_GraceRamirez_i5fjzi.png',
    theme: 'light',
  },
  {
    id: 'heydy-coach',
    name: 'Heydy Coach',
    category: 'marca_personal',
    sector: 'Coaching Transpersonal',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790716944/HeydyCoach_Logo_qm4wyn.png',
    theme: 'dark', // Very light cream/white logo
  },
  {
    id: 'betoyjennyfit',
    name: 'BetoyJennyFit',
    category: 'marca_personal',
    sector: 'Fitness & Salud Integral',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1790717198/LogoGreen_lzre42.png',
    theme: 'light',
  },
  {
    id: 'elizabeth-laurente',
    name: 'Elizabeth Laurente Coach',
    category: 'marca_personal',
    sector: 'Desarrollo Humano',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1775672941/Recurso_2_dy6yzg.png',
    theme: 'dark', // Pure white logo
  },
  {
    id: 'juanca-power',
    name: 'JuanCa Power',
    category: 'marca_personal',
    sector: 'Coaching & Mentalidad',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783016358/JuanCaPower_LogoPrinicipal_voixje.png',
    theme: 'light',
  },
  {
    id: 'trascendiendo-duelo',
    name: 'Full Day Trascendiendo el Duelo',
    category: 'educacion_evento',
    sector: 'Eventos & Transformación',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1775669958/Recurso_62_wmsbfr.png',
    theme: 'dark', // White typography
  },
  {
    id: 'jardin-pestalozzi',
    name: 'Jardín de Niños Pestalozzi',
    category: 'educacion_evento',
    sector: 'Educación & Formación',
    logoUrl: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1775673023/LogoPestalozziIE251_a5haq9.png',
    theme: 'light',
  },
];
