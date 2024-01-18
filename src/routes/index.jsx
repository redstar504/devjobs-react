import SearchForm from '../components/Filters/SearchForm.jsx'
import JobList from '../components/JobList.jsx'
import ActiveFilterList from '../components/Filters/ActiveFilterList.jsx'
import { useJobList } from '../hooks/useJobList.jsx'
import ResultsCounter from '../components/ResultsCounter.jsx'

const Index = () => {
  const { resetJobFilters, filtering: { filters, hasActiveFilters, filterKey } } = useJobList()

  return (
    <>
      <section>
        <SearchForm />
        <div id="jobListMetaWrapper">
          <ActiveFilterList
            filters={filters}
            hasActiveFilters={hasActiveFilters}
            resetFilters={resetJobFilters}
            filterKey={filterKey}
          />
          <ResultsCounter />
        </div>
        <JobList />
      </section>
    </>
  )
}

export default Index