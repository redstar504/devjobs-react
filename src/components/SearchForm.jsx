const SearchForm = () => {
  return (
    <form id="searchForm">
      <label className="fieldWrapper" id="titleQueryLabel">
        <input className="textField" placeholder="Filter by title.." />
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
      <label htmlFor="areMobileFiltersOpen" id="openMobileFiltersButton">
        Filter
      </label>
      <button className="button" id="searchButton">Search</button>
    </form>
  )
}

export default SearchForm