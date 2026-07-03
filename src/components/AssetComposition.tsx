import { assets, DEAL, mxn, num } from '../data/content'
import AssetCompositionChart from './charts/AssetCompositionChart'
import ChartCard from './charts/ChartCard'
import Icon from './Icon'
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

        {/* Tabla a todo el ancho — en móvil las filas se apilan como tarjetas (sin scroll) */}
        <Reveal>
          {/* Escritorio / tablet: tabla completa */}
          <div className="hidden overflow-hidden rounded-card border border-line sm:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sand text-left font-sans text-[11px] uppercase tracking-[1px] text-fg-mute">
                  <th className="px-5 py-3.5 font-semibold">Activo</th>
                  <th className="px-5 py-3.5 font-semibold">Superficie</th>
                  <th className="px-5 py-3.5 font-semibold">Vocación</th>
                  <th className="px-5 py-3.5 font-semibold">Estrategia</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((a) => (
                  <tr key={a.nombre} className="border-t border-line align-top">
                    <td className="px-5 py-4 font-serif text-base text-fg">{a.nombre}</td>
                    <td className="whitespace-nowrap px-5 py-4 tabular-nums text-fg-soft">{num(a.superficie)} m²</td>
                    <td className="px-5 py-4 text-fg-soft">{a.vocacion}</td>
                    <td className="px-5 py-4 text-fg-soft">{a.estrategia}</td>
                  </tr>
                ))}
                <tr className="border-t border-line bg-sand/60 font-medium text-bronze">
                  <td className="px-5 py-4 font-serif text-base">Superficie total</td>
                  <td className="whitespace-nowrap px-5 py-4 tabular-nums">{num(DEAL.superficieTotal)} m²</td>
                  <td className="px-5 py-4" colSpan={2}>
                    {mxn(DEAL.inversionTotal)} · {mxn(DEAL.precioPromedioM2)}/m² promedio
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Móvil: cada activo como tarjeta (nada se corta) */}
          <div className="space-y-3 sm:hidden">
            {assets.map((a) => (
              <div key={a.nombre} className="card p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-base font-normal text-fg">{a.nombre}</h3>
                  <span className="whitespace-nowrap tabular-nums text-sm text-fg-soft">{num(a.superficie)} m²</span>
                </div>
                <dl className="mt-3 space-y-1.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <dt className="text-fg-mute">Vocación</dt>
                    <dd className="text-right text-fg-soft">{a.vocacion}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-fg-mute">Estrategia</dt>
                    <dd className="text-right text-fg-soft">{a.estrategia}</dd>
                  </div>
                </dl>
              </div>
            ))}
            <div className="card bg-sand/60 p-5 text-bronze">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-serif text-base">Superficie total</span>
                <span className="whitespace-nowrap tabular-nums text-sm">{num(DEAL.superficieTotal)} m²</span>
              </div>
              <p className="mt-1 text-sm">{mxn(DEAL.inversionTotal)} · {mxn(DEAL.precioPromedioM2)}/m² promedio</p>
            </div>
          </div>
        </Reveal>

        {/* Gráfica + lectura, debajo de la tabla */}
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <ChartCard
              title="Distribución de superficie por activo"
              subtitle="Participación de cada activo en los 14,669.59 m² totales"
            >
              <AssetCompositionChart />
            </ChartCard>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="card flex h-full flex-col justify-center gap-4 p-6 sm:p-8">
              {assets.map((a) => {
                const pct = (a.superficie / DEAL.superficieTotal) * 100
                return (
                  <div key={a.nombre}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm font-medium text-fg">{a.nombre}</span>
                      <span className="font-serif text-lg text-bronze">{pct.toFixed(1)}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-sand">
                      <div className="h-full rounded-full bg-ink" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Plano de sembrado oficial */}
        <Reveal delay={0.1}>
          <figure className="mt-8 card overflow-hidden p-0">
            <div className="flex flex-col gap-1 border-b border-line p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <h3 className="font-serif text-lg font-normal text-fg">Plano de sembrado oficial</h3>
                <p className="mono-note mt-1">Tsalach Residencial · Parcela 145 · Abril–Mayo 2026</p>
              </div>
              <a
                href="/images/plano-tsalach.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 whitespace-nowrap text-sm font-medium text-bronze hover:underline"
              >
                <Icon name="pin" className="h-4 w-4" />
                Ver plano completo
              </a>
            </div>
            <a href="/images/plano-tsalach.jpg" target="_blank" rel="noopener noreferrer" className="block bg-white">
              <img
                src="/images/plano-tsalach.jpg"
                alt="Plano de sembrado oficial de Tsalach Residencial (Parcela 145): distribución de condominios, lotes, vialidades y áreas verdes"
                loading="lazy"
                className="h-auto w-full"
              />
            </a>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
