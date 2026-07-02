import { risks } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function RiskMatrix() {
  return (
    <section id="riesgos" className="section bg-sand">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Riesgos y mitigantes"
          title="Transparencia sobre lo que debe validarse"
          description="Toda oportunidad conlleva riesgos. Aquí se identifican los principales y las acciones propuestas para mitigarlos antes de comprometer capital."
        />

        {/* Desktop: tabla · Móvil: cards */}
        <Reveal>
          <div className="hidden overflow-hidden rounded-card border border-line md:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-ink text-left font-sans text-[11px] uppercase tracking-[1px] text-ondark-soft">
                  <th className="px-5 py-3.5 font-semibold">Riesgo</th>
                  <th className="px-5 py-3.5 font-semibold">Descripción</th>
                  <th className="px-5 py-3.5 font-semibold">Mitigante</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((r, i) => (
                  <tr key={r.riesgo} className={i % 2 ? 'bg-sand' : 'bg-surface'}>
                    <td className="px-5 py-4 font-serif text-base text-fg">
                      <span className="flex items-center gap-2">
                        <Icon name="alert" className="h-4 w-4 flex-none text-bronze" />
                        {r.riesgo}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-fg-soft">{r.descripcion}</td>
                    <td className="px-5 py-4 text-fg-soft">
                      <span className="flex items-start gap-2">
                        <Icon name="shield" className="mt-0.5 h-4 w-4 flex-none text-bronze" />
                        {r.mitigante}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="grid gap-4 md:hidden">
          {risks.map((r, i) => (
            <Reveal key={r.riesgo} delay={i * 0.05}>
              <div className="card p-6">
                <h3 className="flex items-center gap-2 font-serif text-lg font-normal text-fg">
                  <Icon name="alert" className="h-5 w-5 flex-none text-bronze" />
                  {r.riesgo}
                </h3>
                <p className="mt-2 text-sm text-fg-soft">{r.descripcion}</p>
                <div className="mt-3 flex items-start gap-2 rounded-[14px] bg-sand p-3">
                  <Icon name="shield" className="mt-0.5 h-4 w-4 flex-none text-bronze" />
                  <p className="text-sm text-fg-soft">
                    <span className="font-semibold text-bronze">Mitigante: </span>
                    {r.mitigante}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
