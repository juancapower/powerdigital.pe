export interface MethodStep {
  step: string;
  name: string;
  summary: string;
  description: string;
  focus: string;
  deliverableCue: string;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    step: '01',
    name: 'Descubrir',
    summary: 'Comprender negocio, audiencia, desafío y oportunidades.',
    description:
      'Antes de diseñar una pieza o activar una pauta, entendemos tu modelo comercial, quién toma las decisiones de compra y dónde están los verdaderos cuellos de botella.',
    focus: 'Diagnóstico y claridad estratégica',
    deliverableCue: 'Auditoría digital · Mapa de oportunidad',
  },
  {
    step: '02',
    name: 'Diseñar',
    summary: 'Construir una estrategia y una dirección creativa.',
    description:
      'Traducimos los hallazgos en posicionamiento, arquitectura visual, narrativa persuasiva y un plan de acción priorizado según la etapa real de tu marca.',
    focus: 'Concepto, sistema e identidad',
    deliverableCue: 'Concepto de marca · Hoja de ruta',
  },
  {
    step: '03',
    name: 'Activar',
    summary: 'Producir, desarrollar e implementar.',
    description:
      'Llevamos la estrategia a la realidad: experiencias web, contenido de alto estándar, flujos automatizados con inteligencia artificial y canales de captación.',
    focus: 'Ejecución técnica y creativa',
    deliverableCue: 'Web · Contenido · IA y automatización',
  },
  {
    step: '04',
    name: 'Evolucionar',
    summary: 'Analizar, ajustar y mejorar cuando el alcance lo contemple.',
    description:
      'Evaluamos qué responde mejor en el mercado real, refinamos mensajes o activos digitales y acompañamos los siguientes pasos con criterio estratégico.',
    focus: 'Iteración y crecimiento continuo',
    deliverableCue: 'Optimización · Acompañamiento Growth',
  },
];
