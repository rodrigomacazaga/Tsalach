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
      {eyebrow && <span className="kicker mb-4">{eyebrow}</span>}
      <h2 className="text-[2rem] leading-[1.08] sm:text-4xl md:text-[2.75rem]">{title}</h2>
      {description && (
        <p className="mt-5 text-lg font-light leading-relaxed text-fg-soft sm:text-xl">{description}</p>
      )}
    </Reveal>
  )
}
