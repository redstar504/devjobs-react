const API_HOST = import.meta.env.VITE_API_HOST

export async function getJobList(page = 1, filters = {}) {
  // remove any undefined or blank filters before sending the API request
  const isFilterValid = f => f !== undefined && f !== ''
  const flattenedFilters = Object.entries(filters)
  const cleanedFilters = Object.fromEntries(flattenedFilters.filter(f => isFilterValid(f[1])))
  const urlParams = new URLSearchParams(cleanedFilters).toString()

  let apiUri = `${API_HOST}/jobs/?page=${page}`;
  if (urlParams) {
    apiUri += `&${urlParams}`
  }

  return fetch(apiUri).then(response => response.json())
}

export async function getSingleJob(jobId) {
  return fetch(`${API_HOST}/jobs/${jobId}`)
    .then(response => response.json())
}