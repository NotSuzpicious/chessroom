import { useState } from 'react'
import { Chess } from 'chess.js'
import {
  Chessboard,
  type PieceDropHandlerArgs,
} from 'react-chessboard'
import PositionEditor from './PositionEditor'

function ChessBoard() {
  const [game, setGame] = useState(() => new Chess())
  const [orientation, setOrientation] = useState<'white' | 'black'>('white')
  const [isEditorOpen, setIsEditorOpen] = useState(false)

  function onPieceDrop({
    sourceSquare,
    targetSquare,
  }: PieceDropHandlerArgs) {
    if (!targetSquare) {
      return false
    }

    const gameCopy = new Chess(game.fen())

    try {
      gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
      })

      setGame(gameCopy)
      return true
    } catch {
      return false
    }
  }

  function resetPosition() {
  setGame(new Chess())
}

  return (
    <div className="w-full">
      <Chessboard
        options={{
          position: game.fen(),
          onPieceDrop,
          boardOrientation: orientation,
        }}
      />

      <div className="mt-4 flex justify-center gap-3">
  <button
    type="button"
    onClick={resetPosition}
    className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
  >
    Reset Position
  </button>

  <button
    type="button"
    onClick={() =>
      setOrientation((current) =>
        current === 'white' ? 'black' : 'white',
      )
    }
    className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
  >
    Flip Board
  </button>

  <button
  type="button"
  onClick={() => setIsEditorOpen(true)}
  className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-primary)]"
>
  Set Position
</button>

</div>

<PositionEditor
  isOpen={isEditorOpen}
  onClose={() => setIsEditorOpen(false)}
/>
    </div>
  )
}

export default ChessBoard