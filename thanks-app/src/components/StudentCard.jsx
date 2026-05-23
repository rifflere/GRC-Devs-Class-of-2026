export default function StudentCard({ student }) {
  const initials = student.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  const photoSrc = student.photo
    ? `${import.meta.env.BASE_URL}${student.photo.replace(/^\//, '')}`
    : null

  return (
    <div className="student-card">
      {photoSrc ? (
        <img src={photoSrc} alt={student.name} className="student-photo" />
      ) : (
        <div className="student-photo placeholder">{initials}</div>
      )}
      <h3>{student.name}</h3>
      {student.blurb && <p className="student-blurb">{student.blurb}</p>}
      {student.linkedin && (
        <a
          href={student.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn ↗
        </a>
      )}
    </div>
  )
}
