import { locationCards } from '../data/content'
import Icon from './Icon'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const icons = ['road', 'home', 'store', 'building', 'pin'] as const

export default function Location() {
  return (
    <section id="ubicacion" className="section bg-sand-50">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Ubicación y entorno"
          title="Zona estratégica de Querétaro con conectividad y servicios"
          description="El paquete se encuentra en una zona estratégica de Querétaro, con acceso a vialidades principales y cercanía a zonas comerciales, residenciales y de servicios. La documentación comercial señala cercanía a avenida 5 de Febrero, ANTEA y Up-Town, lo que refuerza la conectividad y el atractivo del entorno."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <ImagePlaceholder
              variant="road"
              alt="Imagen de apoyo para representar la conectividad urbana y vialidades principales cercanas al paquete inmobiliario en Querétaro"
              caption="Referencia de conectividad urbana"
              className="aspect-[4/3] w-full"
            />
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {locationCards.map((c, i) => (
              <Reveal key={c} delay={i * 0.06}>
                <div className="card flex h-full items-start gap-3 p-5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={icons[i % icons.length]} />
                  </span>
                  <p className="text-sm font-medium leading-snug text-ink-soft">{c}</p>
                </div>
              </Reveal>
            ))}

            {/* Placeholder de mapa */}
            <Reveal delay={0.3} className="sm:col-span-2">
              <div className="relative overflow-hidden rounded-2xl border border-dashed border-sand-300">
                <ImagePlaceholder
                  variant="map"
                  alt="Espacio reservado para mapa de ubicación; coordenadas exactas por integrar y validar"
                  caption="Mapa de ubicación por integrar / validar con coordenadas exactas"
                  className="aspect-[16/7] w-full rounded-none border-0"
                />
                <span className="absolute right-3 top-3 rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Por validar
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
