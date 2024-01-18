import { useJobList } from '../hooks/useJobList.jsx'

const ResultsCounter = () => {
  const { filtering, numResults } = useJobList()
  const { hasActiveFilters } = filtering

  const tx = numResults > 1 ? 'jobs' : 'job'

  return hasActiveFilters && (
    <div id="numResults">
      {numResults} matching {tx} found
    </div>
  )
}

export default ResultsCounter