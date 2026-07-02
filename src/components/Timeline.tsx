import { roadmap } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Timeline() {
  return (
    <section className="section bg-white">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Cronograma propuesto"
          title="Ejecución por fases para modular el riesgo"
          description="Desarrollo escalonado que permite validar cada etapa antes de comprometer capital adicional. Tiempos preliminares sujetos a validación."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-sand-300" aria-hidden="true" />
          <ol className="space-y-6">
            {roadmap.map((phase, i) => (
              <Reveal key={phase.fase} delay={i * 0.06}>
                <li className="relative flex gap-5">
                  <span className="z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-4 border-white bg-brand-700 text-sand-50">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <div className="card w-full p-5">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-base font-semibold text-ink">{phase.fase}</h3>
                      <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                        {phase.tiempo}
                      </span>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-sm text-ink-muted">
                          <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
