import SearchForm from '../components/Filters/SearchForm.jsx'
import JobList from '../components/JobList.jsx'
import ActiveFilterList from '../components/Filters/ActiveFilterList.jsx'

const Index = () => {

  return (
    <>
      <section>
        <SearchForm />
        <ActiveFilterList />
        <JobList />
      </section>
    </>
  )
}

export default Index