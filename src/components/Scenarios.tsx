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
    <section id="escenarios" className="section bg-bg">
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
              className={`flex-1 rounded-[14px] border px-5 py-4 text-left transition-colors ${
                active === i
                  ? 'border-ink bg-ink text-ondark'
                  : 'border-line bg-surface text-fg-soft hover:border-bronze'
              }`}
            >
              <span className={`block font-mono text-[11px] uppercase tracking-[0.1em] ${active === i ? 'text-bronze-soft' : 'text-fg-mute'}`}>
                {sc.tag}
              </span>
              <span className="mt-1 block font-serif text-base font-normal">{sc.titulo}</span>
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
              <div className="card h-full p-6 sm:p-8">
                <p className="text-base font-light leading-relaxed text-fg-soft">{s.subtitulo}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.incluye.map((inc) => (
                    <span key={inc} className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-xs font-medium text-fg-soft">
                      <Icon name="check" className="h-3 w-3 text-bronze" />
                      {inc}
                    </span>
                  ))}
                </div>

                <div className="mt-7 space-y-7">
                  {s.bloques.map((bloque) => (
                    <div key={bloque.titulo}>
                      <h4 className="mb-3 font-serif text-lg font-normal text-fg">{bloque.titulo}</h4>
                      <dl className="divide-y divide-line rounded-[14px] border border-line">
                        {bloque.lineas.map((l) => (
                          <div
                            key={l.label}
                            className={`flex items-center justify-between gap-4 px-4 py-2.5 text-sm ${
                              l.strong ? 'bg-sand' : ''
                            }`}
                          >
                            <dt className={l.strong ? 'font-semibold text-bronze' : 'text-fg-soft'}>
                              {l.label}
                            </dt>
                            <dd className={`tabular-nums ${l.strong ? 'font-semibold text-bronze' : 'font-medium text-fg'}`}>
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
              <div className="card-dark h-full p-6 sm:p-8">
                <span className="kicker text-bronze-soft">{s.tag}</span>
                <div className="mt-5 space-y-5">
                  <Metric label="Utilidad total del escenario" value={mxn(s.utilidadTotal)} big />
                  <Metric label="Ingresos estimados" value={mxn(s.ingresos)} />
                  <Metric label="Inversión estimada" value={mxn(s.inversion)} />
                  <Metric label="Margen estimado sobre ingresos" value={`${((s.utilidadTotal / s.ingresos) * 100).toFixed(1)}%`} />
                </div>
                <p className="mono-note mt-7 leading-relaxed text-ondark-soft">
                  Utilidad, no ROI ni rendimiento garantizado. El modelo no incluye impuestos sobre
                  utilidad, costos financieros ni contingencias.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gráficas comparativas */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
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
      <div className="text-xs font-medium text-ondark-soft">{label}</div>
      <div
        className={`font-serif font-normal tabular-nums ${
          big ? 'text-[2.25rem] leading-tight text-bronze-soft' : 'text-xl text-ondark'
        }`}
      >
        {value}
      </div>
    </div>
  )
}
