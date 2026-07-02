/** Paleta de gráficas — tres tonos de la misma familia neutra + bronce (guía de estilo). */
export const chartColors = {
  ink: '#211E18', // dato principal / oscuro
  bronze: '#9A6A3C', // acento
  bronzeSoft: '#B98A5E', // acento luminoso
  grid: '#E4D9C7', // divisores
  axis: '#948B7C', // ejes / etiquetas
  fg: '#24211B',
  sand: '#EFE8DB',
  // Series categóricas (escenarios / ritmos) — misma familia
  conservador: '#B98A5E',
  base: '#9A6A3C',
  optimista: '#211E18',
  expansivo: '#211E18',
}

export const axisStyle = {
  fontSize: 12,
  fill: chartColors.axis,
  fontFamily: 'Archivo, sans-serif',
}

/** Formatea montos grandes de forma compacta para ejes/tooltips. */
export const compactMXN = (n: number) => {
  if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`
  if (Math.abs(n) >= 1_000) return `$${(n / 1_000).toFixed(0)}k`
  return `$${n}`
}

export const fullMXN = (n: number) =>
  new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(n)

/** Estilo compartido de tooltip. */
export const tooltipStyle = {
  borderRadius: 14,
  border: '1px solid #E4D9C7',
  fontSize: 13,
  fontFamily: 'Archivo, sans-serif',
  boxShadow: 'none',
  color: '#24211B',
}
