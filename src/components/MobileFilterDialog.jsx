import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FaLocationCrosshairs } from 'react-icons/fa6'

const MobileFilterDialog = ({ onClose = f => f }) => {
  const [locationQuery, setLocationQuery] = useState("")
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false)

  const handleLocationQuery = (query) => {
    setIsSuggestionsOpen(true)
    setLocationQuery(query)
  }

  const handleUseMyLocation = () => {
    const geo = Navigator.geolocation;
    console.log(geo)
  }

  return (
    <>
      <div id="mobileFiltersWrapper">
        <input
          className="textField"
          placeholder="Filter by location..."
          onChange={e => handleLocationQuery(e.target.value)}
          value={locationQuery}
        />
        { isSuggestionsOpen && (
          <ul id="mobileLocationSuggestions">
            <li>
              <a href="#" onClick={handleUseMyLocation}>
                <FaLocationCrosshairs /> Use my location
              </a>
            </li>
          </ul>
        )}
        <label id="mobileFullTimeQueryLabel">
          <input type="checkbox" id="mobileFullTimeQuery" />
          Full Time Only
        </label>
        <label htmlFor="areMobileFiltersOpen" id="mobileFilterButton" className="button">Search</label>
      </div>
      <div id="overlay" onClick={onClose}></div>
    </>
  )
}

export default MobileFilterDialog