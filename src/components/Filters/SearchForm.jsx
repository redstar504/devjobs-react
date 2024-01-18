import MobileFiltersButton from './MobileFiltersButton.jsx'
import { IoSearch } from 'react-icons/io5'
import { useJobList } from '../../hooks/useJobList.jsx'
import LocationFilter from './LocationFilter.jsx'

const SearchForm = () => {
  const { filtering, applyFilters } = useJobList()
  const { dispatch, filters } = filtering


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
    applyFilters()
  }

  return (
    <form id="searchForm" onSubmit={e => handleSubmit(e)}>
      <label className="fieldWrapper" id="titleQueryLabel">
        <input onChange={handleKeywordChange} value={filters.keywords} className="textField" placeholder="Filter by title.." />
      </label>
      <label className="fieldWrapper" id="locationQueryLabel">
        <LocationFilter />
      </label>
      <div id="fullTimeQueryWrapper">
        <input id="fullTimeQuery" type="checkbox" checked={filters.fullTimeOnly} onChange={toggleFullTimeOnly} />
        <label htmlFor="fullTimeQuery">
          Full Time <b>Only</b>
        </label>
      </div>
      <MobileFiltersButton />
      <button type="submit" className="button" id="searchButton">
        <IoSearch />
      </button>
    </form>
  )
}

export default SearchForm