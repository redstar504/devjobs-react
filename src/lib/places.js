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
      new AutocompleteService().getPlacePredictions({
        input: query,
        types: ['locality']
      }, onResults)
    })
    .catch((e) => {
      console.error(e)
    })
}