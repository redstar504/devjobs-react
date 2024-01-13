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

  const nextPage = () => {
    setIsLoading(true)
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    if (!isLoading) {
      return
    }

    getJobList(currentPage)
      .then(json => {
        setJobs([...jobs, ...json.results])
        setIsLoading(false)
        setHasMoreResults(!!json.next)
      })
  }, [isLoading, jobs, currentPage])

  return (
    <JobListContext.Provider value={{ jobs, nextPage, hasMoreResults }}>
      {children}
    </JobListContext.Provider>
  )
}