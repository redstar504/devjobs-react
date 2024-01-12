const API_HOST = import.meta.env.VITE_API_HOST;

export async function getJobList() {
  return fetch(`${API_HOST}/jobs/`)
    .then(response => response.json())
}

export async function getSingleJob(jobId) {
  return fetch(`${API_HOST}/jobs/${jobId}`)
    .then(response => response.json())
}