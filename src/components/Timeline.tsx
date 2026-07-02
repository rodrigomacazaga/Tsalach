import { roadmap } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Timeline() {
  return (
    <section className="section bg-bg">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Cronograma propuesto"
          title="Ejecución por fases para modular el riesgo"
          description="Desarrollo escalonado que permite validar cada etapa antes de comprometer capital adicional. Tiempos preliminares sujetos a validación."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <ol className="space-y-6">
            {roadmap.map((phase, i) => (
              <Reveal key={phase.fase} delay={i * 0.06}>
                <li className="relative flex gap-5">
                  <span className="z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-4 border-bg bg-ink text-ondark">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <div className="card w-full p-6">
                    <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="font-serif text-lg font-normal text-fg">{phase.fase}</h3>
                      <span className="inline-flex w-fit items-center rounded-full bg-sand px-3 py-1 font-mono text-[11px] tracking-wide text-bronze">
                        {phase.tiempo}
                      </span>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-sm text-fg-soft">
                          <span className="h-1.5 w-1.5 flex-none rounded-full bg-bronze-soft" />
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
