import { dueDiligence } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const groupIcon = {
  Legal: 'doc',
  Técnico: 'building',
  Comercial: 'store',
  Financiero: 'scale',
} as const

export default function DueDiligenceChecklist() {
  return (
    <section id="due-diligence" className="section bg-bg">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Due diligence requerida"
          title="Lo que debe validarse antes de invertir"
          description="Checklist de información pendiente de revisión. Ningún desembolso final debería realizarse sin completar estas verificaciones."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {dueDiligence.map((group, i) => (
            <Reveal key={group.grupo} delay={i * 0.06}>
              <div className="card h-full p-8">
                <h3 className="flex items-center gap-2.5 font-serif text-xl font-normal text-fg">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-sand text-bronze">
                    <Icon name={groupIcon[group.grupo as keyof typeof groupIcon]} className="h-5 w-5" />
                  </span>
                  {group.grupo}
                </h3>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-fg-soft">
                      <span className="mt-1 h-4 w-4 flex-none rounded border border-bronze/50" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
