import { MdOutlineFilterNone } from 'react-icons/md'

const NoJobsFound = () => {
  return (
    <div id="noJobsFound">
      <MdOutlineFilterNone />
      No jobs matching your supplied filters
    </div>
  )
}

export default NoJobsFound