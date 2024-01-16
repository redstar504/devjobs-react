import { useJobList } from '../hooks/useJobList.jsx'
import { JobListItem } from './JobListItem.jsx'

const JobList = () => {
  const { jobs, nextPage, hasMoreResults, hasActiveFilters, filters } = useJobList()

  return (
    <>
      {hasActiveFilters && (
        <ul id="activeFilterList">
          {filters.lat && filters.lng && (<li>Within 1000 km</li>)}
          {filters.locationQuery && (<li>{filters.locationQuery}</li>)}
          {filters.fullTimeOnly && (<li>Full Time</li>)}
        </ul>
      )}
      {jobs.length > 0 && (
        <>
          <ul id="jobList">
            {jobs.map((j, i) => <JobListItem key={i} job={j} />)}
          </ul>
          {hasMoreResults && <button id="loadMoreButton" className="button" onClick={nextPage}>Load More</button>}
        </>
      )}
    </>
  )
}

export default JobList