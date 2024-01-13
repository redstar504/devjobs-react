const DarkModeControl = ({ onToggleMode }) => {
  return (
    <button id="darkModeControl" onClick={onToggleMode}>
      <span></span>
      <i id="modeControl"><i></i></i>
      <span></span>
    </button>
  )
}

export default DarkModeControl