const JobList = () => {
  return (
    <>
      <ul id="jobList">
        <li>
          <a href="/#/jobs/1" className="job">
            <div className="logoWrapper" style={{ backgroundColor: 'hsla(157, 56%, 50%, 1)' }}>
              <img src="/logos/crowdfund.svg" alt="Crowdfund" />
            </div>
            <span>5h ago<i className="bullet"></i>Full Time</span>
            <h3>Senior Software Engineer</h3>
            <span>CrowdFund</span>
            <small>United Kingdom</small>
          </a>
        </li>
      </ul>

      <button id="loadMoreButton" className="button">Load More</button>
    </>
  )
}

export default JobList