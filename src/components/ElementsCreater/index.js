import './index.css'

const ElementsCreater = props => {
  const {
    usernameInput,
    websiteInput,
    passwordInput,
    createNewElement,
    username,
    website,
    password,
  } = props
  return (
    <div className="outerDiv">
      <div className="firstChild">
        <form onSubmit={createNewElement}>
          <h1>Add New Password</h1>
          <div className="inner">
            <div className="iconContainer">
              <img
                alt="website"
                className="iconImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              />
            </div>
            <input
              value={website}
              onChange={websiteInput}
              className="inputText"
              type="text"
              placeholder="Enter Website"
            />
          </div>
          <div className="inner">
            <div className="iconContainer">
              <img
                alt="username"
                className="iconImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              />
            </div>
            <input
              value={username}
              onChange={usernameInput}
              className="inputText"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="inner">
            <div className="iconContainer">
              <img
                alt="password"
                className="iconImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              />
            </div>
            <input
              value={password}
              onChange={passwordInput}
              className="inputText"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="lowerMost">
            <div>
              <button type="submit">Add</button>
            </div>
          </div>
        </form>
      </div>
      <div className="secondChild">
        <img
          alt="password manager"
          className="createrImg"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        />
      </div>
    </div>
  )
}

export default ElementsCreater
