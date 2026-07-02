import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqs } from '../data/content'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section bg-sand">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="FAQ para inversionistas"
          description="Respuestas claras a las dudas más frecuentes sobre la oportunidad, sin promesas de rendimiento."
        />

        <Reveal>
          <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
            {faqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div key={f.q}>
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-bg"
                    >
                      <span className="font-serif text-base text-fg sm:text-lg">{f.q}</span>
                      <span
                        className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line text-bronze transition-transform ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-fg-soft">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
