import { useState } from 'react'
import LocationAssistant from './LocationAssistant.jsx'

const LocationFilter = ({ query, onUpdateParams = f => f }) => {
  const [isUsingDeviceLocation, setIsUsingDeviceLocation] = useState(false)
  const [isUsingAutocomplete, setIsUsingAutocomplete] = useState(false)

  const handleUseDeviceLocation = coords => {
    onUpdateParams({ ...coords, locationQuery: undefined })
    setIsUsingDeviceLocation(true)
  }

  const handleAutocomplete = ({ placeId, city }) => {
    onUpdateParams({ placeId, locationQuery: city })
    setIsUsingAutocomplete(true)
  }

  const handleQueryChange = e => {
    setIsUsingAutocomplete(false)
    onUpdateParams({ locationQuery: e.target.value })
  }

  const assistantEnabled = !isUsingAutocomplete && !isUsingDeviceLocation

  return (
    <>
      {isUsingDeviceLocation && <p>Using my location</p> || (
        <input
          className="textField"
          placeholder="Filter by location..."
          onChange={handleQueryChange}
          value={query}
        />
      )}
      {assistantEnabled && <LocationAssistant query={query} onUseDeviceLocation={handleUseDeviceLocation}
                                              onUseAutocomplete={handleAutocomplete} />}
    </>
  )
}

export default LocationFilter