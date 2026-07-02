import { navItems } from '../data/content'
import { scrollToId } from './cta'

export default function Footer() {
  return (
    <footer className="bg-ink text-ondark-soft">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ondark font-serif text-base text-ink">
                T
              </span>
              <span className="font-serif text-lg text-ondark">Inversión Tsalach 2026</span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-ondark-soft">
              Oportunidad de adquisición y desarrollo inmobiliario en Querétaro. Micrositio de análisis
              preliminar para inversionistas.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Secciones">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-bronze-soft">Secciones</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollToId(n.id)}
                    className="text-sm text-ondark-soft transition-colors hover:text-ondark"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Avisos */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-bronze-soft">
              Aviso de confidencialidad
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-ondark-soft">
              La información contenida en este sitio es preliminar y está sujeta a validación
              documental, legal, técnica y financiera. Este sitio no constituye oferta pública de
              valores ni recomendación financiera.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-line pt-6">
          <p className="text-xs leading-relaxed text-ondark-soft">
            <strong className="font-semibold text-ondark">Disclaimer legal.</strong> Los escenarios,
            cifras y proyecciones presentados corresponden a un modelo preliminar con fines
            exclusivamente informativos. No representan rendimientos garantizados. Cualquier decisión de
            inversión debe basarse en un proceso de due diligence legal, técnica, fiscal, comercial y
            financiera completo e independiente.
          </p>
          <p className="mono-note mt-4 text-ondark-soft/70">
            © {new Date().getFullYear()} Inversión Tsalach 2026 · Información confidencial para análisis
            preliminar de inversión.
          </p>
        </div>
      </div>
    </footer>
  )
}
