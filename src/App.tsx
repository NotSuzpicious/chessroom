import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import StudyPreview from './components/StudyPreview'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />

      <main>
        <Hero />
        <StudyPreview />
        <HowItWorks />
        <CTA />
      </main>
    </div>
  )
}

export default App