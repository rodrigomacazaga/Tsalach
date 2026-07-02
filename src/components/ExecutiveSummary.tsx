import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import Icon from './Icon'

const rutas = [
  'Venta de lotes unifamiliares',
  'Venta o desarrollo del lote de uso mixto',
  'Desarrollo escalonado de departamentos en el macro lote',
  'Captación de demanda de vivienda por debajo de $2.4 MDP',
]

export default function ExecutiveSummary() {
  return (
    <section className="section bg-bg">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Resumen ejecutivo"
          title="Comprar tierra a valor de entrada competitivo, con múltiples rutas de monetización"
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-3">
            <div className="space-y-5 text-lg font-light leading-relaxed text-fg-soft">
              <p>
                La oportunidad consiste en adquirir un paquete inmobiliario de{' '}
                <strong className="font-normal text-fg">14,669.59 m²</strong> por{' '}
                <strong className="font-normal text-fg">$45,000,000 MXN</strong>, equivalente a{' '}
                <strong className="font-normal text-fg">$3,067.57/m²</strong>. El paquete incluye 17
                lotes unifamiliares, un lote de uso mixto y un macro lote con potencial para desarrollo
                habitacional vertical.
              </p>
              <p>
                La tesis de inversión es comprar tierra a un valor de entrada competitivo y monetizarla
                mediante diferentes rutas de ejecución, modulando el riesgo por fases.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="card p-8">
              <h3 className="kicker">Rutas de monetización</h3>
              <ul className="mt-5 space-y-3.5">
                {rutas.map((r) => (
                  <li key={r} className="flex gap-3 text-[15px] text-fg-soft">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-sand text-bronze">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
