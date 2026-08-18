function App() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-8 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Chessroom
        </p>

        <h1 className="font-[var(--font-display)] text-6xl leading-tight text-[var(--color-text-primary)]">
          Study chess deeply.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)]">
          Read your chess books alongside an interactive board and turn your
          study sessions into a focused workspace.
        </p>

        <button className="mt-8 rounded-lg bg-[var(--color-accent)] px-6 py-3 font-medium text-[var(--color-background)] transition-opacity hover:opacity-85">
          Start Studying
        </button>
      </div>
    </main>
  )
}

export default App