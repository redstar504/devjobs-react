import { Link } from 'react-router-dom'
import { getJobList } from '../lib/API.js'
import { useEffect, useState } from 'react'
import getTimeAgo from '../lib/dateUtil.js'

const JobList = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getJobList()
      .then(json => setJobs(json.results))
  }, [])

  return jobs.length > 0 && (
    <>
      <ul id="jobList">
        {jobs.map(j => {
          const company = j.company_detail;
          return (
          <li key={j.id}>
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

      <button id="loadMoreButton" className="button">Load More</button>
    </>
  )
}

export default JobList