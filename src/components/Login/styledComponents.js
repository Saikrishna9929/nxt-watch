import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginFormContainer = styled.form`
  width: 90%;
  max-width: 350px;
  display: flex;
  flex-direction: Column;
  padding: 25px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '0px 4px 16px 0px #d7dfe9'};

  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ffffff')};
`

export const LoginWebsiteLogo = styled.img`
  width: 130px;
  height: 30px;
  align-self: center;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const InputLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#7e858e')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 13px;
  margin-top: 20px;
`

export const UsernameInput = styled.input`
  color: ${props => {
    let color = ''
    if (!props.typing && props.isDarkTheme) {
      color = '#ffffff;'
    } else {
      color = '#0f0f0f'
    }
    return color
  }};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  height: 40px;
  margin-top: 10px;
  border: ${props =>
    props.isDarkTheme ? '1px solid #94a3b8' : '1px solid #cbd5e1'};
  border-radius: 5px;
  outline: none;
  padding-left: 20px;
  background-color: ${props => {
    let color = ''
    if (props.typing && props.isDarkTheme) {
      color = '#ffffff'
    } else if (props.typing && !props.isDarkTheme) {
      color = '#d7dfe9'
    } else {
      color = 'transparent'
    }
    return color
  }};
`

export const PasswordInput = styled(UsernameInput)``

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`

export const CheckboxInput = styled.input`
  width: 18px;
  height: 18px;
  border: 1px solid #7e858e;
  margin-right: 10px;
`

export const CheckboxLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
`

export const LoginButton = styled.button`
  height: 40px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  background-color: #3b82f6;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  margin-top: 20px;
`

export const LoginError = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  line-height: 1;
`
