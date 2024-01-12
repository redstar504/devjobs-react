// todo: restrict maps api key

const KEY = import.meta.env.VITE_GMAPS_API_KEY

export function getPlaceRecommendations(query) {
  fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${KEY}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
}

getPlaceRecommendations("Van")