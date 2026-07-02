import { thesis } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function InvestmentThesis() {
  return (
    <section className="section bg-sand-50">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Tesis para el inversionista"
          title="Cinco razones para analizar la oportunidad"
          description="Argumentos de la oportunidad, presentados como base de análisis y no como promesa de rendimiento."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thesis.map((t, i) => (
            <Reveal key={t.titulo} delay={i * 0.06}>
              <div className="card h-full p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-700 text-lg font-bold text-sand-50">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{t.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
