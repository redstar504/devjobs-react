import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { getJobList } from '../lib/API.js'
import { AppStatusContext } from '../routes/root.jsx'
import useJobFilters from './useJobFilters.js'

const JobListContext = createContext()

export function useJobList() {
  return useContext(JobListContext)
}


export function JobListProvider({ children }) {
  const { startLoading, stopLoading, throwError } = useContext(AppStatusContext)

  const [jobs, setJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMoreResults, setHasMoreResults] = useState(false)
  const [numResults, setNumResults] = useState(0)
  const [isIgnoringDeviceLocation, setIsIgnoringDeviceLocation] = useState(false)

  const filtering = useJobFilters()
  const { filters, applyFilters, resetFilters } = filtering

  function jobHydrator(page, filters) {
    startLoading()
    return getJobList(page, filters)
      .then(json => {
        setNumResults(json.count)
        setHasMoreResults(!!json.next)
        return json.results
      })
      .catch(() => {
        console.error(`[Job List] failed to fetch all jobs`)
        throwError()
        return {}
      })
      .then(json => {
        stopLoading()
        return json
      })
  }

  const hydrateJobs = useCallback(jobHydrator, [])

  useEffect(() => {
    hydrateJobs(1).then(results => {
      setJobs(results)
    })
  }, [hydrateJobs])

  const nextPage = () => {
    const nextPage = currentPage + 1
    setCurrentPage(nextPage)
    hydrateJobs(nextPage, filters).then(results => {
      setJobs([...jobs, ...results])
    })
  }

  const applyJobFilters = (onSuccess = f => f) => {
    applyFilters(filters => {
      hydrateJobs(1, filters).then(results => {
        setJobs([])
        setCurrentPage(1)
        setJobs(results)
      })
      onSuccess(filters)
    })
  }

  const resetJobFilters = (onSuccess = f => f) => {
    resetFilters(filters => {
      hydrateJobs(1).then(results => {
        setCurrentPage(1)
        setJobs(results)
      })
      onSuccess(filters)
    })
  }

  return (
    <JobListContext.Provider
      value={{
        jobs,
        numResults,
        hasMoreResults,
        nextPage,
        applyJobFilters,
        resetJobFilters,
        filtering,
        settings: {
          isIgnoringDeviceLocation: isIgnoringDeviceLocation,
          setIsIgnoringDeviceLocation: () => setIsIgnoringDeviceLocation(true)
        }
      }}>
      {children}
    </JobListContext.Provider>
  )
}