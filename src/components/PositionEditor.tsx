interface PositionEditorProps {
  isOpen: boolean
  onClose: () => void
}

function PositionEditor({
  isOpen,
  onClose,
}: PositionEditorProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="position-editor-title"
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Board Editor
            </p>

            <h2
              id="position-editor-title"
              className="mt-1 font-[var(--font-display)] text-xl text-[var(--color-text-primary)]"
            >
              Set Position
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close position editor"
            className="flex h-8 w-8 items-center justify-center rounded-md text-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-background)] hover:text-[var(--color-text-primary)]"
          >
            ×
          </button>
        </div>

        {/* Editor content placeholder */}
        <div className="flex min-h-[360px] items-center justify-center p-8">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Position editor controls will appear here.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-[var(--color-border)] px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-background)] hover:text-[var(--color-text-primary)]"
          >
            Cancel
          </button>

          <button
            type="button"
            className="rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-background)] transition-opacity hover:opacity-90"
          >
            Apply Position
          </button>
        </div>
      </div>
    </div>
  )
}

export default PositionEditor