import { locationCards } from '../data/content'
import Icon from './Icon'
import ImagePlaceholder from './ImagePlaceholder'
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
          <Reveal>
            <ImagePlaceholder
              alt="Imagen de apoyo para representar la conectividad urbana y vialidades principales cercanas al paquete inmobiliario en Querétaro"
              caption="Referencia de conectividad urbana (aquí va una foto real)"
              className="aspect-[4/3] w-full"
            />
          </Reveal>

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

            {/* Placeholder de mapa */}
            <Reveal delay={0.3} className="sm:col-span-2">
              <ImagePlaceholder
                tag="Mapa · por validar"
                alt="Espacio reservado para mapa de ubicación; coordenadas exactas por integrar y validar"
                caption="Mapa de ubicación por integrar / validar con coordenadas exactas"
                className="aspect-[16/7] w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
