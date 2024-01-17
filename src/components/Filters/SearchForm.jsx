import MobileFiltersButton from './MobileFiltersButton.jsx'
import { IoSearch } from 'react-icons/io5'
import { useJobList } from '../../hooks/useJobList.jsx'

const SearchForm = () => {
  console.log("Rendering search form")
  const { filters, updateFilters, applyFilters } = useJobList()

  const handleKeywordChange = e => {
    updateFilters({keywords: e.target.value})
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
        <input className="textField" placeholder="Filter by location.." />
      </label>
      <div id="fullTimeQueryWrapper">
        <input id="fullTimeQuery" type="checkbox" />
        <label htmlFor="fullTimeQuery">
          Full Time <b>Only</b>
        </label>
      </div>
      <MobileFiltersButton />
      <button className="button" id="searchButton">
        <IoSearch />
      </button>
    </form>
  )
}

export default SearchForm