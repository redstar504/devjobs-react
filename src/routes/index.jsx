import SearchForm from '../components/SearchForm.jsx'
import JobList from '../components/JobList.jsx'
import { createPortal } from 'react-dom'
import MobileFilterDialog from '../components/MobileFilterDialog.jsx'
import { useReducer } from 'react'

const Index = () => {
  const [areMobileFiltersOpen, toggleMobileFilters] = useReducer(v => !v, import.meta.env.DEV) // todo

  return (
    <>
      <section>
        <SearchForm onOpenMobileFilters={toggleMobileFilters} />
        <JobList />
      </section>
      {areMobileFiltersOpen && createPortal(<MobileFilterDialog
        onClose={toggleMobileFilters} />, document.getElementById('root'))}
    </>
  )
}

export default Index