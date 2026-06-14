import { useState } from 'react'
import StickyNote from './StickyNote'

function shuffleOnce(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function StickyWall({ notes }) {
  const [shuffledNotes] = useState(() => shuffleOnce(notes))

  if (shuffledNotes.length === 0) {
    return (
      <div className="sticky-wall empty">
        <p>No notes yet — be the first! See the README for how to add yours.</p>
      </div>
    )
  }

  return (
    <div className="sticky-wall">
      {shuffledNotes.map((note, index) => (
        <StickyNote key={index} note={note} index={index} />
      ))}
    </div>
  )
}
