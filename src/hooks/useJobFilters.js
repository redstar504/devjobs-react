import { useReducer, useState } from 'react'
import { jobFiltersReducer } from '../reducers/jobFiltersReducer.js'

export const initialFilters = {
  lat: undefined,
  lng: undefined,
  placeId: undefined,
  fullTimeOnly: false,
  locationQuery: '',
  keywords: '',
}

const isInitialFilterSet = f => {
  return f.lat === initialFilters.lat &&
    f.lng === initialFilters.lng &&
    f.placeId === initialFilters.placeId &&
    f.fullTimeOnly === initialFilters.fullTimeOnly &&
    f.locationQuery === initialFilters.locationQuery &&
    f.keywords === initialFilters.keywords
}

export default function useJobFilters() {
  const [filters, dispatch] = useReducer(jobFiltersReducer, initialFilters)
  const [hasActiveFilters, setHasActiveFilters] = useState(false)

  const resetFilters = (onSuccess = f => f) => {
    console.log('[Job Filters] dispatching reset to reducer')
    dispatch({
      type: 'RESET_FILTERS'
    })
    setHasActiveFilters(false)
    onSuccess(filters)
  }

  const validateFilters = (onSuccess = f => f) => {
    console.log('[Job Filters] validating filters')
    if (isInitialFilterSet(filters)) {
      return resetFilters(onSuccess)
    }
    setHasActiveFilters(true)
    return onSuccess(filters)
  }

  return {
    filters,
    dispatch,
    validateFilters,
    resetFilters,
    hasActiveFilters,
  }
}