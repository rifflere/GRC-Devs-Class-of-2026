export default function NavBar({ teachers, activePage, onPageChange }) {
  return (
    <nav className="navbar">
      <div className="teacher-tabs">
        {teachers.map((teacher) => (
          <button
            key={teacher.id}
            className={`nav-tab ${activePage === teacher.id ? 'active' : ''}`}
            onClick={() => onPageChange(teacher.id)}
          >
            {teacher.name}
          </button>
        ))}
      </div>
      <button
        className={`students-tab ${activePage === 'students' ? 'active' : ''}`}
        onClick={() => onPageChange('students')}
      >
        ★ Our Class
      </button>
    </nav>
  )
}
