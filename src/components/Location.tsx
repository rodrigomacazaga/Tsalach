import { locationCards, MAPS } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const icons = ['road', 'home', 'store', 'building', 'pin'] as const

function MapTile({ src, title, tag }: { src: string; title: string; tag: string }) {
  return (
    <div className="card overflow-hidden p-0">
      <div className="relative aspect-[4/3] w-full bg-sand">
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-full border border-line bg-bg/90 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-mute">
          {tag}
        </span>
      </div>
    </div>
  )
}

export default function Location() {
  return (
    <section id="ubicacion" className="section bg-sand">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Ubicación y entorno"
          title="Zona estratégica de Querétaro con conectividad y servicios"
          description="El paquete se encuentra en una zona estratégica de Querétaro, con acceso a vialidades principales y cercanía a zonas comerciales, residenciales y de servicios. La documentación comercial señala cercanía a avenida 5 de Febrero, ANTEA y Up-Town, lo que refuerza la conectividad y el atractivo del entorno."
        />

        {/* Mapa de calles + vista aérea (Google Maps, zona de referencia) */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <MapTile src={MAPS.embedUrl} title="Mapa de calles de la zona de referencia" tag="Mapa · calles" />
          </Reveal>
          <Reveal delay={0.08}>
            <MapTile src={MAPS.satelliteUrl} title="Vista aérea (satélite) de la zona de referencia" tag="Vista aérea" />
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="mono-note">{MAPS.label}</p>
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
        </Reveal>

        {/* Atributos del entorno */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locationCards.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div className="card flex h-full items-start gap-3 p-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[14px] bg-sand text-bronze">
                  <Icon name={icons[i % icons.length]} />
                </span>
                <p className="text-sm font-medium leading-snug text-fg-soft">{c}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="card flex h-full items-start gap-3 border-dashed p-5">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[14px] bg-sand text-bronze">
                <Icon name="alert" />
              </span>
              <p className="text-sm leading-snug text-fg-soft">
                Ubicación del desarrollo <strong className="font-semibold text-fg">Tsalach Residencial</strong>. Los
                límites exactos de los lotes del paquete se{' '}
                <span className="font-mono text-[13px] text-fg-mute">confirman en due diligence</span>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
