import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { scenarioChartData } from '../../data/content'
import { axisStyle, chartColors } from './theme'

const BAR_COLORS = [chartColors.conservador, chartColors.base, chartColors.expansivo]

/** Margen estimado (utilidad / ingresos) por escenario, en %. */
export default function MarginChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={scenarioChartData} margin={{ top: 24, right: 8, left: 8, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
        <XAxis dataKey="name" tick={axisStyle} tickLine={false} axisLine={{ stroke: chartColors.grid }} />
        <YAxis
          tickFormatter={(v: number) => `${v}%`}
          tick={axisStyle}
          tickLine={false}
          axisLine={false}
          width={44}
          domain={[0, 'dataMax + 10']}
        />
        <Tooltip
          cursor={{ fill: 'rgba(51,88,73,0.06)' }}
          formatter={(v: number) => [`${v}%`, 'Margen s/ ingresos']}
          contentStyle={{
            borderRadius: 12,
            border: '1px solid #e9e1d3',
            fontSize: 13,
            boxShadow: '0 8px 24px -12px rgba(28,26,23,0.2)',
          }}
        />
        <Bar dataKey="margen" radius={[6, 6, 0, 0]} maxBarSize={90}>
          {scenarioChartData.map((_, i) => (
            <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
          ))}
          <LabelList dataKey="margen" position="top" formatter={(v: number) => `${v}%`} style={{ fontSize: 12, fill: chartColors.ink, fontWeight: 600 }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
