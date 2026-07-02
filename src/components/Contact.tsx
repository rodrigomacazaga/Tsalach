import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import { whatsappHref } from './cta'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload: Record<string, string> = { 'form-name': 'contacto' }
    data.forEach((v, k) => (payload[k] = v.toString()))

    setStatus('submitting')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      })
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="section bg-white">
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <Reveal>
            <span className="eyebrow">Contacto</span>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl md:text-4xl">
              Solicita el paquete completo de inversión
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted">
              Comparte tus datos para recibir el modelo financiero editable, carpeta legal preliminar,
              comparables de mercado y calendario de presentación.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                'Modelo financiero editable',
                'Carpeta legal preliminar',
                'Comparables de mercado',
                'Calendario de presentación',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <Icon name="whatsapp" className="h-5 w-5" />
                Enviar mensaje por WhatsApp
              </a>
              <p className="mt-3 text-xs text-ink-muted">
                También puedes escribir a{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-brand-700 underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <Icon name="check" className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">Solicitud recibida</h3>
                  <p className="mt-2 max-w-sm text-sm text-ink-muted">
                    Gracias por tu interés. Nos pondremos en contacto para compartir el paquete completo
                    de información.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form
                  name="contacto"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Requerido por Netlify Forms */}
                  <input type="hidden" name="form-name" value="contacto" />
                  <p className="hidden">
                    <label>
                      No llenar: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Nombre" name="nombre" required autoComplete="name" />
                    <Field label="Empresa" name="empresa" autoComplete="organization" />
                    <Field label="Teléfono" name="telefono" type="tel" autoComplete="tel" />
                    <Field label="Correo" name="correo" type="email" required autoComplete="email" />
                  </div>

                  <Field label="Monto estimado de inversión" name="monto" placeholder="Ej. $10,000,000 MXN" />

                  <div>
                    <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-ink-soft">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      className="w-full rounded-xl border border-sand-300 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      placeholder="Cuéntanos qué información te gustaría revisar."
                    />
                  </div>

                  <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full py-3.5 disabled:opacity-60">
                    {status === 'submitting' ? 'Enviando…' : 'Solicitar información'}
                  </button>

                  {status === 'error' && (
                    <p className="text-sm text-red-700">
                      No se pudo enviar. Verifica tu conexión o escríbenos por WhatsApp o correo.
                    </p>
                  )}

                  <p className="text-center text-xs leading-relaxed text-ink-muted">
                    Al enviar aceptas ser contactado para fines informativos. Tus datos se tratan de
                    forma confidencial.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  autoComplete?: string
}

function Field({ label, name, type = 'text', required, placeholder, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-sand-300 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  )
}
