import { createContext, useContext, useEffect, useState } from 'react'
import { getJobList } from '../lib/API.js'

const JobListContext = createContext()

export function useJobList() {
  return useContext(JobListContext)
}

export function JobListProvider({ children }) {
  const [jobs, setJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMoreResults, setHasMoreResults] = useState(false)

  const nextPage = () => {
    getJobList(currentPage + 1)
      .then(json => {
        setJobs(jobs => [...jobs, ...json.results])
        setHasMoreResults(!!json.next)
        setCurrentPage(currentPage + 1)
      })
  }

  const applyFilters = filters => {
    getJobList(1, filters)
      .then(json => {
        setJobs(json.results)
        setHasMoreResults(!!json.next)
        setCurrentPage(1)
      })
  }

  useEffect(() => {
    getJobList()
      .then(json => {
        setJobs(json.results)
        setHasMoreResults(!!json.next)
      })
  }, [])

  return (
    <JobListContext.Provider value={{ jobs, nextPage, hasMoreResults, applyFilters }}>
      {children}
    </JobListContext.Provider>
  )
}