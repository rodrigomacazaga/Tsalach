/** Paleta y utilidades compartidas para las gráficas (Recharts). */
export const chartColors = {
  brand: '#335849',
  brandLight: '#3f6b57',
  sand: '#c9b593',
  gold: '#b58a2e',
  ink: '#2c2925',
  grid: '#e9e1d3',
  axis: '#6b665e',
  // Categóricos para escenarios / series
  conservador: '#8a9a8f',
  base: '#3f6b57',
  optimista: '#b58a2e',
  expansivo: '#28453a',
}

export const axisStyle = {
  fontSize: 12,
  fill: chartColors.axis,
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
