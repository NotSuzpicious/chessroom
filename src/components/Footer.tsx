function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <a
              href="/"
              className="font-[var(--font-display)] text-xl tracking-wide text-[var(--color-text-primary)]"
            >
              CHESSROOM
            </a>

            <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--color-text-secondary)]">
              A focused workspace for studying chess with your books and
              positions side by side.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div>
              <p className="font-medium text-[var(--color-text-primary)]">
                Explore
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="/study"
                  className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                  Study
                </a>

                <a
                  href="#how-it-works"
                  className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                  How It Works
                </a>
              </div>
            </div>

            <div>
              <p className="font-medium text-[var(--color-text-primary)]">
                Project
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://github.com/NotSuzpicious/chessroom"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Chessroom</span>
          <span>Built for focused chess study.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer