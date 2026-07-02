import { useEffect, useState } from 'react'
import { navItems } from '../data/content'
import { scrollToId } from './cta'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('resumen')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Resalta la sección visible actual
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-bg/90 backdrop-blur-md' : 'bg-bg/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container-tight flex h-16 items-center justify-between">
        {/* Marca */}
        <button
          onClick={() => go('resumen')}
          className="flex items-center gap-2.5 text-left"
          aria-label="Inversión Tsalach 2026 — ir al inicio"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-serif text-base text-ondark">
            T
          </span>
          <span className="leading-none">
            <span className="block font-serif text-[15px] text-fg">Inversión Tsalach</span>
            <span className="mt-0.5 block font-mono text-[10px] tracking-[0.15em] text-bronze">2026 · QUERÉTARO</span>
          </span>
        </button>

        {/* Desktop */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'text-bronze'
                    : 'text-fg-mute hover:text-fg'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button onClick={() => go('contacto')} className="btn-primary px-5 py-2.5 text-sm">
            Solicitar información
          </button>
        </div>

        {/* Hamburguesa (móvil / tablet) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-line bg-bg transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? 'max-h-[520px]' : 'max-h-0'
        }`}
      >
        <ul className="container-tight flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                  active === item.id ? 'bg-sand text-bronze' : 'text-fg-soft hover:bg-sand'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button onClick={() => go('contacto')} className="btn-primary w-full py-3.5 text-base">
              Solicitar información
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
