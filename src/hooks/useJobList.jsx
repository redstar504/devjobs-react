import { createContext, useContext, useEffect, useState } from 'react'
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
  const { validateFilters, hasActiveFilters } = filtering;

  const nextPage = () => {
    const nextPage = currentPage + 1;
    getJobList(nextPage)
      .then(json => {
        setJobs(jobs => [...jobs, ...json.results])
        setNumResults(json.count)
        setHasMoreResults(!!json.next)
        setCurrentPage(nextPage)
      })
      .catch(() => {
        console.error(`[Job List] failed to fetch page ${nextPage}`)
      })
  }

  const applyFilters = (onSuccess = f => f) => {
    startLoading()
    validateFilters(filters => {
      getJobList(1, filters)
        .then(json => {
          setJobs(json.results)
          setHasMoreResults(!!json.next)
          setNumResults(json.count)
          setCurrentPage(1)
        })
        .catch(() => {
          console.error('[Job List] failed to fetch filtered results')
          throwError()
        })
        .then(() => {
          onSuccess()
          stopLoading()
        })
    })
  }

  useEffect(() => {
    if (hasActiveFilters) return
    getJobList()
      .then(json => {
        setJobs(json.results)
        setNumResults(json.count)
        setHasMoreResults(!!json.next)
      })
      .catch(() => {
        console.error(`[Job List] failed to fetch all jobs`)
        throwError()
      })
  }, [throwError, hasActiveFilters])

  return (
    <JobListContext.Provider
      value={{
        jobs,
        numResults,
        hasMoreResults,
        nextPage,
        applyFilters,
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