export interface MethodStep {
  step: string;
  name: string;
  summary: string;
  description: string;
  focus: string;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    step: '01',
    name: 'Claridad',
    summary: 'Diagnóstico profundo y comprensión humana',
    description:
      'Antes de proponer herramientas o anuncios, analizamos a fondo tu modelo, la psicología de tu cliente ideal, tu diferenciador real y el punto exacto donde te encuentras.',
    focus: 'Entendimiento del negocio y del cliente',
  },
  {
    step: '02',
    name: 'Estrategia',
    summary: 'Plan de crecimiento y arquitectura de canales',
    description:
      'Definimos la ruta crítica: qué canales activar, qué propuesta de valor proyectar, qué mensaje persuasivo transmitir y qué recursos priorizar para evitar la dispersión.',
    focus: 'Ruta clara sin improvisación',
  },
  {
    step: '03',
    name: 'Sistema',
    summary: 'Infraestructura, IA y activos digitales',
    description:
      'Construimos los pilares técnicos: tu web o landing page de conversión, flujos automáticos de seguimiento, herramientas de IA y piezas de contenido de alto estándar visual.',
    focus: 'Ecosistema digital conectado y robusto',
  },
  {
    step: '04',
    name: 'Acción',
    summary: 'Ejecución coordinada y lanzamiento',
    description:
      'Activamos las campañas de adquisición (Meta Ads / TikTok Ads), publicamos la narrativa de marca y ponemos en marcha los mecanismos de captación y nutrición.',
    focus: 'Presencia activa y atracción de leads',
  },
  {
    step: '05',
    name: 'Crecimiento',
    summary: 'Acompañamiento, optimización y escala',
    description:
      'Como tu Growth Partner, evaluamos el desempeño continuo, refinamos los puntos de fricción y expandimos los canales que generan resultados reales y sostenibles.',
    focus: 'Consistencia y escala a largo plazo',
  },
];
