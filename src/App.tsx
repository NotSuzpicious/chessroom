import Hero from './components/Hero'
import Navbar from './components/Navbar'
import StudyPreview from './components/StudyPreview'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />

      <main>
        <Hero />
        <StudyPreview />
      </main>
    </div>
  )
}

export default App