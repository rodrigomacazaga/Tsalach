import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { scenarioChartData } from '../../data/content'
import { axisStyle, chartColors, compactMXN, fullMXN, tooltipStyle } from './theme'

/** Ingresos vs inversión vs utilidad por escenario (grouped bar chart). */
export default function FinancialComparisonChart() {
  return (
    <ResponsiveContainer width="100%" height={340}>
      <BarChart data={scenarioChartData} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
        <XAxis dataKey="name" tick={axisStyle} tickLine={false} axisLine={{ stroke: chartColors.grid }} />
        <YAxis
          tickFormatter={compactMXN}
          tick={axisStyle}
          tickLine={false}
          axisLine={false}
          width={52}
        />
        <Tooltip
          cursor={{ fill: 'rgba(154,106,60,0.08)' }}
          formatter={(v: number, name: string) => [fullMXN(v), name]}
          contentStyle={tooltipStyle}
        />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 8, fontFamily: 'Archivo, sans-serif' }} />
        <Bar dataKey="Ingresos" fill={chartColors.ink} radius={[4, 4, 0, 0]} maxBarSize={38} />
        <Bar dataKey="Inversión" fill={chartColors.bronzeSoft} radius={[4, 4, 0, 0]} maxBarSize={38} />
        <Bar dataKey="Utilidad" fill={chartColors.bronze} radius={[4, 4, 0, 0]} maxBarSize={38} />
      </BarChart>
    </ResponsiveContainer>
  )
}
