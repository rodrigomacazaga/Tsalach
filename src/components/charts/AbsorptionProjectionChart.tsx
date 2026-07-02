import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { absorptionChartData } from '../../data/content'
import { axisStyle, chartColors, tooltipStyle } from './theme'

/** Unidades vendidas acumuladas por mes en tres escenarios de absorción. */
export default function AbsorptionProjectionChart() {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <LineChart data={absorptionChartData} margin={{ top: 8, right: 12, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
        <XAxis
          dataKey="mes"
          tick={axisStyle}
          tickLine={false}
          axisLine={{ stroke: chartColors.grid }}
          label={{ value: 'Mes', position: 'insideBottom', offset: -2, fontSize: 12, fill: chartColors.axis }}
        />
        <YAxis
          tick={axisStyle}
          tickLine={false}
          axisLine={false}
          width={40}
          domain={[0, 200]}
          label={{ value: 'Unidades', angle: -90, position: 'insideLeft', fontSize: 12, fill: chartColors.axis }}
        />
        <Tooltip
          formatter={(v: number, name: string) => [`${v} unidades`, name]}
          labelFormatter={(l) => `Mes ${l}`}
          contentStyle={tooltipStyle}
        />
        <Legend iconType="line" wrapperStyle={{ fontSize: 12, paddingTop: 8, fontFamily: 'Archivo, sans-serif' }} />
        <Line type="monotone" dataKey="Conservador" stroke={chartColors.bronzeSoft} strokeWidth={2.5} dot={{ r: 2.5 }} activeDot={{ r: 5 }} />
        <Line type="monotone" dataKey="Base" stroke={chartColors.bronze} strokeWidth={2.5} dot={{ r: 2.5 }} activeDot={{ r: 5 }} />
        <Line type="monotone" dataKey="Optimista" stroke={chartColors.ink} strokeWidth={2.5} dot={{ r: 2.5 }} activeDot={{ r: 5 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
