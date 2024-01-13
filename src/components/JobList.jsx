import { useJobList } from '../hooks/useJobList.jsx'
import { JobListItem } from './JobListItem.jsx'

const JobList = () => {
  const { jobs, nextPage, hasMoreResults } = useJobList()

  const handleLoadMore = e => {
    e.preventDefault()
    nextPage()
  }

  return jobs.length > 0 && (
    <>
      <ul id="jobList">
        {jobs.map((j, i) => <JobListItem key={i} job={j} />)}
      </ul>
      {hasMoreResults && <button id="loadMoreButton" className="button" onClick={handleLoadMore}>Load More</button>}
    </>
  )
}

export default JobList