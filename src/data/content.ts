/**
 * Fuente única de datos del micrositio "Inversión Tsalach 2026".
 * Edita este archivo para cambiar cifras, textos y comparables sin tocar componentes.
 * Todas las cifras son de un modelo PRELIMINAR sujeto a validación (due diligence).
 */

// ── Configuración editable ────────────────────────────────────────────────
export const WHATSAPP_NUMBER = 'REEMPLAZAR_NUMERO' // p.ej. "5214421234567" (código país + número, sin signos)
export const CONTACT_EMAIL = 'REEMPLAZAR_CORREO@ejemplo.com'

// Helpers de formato
export const mxn = (n: number) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(n)

export const num = (n: number, decimals = 2) =>
  new Intl.NumberFormat('es-MX', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n)

// ── Cifras maestras del paquete ───────────────────────────────────────────
export const DEAL = {
  inversionTotal: 45_000_000,
  superficieTotal: 14_669.59,
  precioPromedioM2: 3_067.57,
  potencialDeptos: 196,
}

// ── Métricas del hero ─────────────────────────────────────────────────────
export const heroMetrics = [
  { label: 'Inversión total', value: mxn(DEAL.inversionTotal), foot: 'MXN' },
  { label: 'Superficie total', value: `${num(DEAL.superficieTotal)} m²`, foot: 'Paquete completo' },
  { label: 'Precio promedio de adquisición', value: `${mxn(DEAL.precioPromedioM2)}/m²`, foot: 'Valor de entrada' },
  { label: 'Potencial habitacional', value: 'Hasta 196 deptos.', foot: 'Modelo preliminar' },
  { label: 'Activos incluidos', value: '17 lotes + mixto + macro', foot: '19 unidades de suelo' },
]

// ── Composición del paquete ───────────────────────────────────────────────
export const assets = [
  {
    nombre: '17 lotes unifamiliares',
    superficie: 4_280.86,
    vocacion: 'Residencial horizontal',
    estrategia: 'Venta de lotes',
  },
  {
    nombre: 'Lote de uso mixto',
    superficie: 1_868.73,
    vocacion: 'Mixto / habitacional / servicios',
    estrategia: 'Venta o desarrollo de 36 deptos.',
  },
  {
    nombre: 'Macro lote',
    superficie: 8_520.0,
    vocacion: 'Habitacional vertical',
    estrategia: 'Desarrollo de hasta 160 deptos.',
  },
]

export const assetChartData = assets.map((a) => ({
  name: a.nombre,
  value: a.superficie,
}))

// ── Estructura de pago ────────────────────────────────────────────────────
export const paymentPlan = [
  {
    n: 1,
    monto: 22_000_000,
    cuando: 'A la firma del contrato de compraventa',
    destino: 'Liquidación de obligaciones con CREDIX GS S.A. de C.V.',
  },
  {
    n: 2,
    monto: 10_000_000,
    cuando: '90 días naturales después de la firma',
    destino: null,
  },
  {
    n: 3,
    monto: 13_000_000,
    cuando: 'Contra firma de escrituras y entrega de lotes totalmente urbanizados',
    destino: null,
  },
]

// ── Escenarios de negocio ─────────────────────────────────────────────────
export interface ScenarioLine {
  label: string
  value: string
  strong?: boolean
}

export interface Scenario {
  id: string
  tag: string
  titulo: string
  subtitulo: string
  incluye: string[]
  utilidadTotal: number
  ingresos: number
  inversion: number
  bloques: { titulo: string; lineas: ScenarioLine[] }[]
}

