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
import { axisStyle, chartColors, compactMXN, fullMXN, tooltipStyle } from './theme'

const BAR_COLORS = [chartColors.bronzeSoft, chartColors.bronze, chartColors.ink]

export default function ScenarioUtilityChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={scenarioChartData} margin={{ top: 24, right: 8, left: 8, bottom: 0 }}>
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
          formatter={(v: number) => [fullMXN(v), 'Utilidad']}
          contentStyle={tooltipStyle}
        />
        <Bar dataKey="Utilidad" radius={[6, 6, 0, 0]} maxBarSize={90}>
          {scenarioChartData.map((_, i) => (
            <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
          ))}
          <LabelList dataKey="Utilidad" position="top" formatter={compactMXN} style={{ fontSize: 12, fill: chartColors.ink, fontWeight: 600 }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
