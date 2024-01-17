import { useJobList } from '../hooks/useJobList.jsx'
import { JobListItem } from './JobListItem.jsx'
import { MdOutlineCancel, MdOutlineFilterNone } from 'react-icons/md'

const JobList = () => {
  const { jobs, nextPage, hasMoreResults, hasActiveFilters, filters, resetFilters, numResults } = useJobList()

  const splitLocation = loc => loc.split(',')[0]

  return (
    <>
      {hasActiveFilters && (
        <>
          <ul id="activeFilterList">
            {filters.locationQuery && (<li>{splitLocation(filters.locationQuery)}</li>)}
            {filters.lat && filters.lng && (<li>My location</li>)}
            {((filters.lat && filters.lng) || filters.locationQuery) && (<li>1000 km</li>)}
            {filters.fullTimeOnly && (<li>Full Time</li>)}
            <li><a href="#" onClick={() => resetFilters()}><MdOutlineCancel /> Clear Filters</a></li>
          </ul>
          <p id="numResults">There are {numResults} jobs matching your filters</p>
        </>
      )}
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