export const scenarios: Scenario[] = [
  {
    id: 'conservador',
    tag: 'Escenario 1 · Conservador',
    titulo: 'Venta de tierra',
    subtitulo: 'Monetización sin construcción: venta de lotes unifamiliares y del lote de uso mixto.',
    incluye: [
      'Venta de 17 lotes unifamiliares',
      'Venta del lote de uso mixto',
      'No considera construcción',
    ],
    utilidadTotal: 19_032_326,
    ingresos: 42_384_465,
    inversion: 23_352_139,
    bloques: [
      {
        titulo: 'A) 17 lotes unifamiliares',
        lineas: [
          { label: 'Superficie', value: '4,280.86 m²' },
          { label: 'Precio de venta estimado', value: '$7,500/m²' },
          { label: 'Venta estimada', value: mxn(32_106_450) },
          { label: 'Costo de adquisición corregido', value: mxn(13_131_838) },
          { label: 'Costo escrituración / documental', value: mxn(2_729_048) },
          { label: 'Comisión de venta 3%', value: mxn(963_193) },
          { label: 'Inversión estimada', value: mxn(16_824_079) },
          { label: 'Utilidad estimada', value: mxn(15_282_371), strong: true },
        ],
      },
      {
        titulo: 'B) Lote de uso mixto',
        lineas: [
          { label: 'Superficie', value: '1,868.73 m²' },
          { label: 'Precio de venta estimado', value: '$5,500/m²' },
          { label: 'Venta estimada', value: mxn(10_278_015) },
          { label: 'Costo de adquisición', value: mxn(5_732_460) },
          { label: 'Costo escrituración 8.5%', value: mxn(487_259) },
          { label: 'Comisión de venta 3%', value: mxn(308_340) },
          { label: 'Inversión estimada', value: mxn(6_528_059) },
          { label: 'Utilidad estimada', value: mxn(3_749_956), strong: true },
        ],
      },
    ],
  },
  {
    id: 'base',
    tag: 'Escenario 2 · Base',
    titulo: 'Venta de lotes + 36 departamentos',
    subtitulo: 'Venta de los 17 lotes unifamiliares y desarrollo de 36 departamentos en el lote de uso mixto.',
    incluye: [
      'Venta de 17 lotes unifamiliares',
      'Desarrollo de 36 departamentos en lote de uso mixto',
    ],
    utilidadTotal: 39_455_147,
    ingresos: 117_606_450,
    inversion: 78_151_303,
    bloques: [
      {
        titulo: 'Desarrollo de 36 departamentos',
        lineas: [
          { label: 'Número de departamentos', value: '36' },
          { label: 'Tamaño promedio', value: '65 m²' },
          { label: 'Costo de obra por unidad', value: mxn(1_300_000) },
          { label: 'Costo terreno por unidad', value: mxn(181_334) },
          { label: 'Indirectos 15%', value: mxn(222_200) },
          { label: 'Costo total por unidad', value: mxn(1_703_534) },
          { label: 'Precio de venta por departamento', value: mxn(2_375_000) },
          { label: 'Venta total', value: mxn(85_500_000) },
          { label: 'Inversión total', value: mxn(61_327_224) },
          { label: 'Utilidad proyectada', value: mxn(24_172_776), strong: true },
          { label: 'Utilidad por unidad', value: mxn(671_465) },
        ],
      },
    ],
  },
  {
    id: 'expansivo',
    tag: 'Escenario 3 · Expansivo',
    titulo: 'Venta de lotes + 196 departamentos',
    subtitulo: 'Ejecución completa: venta de lotes, 36 departamentos en lote mixto y 160 departamentos en el macro lote.',
    incluye: [
      'Venta de 17 lotes unifamiliares',
      'Desarrollo de 36 departamentos en lote de uso mixto',
      'Desarrollo de 160 departamentos en macro lote',
    ],
    utilidadTotal: 119_086_459,
    ingresos: 481_606_450,
    inversion: 362_519_991,
    bloques: [
      {
        titulo: 'Desarrollo de 160 departamentos (macro lote)',
        lineas: [
          { label: 'Número de departamentos', value: '160' },
          { label: 'Tamaño promedio', value: '65 m²' },
          { label: 'Costo de obra por unidad', value: mxn(1_300_000) },
          { label: 'Costo terreno por unidad', value: mxn(177_232) },
          { label: 'Comisión de venta 3%', value: mxn(68_250) },
          { label: 'Gastos operativos 15%', value: mxn(231_822) },
          { label: 'Costo total por unidad', value: mxn(1_777_304) },
          { label: 'Precio de venta por departamento', value: mxn(2_275_000) },
          { label: 'Venta total', value: mxn(364_000_000) },
          { label: 'Inversión total', value: mxn(284_368_688) },
          { label: 'Utilidad proyectada', value: mxn(79_631_312), strong: true },
          { label: 'Utilidad por unidad', value: mxn(497_695) },
        ],
      },
    ],
  },
]

// Datos derivados para gráficas de escenarios
export const scenarioChartData = scenarios.map((s) => ({
  name: s.id.charAt(0).toUpperCase() + s.id.slice(1),
  Utilidad: s.utilidadTotal,
  Ingresos: s.ingresos,
  Inversión: s.inversion,
  margen: Math.round((s.utilidadTotal / s.ingresos) * 1000) / 10, // % sobre ingresos
}))

