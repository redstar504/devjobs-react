import '../styles/details.css'
import { useLoaderData } from 'react-router-dom'
import jobs from '../../data/jobs.json'
import { useEffect } from 'react'

export const loader = ({params}) => {
  return jobs.find(j => j.id === Number(params.jobId))
}

const JobDetails = () => {
  const job = useLoaderData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
      <section id="jobDescriptionWrapper">
        <div id="companyDetailsCard">
          <a href="#" id="companyLogo" style={{backgroundColor: job.logoBackground}}>
            <img src={job.logo} alt="Scoot" />
          </a>
          <h3>{job.company}<small>{job.company.toLowerCase().replace(' ', '')}.com</small></h3>
          <a href="#" className="button alternate">Company Site</a>
        </div>
        <div id="jobDetailsCard">
          <header>
            <span>{job.postedAt} <i className="bullet"></i> {job.contract}</span>
            <h3>{job.position}</h3>
            <small>{job.location}</small>
            <button className="button" id="applyNowButton">Apply Now</button>
          </header>
          <p>{job.description}</p>
          <h3>Requirements</h3>
          <p>{job.requirements.content}</p>
          <ul>
            {job.requirements.items.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
          <h3>What You Will Do</h3>
          <p>{job.role.content}</p>
          <ol>
            {job.role.items.map((r, i) => <li key={i}>{r}</li>)}
          </ol>
        </div>
      </section>
  )
}

export default JobDetails