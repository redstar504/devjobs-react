import { FaLocationCrosshairs, FaLocationDot } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { getPlaceRecommendations } from '../../lib/places.js'

const autocompleteEnabled = true

const LocationAssistant = ({
  query,
  onUseDeviceLocation = f => f,
  onUseAutocomplete = f => f,
  locationHasFocus,
}) => {
  const [suggestions, setSuggestions] = useState([])

  const onAutocomplete = i => e => {
    e.preventDefault()
    onUseAutocomplete(suggestions[i])
  }

  useEffect(() => {
    if ('' === query || !autocompleteEnabled) return

    getPlaceRecommendations(query, g => {
      const mappedCities = g.map(({ description, place_id }) => ({
        city: description,
        placeId: place_id
      })).slice(0, 3)
      setSuggestions(mappedCities)
    })
  }, [query])

  const handleUseMyLocation = e => {
    e.preventDefault()
    console.log('Attempting to gather user location...')

    const success = geo => {
      onUseDeviceLocation({ lat: geo.coords.latitude, lng: geo.coords.longitude })
    }

    navigator.geolocation.getCurrentPosition(success, () => {
      alert('Geolocation unavailable, or has been declined by device settings.')
    })
  }

  return locationHasFocus && (
    <ul id="mobileLocationSuggestions">
      <li>
        <a href="#" onClick={e => handleUseMyLocation(e)}>
          <FaLocationCrosshairs /> Use current location
        </a>
      </li>
      {query && !!suggestions.length && suggestions.map((s, i) => (
        <li key={i}>
          <a href="#" onClick={onAutocomplete(i)}>
            <FaLocationDot /> <span>{s.city}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default LocationAssistant