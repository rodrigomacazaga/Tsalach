interface ImagePlaceholderProps {
  /** Texto alternativo real y descriptivo (accesibilidad + SEO). */
  alt: string
  /** Caption visible tipo "aquí va una foto/mapa real". */
  caption: string
  /** Etiqueta contextual opcional (p. ej. "Mapa"). */
  tag?: string
  className?: string
}

/**
 * Marcador de imagen/mapa según la guía de estilo: rayado diagonal en arena
 * + caption en Roboto Mono. NO representa el desarrollo construido.
 * Sustituye por una <img> real con la misma proporción (ver README).
 */
export default function ImagePlaceholder({
  alt,
  caption,
  tag = 'Vista conceptual',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-end overflow-hidden rounded-card border border-line ${className}`}
      style={{
        background:
          'repeating-linear-gradient(135deg,#E7DECF,#E7DECF 14px,#EFE8DB 14px,#EFE8DB 28px)',
      }}
    >
      <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-mute">
        {tag}
      </span>
      <p className="w-full p-4 font-mono text-[13px] leading-snug tracking-[0.05em] text-[#8A8072]">
        {caption}
      </p>
    </div>
  )
}
