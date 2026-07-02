import { absorptionScenarios } from '../data/content'
import AbsorptionProjectionChart from './charts/AbsorptionProjectionChart'
import ChartCard from './charts/ChartCard'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Absorption() {
  return (
    <section id="absorcion" className="section bg-white">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Proyección de absorción"
          title="Proyección de absorción comercial"
          description="Para el componente habitacional vertical, el éxito depende de la velocidad de venta mensual. Se propone modelar tres escenarios de absorción para los 196 departamentos potenciales."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <Reveal className="lg:col-span-2">
            <div className="table-scroll">
              <table className="w-full min-w-[440px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-sand-200 text-left text-xs uppercase tracking-wide text-ink-muted">
                    <th className="py-3 pr-4 font-semibold">Escenario</th>
                    <th className="py-3 pr-4 font-semibold">Ritmo</th>
                    <th className="py-3 font-semibold">Tiempo estimado</th>
                  </tr>
                </thead>
                <tbody>
                  {absorptionScenarios.map((a) => (
                    <tr key={a.escenario} className="border-b border-sand-100">
                      <td className="py-4 pr-4 font-semibold text-ink">{a.escenario}</td>
                      <td className="py-4 pr-4 text-ink-soft">{a.ritmo}</td>
                      <td className="py-4 font-medium text-brand-700">{a.tiempo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">
              Inventario total considerado: 196 unidades. La absorción debe validarse con evidencia de
              ventas comparables, inventario activo, precios por m², capacidad de crédito del comprador
              objetivo y estrategia comercial.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <ChartCard
              title="Unidades vendidas acumuladas por mes"
              subtitle="Proyección para 196 departamentos en tres ritmos de venta"
            >
              <AbsorptionProjectionChart />
            </ChartCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