// ── Mercado y comparables ─────────────────────────────────────────────────
export interface Comparable {
  nombre: string
  producto: string
  precioVenta: string
  terreno: string
  construccion: string
  renta: string
  lectura: string
}

export const comparables: Comparable[] = [
  {
    nombre: 'Palmeral Living',
    producto: 'Casas tríplex / producto residencial compacto',
    precioVenta: '$2,900,000',
    terreno: '65 m²',
    construccion: '65 m²',
    renta: '$13,500 – $16,000 / mes',
    lectura: 'Valor de construcción de referencia $41,984/m²; terreno $173,333 por unidad.',
  },
  {
    nombre: 'La Herencia',
    producto: 'Terrenos unifamiliares',
    precioVenta: '$2,044,500 – $3,396,000',
    terreno: '141 – 283 m²',
    construccion: '—',
    renta: '—',
    lectura: 'Tierra urbanizada de referencia entre $12,000 y $14,500/m².',
  },
  {
    nombre: 'Antares',
    producto: 'Casas dúplex',
    precioVenta: '$2,300,000 – $2,500,000',
    terreno: '73 m²',
    construccion: '72 – 73 m²',
    renta: '$10,000 – $12,000 / mes',
    lectura: 'Terreno $292,000 por unidad; construcción de referencia $30,246/m².',
  },
  {
    nombre: 'Condominios Palmas',
    producto: 'Casas unifamiliares',
    precioVenta: '$2,800,000 – $3,200,000',
    terreno: '90 – 130 m²',
    construccion: '110 – 120 m²',
    renta: '$18,000 – $25,000 / mes',
    lectura: 'Terreno hasta $1,040,000; construcción de referencia $14,500/m².',
  },
]

export const pricePerM2Data = [
  { name: 'Tsalach (adquisición)', valor: 3_067.57, tipo: 'entrada' },
  { name: 'Salida lote mixto', valor: 5_500, tipo: 'salida' },
  { name: 'Salida lotes unifam.', valor: 7_500, tipo: 'salida' },
  { name: 'La Herencia (bajo)', valor: 12_000, tipo: 'mercado' },
  { name: 'La Herencia (alto)', valor: 14_500, tipo: 'mercado' },
]

// ── Absorción ─────────────────────────────────────────────────────────────
export const absorptionScenarios = [
  { escenario: 'Conservador', ritmo: '6 unidades/mes', inventario: '196 unidades', tiempo: '33 meses aprox.' },
  { escenario: 'Base', ritmo: '10 unidades/mes', inventario: '196 unidades', tiempo: '20 meses aprox.' },
  { escenario: 'Optimista', ritmo: '14 unidades/mes', inventario: '196 unidades', tiempo: '14 meses aprox.' },
]

export const absorptionChartData = [
  { mes: 0, Conservador: 0, Base: 0, Optimista: 0 },
  { mes: 4, Conservador: 24, Base: 40, Optimista: 56 },
  { mes: 8, Conservador: 48, Base: 80, Optimista: 112 },
  { mes: 12, Conservador: 72, Base: 120, Optimista: 168 },
  { mes: 16, Conservador: 96, Base: 160, Optimista: 196 },
  { mes: 20, Conservador: 120, Base: 196, Optimista: 196 },
  { mes: 24, Conservador: 144, Base: 196, Optimista: 196 },
  { mes: 28, Conservador: 168, Base: 196, Optimista: 196 },
  { mes: 32, Conservador: 192, Base: 196, Optimista: 196 },
  { mes: 36, Conservador: 196, Base: 196, Optimista: 196 },
]

// ── Tesis de inversión ────────────────────────────────────────────────────
export const thesis = [
  {
    titulo: 'Entrada a valor competitivo',
    texto: 'Adquisición promedio de $3,067.57/m² sobre un paquete de 14,669.59 m².',
  },
  {
    titulo: 'Diversificación de salidas',
    texto: 'La inversión puede monetizarse mediante venta de lotes, venta de tierra mixta o desarrollo habitacional.',
  },
  {
    titulo: 'Producto alineado a demanda',
    texto: 'Departamentos proyectados por debajo de $2.4 MDP, segmento con alta demanda potencial.',
  },
  {
    titulo: 'Escalabilidad',
    texto: 'El desarrollo puede ejecutarse por etapas, reduciendo exposición y permitiendo validar absorción antes de comprometer todo el capital.',
  },
  {
    titulo: 'Comparables favorables',
    texto: 'Palmeral Living, La Herencia, Antares y Condominios Palmas ofrecen referencias para entender precios, rentas y demanda del entorno.',
  },
]

