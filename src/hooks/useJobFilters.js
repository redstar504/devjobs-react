import { useReducer, useState } from 'react'
import { jobFiltersReducer, initialFilters, isInitialFilterSet } from '../reducers/jobFiltersReducer.js'

export default function useJobFilters() {
  const [filters, dispatch] = useReducer(jobFiltersReducer, initialFilters)
  const [hasActiveFilters, setHasActiveFilters] = useState(false)
  const [filterKey, toggleFilterKey] = useReducer(v => !v, false)

  const resetFilters = (onSuccess = f => f) => {
    console.log('[Job Filters] dispatching reset to reducer')
    toggleFilterKey()
    dispatch({
      type: 'RESET_FILTERS'
    })
    setHasActiveFilters(false)
    onSuccess(filters)
  }

  const applyFilters = (onSuccess = f => f) => {
    console.log('[Job Filters] applying filters')
    if (isInitialFilterSet(filters)) {
      return resetFilters(onSuccess)
    }
    toggleFilterKey()
    setHasActiveFilters(true)
    return onSuccess(filters)
  }

  return {
    filters,
    dispatch,
    applyFilters,
    resetFilters,
    hasActiveFilters,
    filterKey,
  }
}