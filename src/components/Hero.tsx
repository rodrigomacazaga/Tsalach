import { motion } from 'framer-motion'
import { heroMetrics } from '../data/content'
import Icon from './Icon'
import ImagePlaceholder from './ImagePlaceholder'
import { scrollToId } from './cta'

export default function Hero() {
  return (
    <section id="resumen" className="relative scroll-mt-20 bg-bg">
      <div className="container-tight py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Columna texto */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="kicker"
            >
              <Icon name="pin" className="h-4 w-4" />
              Oportunidad inmobiliaria · Querétaro
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 font-serif text-[3rem] font-normal leading-[1.02] tracking-[-0.02em] text-fg sm:text-6xl lg:text-[4.25rem]"
            >
              Inversión<br />
              Tsalach 2026
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg font-light leading-relaxed text-fg-soft sm:text-xl"
            >
              Oportunidad de adquisición y desarrollo inmobiliario en Querétaro con potencial de
              monetización por venta de tierra y desarrollo habitacional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.19 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <button onClick={() => scrollToId('contacto')} className="btn-primary w-full sm:w-auto">
                Solicitar información completa
                <Icon name="arrow" className="h-4 w-4" />
              </button>
              <button onClick={() => scrollToId('escenarios')} className="btn-secondary w-full sm:w-auto">
                Ver escenarios financieros
              </button>
            </motion.div>

            <p className="mono-note mt-8 max-w-xl leading-relaxed">
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
              alt="Vista conceptual del entorno urbano de Querétaro con edificaciones de media y media alta densidad"
              caption="Entorno urbano de Querétaro — referencia visual (aquí va una foto real)"
              className="aspect-[4/3] w-full"
            />
          </motion.div>
        </div>

        {/* Métricas destacadas */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 md:grid-cols-3 lg:grid-cols-5">
          {heroMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 + i * 0.06 }}
              className="card p-5"
            >
              <div className="font-serif text-xl font-normal text-fg sm:text-2xl">{m.value}</div>
              <div className="mt-2 text-xs font-medium leading-snug text-fg-soft">{m.label}</div>
              <div className="mono-note mt-3 text-[11px] uppercase tracking-[0.12em]">{m.foot}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
