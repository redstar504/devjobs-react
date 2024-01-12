import { Link, Outlet } from 'react-router-dom'
import '../styles/screen.css'
import { useReducer } from 'react'
import DarkModeControl from '../components/DarkModeControl.jsx'
import { isDarkModeOperatingSystem } from '../lib/darkMode.js'
import { JobListProvider } from '../hooks/useJobList.jsx'


export default function Root() {
  const [useDarkMode, toggleDarkMode] = useReducer(enabled => !enabled, isDarkModeOperatingSystem())

  return (
    <main id={useDarkMode ? 'darkModeEnabled' : ''}>
      <article>
        <header>
          <h1>
            <Link to="/">
              devjobs
              <span></span>
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