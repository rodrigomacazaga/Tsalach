import Reveal from './Reveal'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}

export default function SectionHeader({ eyebrow, title, description, center }: SectionHeaderProps) {
  return (
    <Reveal className={`mb-10 max-w-2xl sm:mb-14 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
