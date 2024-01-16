import { Link, Outlet } from 'react-router-dom'
import '../styles/screen.css'
import '../styles/dark.css'
import { useEffect, useReducer } from 'react'
import DarkModeControl from '../components/DarkModeControl.jsx'
import { isDarkModeOperatingSystem } from '../lib/darkMode.js'
import { JobListProvider } from '../hooks/useJobList.jsx'


export default function Root() {
  const [useDarkMode, toggleDarkMode] = useReducer(enabled => !enabled, isDarkModeOperatingSystem())

  useEffect(() => {
    if (useDarkMode) {
      document.body.id = 'darkModeEnabled'
    } else {
      document.body.id = ''
    }
  }, [useDarkMode])

  return (
    <main>
      <article>
        <header>
          <h1>
            <Link to="/">
              <span>desklegends</span>
            </Link>
          </h1>
          <DarkModeControl onToggleMode={toggleDarkMode} />
        </header>
        <JobListProvider>
          <Outlet />
        </JobListProvider>
      </article>
    </main>
  )
}