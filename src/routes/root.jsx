import { Link, Outlet } from 'react-router-dom'
import '../styles/screen.css'
import '../styles/dark.css'
import { createContext, useEffect, useReducer, useState } from 'react'
import DarkModeControl from '../components/DarkModeControl.jsx'
import { isDarkModeOperatingSystem } from '../lib/darkMode.js'
import { JobListProvider } from '../hooks/useJobList.jsx'
import { PacmanLoader } from 'react-spinners'
import ErrorPage from '../error-page.jsx'

export const AppStatusContext = createContext({})

export default function Root() {
  const [useDarkMode, toggleDarkMode] = useReducer(enabled => !enabled, isDarkModeOperatingSystem())
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (useDarkMode) {
      document.body.id = 'darkModeEnabled'
    } else {
      document.body.id = ''
    }
  }, [useDarkMode])

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)
  const throwError = () => setHasError(true)
  const resetError = () => setHasError(false)

  return (
    <>
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
          {hasError && <ErrorPage onResetError={resetError} /> || (
            <AppStatusContext.Provider value={{startLoading, stopLoading, throwError}}>
              <JobListProvider>
                <Outlet />
              </JobListProvider>
            </AppStatusContext.Provider>
          )}
        </article>
      </main>
      {isLoading && (
        <div id="spinner" className={isLoading ? 'spinning' : ''}>
          <PacmanLoader color="#37C790" size={25} />
        </div>
      )}
    </>
  )
}