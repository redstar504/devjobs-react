import { useJobList } from '../hooks/useJobList.jsx'
import { JobListItem } from './JobListItem.jsx'

const JobList = () => {
  const { jobs, nextPage, hasMoreResults } = useJobList()

  return jobs.length > 0 && (
    <>
      <ul id="jobList">
        {jobs.map((j, i) => <JobListItem key={i} job={j} />)}
      </ul>
      {hasMoreResults && <button id="loadMoreButton" className="button" onClick={nextPage}>Load More</button>}
    </>
  )
}

export default JobList