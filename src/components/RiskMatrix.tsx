import { risks } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function RiskMatrix() {
  return (
    <section id="riesgos" className="section bg-sand-50">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Riesgos y mitigantes"
          title="Transparencia sobre lo que debe validarse"
          description="Toda oportunidad conlleva riesgos. Aquí se identifican los principales y las acciones propuestas para mitigarlos antes de comprometer capital."
        />

        {/* Desktop: tabla · Móvil: cards */}
        <Reveal>
          <div className="hidden overflow-hidden rounded-2xl border border-sand-200 md:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-brand-800 text-left text-xs uppercase tracking-wide text-sand-100">
                  <th className="px-5 py-3 font-semibold">Riesgo</th>
                  <th className="px-5 py-3 font-semibold">Descripción</th>
                  <th className="px-5 py-3 font-semibold">Mitigante</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((r, i) => (
                  <tr key={r.riesgo} className={i % 2 ? 'bg-sand-50' : 'bg-white'}>
                    <td className="px-5 py-4 font-semibold text-ink">
                      <span className="flex items-center gap-2">
                        <Icon name="alert" className="h-4 w-4 text-gold-500" />
                        {r.riesgo}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-ink-soft">{r.descripcion}</td>
                    <td className="px-5 py-4 text-ink-soft">
                      <span className="flex items-start gap-2">
                        <Icon name="shield" className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
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
              <div className="card p-5">
                <h3 className="flex items-center gap-2 text-base font-semibold text-ink">
                  <Icon name="alert" className="h-5 w-5 text-gold-500" />
                  {r.riesgo}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{r.descripcion}</p>
                <div className="mt-3 flex items-start gap-2 rounded-lg bg-brand-50 p-3">
                  <Icon name="shield" className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                  <p className="text-sm text-brand-800">
                    <span className="font-semibold">Mitigante: </span>
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
