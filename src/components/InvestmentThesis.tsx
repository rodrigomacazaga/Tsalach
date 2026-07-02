import { thesis } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function InvestmentThesis() {
  return (
    <section className="section bg-sand">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Tesis para el inversionista"
          title="Cinco razones para analizar la oportunidad"
          description="Argumentos de la oportunidad, presentados como base de análisis y no como promesa de rendimiento."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {thesis.map((t, i) => (
            <Reveal key={t.titulo} delay={i * 0.06}>
              <div className="card h-full p-8">
                <div className="font-serif text-3xl font-normal text-bronze">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 font-serif text-lg font-normal text-fg">{t.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-soft">{t.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
