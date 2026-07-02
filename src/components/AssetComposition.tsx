import { assets, DEAL, mxn, num } from '../data/content'
import AssetCompositionChart from './charts/AssetCompositionChart'
import ChartCard from './charts/ChartCard'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function AssetComposition() {
  return (
    <section id="activos" className="section bg-white">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Composición del paquete"
          title="17 lotes + lote mixto + macro lote"
          description="El paquete combina suelo con tres vocaciones distintas, lo que habilita rutas de monetización independientes o escalonadas."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Tabla */}
          <Reveal>
            <div className="table-scroll">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-sand-200 text-left text-xs uppercase tracking-wide text-ink-muted">
                    <th className="py-3 pr-4 font-semibold">Activo</th>
                    <th className="py-3 pr-4 font-semibold">Superficie</th>
                    <th className="py-3 pr-4 font-semibold">Vocación</th>
                    <th className="py-3 font-semibold">Estrategia</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((a) => (
                    <tr key={a.nombre} className="border-b border-sand-100 align-top">
                      <td className="py-4 pr-4 font-semibold text-ink">{a.nombre}</td>
                      <td className="py-4 pr-4 tabular-nums text-ink-soft">{num(a.superficie)} m²</td>
                      <td className="py-4 pr-4 text-ink-soft">{a.vocacion}</td>
                      <td className="py-4 text-ink-soft">{a.estrategia}</td>
                    </tr>
                  ))}
                  <tr className="bg-sand-50 font-semibold text-ink">
                    <td className="py-4 pr-4">Superficie total</td>
                    <td className="py-4 pr-4 tabular-nums">{num(DEAL.superficieTotal)} m²</td>
                    <td className="py-4 pr-4" colSpan={2}>
                      {mxn(DEAL.inversionTotal)} · {mxn(DEAL.precioPromedioM2)}/m² promedio
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Gráfica */}
          <Reveal delay={0.1}>
            <ChartCard
              title="Distribución de superficie por activo"
              subtitle="Participación de cada activo en los 14,669.59 m² totales"
            >
              <AssetCompositionChart />
            </ChartCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
