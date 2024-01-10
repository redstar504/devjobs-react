import { Outlet } from 'react-router-dom'
import '../styles/screen.css'

export default function Root() {
  return (
    <>
      <article>
        <header>
          <h1>
            <a href="/">
              devjobs
              <span></span>
            </a>
          </h1>
          <label id="darkModeWrapper" htmlFor="darkMode">
            <span></span>
            <i id="modeControl"><i></i></i>
            <span></span>
          </label>
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
    </>
  )
}