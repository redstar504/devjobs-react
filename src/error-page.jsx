import { GiSurprisedSkull } from "react-icons/gi";
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Link to={"/"} id="errorWrapper">
      <span>An Unexpected Error Occurred</span>
      <GiSurprisedSkull size={288} />
      <span>Please try again later</span>
    </Link>
  )
}

export default ErrorPage