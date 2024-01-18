import MobileFiltersButton from './MobileFiltersButton.jsx'
import { IoSearch } from 'react-icons/io5'
import { useJobList } from '../../hooks/useJobList.jsx'
import LocationFilter from './LocationFilter.jsx'

const SearchForm = () => {
  const { applyJobFilters, filtering: {dispatch, filters }} = useJobList()

  const handleKeywordChange = e => {
    dispatch({
      type: 'UPDATE_KEYWORDS',
      keywords: e.target.value
    })
  }

  const toggleFullTimeOnly = () => {
    dispatch({
      type: 'TOGGLE_FULL_TIME',
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    applyJobFilters()
  }

  return (
    <form id="searchForm" onSubmit={e => handleSubmit(e)}>
      <label className="fieldWrapper" id="titleQueryLabel">
        <input
          onChange={handleKeywordChange}
          value={filters.keywords}
          className="textField"
          placeholder="Filter by keywords..."
        />
      </label>
      <LocationFilter labelId="locationQueryLabel" labelClassName="fieldWrapper" />
      <label id="fullTimeQueryLabel">
        <input type="checkbox" checked={filters.fullTimeOnly} onChange={toggleFullTimeOnly} />
        <span>Full Time <b>Only</b></span>
      </label>
      <MobileFiltersButton />
      <button type="submit" className="button" id="searchButton">
        <IoSearch />
      </button>
    </form>
  )
}

export default SearchForm