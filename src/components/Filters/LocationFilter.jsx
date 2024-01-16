import { useState } from 'react'
import LocationAssistant from './LocationAssistant.jsx'

const LocationFilter = ({ filters, onUpdateParams = f => f }) => {
  const [isUsingAutocomplete, setIsUsingAutocomplete] = useState(false)
  const [locationHasFocus, setLocationHasFocus] = useState(false)

  const handleUseDeviceLocation = coords => {
    onUpdateParams({ ...coords, locationQuery: '', placeId: undefined })
  }

  const handleCancelDeviceLocation = () => {
    onUpdateParams({lat: undefined, lng: undefined});
  }

  const handleAutocomplete = ({ placeId, city }) => {
    onUpdateParams({ placeId, locationQuery: city })
    setIsUsingAutocomplete(true)
  }

  const handleQueryChange = e => {
    setIsUsingAutocomplete(false)
    onUpdateParams({ locationQuery: e.target.value, placeId: undefined })
  }

  const { locationQuery: query } = filters
  const isUsingDeviceLocation = filters.lat && filters.lng;
  const assistantEnabled = !isUsingAutocomplete && !isUsingDeviceLocation

  return (
    <>
      {isUsingDeviceLocation && (
        <>
          <label id="usingMyLocationLabel">
            <input
              type="checkbox"
              id="usingMyLocation"
              checked={isUsingDeviceLocation}
              onChange={handleCancelDeviceLocation}
            />
            Near my location
          </label>
        </>
      ) || (
        <input
          className="textField"
          placeholder="Filter by location..."
          onChange={handleQueryChange}
          value={query}
          onFocus={() => setLocationHasFocus(true)}
        />
      )}
      {assistantEnabled &&
        <LocationAssistant
          query={query}
          onUseDeviceLocation={handleUseDeviceLocation}
          onUseAutocomplete={handleAutocomplete}
          locationHasFocus={locationHasFocus}
        />
      }
    </>
  )
}

export default LocationFilter