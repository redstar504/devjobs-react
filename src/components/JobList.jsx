import jobs from '../../data/jobs.json'
import { Link } from 'react-router-dom'

const JobList = () => {
  return (
    <>
      <ul id="jobList">
        {jobs.map(j => (
          <li key={j.id}>
            <Link to={`jobs/${j.id}`} className="job">
              <div className="logoWrapper" style={{ backgroundColor: j.logoBackground }}>
                <img src={j.logo} alt={j.company} />
              </div>
              <header>
                <span>{j.postedAt}<i className="bullet"></i>{j.contract}</span>
                <h3>{j.position}</h3>
                <span>{j.company}</span>
              </header>
              <small>{j.location}</small>
            </Link>
          </li>
        ))}
      </ul>

      <button id="loadMoreButton" className="button">Load More</button>
    </>
  )
}

export default JobList