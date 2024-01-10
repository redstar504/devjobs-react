import jobs from '../../data/jobs.json'

const JobList = () => {
  return (
    <>
      <ul id="jobList">
        {jobs.map(j => (
          <li key={j.id}>
            <a href="/#/jobs/1" className="job">
              <div className="logoWrapper" style={{ backgroundColor: j.logoBackground }}>
                <img src={j.logo} alt={j.company} />
              </div>
              <span>{j.postedAt}<i className="bullet"></i>{j.contract}</span>
              <h3>{j.position}</h3>
              <span>{j.company}</span>
              <small>{j.location}</small>
            </a>
          </li>
        ))}
      </ul>

      <button id="loadMoreButton" className="button">Load More</button>
    </>
  )
}

export default JobList