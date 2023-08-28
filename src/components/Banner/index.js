import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {ThemeContext} from '../../context/index'

import {
  BannerContainer,
  BannerListItemsContainer,
  BannerLink,
  BannerListItem,
  BannerItemText,
  BannerFooterContainer,
  FooterHeading,
  FooterIconsList,
  IconListItem,
  FooterIcon,
  FooterDesc,
} from './styledComponents'

const Banner = props => {
  const {clickedId} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <BannerContainer isDarkTheme={isDarkTheme}>
            <BannerListItemsContainer>
              <BannerLink
                id="homeLink"
                isClicked={clickedId === 'homeLink'}
                to="/"
                isDarkTheme={isDarkTheme}
              >
                <BannerListItem>
                  <AiFillHome
                    size="20"
                    color={clickedId === 'homeLink' ? '#ff0000' : '#606060'}
                  />
                  <BannerItemText
                    isClicked={clickedId === 'homeLink'}
                    isDarkTheme={isDarkTheme}
                  >
                    Home
                  </BannerItemText>
                </BannerListItem>
              </BannerLink>
              <BannerLink
                id="trendingLink"
                isClicked={clickedId === 'trendingLink'}
                to="/trending"
                isDarkTheme={isDarkTheme}
              >
                <BannerListItem>
                  <HiFire
                    size="20"
                    color={clickedId === 'trendingLink' ? '#ff0000' : '#606060'}
                  />
                  <BannerItemText
                    isDarkTheme={isDarkTheme}
                    isClicked={clickedId === 'trendingLink'}
                  >
                    Trending
                  </BannerItemText>
                </BannerListItem>
              </BannerLink>
              <BannerLink
                id="gamingLink"
                isClicked={clickedId === 'gamingLink'}
                to="/gaming"
                isDarkTheme={isDarkTheme}
              >
                <BannerListItem>
                  <SiYoutubegaming
                    size="20"
                    color={clickedId === 'gamingLink' ? '#ff0000' : '#606060'}
                  />
                  <BannerItemText
                    isClicked={clickedId === 'gamingLink'}
                    isDarkTheme={isDarkTheme}
                  >
                    Gaming
                  </BannerItemText>
                </BannerListItem>
              </BannerLink>
              <BannerLink
                id="savedLink"
                isClicked={clickedId === 'savedLink'}
                to="/saved-videos"
                isDarkTheme={isDarkTheme}
              >
                <BannerListItem>
                  <CgPlayListAdd
                    size="25"
                    color={clickedId === 'savedLink' ? '#ff0000' : '#606060'}
                  />
                  <BannerItemText
                    isClicked={clickedId === 'savedLink'}
                    isDarkTheme={isDarkTheme}
                  >
                    Saved videos
                  </BannerItemText>
                </BannerListItem>
              </BannerLink>
            </BannerListItemsContainer>
            <BannerFooterContainer>
              <FooterHeading isDarkTheme={isDarkTheme}>
                CONTACT US
              </FooterHeading>
              <FooterIconsList>
                <IconListItem>
                  <FooterIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                </IconListItem>
                <IconListItem>
                  <FooterIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                </IconListItem>
                <IconListItem>
                  <FooterIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconListItem>
              </FooterIconsList>
              <FooterDesc isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </FooterDesc>
            </BannerFooterContainer>
          </BannerContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Banner
