import type { ReactNode } from 'react'

interface ChartCardProps {
  title: string
  subtitle?: string
  children: ReactNode
  footnote?: string
}

/** Contenedor consistente para gráficas, con título y nota. */
export default function ChartCard({ title, subtitle, children, footnote }: ChartCardProps) {
  return (
    <figure className="card p-5 sm:p-6">
      <figcaption className="mb-5">
        <h3 className="text-base font-semibold text-ink sm:text-lg">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
      </figcaption>
      {children}
      {footnote && <p className="mt-4 text-xs leading-relaxed text-ink-muted">{footnote}</p>}
    </figure>
  )
}
