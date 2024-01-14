import { useState } from 'react'
import { useJobList } from '../../hooks/useJobList.jsx'
import LocationFilter from './LocationFilter.jsx'

const MobileFilterDialog = ({ onClose = f => f }) => {
  const { applyFilters } = useJobList()
  const [searchParams, setSearchParams] = useState({
    lat: undefined,
    lng: undefined,
    placeId: undefined,
    fullTimeOnly: false,
    locationQuery: ''
  })

  const updateParams = p => {
    setSearchParams({ ...searchParams, ...p })
  }

  const toggleFullTimeOnly = () => updateParams({ fullTimeOnly: !searchParams.fullTimeOnly })


  const handleSubmitSearch = e => {
    e.preventDefault()
    applyFilters(searchParams)
    onClose()
  }

  const { locationQuery } = searchParams

  return (
    <>
      <div id="mobileFiltersContainer" onClick={onClose}>
        <div id="mobileFiltersWrapper" onClick={e => e.stopPropagation()}>
          <LocationFilter query={locationQuery} onUpdateParams={updateParams} />
          <label id="mobileFullTimeQueryLabel">
            <input type="checkbox" id="mobileFullTimeQuery" checked={searchParams.fullTimeOnly}
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