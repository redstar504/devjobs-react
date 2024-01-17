import { Link } from 'react-router-dom'
import getTimeAgo from '../lib/dateUtil.js'
import { trans } from '../lib/translate.js'
import { FaLocationArrow, FaLocationCrosshairs } from 'react-icons/fa6'

export const JobListItem = ({ job }) => {
  const company = job.company_detail
  return (
    <li>
      <Link to={`jobs/${job.id}`} className="job">
        <div className="logoWrapper" style={{ backgroundColor: company.color }}>
          <img src={company.logo} alt={company.name} />
        </div>
        <header>
          <span>{getTimeAgo(new Date(job.post_date))} ago<i className="bullet"></i>{trans(job.contract_type)}</span>
          <h3>{job.title}</h3>
          <span>{company.name}</span>
        </header>
        <small>
          {job.city}, {job.country}
          {job.distance !== null && (
            <b><FaLocationArrow /> {job.distance} km</b>
          )}
        </small>
      </Link>
    </li>
  )
}