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
import { pricePerM2Data } from '../../data/content'
import { axisStyle, chartColors, tooltipStyle } from './theme'

const tipoColor: Record<string, string> = {
  entrada: chartColors.ink,
  salida: chartColors.bronze,
  mercado: chartColors.bronzeSoft,
}

const money = (n: number) => `$${new Intl.NumberFormat('es-MX').format(Math.round(n))}`

/** Precio de adquisición vs referencias de salida y de mercado ($/m²). */
export default function PricePerM2Chart() {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <BarChart
        data={pricePerM2Data}
        margin={{ top: 24, right: 8, left: 8, bottom: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ ...axisStyle, fontSize: 11 }}
          tickLine={false}
          axisLine={{ stroke: chartColors.grid }}
          interval={0}
          angle={-18}
          textAnchor="end"
          height={56}
        />
        <YAxis
          tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
          tick={axisStyle}
          tickLine={false}
          axisLine={false}
          width={48}
        />
        <Tooltip
          cursor={{ fill: 'rgba(154,106,60,0.08)' }}
          formatter={(v: number) => [`${money(v)}/m²`, 'Precio']}
          contentStyle={tooltipStyle}
        />
        <Bar dataKey="valor" radius={[6, 6, 0, 0]} maxBarSize={64}>
          {pricePerM2Data.map((d, i) => (
            <Cell key={i} fill={tipoColor[d.tipo]} />
          ))}
          <LabelList
            dataKey="valor"
            position="top"
            formatter={(v: number) => money(v)}
            style={{ fontSize: 11, fill: chartColors.ink, fontWeight: 600 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
