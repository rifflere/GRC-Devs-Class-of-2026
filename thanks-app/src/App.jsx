import { useState } from 'react'
import NavBar from './components/NavBar'
import TeacherPage from './components/TeacherPage'
import StudentsPage from './components/StudentsPage'
import teachers from './data/teachers'
import notes from './data/notes'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState(teachers[0].id)

  const activeTeacher = teachers.find((t) => t.id === activePage)

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-inner">
          <p className="header-eyebrow">Green River College · Software Development</p>
          <h1 className="site-title">Thank You</h1>
          <p className="header-sub">From the Graduating Class of 2026</p>
        </div>
      </header>

      <NavBar
        teachers={teachers}
        activePage={activePage}
        onPageChange={setActivePage}
      />

      <main className="main-content">
        {activePage === 'students' ? (
          <StudentsPage />
        ) : (
          activeTeacher && (
            <TeacherPage
              teacher={activeTeacher}
              notes={notes[activePage] || []}
            />
          )
        )}
      </main>

      <footer className="site-footer">
        <p>Made with love by the GRC Software Dev Class of 2026 ♥</p>
      </footer>
    </div>
  )
}

export default App
