import { useJobList } from '../hooks/useJobList.jsx'
import { JobListItem } from './JobListItem.jsx'
import NoJobsFound from './NoJobsFound.jsx'

const JobList = () => {
  const {
    jobs,
    nextPage,
    hasMoreResults,
    isInitialized
  } = useJobList()

  if (!isInitialized) {
    return null
  }

  return !!jobs.length ? (
    <>
      <ul id="jobList">
        {jobs.map((j, i) => <JobListItem key={i} job={j} />)}
      </ul>
      {hasMoreResults && <button id="loadMoreButton" className="button" onClick={nextPage}>Load More</button>}
    </>
  ) : <NoJobsFound />
}

export default JobList