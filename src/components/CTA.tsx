function CTA() {
  return (
    <section className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-4xl px-6 py-32 text-center lg:px-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Start studying
        </p>

        <h2 className="mt-5 font-[var(--font-display)] text-5xl leading-tight text-[var(--color-text-primary)] sm:text-6xl">
          A better way to study chess.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-secondary)]">
          Open your book. Set up the position. Give the game your full
          attention.
        </p>

        <a
          href="/study"
          className="mt-10 inline-block rounded-lg bg-[var(--color-accent)] px-7 py-3.5 font-medium text-[var(--color-background)] transition-all hover:-translate-y-0.5 hover:opacity-90"
        >
          Open Chessroom
        </a>
      </div>
    </section>
  )
}

export default CTA