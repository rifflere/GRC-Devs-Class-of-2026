export default function NavBar({ teachers, activePage, onPageChange }) {
  return (
    <nav className="navbar">
      <div className="nav-scroll">
        {teachers.map((teacher) => (
          <button
            key={teacher.id}
            className={`nav-tab ${activePage === teacher.id ? 'active' : ''}`}
            onClick={() => onPageChange(teacher.id)}
          >
            {teacher.name}
          </button>
        ))}
        <button
          className={`nav-tab students-tab ${activePage === 'students' ? 'active' : ''}`}
          onClick={() => onPageChange('students')}
        >
          ★ Our Class
        </button>
      </div>
    </nav>
  )
}
