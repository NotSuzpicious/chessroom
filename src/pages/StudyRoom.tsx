import ChessBoard from '../components/ChessBoard'
function StudyRoom() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[var(--color-background)]">
      {/* Study Room header */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-[var(--color-border)] px-6">
        <a
          href="/"
          className="font-[var(--font-display)] text-lg tracking-wide text-[var(--color-text-primary)]"
        >
          CHESSROOM
        </a>

        <div className="flex items-center gap-4">
          <span className="text-sm text-[var(--color-text-secondary)]">
            Study Room
          </span>

          <a
            href="/"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Exit
          </a>
        </div>
      </header>

      {/* Workspace */}
      <main className="grid min-h-0 flex-1 md:grid-cols-2">
        {/* Chessboard panel */}
        <section className="flex min-h-0 items-center justify-center border-b border-[var(--color-border)] bg-[var(--color-background)] p-6 md:border-b-0 md:border-r">
          <div className="w-full max-w-[825px]">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                Board
              </span>

              <span className="text-xs text-[var(--color-text-secondary)]">
                Chessboard
              </span>
            </div>

            {/* Board placeholder */}
            {/*<div className="aspect-square w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]" />*/}
            <ChessBoard />
          </div>
        </section>

        {/* PDF panel */}
        <section className="flex min-h-0 flex-col bg-[var(--color-pdf-background)]">
          <div className="flex h-12 shrink-0 items-center justify-between border-b border-black/10 px-5">
            <span className="text-sm font-medium text-[#292722]">
              PDF Reader
            </span>

            <span className="text-xs text-[#777269]">
              No document loaded
            </span>
          </div>

          {/* PDF placeholder */}
          <div className="flex min-h-0 flex-1 items-center justify-center p-8">
            <div className="text-center">
              <p className="text-sm font-medium text-[#292722]">
                No PDF loaded
              </p>

              <p className="mt-2 text-sm text-[#777269]">
                Your chess book will appear here.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default StudyRoom