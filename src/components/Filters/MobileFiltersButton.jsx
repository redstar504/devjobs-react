import { useReducer } from 'react'
import { createPortal } from 'react-dom'
import MobileFilterDialog from './MobileFilterDialog.jsx'
import { useJobList } from '../../hooks/useJobList.jsx'
import { IoBulbSharp } from 'react-icons/io5'

const MobileFiltersButton = () => {
  const [areMobileFiltersOpen, toggleMobileFilters] = useReducer(v => !v, false)
  const { filtering: { hasActiveFilters } } = useJobList()

  return (
    <>
      {areMobileFiltersOpen &&
        createPortal(
          <MobileFilterDialog
            onClose={toggleMobileFilters}
          />, document.getElementById('root')
        )
      }
      <button
        type="button"
        id="openMobileFiltersButton"
        className={"button" + (hasActiveFilters ? " active" : "")}
        onClick={e => {
        e.preventDefault()
        toggleMobileFilters()
      }}>
        <IoBulbSharp />
      </button>
    </>

  )
}

export default MobileFiltersButton