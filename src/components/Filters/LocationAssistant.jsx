import { FaLocationCrosshairs, FaLocationDot } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { getPlaceRecommendations } from '../../lib/places.js'

const autocompleteEnabled = import.meta.env.DEV
console.log(import.meta.env, import.meta.env.DEV, import.meta.env.PROD)

const LocationAssistant = ({
  query,
  onUseDeviceLocation = f => f,
  onUseAutocomplete = f => f
}) => {
  const [suggestions, setSuggestions] = useState([])

  const onAutocomplete = i => e => {
    e.preventDefault()
    onUseAutocomplete(suggestions[i])
  }

  useEffect(() => {
    if ('' === query || !autocompleteEnabled) return

    getPlaceRecommendations(query, g => {
      const mappedCities = g.map(({ structured_formatting: { main_text: city }, place_id }) => ({
        city,
        placeId: place_id
      })).slice(0, 3)
      setSuggestions(mappedCities)
    })
  }, [query])

  const handleUseMyLocation = e => {
    e.preventDefault()

    const success = geo => {
      onUseDeviceLocation({ lat: geo.coords.latitude, lng: geo.coords.longitude })
    }

    navigator.geolocation.getCurrentPosition(success, () => {
      alert('Geolocation unavailable, or has been declined by device settings.')
    })
  }

  return query && (
    <ul id="mobileLocationSuggestions">
      <li>
        <a href="#" onClick={e => handleUseMyLocation(e)}>
          <FaLocationCrosshairs /> Use current location
        </a>
      </li>
      {!!suggestions.length && suggestions.map((s, i) => (
        <li key={i}>
          <a href="#" onClick={onAutocomplete(i)}>
            <FaLocationDot /> {s.city}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default LocationAssistant