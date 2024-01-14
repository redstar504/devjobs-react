import { createContext, useContext, useEffect, useState } from 'react'
import { getJobList } from '../lib/API.js'

const JobListContext = createContext()

export function useJobList() {
  return useContext(JobListContext)
}

export function JobListProvider({ children }) {
  const [jobs, setJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMoreResults, setHasMoreResults] = useState(false)
  const [filters, setFilters] = useState()

  const nextPage = () => {
    setIsLoading(true)
    setCurrentPage(currentPage + 1)
  }

  const applyFilters = f => {
    setFilters(f)
    setIsLoading(true)
  }

  useEffect(() => {
    if (!isLoading) {
      return
    }

    getJobList(currentPage, filters)
      .then(json => {
        setJobs([...jobs, ...json.results])
        setIsLoading(false)
        setHasMoreResults(!!json.next)
      })
  }, [isLoading, jobs, currentPage, filters])

  return (
    <JobListContext.Provider value={{ jobs, nextPage, hasMoreResults, applyFilters }}>
      {children}
    </JobListContext.Provider>
  )
}