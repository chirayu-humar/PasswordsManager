import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ElementsCreater from '../ElementsCreater'
import ElementsPresenter from '../ElementsPresenter'
import './index.css'

class PasswordManager extends Component {
  state = {
    password: '',
    username: '',
    website: '',
    ElementsList: [],
    isPasswordVisible: false,
    searchInput: '',
  }

  createNewElement = () => {
    console.log('createNewElement')
    this.setState(prevState => ({
      ElementsList: [
        ...prevState.ElementsList,
        {
          password: prevState.password,
          username: prevState.username,
          website: prevState.website,
          id: uuidv4(),
        },
      ],
      password: '',
      website: '',
      username: '',
      isPasswordVisible: prevState.isPasswordVisible,
      searchInput: prevState.searchInput,
    }))
  }

  passwordInput = event => {
    const {value} = event.target
    console.log(value)
    this.setState(prevState => ({
      password: value,
      username: prevState.username,
      website: prevState.website,
      ElementsList: prevState.ElementsList,
      isPasswordVisible: prevState.isPasswordVisible,
      searchInput: prevState.searchInput,
    }))
  }

  usernameInput = event => {
    const {value} = event.target
    console.log(value)
    this.setState(prevState => ({
      password: prevState.password,
      username: value,
      website: prevState.website,
      ElementsList: prevState.ElementsList,
      isPasswordVisible: prevState.isPasswordVisible,
      searchInput: prevState.searchInput,
    }))
  }

  websiteInput = event => {
    const {value} = event.target
    console.log(value)
    this.setState(prevState => ({
      password: prevState.password,
      username: prevState.username,
      website: value,
      ElementsList: prevState.ElementsList,
      isPasswordVisible: prevState.isPasswordVisible,
      searchInput: prevState.searchInput,
    }))
  }

  deletePasswordElement = id => {
    console.log('deletePassword Called')
    this.setState(prevState => ({
      ElementsList: prevState.ElementsList.filter(
        eachItem => eachItem.id !== id,
      ),
      password: prevState.password,
      username: prevState.username,
      website: prevState.website,
      isPasswordVisible: prevState.isPasswordVisible,
      searchInput: prevState.searchInput,
    }))
  }

  changePasswordVisibility = () => {
    console.log('changePasswordVisibility called')
    this.setState(prevState => ({
      ElementsList: prevState.ElementsList,
      password: prevState.password,
      username: prevState.username,
      website: prevState.website,
      isPasswordVisible: !prevState.isPasswordVisible,
      searchInput: prevState.searchInput,
    }))
  }

  onChangeSearchInput = event => {
    console.log('search value changed')
    const {value} = event.target
    console.log(value)
    this.setState(prevState => ({
      ElementsList: prevState.ElementsList,
      password: prevState.password,
      username: prevState.username,
      website: prevState.website,
      isPasswordVisible: prevState.isPasswordVisible,
      searchInput: value,
    }))
  }

  render() {
    const {
      ElementsList,
      username,
      password,
      website,
      isPasswordVisible,
      searchInput,
    } = this.state
    return (
      <div className="bg-container">
        <div className="NavBar">
          <div>
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
            />
          </div>
        </div>
        <ElementsCreater
          usernameInput={this.usernameInput}
          websiteInput={this.websiteInput}
          passwordInput={this.passwordInput}
          createNewElement={this.createNewElement}
          username={username}
          password={password}
          website={website}
        />
        <ElementsPresenter
          deletePasswordElement={this.deletePasswordElement}
          ElementsList={ElementsList}
          isPasswordVisible={isPasswordVisible}
          changePasswordVisibility={this.changePasswordVisibility}
          onChangeSearchInput={this.onChangeSearchInput}
          searchInput={searchInput}
        />
      </div>
    )
  }
}

export default PasswordManager
