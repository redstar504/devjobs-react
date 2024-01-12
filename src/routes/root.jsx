import { Link, Outlet } from 'react-router-dom'
import '../styles/screen.css'
import { useReducer } from 'react'
import DarkModeControl from '../components/DarkModeControl.jsx'
import { isDarkModeOperatingSystem } from '../lib/darkMode.js'


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
        <Outlet />
      </article>
      <input type="checkbox" id="areMobileFiltersOpen" />
      <div id="mobileFiltersWrapper">
        <input className="textField" placeholder="Filter by location..." />
        <label id="mobileFullTimeQueryLabel">
          <input type="checkbox" id="mobileFullTimeQuery" />
          Full Time Only
        </label>
        <label htmlFor="areMobileFiltersOpen" id="mobileFilterButton" className="button">Search</label>
      </div>
      <label id="overlay" htmlFor="areMobileFiltersOpen"></label>
    </main>
  )
}