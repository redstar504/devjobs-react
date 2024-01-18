import { MdOutlineCancel } from 'react-icons/md'
import { memo } from 'react'

const FilterList = ({filters, hasActiveFilters, resetFilters}) => {
  const splitLocation = loc => loc.split(',')[0]

  return hasActiveFilters && (
    <ul id="activeFilterList">
      {filters.locationQuery && (<li>{splitLocation(filters.locationQuery)}</li>)}
      {filters.lat && filters.lng && (<li>My location</li>)}
      {((filters.lat && filters.lng) || filters.locationQuery) && (<li>1000 km</li>)}
      {filters.fullTimeOnly && (<li>Full Time</li>)}
      <li><a href="#" onClick={() => resetFilters()}><MdOutlineCancel /> Clear Filters</a>
      </li>
    </ul>
  )
}

const ActiveFilterList = memo(FilterList, (prevProps, nextProps) => {
  return prevProps.filterKey === nextProps.filterKey;
})

export default ActiveFilterList
