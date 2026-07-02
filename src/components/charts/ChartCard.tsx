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
    <figure className="card p-6 sm:p-8">
      <figcaption className="mb-6">
        <h3 className="text-base font-semibold text-fg sm:text-lg">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-fg-soft">{subtitle}</p>}
      </figcaption>
      {children}
      {footnote && <p className="mono-note mt-5 leading-relaxed">{footnote}</p>}
    </figure>
  )
}
