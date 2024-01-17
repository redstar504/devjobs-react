import { useJobList } from '../hooks/useJobList.jsx'
import { JobListItem } from './JobListItem.jsx'
import { MdOutlineCancel, MdOutlineFilterNone } from 'react-icons/md'
import ActiveFilterList from './Filters/ActiveFilterList.jsx'

const JobList = () => {
  const {
    jobs,
    nextPage,
    hasMoreResults
  } = useJobList()

  return (
    <>
      {jobs.length > 0 && (
        <>
          <ul id="jobList">
            {jobs.map((j, i) => <JobListItem key={i} job={j} />)}
          </ul>
          {hasMoreResults && <button id="loadMoreButton" className="button" onClick={nextPage}>Load More</button>}
        </>
      ) || (
        <div id="noJobsFound">
          <MdOutlineFilterNone />
          No jobs matching your supplied filters
        </div>
      )}
    </>
  )
}

export default JobList