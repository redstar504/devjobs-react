import { useReducer } from 'react'
import { createPortal } from 'react-dom'
import MobileFilterDialog from './MobileFilterDialog.jsx'

const MobileFiltersButton = () => {
  const [areMobileFiltersOpen, toggleMobileFilters] = useReducer(v => !v, false)

  return (
    <>
      {areMobileFiltersOpen && createPortal(<MobileFilterDialog
        onClose={toggleMobileFilters} />, document.getElementById('root'))}
      <button id="openMobileFiltersButton" onClick={e => {
        e.preventDefault()
        toggleMobileFilters()
      }}>
        Filter
      </button>
    </>

  )
}

export default MobileFiltersButton