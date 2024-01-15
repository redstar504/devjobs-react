import { useReducer } from 'react'
import { createPortal } from 'react-dom'
import MobileFilterDialog from './MobileFilterDialog.jsx'
import { useJobList } from '../../hooks/useJobList.jsx'

const MobileFiltersButton = () => {
  const [areMobileFiltersOpen, toggleMobileFilters] = useReducer(v => !v, false)
  const { hasActiveFilters } = useJobList()

  return (
    <>
      {areMobileFiltersOpen && createPortal(<MobileFilterDialog
        onClose={toggleMobileFilters} />, document.getElementById('root'))}
      <button id="openMobileFiltersButton" className={hasActiveFilters ? 'active' : ''} onClick={e => {
        e.preventDefault()
        toggleMobileFilters()
      }}>
        Filter
      </button>
    </>

  )
}

export default MobileFiltersButton