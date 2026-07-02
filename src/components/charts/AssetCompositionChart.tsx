import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { assetChartData } from '../../data/content'
import { chartColors, tooltipStyle } from './theme'

const COLORS = [chartColors.ink, chartColors.bronze, chartColors.bronzeSoft]
const total = assetChartData.reduce((s, d) => s + d.value, 0)

const fmt = (n: number) =>
  new Intl.NumberFormat('es-MX', { maximumFractionDigits: 2 }).format(n)

export default function AssetCompositionChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={assetChartData}
          dataKey="value"
          nameKey="name"
          innerRadius={62}
          outerRadius={104}
          paddingAngle={2}
          stroke="#fff"
          strokeWidth={2}
        >
          {assetChartData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number, name: string) => [
            `${fmt(value)} m² · ${((value / total) * 100).toFixed(1)}%`,
            name,
          ]}
          contentStyle={tooltipStyle}
        />
        <Legend
          verticalAlign="bottom"
          iconType="circle"
          wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
