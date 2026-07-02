import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { mxn, scenarios } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import ChartCard from './charts/ChartCard'
import ScenarioUtilityChart from './charts/ScenarioUtilityChart'
import FinancialComparisonChart from './charts/FinancialComparisonChart'
import MarginChart from './charts/MarginChart'

export default function Scenarios() {
  const [active, setActive] = useState(0)
  const s = scenarios[active]

  return (
    <section id="escenarios" className="section bg-white">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Escenarios de negocio"
          title="Tres rutas de ejecución, no rendimientos acumulables"
          description="Cada escenario representa una ruta distinta de monetización. No deben interpretarse como simultáneos ni sumarse sin validar estructura legal, técnica y comercial."
        />

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Escenarios de negocio"
          className="mb-6 flex flex-col gap-2 sm:flex-row"
        >
          {scenarios.map((sc, i) => (
            <button
              key={sc.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`flex-1 rounded-xl border px-4 py-3 text-left transition-all ${
                active === i
                  ? 'border-brand-700 bg-brand-700 text-sand-50 shadow-card'
                  : 'border-sand-200 bg-white text-ink-soft hover:border-brand-300'
              }`}
            >
              <span className="block text-[11px] font-semibold uppercase tracking-wide opacity-80">
                {sc.tag}
              </span>
              <span className="mt-0.5 block text-sm font-semibold">{sc.titulo}</span>
            </button>
          ))}
        </div>

        {/* Contenido del escenario */}
        <AnimatePresence mode="wait">
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 lg:grid-cols-5"
          >
            {/* Detalle */}
            <div className="lg:col-span-3">
              <div className="card h-full p-6">
                <p className="text-sm leading-relaxed text-ink-muted">{s.subtitulo}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.incluye.map((inc) => (
                    <span key={inc} className="inline-flex items-center gap-1.5 rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-ink-soft">
                      <Icon name="check" className="h-3 w-3 text-brand-600" />
                      {inc}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-6">
                  {s.bloques.map((bloque) => (
                    <div key={bloque.titulo}>
                      <h4 className="mb-3 text-sm font-semibold text-ink">{bloque.titulo}</h4>
                      <dl className="divide-y divide-sand-100 rounded-xl border border-sand-200">
                        {bloque.lineas.map((l) => (
                          <div
                            key={l.label}
                            className={`flex items-center justify-between gap-4 px-4 py-2.5 text-sm ${
                              l.strong ? 'bg-brand-50' : ''
                            }`}
                          >
                            <dt className={l.strong ? 'font-semibold text-brand-800' : 'text-ink-muted'}>
                              {l.label}
                            </dt>
                            <dd className={`tabular-nums ${l.strong ? 'font-bold text-brand-800' : 'font-medium text-ink'}`}>
                              {l.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resumen numérico */}
            <div className="lg:col-span-2">
              <div className="card h-full bg-brand-800 p-6 text-sand-50">
                <span className="text-xs font-semibold uppercase tracking-wide text-sand-200">
                  {s.tag}
                </span>
                <div className="mt-4 space-y-4">
                  <Metric label="Utilidad total del escenario" value={mxn(s.utilidadTotal)} big />
                  <Metric label="Ingresos estimados" value={mxn(s.ingresos)} />
                  <Metric label="Inversión estimada" value={mxn(s.inversion)} />
                  <Metric label="Margen estimado sobre ingresos" value={`${((s.utilidadTotal / s.ingresos) * 100).toFixed(1)}%`} />
                </div>
                <p className="mt-6 text-xs leading-relaxed text-sand-200/90">
                  Utilidad, no ROI ni rendimiento garantizado. El modelo no incluye impuestos sobre
                  utilidad, costos financieros ni contingencias.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gráficas comparativas */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ChartCard title="Utilidad proyectada por escenario" subtitle="Modelo preliminar, en MXN">
              <ScenarioUtilityChart />
            </ChartCard>
          </Reveal>
          <Reveal delay={0.1}>
            <ChartCard title="Margen estimado por escenario" subtitle="Utilidad sobre ingresos (%)">
              <MarginChart />
            </ChartCard>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-2">
            <ChartCard
              title="Ingresos vs. inversión vs. utilidad por escenario"
              subtitle="Comparativo de escala de cada ruta de ejecución"
              footnote="Los escenarios son rutas de ejecución. No todos deben interpretarse como simultáneos sin validar estructura legal, técnica y comercial. El modelo no incluye impuestos sobre utilidad, costos financieros, contingencias extraordinarias ni costos no documentados."
            >
              <FinancialComparisonChart />
            </ChartCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Metric({ label, value, big }: { label: string; value: string; big?: boolean }) {
  return (
    <div>
      <div className="text-xs font-medium text-sand-200">{label}</div>
      <div className={`tabular-nums font-semibold ${big ? 'text-3xl text-gold-400' : 'text-lg'}`}>{value}</div>
    </div>
  )
}
