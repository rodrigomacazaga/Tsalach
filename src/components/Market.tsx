import { comparables } from '../data/content'
import ChartCard from './charts/ChartCard'
import PricePerM2Chart from './charts/PricePerM2Chart'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Market() {
  return (
    <section id="mercado" className="section bg-sand">
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
                  <tr className="bg-ink text-left font-sans text-[11px] uppercase tracking-[1px] text-ondark-soft">
                    <th className="px-4 py-3.5 font-semibold">Desarrollo</th>
                    <th className="px-4 py-3.5 font-semibold">Producto</th>
                    <th className="px-4 py-3.5 font-semibold">Precio de venta</th>
                    <th className="px-4 py-3.5 font-semibold">Terreno</th>
                    <th className="px-4 py-3.5 font-semibold">Construcción</th>
                    <th className="px-4 py-3.5 font-semibold">Renta estimada</th>
                    <th className="px-4 py-3.5 font-semibold">Lectura para inversión</th>
                  </tr>
                </thead>
                <tbody>
                  {comparables.map((c, i) => (
                    <tr key={c.nombre} className={`align-top ${i % 2 ? 'bg-sand' : 'bg-surface'}`}>
                      <td className="px-4 py-4 font-serif text-base text-fg">{c.nombre}</td>
                      <td className="px-4 py-4 text-fg-soft">{c.producto}</td>
                      <td className="px-4 py-4 tabular-nums text-fg-soft">{c.precioVenta}</td>
                      <td className="px-4 py-4 text-fg-soft">{c.terreno}</td>
                      <td className="px-4 py-4 text-fg-soft">{c.construccion}</td>
                      <td className="px-4 py-4 text-fg-soft">{c.renta}</td>
                      <td className="px-4 py-4 text-fg-mute">{c.lectura}</td>
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
            <div className="card-dark flex h-full flex-col justify-center gap-4 p-8">
              <span className="font-serif text-[2.75rem] font-normal leading-none text-bronze-soft">$3,067.57/m²</span>
              <p className="text-[15px] font-light leading-relaxed text-ondark-soft">
                El precio de entrada se encuentra sustancialmente por debajo de referencias comerciales
                de tierra urbanizada en el entorno, sujeto a validación de ubicación exacta,
                urbanización, permisos y condiciones legales.
              </p>
              <div className="mt-2 flex flex-wrap gap-2 font-mono text-[11px] text-ondark-soft">
                <span className="rounded-full border border-ink-line px-3 py-1">Salida mixto $5,500/m²</span>
                <span className="rounded-full border border-ink-line px-3 py-1">Salida lotes $7,500/m²</span>
                <span className="rounded-full border border-ink-line px-3 py-1">La Herencia $12,000–$14,500/m²</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
