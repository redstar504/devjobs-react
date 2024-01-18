import SearchForm from '../components/Filters/SearchForm.jsx'
import JobList from '../components/JobList.jsx'
import ActiveFilterList from '../components/Filters/ActiveFilterList.jsx'
import { useJobList } from '../hooks/useJobList.jsx'
import ResultsCounter from '../components/ResultsCounter.jsx'

const Index = () => {
  const { filtering } = useJobList()
  const { filters, hasActiveFilters, resetFilters, filterKey } = filtering

  return (
    <>
      <section>
        <SearchForm />
        <div id="jobListMetaWrapper">
          <ActiveFilterList
            filters={filters}
            hasActiveFilters={hasActiveFilters}
            resetFilters={resetFilters}
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