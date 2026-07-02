/** Banda superior de confidencialidad — visible en todo el sitio. */
export default function DisclaimerBanner() {
  return (
    <div className="bg-ink text-center">
      <div className="container-tight py-2">
        <p className="font-mono text-[11px] tracking-[0.08em] text-ondark-soft sm:text-xs">
          Información confidencial para análisis preliminar de inversión · Modelo sujeto a validación (due diligence)
        </p>
      </div>
    </div>
  )
}
