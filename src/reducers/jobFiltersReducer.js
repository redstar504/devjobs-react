import { initialFilters } from '../hooks/useJobFilters.js'

export function jobFiltersReducer(filters, action) {
  switch (action.type) {
    case 'TOGGLE_FULL_TIME':
      return {
        ...filters,
        fullTimeOnly: !filters.fullTimeOnly,
      }
    case 'UPDATE_KEYWORDS':
      return {
        ...filters,
        keywords: action.keywords,
      }
    case 'USE_DEVICE_LOCATION':
      return {
        ...filters,
        ...action.coords,
        locationQuery: '',
        placeId: undefined,
      }
    case 'CANCEL_DEVICE_LOCATION':
      return {
        ...filters,
        lat: undefined,
        lng: undefined,
      }
    case 'USE_AUTO_COMPLETE':
      return  {
        ...filters,
        placeId: action.placeId,
        locationQuery: action.city
      }
    case 'SET_EXPLICIT_LOCATION':
      return {
        ...filters,
        locationQuery: action.locationQuery,
        placeId: undefined,
      }
    case 'RESET_FILTERS':
      return initialFilters
    default:
      throw Error(`Unknown filter reduction: ${action.type}`)
  }
}