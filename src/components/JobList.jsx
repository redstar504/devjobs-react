import { useJobList } from '../hooks/useJobList.jsx'
import { JobListItem } from './JobListItem.jsx'
import { MdOutlineCancel } from 'react-icons/md'

const JobList = () => {
  const { jobs, nextPage, hasMoreResults, hasActiveFilters, filters, resetFilters } = useJobList()

  return (
    <>
      {hasActiveFilters && (
        <ul id="activeFilterList">
          {filters.locationQuery && (<li>{filters.locationQuery}</li>)}
          {filters.lat && filters.lng && (<li>My location</li>)}
          {((filters.lat && filters.lng) || filters.locationQuery) && (<li>1000 km</li>)}
          {filters.fullTimeOnly && (<li>Full Time</li>)}
          <li><a href="#" onClick={() => resetFilters()}><MdOutlineCancel /> Clear Filters</a></li>
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