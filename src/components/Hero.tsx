import { motion } from 'framer-motion'
import { heroMetrics } from '../data/content'
import Icon from './Icon'
import ImagePlaceholder from './ImagePlaceholder'
import { scrollToId } from './cta'

export default function Hero() {
  return (
    <section id="resumen" className="relative scroll-mt-20 overflow-hidden">
      {/* Fondo sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-sand-100 via-sand-50 to-sand-50" />
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-brand-50 blur-3xl" />

      <div className="container-tight py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Columna texto */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              <Icon name="pin" className="h-4 w-4" />
              Oportunidad inmobiliaria · Querétaro
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Inversión<br />
              <span className="text-brand-700">Tsalach 2026</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              Oportunidad de adquisición y desarrollo inmobiliario en Querétaro con potencial de
              monetización por venta de tierra y desarrollo habitacional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.19 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button onClick={() => scrollToId('contacto')} className="btn-primary w-full sm:w-auto">
                Solicitar información completa
                <Icon name="arrow" className="h-4 w-4" />
              </button>
              <button onClick={() => scrollToId('escenarios')} className="btn-secondary w-full sm:w-auto">
                Ver escenarios financieros
              </button>
            </motion.div>

            <p className="mt-6 max-w-xl text-xs leading-relaxed text-ink-muted">
              Modelo preliminar sujeto a validación legal, técnica, fiscal, comercial y financiera. No
              constituye oferta pública de valores ni garantía de rendimiento.
            </p>
          </div>

          {/* Columna imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <ImagePlaceholder
              variant="skyline"
              alt="Vista conceptual del entorno urbano de Querétaro con edificaciones de media y media alta densidad"
              caption="Entorno urbano de Querétaro"
              className="aspect-[4/3] w-full shadow-card-hover"
            />
          </motion.div>
        </div>

        {/* Métricas destacadas */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {heroMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 + i * 0.06 }}
              className="card p-4 sm:p-5"
            >
              <div className="text-lg font-semibold text-ink sm:text-xl">{m.value}</div>
              <div className="mt-1 text-xs font-medium leading-snug text-ink-soft">{m.label}</div>
              <div className="mt-2 text-[11px] uppercase tracking-wide text-brand-600">{m.foot}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
