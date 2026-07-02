import { WHATSAPP_NUMBER } from '../data/content'

/** Enlace de WhatsApp con mensaje prellenado. Edita WHATSAPP_NUMBER en data/content.ts */
export const whatsappHref = () => {
  const msg = encodeURIComponent(
    'Hola, me interesa recibir el paquete completo de información de Inversión Tsalach 2026.',
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

/** Desplaza a una sección por id, respetando el navbar sticky. */
export const scrollToId = (id: string) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
