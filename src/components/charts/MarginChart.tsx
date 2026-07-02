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
import { axisStyle, chartColors, tooltipStyle } from './theme'

const BAR_COLORS = [chartColors.bronzeSoft, chartColors.bronze, chartColors.ink]

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
          cursor={{ fill: 'rgba(154,106,60,0.08)' }}
          formatter={(v: number) => [`${v}%`, 'Margen s/ ingresos']}
          contentStyle={tooltipStyle}
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
