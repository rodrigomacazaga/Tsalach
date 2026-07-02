import { comparables } from '../data/content'
import ChartCard from './charts/ChartCard'
import PricePerM2Chart from './charts/PricePerM2Chart'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Market() {
  return (
    <section id="mercado" className="section bg-sand-50">
      <div className="container-tight">
        <SectionHeader
          eyebrow="Mercado y comparables"
          title="Referencias de mercado y entorno competitivo"
          description="La oportunidad se vuelve más clara al compararla contra desarrollos y productos existentes en el entorno. Estos comparables permiten estimar valores de referencia, validar rangos de precio y entender la demanda potencial."
        />

        {/* Tabla de comparables (scroll horizontal en móvil) */}
        <Reveal>
          <div className="card overflow-hidden p-0">
            <div className="table-scroll px-0">
              <table className="w-full min-w-[820px] border-collapse text-sm">
                <thead>
                  <tr className="bg-brand-800 text-left text-xs uppercase tracking-wide text-sand-100">
                    <th className="px-4 py-3 font-semibold">Desarrollo</th>
                    <th className="px-4 py-3 font-semibold">Producto</th>
                    <th className="px-4 py-3 font-semibold">Precio de venta</th>
                    <th className="px-4 py-3 font-semibold">Terreno</th>
                    <th className="px-4 py-3 font-semibold">Construcción</th>
                    <th className="px-4 py-3 font-semibold">Renta estimada</th>
                    <th className="px-4 py-3 font-semibold">Lectura para inversión</th>
                  </tr>
                </thead>
                <tbody>
                  {comparables.map((c, i) => (
                    <tr key={c.nombre} className={`align-top ${i % 2 ? 'bg-sand-50' : 'bg-white'}`}>
                      <td className="px-4 py-4 font-semibold text-ink">{c.nombre}</td>
                      <td className="px-4 py-4 text-ink-soft">{c.producto}</td>
                      <td className="px-4 py-4 tabular-nums text-ink-soft">{c.precioVenta}</td>
                      <td className="px-4 py-4 text-ink-soft">{c.terreno}</td>
                      <td className="px-4 py-4 text-ink-soft">{c.construccion}</td>
                      <td className="px-4 py-4 text-ink-soft">{c.renta}</td>
                      <td className="px-4 py-4 text-ink-muted">{c.lectura}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Gráfica precio por m² */}
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <ChartCard
              title="Precio de referencia por m² de tierra"
              subtitle="Adquisición Tsalach vs. precios de salida proyectados y referencias de mercado"
            >
              <PricePerM2Chart />
            </ChartCard>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="card flex h-full flex-col justify-center gap-4 bg-brand-800 p-7 text-sand-50">
              <span className="text-4xl font-semibold text-gold-400">$3,067.57/m²</span>
              <p className="text-sm leading-relaxed text-sand-100">
                El precio de entrada se encuentra sustancialmente por debajo de referencias comerciales
                de tierra urbanizada en el entorno, sujeto a validación de ubicación exacta,
                urbanización, permisos y condiciones legales.
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-700 px-3 py-1">Salida mixto $5,500/m²</span>
                <span className="rounded-full bg-brand-700 px-3 py-1">Salida lotes $7,500/m²</span>
                <span className="rounded-full bg-brand-700 px-3 py-1">La Herencia $12,000–$14,500/m²</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
