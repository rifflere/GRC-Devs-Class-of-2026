const COLORS = ['#fef9c3', '#d1fae5', '#fce7f3', '#dbeafe', '#ede9fe', '#fee2e2']

function sizeClass(message) {
  const len = message?.length ?? 0
  if (len > 180) return 'sticky-note--lg'
  if (len > 100) return 'sticky-note--md'
  return ''
}

export default function StickyNote({ note, index }) {
  const color = COLORS[index % COLORS.length]
  const rotation = ((index * 7) % 11) - 5
  const size = sizeClass(note.message)

  return (
    <div
      className={`sticky-note${size ? ` ${size}` : ''}`}
      style={{ backgroundColor: color, transform: `rotate(${rotation}deg)` }}
    >
      <p className="note-message">{note.message}</p>
      <p className="note-from">— {note.from || 'Anonymous'}</p>
    </div>
  )
}
