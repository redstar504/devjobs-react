import { useState } from 'react'
import LocationAssistant from './LocationAssistant.jsx'
import { useJobList } from '../../hooks/useJobList.jsx'

const LocationFilter = () => {
  const [isUsingAutocomplete, setIsUsingAutocomplete] = useState(false)
  const [locationHasFocus, setLocationHasFocus] = useState(false)

  const { filtering, settings } = useJobList()
  const { dispatch, filters } = filtering
  const { isIgnoringDeviceLocation, setIsIgnoringDeviceLocation } = settings

  const handleUseDeviceLocation = coords => {
    dispatch({
      type: 'USE_DEVICE_LOCATION',
      coords
    })
  }

  const handleCancelDeviceLocation = () => {
    dispatch({
      type: 'CANCEL_DEVICE_LOCATION'
    })
  }

  const handleAutocomplete = ({ placeId, city }) => {
    dispatch({
      type: 'USE_AUTO_COMPLETE',
      placeId,
      city
    })
    setIsUsingAutocomplete(true)
  }

  const handleQueryChange = e => {
    dispatch({
      type: 'SET_EXPLICIT_LOCATION',
      locationQuery: e.target.value
    })
    setIsUsingAutocomplete(false)
  }

  const isUsingDeviceLocation = filters.lat && filters.lng
  const assistantEnabled = !isUsingAutocomplete && !isUsingDeviceLocation

  return (
    <>
      {isUsingDeviceLocation && (
        <>
          <label>
            <input
              type="checkbox"
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
          value={filters.locationQuery}
          onFocus={() => setLocationHasFocus(true)}
        />
      )}
      {assistantEnabled &&
        <LocationAssistant
          query={filters.locationQuery}
          onUseDeviceLocation={handleUseDeviceLocation}
          onUseAutocomplete={handleAutocomplete}
          locationHasFocus={locationHasFocus}
          onIgnoreDeviceLocation={() => setIsIgnoringDeviceLocation()}
          isIgnoringDeviceLocation={isIgnoringDeviceLocation}
        />
      }
    </>
  )
}

export default LocationFilter