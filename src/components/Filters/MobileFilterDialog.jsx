import { useJobList } from '../../hooks/useJobList.jsx'
import LocationFilter from './LocationFilter.jsx'

const MobileFilterDialog = ({ onClose = f => f }) => {
  const { filters, updateFilters, applyFilters } = useJobList()

  const toggleFullTimeOnly = () => updateFilters({ fullTimeOnly: !filters.fullTimeOnly })

  const handleSubmitSearch = e => {
    e.preventDefault()
    applyFilters(() => onClose())
  }

  const { locationQuery, fullTimeOnly } = filters

  return (
    <>
      <div id="mobileFiltersContainer" onClick={onClose}>
        <div id="mobileFiltersWrapper" onClick={e => e.stopPropagation()}>
          <LocationFilter query={locationQuery} onUpdateParams={updateFilters} />
          <label id="mobileFullTimeQueryLabel">
            <input type="checkbox" id="mobileFullTimeQuery" checked={fullTimeOnly}
                   onChange={toggleFullTimeOnly} />
            Full Time Only
          </label>
          <button id="submitMobileSearch" className="button" onClick={handleSubmitSearch}>Search</button>
        </div>
      </div>
    </>
  )
}

export default MobileFilterDialog