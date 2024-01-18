import '../styles/details.css'
import { useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import { getSingleJob } from '../lib/API.js'
import getTimeAgo from '../lib/dateUtil.js'
import { getHostname } from '../lib/urlUtil.js'
import { trans } from '../lib/translate.js'

export const loader = ({ params }) => {
  return getSingleJob(params.jobId)
}

const JobDetails = () => {
  const job = useLoaderData()
  const company = job.company_detail

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section id="jobDescriptionWrapper">
      <div id="companyDetailsCard">
        <a href="#" id="companyLogo" style={{ backgroundColor: company.color }}>
          <img src={company.logo} alt="Scoot" />
        </a>
        <h3>{company.name}<small>{getHostname(company.website)}</small></h3>
        <a href="#" className="button alternate">Company Site</a>
      </div>
      <div id="jobDetailsCard">
        <header>
            <span>{getTimeAgo(new Date(job.post_date), { display: 'long' })} ago
              <i className="bullet"></i> {trans(job.contract_type)}
            </span>
          <h3>{job.title}</h3>
          <small>{job.location}</small>
          <button className="button" id="applyNowButton">Apply Now</button>
        </header>
        <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
      </div>
    </section>
  )
}

export default JobDetails