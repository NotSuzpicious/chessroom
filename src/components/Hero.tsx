function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/chessroom-hero.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--color-background)]/80"
      />

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Your digital chess study
          </p>

          <h1 className="max-w-3xl font-[var(--font-display)] text-6xl leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-7xl lg:text-8xl">
            Study chess deeply.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
            Read your chess books alongside an interactive board and turn every
            position into an opportunity to understand the game.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/study"
              className="rounded-lg bg-[var(--color-accent)] px-6 py-3.5 font-medium text-[var(--color-background)] transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Start Studying
            </a>

            <a
              href="#how-it-works"
              className="rounded-lg border border-[var(--color-border)] px-6 py-3.5 font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-surface)]"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero