import { DEAL, mxn, paymentPlan } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function PaymentTimeline() {
  return (
    <section className="section bg-sand-50">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Estructura de pago"
          title="Esquema propuesto en tres exhibiciones"
          description="Estructura preliminar de desembolsos. Debe validarse contractualmente el número definitivo de exhibiciones, condiciones suspensivas, garantías y entregables de urbanización."
        />

        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-sand-300 sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />

          <ol className="space-y-6">
            {paymentPlan.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <li className={`relative flex gap-5 sm:w-1/2 ${i % 2 ? 'sm:ml-auto sm:pl-10' : 'sm:pr-10 sm:text-right'}`}>
                  {/* Nodo */}
                  <span
                    className={`absolute left-0 top-1.5 z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-4 border-sand-50 bg-brand-700 text-sm font-bold text-sand-50 sm:left-auto ${
                      i % 2 ? 'sm:-left-5' : 'sm:-right-5'
                    }`}
                  >
                    {p.n}
                  </span>
                  <div className={`card ml-14 w-full p-5 sm:ml-0 ${i % 2 ? '' : 'sm:text-left'}`}>
                    <div className="text-xl font-semibold text-ink">{mxn(p.monto)}</div>
                    <p className="mt-1 text-sm font-medium text-brand-700">{p.cuando}</p>
                    {p.destino && <p className="mt-2 text-sm text-ink-muted">Destino: {p.destino}</p>}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl bg-brand-800 p-6 text-center text-sand-50 sm:flex-row sm:justify-between sm:text-left">
            <span className="text-sm font-medium uppercase tracking-wide text-sand-200">Total del paquete</span>
            <span className="text-2xl font-semibold">{mxn(DEAL.inversionTotal)} MXN</span>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-ink-muted">
            La documentación comercial menciona un esquema de pago flexible; se recomienda validar
            contractualmente número definitivo de exhibiciones, condiciones suspensivas, garantías y
            entregables de urbanización.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
