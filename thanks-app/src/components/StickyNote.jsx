const COLORS = ['#fef9c3', '#d1fae5', '#fce7f3', '#dbeafe', '#ede9fe', '#fee2e2']

export default function StickyNote({ note, index }) {
  const color = COLORS[index % COLORS.length]
  const rotation = ((index * 7) % 11) - 5

  return (
    <div
      className="sticky-note"
      style={{ backgroundColor: color, transform: `rotate(${rotation}deg)` }}
    >
      <p className="note-message">{note.message}</p>
      <p className="note-from">— {note.from || 'Anonymous'}</p>
    </div>
  )
}
