const MobileFilterDialog = ({ onClose = f => f }) => {
  return (
    <>
      <div id="mobileFiltersWrapper">
        <input className="textField" placeholder="Filter by location..." />
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