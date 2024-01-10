const JobListings = () => {
  return (
    <section>
      <form id="searchForm">
        <label className="fieldWrapper" id="titleQueryLabel">
          <input className="textField" placeholder="Filter by title.." />
        </label>
        <label className="fieldWrapper" id="locationQueryLabel">
          <input className="textField" placeholder="Filter by location.." />
        </label>
        <div id="fullTimeQueryWrapper">
          <input id="fullTimeQuery" type="checkbox" />
          <label htmlFor="fullTimeQuery">
            Full Time <b>Only</b>
          </label>
        </div>
        <label htmlFor="areMobileFiltersOpen" id="openMobileFiltersButton">
          Filter
        </label>
        <button className="button" id="searchButton">Search</button>
      </form>
      <ul id="jobList">
        <li>
          <a href="/#/jobs/1" className="job">
            <div className="logoWrapper" style={{backgroundColor: 'hsla(157, 56%, 50%, 1)'}}>
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
    </section>
  )
}

export default JobListings