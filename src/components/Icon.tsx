interface IconProps {
  name: keyof typeof paths
  className?: string
}

/** Íconos de línea minimalistas (subconjunto tipo Lucide, inline para performance). */
const paths = {
  check: <path d="M20 6 9 17l-5-5" />,
  road: (
    <>
      <path d="M4 19 8 5" />
      <path d="M20 19 16 5" />
      <path d="M12 5v2M12 11v2M12 17v2" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" />
    </>
  ),
  store: (
    <>
      <path d="M3 9 4.5 4h15L21 9" />
      <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
      <path d="M4 9a2.5 2.5 0 0 0 4 0 2.5 2.5 0 0 0 4 0 2.5 2.5 0 0 0 4 0 2.5 2.5 0 0 0 4 0" />
    </>
  ),
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M7 21h10" />
      <path d="M5 7h14" />
      <path d="M7 7 4 13a3 3 0 0 0 6 0L7 7ZM17 7l-3 6a3 3 0 0 0 6 0l-3-6Z" />
    </>
  ),
  trend: (
    <>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M16 7h5v5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4 3 19h18L12 4Z" />
      <path d="M12 10v4M12 17h.01" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  doc: (
    <>
      <path d="M6 3h8l4 4v14H6Z" />
      <path d="M14 3v4h4M9 13h6M9 17h6" />
    </>
  ),
  whatsapp: (
    <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.15L2 22l4.98-1.6A9.9 9.9 0 1 0 12.04 2Zm5.5 14.06c-.23.65-1.35 1.24-1.87 1.29-.5.05-.96.24-3.23-.67-2.72-1.07-4.44-3.86-4.57-4.04-.13-.18-1.1-1.46-1.1-2.78 0-1.32.7-1.97.94-2.24.24-.27.52-.34.7-.34.17 0 .35 0 .5.01.16.01.38-.06.59.45.23.55.77 1.9.84 2.04.07.14.11.3.02.48-.09.18-.13.29-.27.45-.14.16-.29.36-.41.48-.14.14-.28.28-.12.55.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.23 1.38.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.81.86.27.13.45.2.51.31.07.11.07.63-.16 1.28Z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
} as const

export default function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  const filled = name === 'whatsapp'
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
