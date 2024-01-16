import { GiSurprisedSkull } from "react-icons/gi";

const ErrorPage = ({onResetError}) => {

  return (
    <a href="#" onClick={() => onResetError()} id="errorWrapper">
      <span>An Unexpected Error Occurred</span>
      <GiSurprisedSkull size={288} />
      <span>Click here to try again</span>
    </a>
  )
}

export default ErrorPage