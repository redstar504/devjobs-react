import { FaLocationCrosshairs, FaLocationDot } from 'react-icons/fa6'
import { useCallback, useEffect, useState } from 'react'
import { getPlaceRecommendations } from '../../lib/places.js'
import debounce from 'lodash/debounce'

const autocompleteEnabled = true

const LocationAssistant = ({
  query,
  onUseDeviceLocation = f => f,
  onUseAutocomplete = f => f,
  locationHasFocus,
  onIgnoreDeviceLocation = f => f,
  isIgnoringDeviceLocation,
}) => {
  const [suggestions, setSuggestions] = useState([])

  const onAutocomplete = i => e => {
    e.preventDefault()
    onUseAutocomplete(suggestions[i])
  }

  const debounced = useCallback(debounce((query, cb) => cb(query), 350), [])

  useEffect(() => {
    if ('' === query || !autocompleteEnabled) return
    debounced(query, bouncedQuery => {
      getPlaceRecommendations(bouncedQuery, g => {
        if (null === g) return
        const mappedCities = g.map(({ description, place_id }) => ({
          city: description,
          placeId: place_id
        })).slice(0, 3)
        console.log(`Provided location suggestions for "${query}"`)
        setSuggestions(mappedCities)
      })
    })
  }, [debounced, query])

  const handleUseMyLocation = e => {
    e.preventDefault()
    console.log('Attempting to gather user location...')

    const success = geo => {
      onUseDeviceLocation({ lat: geo.coords.latitude, lng: geo.coords.longitude })
    }

    navigator.geolocation.getCurrentPosition(success, () => {
      onIgnoreDeviceLocation()
      alert('Geolocation unavailable, or has been declined by device settings.')
    })
  }

  const shouldShowSuggestions = query && !!suggestions.length

  return locationHasFocus && (shouldShowSuggestions || !isIgnoringDeviceLocation) && (
    <ul id="mobileLocationSuggestions">
      {!isIgnoringDeviceLocation && (
        <li>
          <a href="#" onClick={e => handleUseMyLocation(e)}>
            <FaLocationCrosshairs /> Use current location
          </a>
        </li>
      )}
      {shouldShowSuggestions && suggestions.map((s, i) => (
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