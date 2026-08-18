function StudyRoom() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="flex h-16 items-center justify-between border-b border-[var(--color-border)] px-6">
        <a
          href="/"
          className="font-[var(--font-display)] text-lg tracking-wide text-[var(--color-text-primary)]"
        >
          CHESSROOM
        </a>

        <a
          href="/"
          className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          Back to Home
        </a>
      </header>

      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Study Room
          </p>

          <h1 className="mt-4 font-[var(--font-display)] text-4xl text-[var(--color-text-primary)]">
            Your study workspace
          </h1>

          <p className="mt-4 text-[var(--color-text-secondary)]">
            The chessboard and PDF viewer will live here.
          </p>
        </div>
      </main>
    </div>
  )
}

export default StudyRoom