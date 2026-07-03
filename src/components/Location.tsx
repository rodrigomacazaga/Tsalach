import { locationCards, MAPS } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const icons = ['road', 'home', 'store', 'building', 'pin'] as const

export default function Location() {
  return (
    <section id="ubicacion" className="section bg-sand">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Ubicación y entorno"
          title="Zona estratégica de Querétaro con conectividad y servicios"
          description="El paquete se encuentra en una zona estratégica de Querétaro, con acceso a vialidades principales y cercanía a zonas comerciales, residenciales y de servicios. La documentación comercial señala cercanía a avenida 5 de Febrero, ANTEA y Up-Town, lo que refuerza la conectividad y el atractivo del entorno."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Mapa real (zona de referencia) */}
          <Reveal>
            <div className="card overflow-hidden p-0">
              <div className="relative aspect-[4/3] w-full bg-sand">
                <iframe
                  title="Mapa de la zona de referencia — Av. 5 de Febrero / ANTEA, Querétaro"
                  src={MAPS.embedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-full border border-line bg-bg/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute">
                  Zona de referencia
                </span>
              </div>
              <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="mono-note">{MAPS.label} · ubicación exacta por validar</p>
                <a
                  href={MAPS.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-bronze hover:underline"
                >
                  <Icon name="pin" className="h-4 w-4" />
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </Reveal>

          {/* Atributos del entorno */}
          <div className="grid gap-3 sm:grid-cols-2">
            {locationCards.map((c, i) => (
              <Reveal key={c} delay={i * 0.06}>
                <div className="card flex h-full items-start gap-3 p-5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[14px] bg-sand text-bronze">
                    <Icon name={icons[i % icons.length]} />
                  </span>
                  <p className="text-sm font-medium leading-snug text-fg-soft">{c}</p>
                </div>
              </Reveal>
            ))}

            {/* Nota de validación */}
            <Reveal delay={0.3} className="sm:col-span-2">
              <div className="card flex items-start gap-3 border-dashed p-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[14px] bg-sand text-bronze">
                  <Icon name="alert" />
                </span>
                <p className="text-sm leading-snug text-fg-soft">
                  El mapa muestra la <strong className="font-semibold text-fg">zona de referencia</strong> descrita en la
                  documentación comercial. Las coordenadas exactas del paquete están{' '}
                  <span className="font-mono text-[13px] text-fg-mute">pendientes de validación (due diligence)</span>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
