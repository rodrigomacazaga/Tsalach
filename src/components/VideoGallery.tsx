import { videos } from '../data/content'
import Reveal from './Reveal'

function VideoCard({ v, className = '' }: { v: (typeof videos)[number]; className?: string }) {
  return (
    <figure className={className}>
      <div className="relative aspect-video overflow-hidden rounded-card border border-ink-line bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          controls
          muted
          playsInline
          preload="metadata"
          poster={v.poster}
        >
          <source src={v.src} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
      <figcaption className="mt-3">
        <h3 className="font-serif text-lg font-normal text-ondark">{v.titulo}</h3>
        <p className="mt-1 text-sm leading-snug text-ondark-soft">{v.desc}</p>
      </figcaption>
    </figure>
  )
}

export default function VideoGallery() {
  const [featured, ...rest] = videos
  return (
    <section id="recorrido" className="section bg-ink">
      <div className="container-tight">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <span className="kicker text-bronze-soft">Recorrido en video</span>
          <h2 className="mt-4 text-[2rem] leading-[1.08] text-ondark sm:text-4xl md:text-[2.75rem]">
            Recorrido por el desarrollo
          </h2>
          <p className="mt-5 text-lg font-light leading-relaxed text-ondark-soft sm:text-xl">
            Tomas reales del sitio: acceso, vialidades urbanizadas, amenidades y el entorno de Tsalach
            Residencial en Querétaro.
          </p>
        </Reveal>

        <Reveal>
          <VideoCard v={featured} />
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((v, i) => (
            <Reveal key={v.src} delay={i * 0.08}>
              <VideoCard v={v} />
            </Reveal>
          ))}
        </div>

        <p className="mono-note mt-6 text-ondark-soft/70">
          Material de obra y entorno con fines informativos. Los avances y amenidades mostrados están
          sujetos a verificación en due diligence.
        </p>
      </div>
    </section>
  )
}
