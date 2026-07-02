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
import { axisStyle, chartColors, compactMXN, fullMXN } from './theme'

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
          cursor={{ fill: 'rgba(51,88,73,0.06)' }}
          formatter={(v: number, name: string) => [fullMXN(v), name]}
          contentStyle={{
            borderRadius: 12,
            border: '1px solid #e9e1d3',
            fontSize: 13,
            boxShadow: '0 8px 24px -12px rgba(28,26,23,0.2)',
          }}
        />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
        <Bar dataKey="Ingresos" fill={chartColors.brand} radius={[4, 4, 0, 0]} maxBarSize={38} />
        <Bar dataKey="Inversión" fill={chartColors.sand} radius={[4, 4, 0, 0]} maxBarSize={38} />
        <Bar dataKey="Utilidad" fill={chartColors.gold} radius={[4, 4, 0, 0]} maxBarSize={38} />
      </BarChart>
    </ResponsiveContainer>
  )
}
