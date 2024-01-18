import { useJobList } from '../../hooks/useJobList.jsx'
import LocationFilter from './LocationFilter.jsx'
import PropTypes from 'prop-types'

const MobileFilterDialog = ({ onClose = f => f }) => {
  const { applyJobFilters, filtering: {
    filters,
    dispatch,
  }} = useJobList()

  const toggleFullTimeOnly = () => dispatch({
    type: 'TOGGLE_FULL_TIME'
  })

  const handleSubmitSearch = e => {
    e.preventDefault()
    applyJobFilters(() => onClose())
  }

  return (
    <>
      <div id="mobileFiltersContainer" onClick={onClose}>
        <div id="mobileFiltersWrapper" onClick={e => e.stopPropagation()}>
          <LocationFilter />
          <label>
            <input
              type="checkbox"
              checked={filters.fullTimeOnly}
              onChange={toggleFullTimeOnly}
            />
            Full Time Only
          </label>
          <button
            className="button"
            onClick={handleSubmitSearch}
          >
            Search
          </button>
        </div>
      </div>
    </>
  )
}

MobileFilterDialog.propTypes = {
  onClose: PropTypes.func
}

export default MobileFilterDialog