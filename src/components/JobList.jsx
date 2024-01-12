import { Link } from 'react-router-dom'
import { getJobList } from '../lib/API.js'
import { useEffect, useState } from 'react'
import getTimeAgo from '../lib/dateUtil.js'

const JobList = () => {
  const [jobs, setJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMoreResults, setHasMoreResults] = useState(false)

  useEffect(() => {
    getJobList(currentPage)
      .then(json => {
        setJobs([...jobs, ...json.results])
        if (null !== json.next) {
          setHasMoreResults(true)
        } else {
          setHasMoreResults(false)
        }
      })
  }, [currentPage])

  const handleLoadMore = e => {
    e.preventDefault();
    setCurrentPage(currentPage + 1)
  }

  return jobs.length > 0 && (
    <>
      <ul id="jobList">
        {jobs.map((j, i) => {
          const company = j.company_detail;
          return (
          <li key={i}>
            <Link to={`jobs/${j.id}`} className="job">
              <div className="logoWrapper" style={{ backgroundColor: company.color }}>
                <img src={company.logo} alt={company.name} />
              </div>
              <header>
                <span>{getTimeAgo(new Date(j.post_date))} ago<i className="bullet"></i>{j.contract_type}</span>
                <h3>{j.title}</h3>
                <span>{company.name}</span>
              </header>
              <small>{j.location}</small>
            </Link>
          </li>
        )
        })}
      </ul>
      {hasMoreResults && <button id="loadMoreButton" className="button" onClick={handleLoadMore}>Load More</button>}
    </>
  )
}

export default JobList