export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'growth-partner-vs-agencia',
    question: '¿Qué diferencia a un Growth Partner de una agencia tradicional?',
    answer:
      'Una agencia tradicional suele vender entregables aislados (un paquete de posts, un logo o un anuncio suelto) sin preocuparse por la salud del negocio. Como Growth Partner, nos involucramos en la estrategia general: integramos ingeniería de sistemas, psicología humana (PNL), automatización e inteligencia artificial con un objetivo común: hacer crecer tu negocio de forma sostenible y medible.',
  },
  {
    id: 'ia-aplicada',
    question: '¿Cómo aplican la Inteligencia Artificial en mi negocio?',
    answer:
      'No usamos IA por simple novedad, sino como palanca operativa: aceleramos la producción de videos y contenidos con avatares o flujos inteligentes, creamos automatizaciones para respuestas y seguimiento de prospectos, y optimizamos la recopilación de datos para que tomes decisiones más rápidas sin sobrecargar a tu equipo.',
  },
  {
    id: 'tipo-negocios',
    question: '¿A quiénes ayuda Power Digital?',
    answer:
      'Acompañamos a emprendedores, marcas personales (coaches, consultores, referentes de industria) y empresas en expansión que buscan profesionalizar su presencia digital, construir activos de conversión sólidos y apoyarse en tecnología para escalar.',
  },
  {
    id: 'sesion-diagnostico',
    question: '¿Cómo es el primer paso para trabajar juntos?',
    answer:
      'Iniciamos con una conversación estratégica de diagnóstico donde evaluamos el estado actual de tu negocio, tus canales actuales, tus principales cuellos de botella y tus metas de crecimiento. A partir de ahí, definimos el roadmap más adecuado para tu etapa.',
  },
  {
    id: 'soporte-whatsapp',
    question: '¿Tienen soporte o atención directa?',
    answer:
      'Sí, mantenemos un canal de comunicación directo y ágil vía WhatsApp (+51 920 690 260) y correo electrónico (info@powerdigital.pe). Creemos en el acompañamiento humano cercano y en relaciones comerciales transparentes.',
  },
];
