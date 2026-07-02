import DisclaimerBanner from './components/DisclaimerBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExecutiveSummary from './components/ExecutiveSummary'
import Location from './components/Location'
import AssetComposition from './components/AssetComposition'
import PaymentTimeline from './components/PaymentTimeline'
import Scenarios from './components/Scenarios'
import Market from './components/Market'
import Absorption from './components/Absorption'
import InvestmentThesis from './components/InvestmentThesis'
import Timeline from './components/Timeline'
import RiskMatrix from './components/RiskMatrix'
import DueDiligenceChecklist from './components/DueDiligenceChecklist'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Icon from './components/Icon'
import { whatsappHref } from './components/cta'

export default function App() {
  return (
    <>
      <DisclaimerBanner />
      <Navbar />
      <main>
        <Hero />
        <ExecutiveSummary />
        <Location />
        <AssetComposition />
        <PaymentTimeline />
        <Scenarios />
        <Market />
        <Absorption />
        <InvestmentThesis />
        <Timeline />
        <RiskMatrix />
        <DueDiligenceChecklist />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp flotante */}
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ondark transition-transform hover:scale-105 hover:bg-fg focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>
    </>
  )
}
