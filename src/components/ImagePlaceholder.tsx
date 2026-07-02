interface ImagePlaceholderProps {
  /** Texto alternativo real y descriptivo (accesibilidad + SEO). */
  alt: string
  /** Etiqueta visible sobre la imagen conceptual. */
  caption: string
  variant?: 'skyline' | 'road' | 'residential' | 'aerial' | 'map'
  className?: string
}

/**
 * Marcador visual conceptual. NO representa el desarrollo construido.
 * Sustituye por fotos reales colocando <img> con la misma proporción (ver README).
 */
export default function ImagePlaceholder({
  alt,
  caption,
  variant = 'skyline',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden rounded-2xl border border-sand-200 bg-brand-800 ${className}`}
    >
      <Scene variant={variant} />
      {/* Degradado inferior para legibilidad del caption */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
        <span className="inline-flex h-6 items-center rounded-full bg-sand-50/95 px-2.5 text-[11px] font-semibold text-brand-700">
          Vista conceptual
        </span>
        <span className="text-xs font-medium text-sand-50/95 drop-shadow-sm sm:text-sm">{caption}</span>
      </div>
    </div>
  )
}

function Scene({ variant }: { variant: NonNullable<ImagePlaceholderProps['variant']> }) {
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`sky-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2c4d40" />
          <stop offset="55%" stopColor="#33584a" />
          <stop offset="100%" stopColor="#1e342c" />
        </linearGradient>
        <linearGradient id={`sun-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c9a24a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c9a24a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill={`url(#sky-${variant})`} />
      <circle cx="620" cy="120" r="180" fill={`url(#sun-${variant})`} />

      {variant === 'skyline' && <Skyline />}
      {variant === 'aerial' && <Aerial />}
      {variant === 'road' && <Road />}
      {variant === 'residential' && <Residential />}
      {variant === 'map' && <MapScene />}
    </svg>
  )
}

const b = 'rgba(250,248,244,0.13)'
const b2 = 'rgba(250,248,244,0.08)'
const line = 'rgba(250,248,244,0.28)'

function Skyline() {
  const buildings = [
    [40, 260, 70, 240], [120, 200, 60, 300], [190, 300, 80, 200], [280, 160, 66, 340],
    [356, 240, 74, 260], [440, 120, 70, 380], [520, 220, 84, 280], [614, 180, 66, 320],
    [690, 280, 70, 220],
  ]
  return (
    <g>
      {buildings.map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} fill={i % 2 ? b : b2} />
          {Array.from({ length: Math.floor(h / 36) }).map((_, r) =>
            Array.from({ length: Math.floor(w / 22) }).map((_, c) => (
              <rect key={`${r}-${c}`} x={x + 8 + c * 22} y={y + 14 + r * 36} width={8} height={12} fill="rgba(201,162,74,0.35)" />
            )),
          )}
        </g>
      ))}
      <rect x="0" y="470" width="800" height="30" fill="rgba(30,52,44,0.6)" />
    </g>
  )
}

function Aerial() {
  return (
    <g stroke={line} strokeWidth="1.5" fill="none">
      {Array.from({ length: 7 }).map((_, r) => (
        <line key={`h${r}`} x1="0" y1={70 + r * 60} x2="800" y2={70 + r * 60} opacity="0.5" />
      ))}
      {Array.from({ length: 11 }).map((_, c) => (
        <line key={`v${c}`} x1={60 + c * 68} y1="40" x2={60 + c * 68} y2="480" opacity="0.5" />
      ))}
      {[[130, 130], [270, 250], [470, 190], [610, 330], [200, 370], [540, 90]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="46" height="46" fill="rgba(201,162,74,0.28)" stroke="none" />
      ))}
    </g>
  )
}

function Road() {
  return (
    <g>
      <polygon points="330,60 470,60 720,480 120,480" fill="rgba(20,39,31,0.55)" />
      <g stroke="rgba(201,162,74,0.6)" strokeWidth="6" strokeDasharray="26 26">
        <line x1="400" y1="70" x2="420" y2="470" />
      </g>
      <polygon points="330,60 340,60 150,480 120,480" fill={line} />
      <polygon points="460,60 470,60 720,480 690,480" fill={line} />
      {[[70, 200], [70, 320], [690, 220], [700, 350]].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="46" height="120" fill={b} />
      ))}
    </g>
  )
}

function Residential() {
  const houses = [[60, 300], [190, 300], [320, 300], [450, 300], [580, 300], [125, 190], [255, 190], [385, 190], [515, 190], [645, 190]]
  return (
    <g>
      {houses.map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="90" height="80" fill={i % 2 ? b : b2} />
          <polygon points={`${x - 6},${y} ${x + 45},${y - 34} ${x + 96},${y}`} fill="rgba(201,162,74,0.3)" />
          <rect x={x + 34} y={y + 40} width="22" height="40" fill="rgba(30,52,44,0.6)" />
        </g>
      ))}
      <rect x="0" y="470" width="800" height="30" fill="rgba(30,52,44,0.6)" />
    </g>
  )
}

function MapScene() {
  return (
    <g fill="none">
      <rect width="800" height="500" fill="rgba(20,39,31,0.35)" />
      <g stroke={line} strokeWidth="10" opacity="0.5">
        <path d="M-20 380 Q 300 320 850 420" />
        <path d="M120 -20 Q 240 260 180 520" />
        <path d="M560 -20 Q 500 250 640 520" />
      </g>
      <g stroke={line} strokeWidth="3" opacity="0.4">
        {Array.from({ length: 6 }).map((_, r) => (
          <line key={r} x1="0" y1={80 + r * 80} x2="800" y2={80 + r * 80} />
        ))}
      </g>
      <circle cx="400" cy="250" r="16" fill="#c9a24a" stroke="#faf8f4" strokeWidth="3" />
      <circle cx="400" cy="250" r="34" stroke="#c9a24a" strokeWidth="2" opacity="0.6" />
    </g>
  )
}