// ── Cronograma ────────────────────────────────────────────────────────────
export const roadmap = [
  {
    fase: 'Fase 1 — Control y due diligence',
    tiempo: '0 a 60 días',
    items: [
      'Firma de contrato',
      'Liquidación CREDIX',
      'Revisión legal',
      'Validación de fideicomiso',
      'Validación de gravámenes',
      'Validación de uso de suelo',
      'Factibilidades',
    ],
  },
  {
    fase: 'Fase 2 — Preparación comercial',
    tiempo: '30 a 90 días',
    items: [
      'Branding del proyecto',
      'Material comercial',
      'Landing pública',
      'Broker kit',
      'Renders',
      'Lista de precios',
      'Estrategia de lanzamiento',
    ],
  },
  {
    fase: 'Fase 3 — Monetización temprana',
    tiempo: '90 a 180 días',
    items: ['Venta de 17 lotes', 'Prospección de compradores de lote mixto', 'Validación de demanda'],
  },
  {
    fase: 'Fase 4 — Desarrollo lote mixto',
    tiempo: '6 a 18 meses',
    items: ['Proyecto ejecutivo', 'Permisos', 'Preventa', 'Construcción', 'Entrega'],
  },
  {
    fase: 'Fase 5 — Desarrollo macro lote',
    tiempo: '12 a 36 meses',
    items: ['Desarrollo por etapas', 'Preventa escalonada', 'Construcción por fases', 'Entrega progresiva'],
  },
]

// ── Riesgos ───────────────────────────────────────────────────────────────
export const risks = [
  {
    riesgo: 'Riesgo legal',
    descripcion: 'Validar titularidad, fideicomiso, derechos, gravámenes y obligaciones con CREDIX.',
    mitigante: 'Due diligence legal completo antes de desembolsos finales.',
  },
  {
    riesgo: 'Riesgo de urbanización',
    descripcion: 'Confirmar qué significa “totalmente urbanizado”.',
    mitigante: 'Checklist técnico y condiciones suspensivas en contrato.',
  },
  {
    riesgo: 'Riesgo de permisos',
    descripcion: 'Validar uso de suelo, densidad y factibilidades.',
    mitigante: 'Dictámenes oficiales antes de iniciar desarrollo.',
  },
  {
    riesgo: 'Riesgo de absorción',
    descripcion: 'Las ventas pueden tardar más de lo proyectado.',
    mitigante: 'Desarrollo por etapas, preventa y estrategia comercial.',
  },
  {
    riesgo: 'Riesgo de costos',
    descripcion: 'El costo de obra de $20,000/m² debe validarse.',
    mitigante: 'Presupuesto ejecutivo, cotizaciones y contingencia.',
  },
  {
    riesgo: 'Riesgo financiero',
    descripcion: 'Puede requerirse más capital del previsto.',
    mitigante: 'Flujo mensual, reservas, preventas y financiamiento estructurado.',
  },
]

// ── Due diligence ─────────────────────────────────────────────────────────
export const dueDiligence = [
  {
    grupo: 'Legal',
    items: [
      'Escrituras',
      'Folios reales',
      'Certificados de libertad de gravamen',
      'Contrato de fideicomiso',
      'Carta saldo CREDIX',
      'Derechos fideicomisarios',
      'Poderes de representantes',
      'Identificación de titulares',
      'Restricciones o litigios',
    ],
  },
  {
    grupo: 'Técnico',
    items: [
      'Uso de suelo',
      'Densidad autorizada',
      'COS / CUS',
      'Factibilidad de agua',
      'Factibilidad de drenaje',
      'Factibilidad eléctrica',
      'Plano de lotificación',
      'Proyecto urbano',
      'Presupuesto de urbanización',
      'Condiciones de entrega',
    ],
  },
  {
    grupo: 'Comercial',
    items: [
      'Comparables activos',
      'Comparables vendidos',
      'Inventario competidor',
      'Velocidad de ventas',
      'Perfil del comprador',
      'Estrategia de precios',
      'Canales comerciales',
      'Presupuesto de marketing',
    ],
  },
  {
    grupo: 'Financiero',
    items: [
      'Modelo editable',
      'Flujo mensual',
      'TIR',
      'ROI',
      'Múltiplo de capital',
      'Punto de equilibrio',
      'Impuestos',
      'Costos financieros',
      'Contingencia',
    ],
  },
]

