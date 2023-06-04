import './index.css'

const PasswordElement = props => {
  const {details, deletePasswordElement, isPasswordVisible} = props
  const {website, username, id, password} = details

  const deletePassword = () => {
    deletePasswordElement(id)
  }
  return (
    <li className="outerBox">
      {/* first child */}
      <div className="child1">
        <div className="firstLetter">{website[0].toUpperCase()}</div>
      </div>
      {/* second child */}
      <div className="child2">
        <p>{website}</p>
        <p>{username}</p>
        {!isPasswordVisible && (
          <img
            alt="stars"
            className="passwordImg"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          />
        )}
        {isPasswordVisible && <p>{password}</p>}
      </div>
      {/* third child */}
      <div className="child3">
        <div className="deleteImageContainer">
          <button data-testid="delete" onClick={deletePassword}>
            <img
              alt="delete"
              className="deleteImage"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            />
          </button>
        </div>
      </div>
      {/* fourth child */}
    </li>
  )
}

export default PasswordElement
