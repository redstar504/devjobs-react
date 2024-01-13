const KEY = import.meta.env.VITE_GMAPS_API_KEY
import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: import.meta.env.VITE_GMAPS_API_KEY,
  version: 'weekly',
  libraries: ['places']
})

export function getPlaceRecommendations(query, onResults) {
  loader
    .importLibrary('places')
    .then(({ AutocompleteService }) => {
      const service = new AutocompleteService()
      service.getPlacePredictions({
        input: query,
        types: ['locality'],
      }, onResults)
    })
    .catch((e) => {
      console.error(e)
    });
}