// ── Ubicación ─────────────────────────────────────────────────────────────
export const locationCards = [
  'Cercanía a vialidades principales',
  'Entorno residencial consolidado',
  'Proximidad a zonas comerciales',
  'Potencial para vivienda media y media alta',
  'Acceso a servicios urbanos',
]

// ── FAQ ───────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: '¿Qué se está comprando?',
    a: 'Un paquete inmobiliario de 14,669.59 m² compuesto por 17 lotes unifamiliares, un lote de uso mixto y un macro lote con potencial de desarrollo habitacional vertical. Se adquiere tierra con distintas rutas de monetización.',
  },
  {
    q: '¿Cuál es el monto de inversión?',
    a: 'El precio de adquisición del paquete es de $45,000,000 MXN, con un esquema de pago propuesto en tres exhibiciones sujeto a validación contractual.',
  },
  {
    q: '¿Qué activos incluye el paquete?',
    a: '17 lotes unifamiliares (4,280.86 m²), un lote de uso mixto (1,868.73 m²) y un macro lote (8,520.00 m²).',
  },
  {
    q: '¿Cuál es el precio por m²?',
    a: 'El precio promedio de adquisición es de $3,067.57/m², valor de entrada que se ubica por debajo de referencias comerciales de tierra urbanizada del entorno, sujeto a validación.',
  },
  {
    q: '¿Cuál es la utilidad potencial?',
    a: 'Depende de la ruta de ejecución. El modelo preliminar estima una utilidad de $19.0 MDP en el escenario conservador, $39.5 MDP en el base y $119.1 MDP en el expansivo. Son proyecciones, no rendimientos garantizados.',
  },
  {
    q: '¿Qué escenario es el más conservador?',
    a: 'El escenario 1, que contempla únicamente la venta de la tierra (lotes unifamiliares y lote de uso mixto) sin construcción.',
  },
  {
    q: '¿Qué escenario tiene mayor potencial?',
    a: 'El escenario expansivo, que suma la venta de lotes al desarrollo de 196 departamentos. También es el que requiere mayor capital, tiempo y validación técnica y comercial.',
  },
  {
    q: '¿Qué información falta validar?',
    a: 'Titularidad y situación legal, alcance de la urbanización, uso de suelo y densidad, factibilidades, costos de obra, absorción comercial y estructura fiscal y financiera. Todo está marcado como pendiente de due diligence.',
  },
  {
    q: '¿Existe garantía de rendimiento?',
    a: 'No. Este micrositio presenta un modelo preliminar con escenarios de ejecución. No constituye oferta pública de valores ni garantía de rendimiento.',
  },
  {
    q: '¿Cómo se protege al inversionista?',
    a: 'Mediante due diligence legal, técnica, comercial y financiera; condiciones suspensivas en el contrato; desembolsos escalonados; y desarrollo por etapas para modular el riesgo.',
  },
  {
    q: '¿Qué documentos legales se requieren?',
    a: 'Escrituras, folios reales, certificados de libertad de gravamen, contrato de fideicomiso, carta saldo CREDIX, derechos fideicomisarios y poderes de representantes, entre otros.',
  },
  {
    q: '¿Cuánto tiempo tomaría la venta de departamentos?',
    a: 'Según el ritmo de absorción, entre ~14 meses (optimista, 14 unidades/mes) y ~33 meses (conservador, 6 unidades/mes) para las 196 unidades potenciales. Debe validarse con evidencia de mercado.',
  },
  {
    q: '¿Cuál es el principal riesgo?',
    a: 'La combinación de riesgo legal (situación de la tierra y obligaciones con CREDIX) y riesgo de absorción y costos en el componente de desarrollo. Cada uno tiene mitigantes propuestos.',
  },
  {
    q: '¿Cómo puedo solicitar el modelo financiero completo?',
    a: 'A través del formulario de contacto de este sitio o por WhatsApp. Recibirás el modelo financiero editable, la carpeta legal preliminar, los comparables de mercado y el calendario de presentación.',
  },
]

// ── Navegación ────────────────────────────────────────────────────────────
export const navItems = [
  { id: 'resumen', label: 'Resumen' },
  { id: 'ubicacion', label: 'Ubicación' },
  { id: 'activos', label: 'Activos' },
  { id: 'escenarios', label: 'Escenarios' },
  { id: 'mercado', label: 'Mercado' },
  { id: 'absorcion', label: 'Absorción' },
  { id: 'riesgos', label: 'Riesgos' },
  { id: 'due-diligence', label: 'Due Diligence' },
  { id: 'contacto', label: 'Contacto' },
]
