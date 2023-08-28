import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {FiLogOut} from 'react-icons/fi'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {RiCloseLine} from 'react-icons/ri'

import {ThemeContext} from '../../context/index'

import {
  HeaderContainer,
  WebsiteLogoLink,
  HeaderWebsiteImg,
  NavbarItemsListContainer,
  ModeChangeButtonListItem,
  ModeChangeButton,
  HamburegerProfileContainer,
  NavMenuPopup,
  HamburgureButton,
  NavbarModalItemsContainer,
  NavListItem,
  NavLink,
  NavbarModalContainer,
  ModalCloseButton,
  NavItemText,
  ProfileButton,
  ProfileImage,
  LogoutIconButton,
  LogoutButton,
  LogoutPopupNavItemContainer,
  LogoutModalBgContainer,
  LogoutModalContainer,
  LogoutConfirmText,
  LogoutModalButtonsContainer,
  LogoutCancelButton,
  LogoutConfirmButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, onToggleTheme} = value
      const {clickedId} = props
      const onLogoutConfirm = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onChangeTheme = () => {
        onToggleTheme()
      }

      const HeaderWebsiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <WebsiteLogoLink to="/">
            <HeaderWebsiteImg src={HeaderWebsiteLogoUrl} alt="website logo" />
          </WebsiteLogoLink>
          <NavbarItemsListContainer>
            <ModeChangeButtonListItem key="item1">
              <ModeChangeButton
                type="button"
                onClick={onChangeTheme}
                data-testid="theme"
              >
                {isDarkTheme ? (
                  <BsBrightnessHigh size="23" color="#ffffff" />
                ) : (
                  <FaMoon size="23" />
                )}
              </ModeChangeButton>
            </ModeChangeButtonListItem>
            <HamburegerProfileContainer key="item2">
              <NavMenuPopup
                modal
                trigger={
                  <HamburgureButton type="button">
                    <GiHamburgerMenu
                      size="22"
                      color={isDarkTheme ? '#ffffff' : '#000000'}
                    />
                  </HamburgureButton>
                }
                className="popup-content"
              >
                {close => (
                  <NavbarModalContainer isDarkTheme={isDarkTheme}>
                    <ModalCloseButton onClick={close}>
                      <RiCloseLine
                        size="50"
                        color={isDarkTheme ? '#ffffff' : '#000000'}
                      />
                    </ModalCloseButton>
                    <NavbarModalItemsContainer>
                      <NavLink
                        id="homeLink"
                        isClicked={clickedId === 'homeLink'}
                        to="/"
                        isDarkTheme={isDarkTheme}
                      >
                        <NavListItem>
                          <AiFillHome
                            size="30"
                            color={
                              clickedId === 'homeLink' ? '#ff0000' : '#606060'
                            }
                          />
                          <NavItemText
                            isDarkTheme={isDarkTheme}
                            isClicked={clickedId === 'homeLink'}
                          >
                            Home
                          </NavItemText>
                        </NavListItem>
                      </NavLink>
                      <NavLink
                        id="trendingLink"
                        isClicked={clickedId === 'trendingLink'}
                        to="/trending"
                        isDarkTheme={isDarkTheme}
                      >
                        <NavListItem>
                          <HiFire
                            size="30"
                            color={
                              clickedId === 'trendingLink'
                                ? '#ff0000'
                                : '#606060'
                            }
                          />
                          <NavItemText
                            isDarkTheme={isDarkTheme}
                            isClicked={clickedId === 'trendingLink'}
                          >
                            Trending
                          </NavItemText>
                        </NavListItem>
                      </NavLink>
                      <NavLink
                        id="gamingLink"
                        isClicked={clickedId === 'gamingLink'}
                        to="/gaming"
                        isDarkTheme={isDarkTheme}
                      >
                        <NavListItem>
                          <SiYoutubegaming
                            size="30"
                            color={
                              clickedId === 'gamingLink' ? '#ff0000' : '#606060'
                            }
                          />
                          <NavItemText
                            isDarkTheme={isDarkTheme}
                            isClicked={clickedId === 'gamingLink'}
                          >
                            Gaming
                          </NavItemText>
                        </NavListItem>
                      </NavLink>
                      <NavLink
                        id="savedLink"
                        isClicked={clickedId === 'savedLink'}
                        to="/saved-videos"
                        isDarkTheme={isDarkTheme}
                      >
                        <NavListItem>
                          <CgPlayListAdd
                            size="35"
                            color={
                              clickedId === 'savedLink' ? '#ff0000' : '#606060'
                            }
                          />
                          <NavItemText
                            isDarkTheme={isDarkTheme}
                            isClicked={clickedId === 'savedLink'}
                          >
                            Saved videos
                          </NavItemText>
                        </NavListItem>
                      </NavLink>
                    </NavbarModalItemsContainer>
                  </NavbarModalContainer>
                )}
              </NavMenuPopup>

              <ProfileButton type="button">
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileButton>
            </HamburegerProfileContainer>
            <LogoutPopupNavItemContainer key="item3">
              <Popup
                modal
                trigger={
                  <LogoutIconButton type="button">
                    <FiLogOut
                      size="22"
                      color={isDarkTheme ? '#ffffff' : '#000000'}
                    />
                  </LogoutIconButton>
                }
                lockScroll
                className="popup-content"
              >
                {close => (
                  <LogoutModalBgContainer>
                    <LogoutModalContainer isDarkTheme={isDarkTheme}>
                      <LogoutConfirmText isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout
                      </LogoutConfirmText>
                      <LogoutModalButtonsContainer>
                        <LogoutCancelButton
                          type="button"
                          isDarkTheme={isDarkTheme}
                          onClick={() => close()}
                        >
                          Cancel
                        </LogoutCancelButton>
                        <LogoutConfirmButton
                          type="button"
                          onClick={onLogoutConfirm}
                        >
                          Confirm
                        </LogoutConfirmButton>
                      </LogoutModalButtonsContainer>
                    </LogoutModalContainer>
                  </LogoutModalBgContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutButton isDarkTheme={isDarkTheme} type="button">
                    Logout
                  </LogoutButton>
                }
                lockScroll
                className="popup-content"
              >
                {close => (
                  <LogoutModalBgContainer>
                    <LogoutModalContainer isDarkTheme={isDarkTheme}>
                      <LogoutConfirmText isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout
                      </LogoutConfirmText>
                      <LogoutModalButtonsContainer>
                        <LogoutCancelButton
                          type="button"
                          isDarkTheme={isDarkTheme}
                          onClick={() => close()}
                        >
                          Cancel
                        </LogoutCancelButton>
                        <LogoutConfirmButton
                          type="button"
                          onClick={onLogoutConfirm}
                        >
                          Confirm
                        </LogoutConfirmButton>
                      </LogoutModalButtonsContainer>
                    </LogoutModalContainer>
                  </LogoutModalBgContainer>
                )}
              </Popup>
            </LogoutPopupNavItemContainer>
          </NavbarItemsListContainer>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
