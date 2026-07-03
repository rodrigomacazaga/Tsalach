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

        {/* Tres exhibiciones como tarjetas — sin superposición en ningún tamaño */}
        <ol className="grid gap-5 md:grid-cols-3">
          {paymentPlan.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <li className="card flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ink font-serif text-lg text-ondark">
                    {p.n}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute">
                    Pago {p.n} de {paymentPlan.length}
                  </span>
                </div>
                <div className="mt-5 font-serif text-3xl font-normal leading-tight text-fg">{mxn(p.monto)}</div>
                <p className="mt-2 text-sm font-medium text-bronze">{p.cuando}</p>
                {p.destino && (
                  <p className="mt-3 border-t border-line pt-3 text-sm text-fg-soft">Destino: {p.destino}</p>
                )}
              </li>
            </Reveal>
          ))}
        </ol>

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
