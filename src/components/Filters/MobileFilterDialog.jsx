import { useJobList } from '../../hooks/useJobList.jsx'
import LocationFilter from './LocationFilter.jsx'

const MobileFilterDialog = ({ onClose = f => f }) => {
  const {
    filters,
    hasActiveFilters,
    updateFilters,
    applyFilters,
    resetFilters,
    ignoreDeviceLocation,
    isIgnoringDeviceLocation
  } = useJobList()

  const toggleFullTimeOnly = () => updateFilters({ fullTimeOnly: !filters.fullTimeOnly })

  const handleSubmitSearch = e => {
    e.preventDefault()
    applyFilters(() => onClose())
  }

  const handleResetFilters = e => {
    e.preventDefault()
    resetFilters(() => onClose())
  }

  const { fullTimeOnly } = filters

  return (
    <>
      <div id="mobileFiltersContainer" onClick={onClose}>
        <div id="mobileFiltersWrapper" onClick={e => e.stopPropagation()}>
          <LocationFilter
            onUpdateParams={updateFilters}
            filters={filters}
            onIgnoreDeviceLocation={ignoreDeviceLocation}
            isIgnoringDeviceLocation={isIgnoringDeviceLocation}
          />
          <label id="mobileFullTimeQueryLabel">
            <input type="checkbox" id="mobileFullTimeQuery" checked={fullTimeOnly}
                   onChange={toggleFullTimeOnly} />
            Full Time Only
          </label>
          <button id="submitMobileSearch" className="button" onClick={handleSubmitSearch}>Search</button>
          {hasActiveFilters && <a href="#" onClick={handleResetFilters} id="resetFiltersButton">Reset filters</a>}
        </div>
      </div>
    </>
  )
}

export default MobileFilterDialog