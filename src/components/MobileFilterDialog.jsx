import { useState } from 'react'
import { FaLocationCrosshairs, FaLocationDot } from 'react-icons/fa6'
import { getPlaceRecommendations } from '../lib/places.js'

const MobileFilterDialog = ({ onClose = f => f }) => {
  const [isSuggestible, setIsSuggestible] = useState(false)
  const [searchParams, setSearchParams] = useState({
    lat: undefined,
    lng: undefined,
    placeId: undefined,
    fullTimeOnly: false,
    query: ''
  })
  const [isSearchingCurrentLocation, setIsSearchingCurrentLocation] = useState(false)
  const [searchSuggestions, setSearchSuggestions] = useState([])

  const handleSubmitSearch = e => {
    e.preventDefault()
    console.log(searchParams)
  }

  const handleTypingLocation = (query) => {
    if ('' === query) {
      setSearchSuggestions([])
    }
    setIsSuggestible(true)
    setSearchParams({ ...searchParams, query: query, placeId: undefined })
    getPlaceRecommendations(query, results => {
      const mappedCities = results.map(({ structured_formatting: { main_text: city }, place_id }) => ({
        city,
        place_id
      })).slice(0, 3)
      setSearchSuggestions(mappedCities)
    })
  }

  const handleUseMyLocation = () => {
    const success = f => {
      setSearchParams({
        ...searchParams,
        query: 'My Current Location',
        lat: f.coords.latitude,
        lng: f.coords.longitude
      })
      setIsSearchingCurrentLocation(false)
      setIsSuggestible(false)
    }

    navigator.geolocation.getCurrentPosition(success, () => {
      alert('Geolocation unavailable, or has been declined by device settings.')
    })
  }

  const handleSelectSuggestion = i => e => {
    e.preventDefault()
    setSearchParams({ ...searchParams, query: searchSuggestions[i].city, placeId: searchSuggestions[i].place_id })
    setIsSuggestible(false)
  }

  const toggleFullTimeOnly = () => setSearchParams({ ...searchParams, fullTimeOnly: !searchParams.fullTimeOnly })

  return (
    <>
      <div id="mobileFiltersContainer" onClick={onClose}>
        <div id="mobileFiltersWrapper" onClick={e => e.stopPropagation()}>
          <input
            className="textField"
            placeholder="Filter by location..."
            onChange={e => handleTypingLocation(e.target.value)}
            value={searchParams.query}
            disabled={isSearchingCurrentLocation}
          />
          {isSuggestible && (
            <ul id="mobileLocationSuggestions">
              <li>
                <a href="#" onClick={handleUseMyLocation}>
                  <FaLocationCrosshairs /> Use current location
                </a>
              </li>
              {searchSuggestions.length > 0 && searchSuggestions.map((s, i) => (
                <li key={i}>
                  <a href="#" onClick={handleSelectSuggestion(i)}>
                    <FaLocationDot />{s.city}
                  </a>
                </li>
              ))}
            </ul>
          )}
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