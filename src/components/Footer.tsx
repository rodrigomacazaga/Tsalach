import { navItems } from '../data/content'
import { scrollToId } from './cta'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-sand-100">
      <div className="container-tight py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sand-50 text-sm font-bold text-brand-800">
                T
              </span>
              <span className="text-base font-semibold text-sand-50">Inversión Tsalach 2026</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-200">
              Oportunidad de adquisición y desarrollo inmobiliario en Querétaro. Micrositio de análisis
              preliminar para inversionistas.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Secciones">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sand-300">Secciones</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollToId(n.id)}
                    className="text-sm text-sand-200 transition-colors hover:text-sand-50"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Avisos */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sand-300">
              Aviso de confidencialidad
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-sand-200">
              La información contenida en este sitio es preliminar y está sujeta a validación
              documental, legal, técnica y financiera. Este sitio no constituye oferta pública de
              valores ni recomendación financiera.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-800 pt-6">
          <p className="text-xs leading-relaxed text-sand-300">
            <strong className="font-semibold text-sand-100">Disclaimer legal.</strong> Los escenarios,
            cifras y proyecciones presentados corresponden a un modelo preliminar con fines
            exclusivamente informativos. No representan rendimientos garantizados. Cualquier decisión de
            inversión debe basarse en un proceso de due diligence legal, técnica, fiscal, comercial y
            financiera completo e independiente.
          </p>
          <p className="mt-4 text-xs text-sand-400">
            © {new Date().getFullYear()} Inversión Tsalach 2026 · Información confidencial para análisis
            preliminar de inversión.
          </p>
        </div>
      </div>
    </footer>
  )
}
