import './index.css'
import PasswordElement from '../PasswordElement'

const ElementsPresenter = props => {
  const {
    ElementsList,
    deletePasswordElement,
    isPasswordVisible,
    changePasswordVisibility,
    onChangeSearchInput,
    searchInput,
  } = props

  const newList = ElementsList.filter(eachItem =>
    eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
  )
  const {length} = newList
  return (
    <div className="outer">
      {/* first is started */}
      <div className="first">
        <div className="firstChild1">
          <div className="alpha">
            <h1>Your Passwords</h1>
            <div className="alpha1">
              <p>{length}</p>
            </div>
          </div>
          <div className="innerFirstChild1">
            <div className="iconContainer">
              <img
                alt="search"
                className="iconImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              />
            </div>
            <input type="search" onChange={onChangeSearchInput} />
          </div>
        </div>
        <hr />
        <div className="firstChild2">
          <input
            htmlFor="show"
            onClick={changePasswordVisibility}
            className="check"
            type="checkbox"
          />
          <label id="show">Show passwords</label>
        </div>
      </div>
      {/* first is ended */}
      <ul className="second">
        {length !== 0 &&
          newList.map(eachItem => (
            <PasswordElement
              key={eachItem.id}
              deletePasswordElement={deletePasswordElement}
              details={eachItem}
              isPasswordVisible={isPasswordVisible}
            />
          ))}
        {length === 0 && (
          <li className="imgCont">
            <img
              alt="no passwords"
              className="noPwdImg"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            />
            <p>No Passwords</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ElementsPresenter
