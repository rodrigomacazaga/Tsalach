import { assets, DEAL, mxn, num } from '../data/content'
import AssetCompositionChart from './charts/AssetCompositionChart'
import ChartCard from './charts/ChartCard'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function AssetComposition() {
  return (
    <section id="activos" className="section bg-bg">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Composición del paquete"
          title="17 lotes + lote mixto + macro lote"
          description="El paquete combina suelo con tres vocaciones distintas, lo que habilita rutas de monetización independientes o escalonadas."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Tabla */}
          <Reveal>
            <div className="table-scroll">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-fg text-left font-sans text-[11px] uppercase tracking-[1px] text-fg-mute">
                    <th className="py-3 pr-4 font-semibold">Activo</th>
                    <th className="py-3 pr-4 font-semibold">Superficie</th>
                    <th className="py-3 pr-4 font-semibold">Vocación</th>
                    <th className="py-3 font-semibold">Estrategia</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((a) => (
                    <tr key={a.nombre} className="border-b border-line align-top">
                      <td className="py-4 pr-4 font-serif text-base text-fg">{a.nombre}</td>
                      <td className="py-4 pr-4 tabular-nums text-fg-soft">{num(a.superficie)} m²</td>
                      <td className="py-4 pr-4 text-fg-soft">{a.vocacion}</td>
                      <td className="py-4 text-fg-soft">{a.estrategia}</td>
                    </tr>
                  ))}
                  <tr className="font-medium text-bronze">
                    <td className="py-4 pr-4 font-serif text-base">Superficie total</td>
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
