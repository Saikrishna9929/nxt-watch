import Header from '../Header'
import Banner from '../Banner'

import {ThemeContext} from '../../context/index'

import {
  NotFoundViewContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
} from './styledComponents'

const NotFound = () => {
  const clickedId = ''

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <Header clickedId={clickedId} />
            <NotFoundViewContainer>
              <Banner clickedId={clickedId} />
              <NotFoundContainer isDarkTheme={isDarkTheme}>
                <NotFoundImage
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <NotFoundHeading isDarkTheme={isDarkTheme}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundDesc isDarkTheme={isDarkTheme}>
                  we are sorry, the page you requested could not be found.
                </NotFoundDesc>
              </NotFoundContainer>
            </NotFoundViewContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NotFound
