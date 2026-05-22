import StickyWall from './StickyWall'

export default function TeacherPage({ teacher, notes }) {
  const initials = teacher.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <div className="teacher-page">
      <div className="teacher-header">
        <div className="teacher-photo-wrapper">
          {teacher.photo ? (
            <img src={teacher.photo} alt={teacher.name} className="teacher-photo" />
          ) : (
            <div className="teacher-photo placeholder">{initials}</div>
          )}
        </div>
        <div className="teacher-info">
          <h2>{teacher.name}</h2>
          <p className="teacher-subject">{teacher.subject}</p>
          {teacher.linkedin && (
            <a
              href={teacher.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>

      <div className="thank-you-section">
        <h3>Thank you for teaching us...</h3>
        <p>{teacher.thankYou}</p>
      </div>

      <div className="sticky-wall-section">
        <h3>Notes from the Class of 2026</h3>
        <StickyWall notes={notes} />
      </div>
    </div>
  )
}
