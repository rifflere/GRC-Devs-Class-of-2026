import StickyNote from './StickyNote'

export default function StickyWall({ notes }) {
  if (notes.length === 0) {
    return (
      <div className="sticky-wall empty">
        <p>No notes yet — be the first! See the README for how to add yours.</p>
      </div>
    )
  }

  return (
    <div className="sticky-wall">
      {notes.map((note, index) => (
        <StickyNote key={index} note={note} index={index} />
      ))}
    </div>
  )
}
