import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Navbar from './components/Navbar'
import StudyPreview from './components/StudyPreview'
import StudyRoom from './pages/StudyRoom'

function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <StudyPreview />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-background)]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/study" element={<StudyRoom />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App