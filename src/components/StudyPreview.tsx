function StudyPreview() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
            The Study Room
          </p>

          <h2 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-[var(--color-text-primary)] sm:text-5xl">
            Your books. Your board. One workspace.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--color-text-secondary)]">
            Keep the position in front of you while you read. Move through the
            game, explore positions, and study without constantly switching
            between windows.
          </p>
        </div>

        {/* Workspace preview */}
        <div className="mt-16 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-2xl">
          {/* Top bar */}
          <div className="flex h-14 items-center justify-between border-b border-[var(--color-border)] px-5">
            <span className="text-sm font-medium tracking-wide text-[var(--color-text-primary)]">
              CHESSROOM
            </span>

            <span className="text-sm text-[var(--color-text-secondary)]">
              Study Room
            </span>
          </div>

          {/* Workspace */}
          <div className="grid min-h-[420px] md:grid-cols-2">
            {/* Chessboard preview */}
            <div className="flex items-center justify-center border-b border-[var(--color-border)] p-8 md:border-b-0 md:border-r">
              <div className="w-full max-w-[360px]">
                <div className="grid aspect-square grid-cols-8 overflow-hidden rounded-sm">
                  {Array.from({ length: 64 }).map((_, index) => {
                    const row = Math.floor(index / 8)
                    const col = index % 8
                    const isDark = (row + col) % 2 === 1

                    return (
                      <div
                        key={index}
                        className={
                          isDark
                            ? 'bg-[#5f584d]'
                            : 'bg-[#d8d0bd]'
                        }
                      />
                    )
                  })}
                </div>
              </div>
            </div>

            {/* PDF preview */}
            <div className="flex flex-col bg-[var(--color-pdf-background)]">
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-3">
                <span className="text-sm font-medium text-[#292722]">
                  chess_book.pdf
                </span>

                <span className="text-xs text-[#777269]">
                  12 / 248
                </span>
              </div>

              <div className="flex flex-1 items-center justify-center p-8">
                <div className="flex aspect-[3/4] w-full max-w-[260px] flex-col bg-[#f7f5ef] p-8 shadow-lg">
                  <div className="h-2 w-1/2 bg-[#292722]/20" />

                  <div className="mt-8 h-1.5 w-full bg-[#292722]/10" />
                  <div className="mt-3 h-1.5 w-5/6 bg-[#292722]/10" />
                  <div className="mt-3 h-1.5 w-full bg-[#292722]/10" />

                  <div className="mt-10 grid aspect-square grid-cols-8">
                    {Array.from({ length: 64 }).map((_, index) => {
                      const row = Math.floor(index / 8)
                      const col = index % 8
                      const isDark = (row + col) % 2 === 1

                      return (
                        <div
                          key={index}
                          className={
                            isDark
                              ? 'bg-[#8c8272]'
                              : 'bg-[#e5dfd2]'
                          }
                        />
                      )
                    })}
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="h-1.5 w-full bg-[#292722]/10" />
                    <div className="mt-3 h-1.5 w-4/5 bg-[#292722]/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting text */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-text-secondary)]">
          <span>Interactive board</span>
          <span>PDF reader</span>
          <span>Resizable workspace</span>
          <span>Swap panels</span>
        </div>
      </div>
    </section>
  )
}

export default StudyPreview