import StudentCard from './StudentCard'
import students from '../data/students'

export default function StudentsPage() {
  return (
    <div className="students-page">
      <div className="students-page-header">
        <h2>The Class of 2026</h2>
        <p className="page-subtitle">
          Green River College Software Development — the graduating cohort
        </p>
      </div>
      <div className="class-photo-frame">
        <img
          src="./photos/students/all.jpg"
          alt="The Class of 2026"
          className="class-photo"
        />
        <p className="class-photo-caption">Green River College · Software Development · 2026</p>
      </div>
      <div className="students-grid">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  )
}
