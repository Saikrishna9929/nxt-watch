import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'

import {ThemeContext} from '../../context/index'

import {
  LoginContainer,
  LoginFormContainer,
  LoginWebsiteLogo,
  InputLabel,
  UsernameInput,
  PasswordInput,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  LoginError,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    isFailure: false,
    errorMsg: '',
    usernameTyping: false,
    passwordTyping: false,
  }

  onLoginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({isFailure: true, errorMsg})
  }

  onSubmitLoginDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onUpdateCheckbox = event => {
    this.setState({isChecked: event.target.checked})
  }

  onUpdatePassword = event => {
    this.setState({password: event.target.value})
  }

  onUpdateUsername = event => {
    this.setState({username: event.target.value})
  }

  onFocusUsername = () => {
    this.setState({usernameTyping: true, passwordTyping: false})
  }

  onFocusPassword = () => {
    this.setState({passwordTyping: true, usernameTyping: false})
  }

  render() {
    const {
      username,
      password,
      isChecked,
      isFailure,
      errorMsg,
      usernameTyping,
      passwordTyping,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <LoginContainer isDarkTheme={isDarkTheme}>
              <LoginFormContainer
                onSubmit={this.onSubmitLoginDetails}
                isDarkTheme={isDarkTheme}
              >
                <LoginWebsiteLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="Website Logo"
                />
                <InputLabel htmlFor="userName" isDarkTheme={isDarkTheme}>
                  USERNAME
                </InputLabel>
                <UsernameInput
                  id="userName"
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={this.onUpdateUsername}
                  typing={usernameTyping}
                  onFocus={this.onFocusUsername}
                  isDarkTheme={isDarkTheme}
                />
                <InputLabel htmlFor="passWord" isDarkTheme={isDarkTheme}>
                  PASSWORD
                </InputLabel>
                <PasswordInput
                  id="passWord"
                  type={isChecked ? 'text' : 'password'}
                  value={password}
                  placeholder="Password"
                  typing={passwordTyping}
                  onFocus={this.onFocusPassword}
                  onChange={this.onUpdatePassword}
                  isDarkTheme={isDarkTheme}
                />
                <CheckboxContainer>
                  <CheckboxInput
                    id="checkBox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={this.onUpdateCheckbox}
                  />
                  <CheckboxLabel htmlFor="checkBox" isDarkTheme={isDarkTheme}>
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {isFailure && <LoginError>*{errorMsg}</LoginError>}
              </LoginFormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
