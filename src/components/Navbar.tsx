function Navbar() {
  return (
    <header className="border-b border-[var(--color-border)]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="font-[var(--font-display)] text-xl tracking-wide text-[var(--color-text-primary)]"
        >
          CHESSROOM
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/study"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Study
          </a>

          <a
            href="#practice"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Practice
          </a>

          <a
            href="#analyze"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Analyze
          </a>

          <a
            href="#library"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Library
          </a>
        </div>

        {/* CTA */}
        <a
          href="/study"
          className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-background)] transition-opacity hover:opacity-85"
        >
          Start Studying
        </a>
      </nav>
    </header>
  )
}

export default Navbar