import { useState } from 'react'

interface ImagePlaceholderProps {
  /** Texto alternativo real y descriptivo (accesibilidad + SEO). */
  alt: string
  /** Caption visible tipo "aquí va una foto/mapa real". */
  caption: string
  /** Etiqueta contextual opcional (p. ej. "Mapa"). */
  tag?: string
  /**
   * Ruta/URL de una foto real. Si se define y carga bien, se muestra la foto;
   * si falla o está vacía, cae al marcador rayado (nunca hay imagen rota).
   * Coloca archivos en `public/` y usa `/mi-foto.jpg`, o define HERO_IMAGE en content.ts.
   */
  src?: string
  className?: string
}

/**
 * Muestra una foto real cuando se provee `src`; de lo contrario, un marcador
 * de estilo (rayado diagonal + caption en Roboto Mono). No representa el
 * desarrollo construido salvo que se coloque una foto real.
 */
export default function ImagePlaceholder({
  alt,
  caption,
  tag = 'Vista conceptual',
  src,
  className = '',
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-end overflow-hidden rounded-card border border-line ${className}`}
      style={{
        background: 'repeating-linear-gradient(135deg,#E7DECF,#E7DECF 14px,#EFE8DB 14px,#EFE8DB 28px)',
      }}
    >
      {showImage && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Degradado para legibilidad del caption cuando hay foto */}
      {showImage && <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />}

      <span
        className={`absolute left-4 top-4 inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] ${
          showImage ? 'border-transparent bg-ink/70 text-ondark' : 'border-line bg-bg/80 text-fg-mute'
        }`}
      >
        {tag}
      </span>
      <p
        className={`relative w-full p-4 font-mono text-[13px] leading-snug tracking-[0.05em] ${
          showImage ? 'text-ondark' : 'text-[#8A8072]'
        }`}
      >
        {caption}
      </p>
    </div>
  )
}
