import { createContext, useContext, useEffect, useState } from 'react'
import { getJobList } from '../lib/API.js'
import { AppStatusContext } from '../routes/root.jsx'

const JobListContext = createContext()

export function useJobList() {
  return useContext(JobListContext)
}

const initialFilters = {
  lat: undefined,
  lng: undefined,
  placeId: undefined,
  fullTimeOnly: false,
  locationQuery: ''
}

const isInitialFilterSet = f => {
  return f.lat === initialFilters.lat &&
    f.lng === initialFilters.lng &&
    f.placeId === initialFilters.placeId &&
    f.fullTimeOnly === initialFilters.fullTimeOnly &&
    f.locationQuery === initialFilters.locationQuery
}

export function JobListProvider({ children }) {
  const [jobs, setJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMoreResults, setHasMoreResults] = useState(false)
  const [hasActiveFilters, setHasActiveFilters] = useState(false)
  const [filters, setFilters] = useState({...initialFilters})
  const { startLoading, stopLoading, throwError } = useContext(AppStatusContext)

  const nextPage = () => {
    getJobList(currentPage + 1)
      .then(json => {
        setJobs(jobs => [...jobs, ...json.results])
        setHasMoreResults(!!json.next)
        setCurrentPage(currentPage + 1)
      })
  }

  const resetFilters = (onSuccess = f => f) => {
    console.log('Resetting all filters')
    setFilters({...initialFilters})
    setHasActiveFilters(false)
    onSuccess()
  }

  const applyFilters = (onSuccess = f => f) => {
    if (isInitialFilterSet(filters)) {
      resetFilters(onSuccess)
      return;
    }

    startLoading()

    getJobList(1, filters)
      .then(json => {
        setJobs(json.results)
        setHasMoreResults(!!json.next)
        setCurrentPage(1)
        setHasActiveFilters(true)
      })
      .catch(() => {
        console.error('Failed to filter job list')
        throwError()
      })
      .then(() => {
        onSuccess()
        stopLoading()
      })
  }

  const updateFilters = f => {
    setFilters({ ...filters, ...f })
  }

  useEffect(() => {
    if (hasActiveFilters) return
    getJobList()
      .then(json => {
        setJobs(json.results)
        setHasMoreResults(!!json.next)
      })
      .catch(() => {
        console.error(`Failed to fetch job list`)
        throwError()
      })
  }, [hasActiveFilters])

  return (
    <JobListContext.Provider
      value={{ jobs, nextPage, hasMoreResults, applyFilters, filters, updateFilters, hasActiveFilters, resetFilters }}>
      {children}
    </JobListContext.Provider>
  )
}