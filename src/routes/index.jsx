import SearchForm from '../components/Filters/SearchForm.jsx'
import JobList from '../components/JobList.jsx'
import ActiveFilterList from '../components/Filters/ActiveFilterList.jsx'
import { useJobList } from '../hooks/useJobList.jsx'
import NoJobsFound from '../components/NoJobsFound.jsx'
import ResultsCounter from '../components/ResultsCounter.jsx'

const Index = () => {
  const { jobs } = useJobList()

  return (
    <>
      <section>
        <SearchForm />
        <div id="jobListMetaWrapper">
          <ActiveFilterList />
          <ResultsCounter />
        </div>
        <JobList />
      </section>
    </>
  )
}

export default Index