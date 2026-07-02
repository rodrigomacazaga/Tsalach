import { DEAL, mxn, paymentPlan } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function PaymentTimeline() {
  return (
    <section className="section bg-bg">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Estructura de pago"
          title="Esquema propuesto en tres exhibiciones"
          description="Estructura preliminar de desembolsos. Debe validarse contractualmente el número definitivo de exhibiciones, condiciones suspensivas, garantías y entregables de urbanización."
        />

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-line sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />

          <ol className="space-y-6">
            {paymentPlan.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <li className={`relative flex gap-5 sm:w-1/2 ${i % 2 ? 'sm:ml-auto sm:pl-10' : 'sm:pr-10 sm:text-right'}`}>
                  {/* Nodo */}
                  <span
                    className={`absolute left-0 top-1.5 z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-4 border-bg bg-ink font-serif text-base text-ondark sm:left-auto ${
                      i % 2 ? 'sm:-left-5' : 'sm:-right-5'
                    }`}
                  >
                    {p.n}
                  </span>
                  <div className={`card ml-14 w-full p-6 sm:ml-0 ${i % 2 ? '' : 'sm:text-left'}`}>
                    <div className="font-serif text-2xl font-normal text-fg">{mxn(p.monto)}</div>
                    <p className="mt-1.5 text-sm font-medium text-bronze">{p.cuando}</p>
                    {p.destino && <p className="mt-2 text-sm text-fg-soft">Destino: {p.destino}</p>}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.2}>
          <div className="card-dark mt-8 flex flex-col items-center gap-2 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <span className="kicker text-bronze-soft">Total del paquete</span>
            <span className="font-serif text-3xl font-normal text-ondark">{mxn(DEAL.inversionTotal)} MXN</span>
          </div>
          <p className="mono-note mt-5 leading-relaxed">
            La documentación comercial menciona un esquema de pago flexible; se recomienda validar
            contractualmente número definitivo de exhibiciones, condiciones suspensivas, garantías y
            entregables de urbanización.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
