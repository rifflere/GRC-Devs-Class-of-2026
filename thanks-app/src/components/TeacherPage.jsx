import StickyWall from './StickyWall'

export default function TeacherPage({ teacher, notes }) {
  const initials = teacher.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  const photoSrc = teacher.photo
    ? `${import.meta.env.BASE_URL}${teacher.photo.replace(/^\//, '')}`
    : null

  return (
    <div className="teacher-page">
      <div className="teacher-header">
        <div className="teacher-photo-wrapper">
          {photoSrc ? (
            <img src={photoSrc} alt={teacher.name} className="teacher-photo" />
          ) : (
            <div className="teacher-photo placeholder">{initials}</div>
          )}
        </div>
        <div className="teacher-info">
          <h2>{teacher.name}</h2>
          <p className="teacher-subject">{teacher.subject}</p>
          {teacher.skills && teacher.skills.length > 0 && (
            <div className="skills">
              <p>Skills we learned along the way:</p>
              <ul className="teacher-skills">
                {teacher.skills && teacher.skills.map((skill) => (
                  <li key={skill} className="teacher-skill">{skill}</li>
                ))}
              </ul>
            </div>)}
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
