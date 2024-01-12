import { Link } from 'react-router-dom'
import getTimeAgo from '../lib/dateUtil.js'
import { useJobList } from '../hooks/useJobList.jsx'
import { trans } from '../lib/translate.js'

const JobList = () => {
  const { jobs, nextPage, hasMoreResults } = useJobList()

  const handleLoadMore = e => {
    e.preventDefault();
    nextPage()
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
                <span>{getTimeAgo(new Date(j.post_date))} ago<i className="bullet"></i>{trans(j.contract_type)}</span>
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