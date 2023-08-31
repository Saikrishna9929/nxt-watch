import styled from 'styled-components'

import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

export const HeaderContainer = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    height: 15vh;
    padding-left: 50px;
    padding-right: 50px;
  }
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`
export const WebsiteLogoLink = styled(Link)`
  text-decoration: none;
`

export const HeaderWebsiteImg = styled.img`
  width: 120px;
  height: 25px;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 30px;
  }
`

export const NavbarItemsListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const ModeChangeButtonListItem = styled.li`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 18px;
  }
`
export const ModeChangeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const HamburegerProfileContainer = styled.li`
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 18px;
  }
`

export const NavMenuPopup = styled(Popup)``

export const HamburgureButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavbarModalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  border: none;
  background: none;
  cursor: pointer;
`

export const NavbarModalItemsContainer = styled.ul`
  width: 100%;
  align-self: center;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => {
    let color = ''
    if (props.isClicked && props.isDarkTheme) {
      color = '#424242'
    } else if (props.isClicked && !props.isDarkTheme) {
      color = '#f1f5f9'
    } else {
      color = 'transparent'
    }
    return color
  }};
`

export const NavListItem = styled.li`
  display: flex;
  width: 300px;
  margin-left: 130px;
  align-items: center;
`
export const NavItemText = styled.p`
  margin-left: 25px;
  color: ${props => {
    let color = ''
    if (props.isClicked) {
      color = props.isDarkTheme ? '#ffffff' : '#000000'
    } else {
      color = props.isDarkTheme ? '#f9f9f9' : '#606060'
    }
    return color
  }};
  font-family: 'Roboto';
  font-weight: ${props => (props.isClicked ? 500 : 400)};
  font-size: 25px;
`

export const ProfileButton = styled(ModeChangeButton)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const ProfileImage = styled.img`
  width: 26px;
  height: 26px;
`

export const LogoutIconButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  display: none;
  border: ${props =>
    props.isDarkTheme ? '1px solid #ffffff' : '1px solid #3b82f6'};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 13px;
  width: 70px;
  border-radius: 2px;
  height: 25px;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const LogoutPopupNavItemContainer = styled.li``

export const LogoutModalBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
`

export const LogoutModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 400px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  border-radius: 12px;
  padding: 23px;
`

export const LogoutConfirmText = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
`

export const LogoutModalButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 15px;
`

export const LogoutCancelButton = styled.button`
  border: ${props =>
    props.isDarkTheme ? ' 1px solid #94a3b8' : ' 1px solid #7e858e'};
  color: #94a3b8;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  width: 80px;
  border-radius: 3px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  margin-right: 20px;
`

export const LogoutConfirmButton = styled.button`
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  width: 80px;
  border-radius: 3px;
  height: 40px;
  background-color: #3b82f6;
  cursor: pointer;
  margin-left: 20px;
`

export const LogoutTriggerButtons = styled.div``
