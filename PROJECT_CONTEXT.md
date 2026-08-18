# Chessroom — Project Context

## Project

Chessroom is a web application for studying chess books side-by-side with an interactive chessboard.

The main idea is:

- Chessboard on one side
- PDF chess book viewer on the other side
- User can study the book and recreate positions on the board
- Board and PDF panels should eventually be able to swap positions

The application is being developed incrementally, one step at a time.

## Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- chess.js
- react-chessboard
- Git/GitHub

Repository:

https://github.com/NotSuzpicious/chessroom

Local project:

C:\Users\Rishi Kadam\Desktop\chessroom

## Development Rule

Work on the project one step at a time.

Do NOT move to the next step until I confirm that the current step works.

Always use Git while working on the project.

After completing a logical milestone:

1. Test it
2. Ask me to confirm
3. Commit the changes
4. Push to GitHub
5. Continue to the next step

## Current Status

### Landing Page

Completed.

The landing page contains:

- Navbar
- Hero section
- Study Room preview
- How It Works
- CTA
- Footer

The landing page intentionally does NOT have a large feature-list section because the user felt that it was unnatural.

Navbar:
- Logo/name: CHESSROOM
- Study link → /study
- GitHub link works

The Start Studying button also opens /study.

## Study Room

Route:

/study

Completed:

- Study Room route
- Header
- Exit / Back to Home
- Two-panel layout
- Chessboard panel on left
- PDF panel on right
- PDF currently placeholder
- Board panel is larger
- Chessboard max width is 825px

The eventual requirement is that the board and PDF panels can swap positions.

## Chessboard

Packages:

chess.js@1.4.0
react-chessboard@5.12.1

Component:

src/components/ChessBoard.tsx

Current functionality:

- Standard starting position
- Legal chess moves
- Illegal moves rejected
- White orientation
- Black orientation
- Flip Board
- Reset Position

Important:

react-chessboard v5 uses the options API:

<Chessboard
  options={{
    position,
    onPieceDrop,
    boardOrientation,
  }}
/>

onPieceDrop uses PieceDropHandlerArgs.

Black orientation must be a 180-degree rotation.

From Black's perspective:

- bottom-left square = h8
- black pieces remain on rank 8
- white pieces remain on rank 1
- black king appears to the left of black queen
- white king appears to the left of white queen

## Position Editor

Component:

src/components/PositionEditor.tsx

Current status:

Only the modal shell has been implemented.

It opens using:

Set Position

It currently contains:

- Board Editor heading
- Set Position title
- Close button
- Placeholder content
- Cancel button
- Apply Position button

The modal is intentionally separate from the main board.

Clicking outside the modal should NOT close it.

The editor should eventually use a temporary position.

Expected behavior:

Current Position
    ↓
Open Position Editor
    ↓
Edit temporary position
    ↓
Apply → update actual board
    ↓
Cancel → discard changes

## Planned Position Editor

Eventually implement:

1. Piece placement
2. Piece removal
3. Clear board
4. Starting Position
5. Side to move:
   - White
   - Black
6. White castling:
   - Short / O-O
   - Long / O-O-O
7. Black castling:
   - Short / O-O
   - Long / O-O-O
8. En passant square
9. FEN import
10. FEN export

Do these incrementally.

## Future PDF Viewer

The PDF viewer should initially be simple and similar to the default Chrome PDF viewer.

Initial requirements:

- Upload PDF
- Display PDF
- Basic PDF navigation
- Zoom
- Page controls

Do NOT overcomplicate the PDF viewer initially.

## Future Study Room Features

Potential future features:

- Board/PDF panel swapping
- Resizable panels
- PDF page navigation
- Move history
- Undo/redo
- Position editor
- FEN import/export
- Chess book study workflow
- Possibly annotations later

Do not implement future features prematurely.

## Current Next Step

The next planned step is:

Step 33 — Put a real chessboard inside the Position Editor modal.

Then incrementally implement the position editor.

## Important Design Decisions

- Study Room should remain clean.
- Position Editor should be a popup/modal.
- Board and PDF should eventually be swappable.
- PDF viewer should initially remain simple.
- Chessboard should follow standard chess orientation conventions.
- Avoid unnecessary feature-heavy landing page design.