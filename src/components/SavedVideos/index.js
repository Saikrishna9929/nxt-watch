import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Banner from '../Banner'

import TrendingVideoThumbnailItem from '../TrendingVideoThumbnailItem'

import {ThemeContext, UserContext} from '../../context/index'

import {
  SavedVideosContainer,
  SavedVideosContentContainer,
  SavedVideosHeaderContainer,
  SavedVideosLogoContainer,
  SavedVideosHeading,
  SavedVideosListContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDesc,
} from './styledComponents'

const SavedVideos = () => {
  const renderNoSavedVideosContainer = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoSavedVideosContainer>
            <NoSavedVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideosHeading isDarkTheme={isDarkTheme}>
              No saved videos found
            </NoSavedVideosHeading>
            <NoSavedVideosDesc isDarkTheme={isDarkTheme}>
              You can save your videos while watching them
            </NoSavedVideosDesc>
          </NoSavedVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  const renderSavedVideosContainer = () => (
    <ThemeContext.Consumer>
      {themeValue => (
        <UserContext.Consumer>
          {userValue => {
            const {savedVideosList} = userValue
            const {isDarkTheme} = themeValue
            console.log(savedVideosList)
            console.log('hiii')

            return (
              <>
                {savedVideosList.length === 0 ? (
                  renderNoSavedVideosContainer()
                ) : (
                  <>
                    <SavedVideosHeaderContainer
                      data-testid="banner"
                      isDarkTheme={isDarkTheme}
                    >
                      <SavedVideosLogoContainer isDarkTheme={isDarkTheme}>
                        <HiFire size="35" color="#ff0000" />
                      </SavedVideosLogoContainer>
                      <SavedVideosHeading isDarkTheme={isDarkTheme}>
                        Saved Videos
                      </SavedVideosHeading>
                    </SavedVideosHeaderContainer>
                    <SavedVideosListContainer>
                      {savedVideosList.map(eachItem => (
                        <TrendingVideoThumbnailItem
                          key={eachItem.id}
                          videoThumbnailItem={eachItem}
                        />
                      ))}
                    </SavedVideosListContainer>
                  </>
                )}
              </>
            )
          }}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )

  const clickedId = 'savedLink'
  return (
    <>
      <Header clickedId={clickedId} />
      <SavedVideosContainer>
        <Banner clickedId={clickedId} />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <SavedVideosContentContainer
                data-testid="savedVideos"
                isDarkTheme={isDarkTheme}
              >
                {renderSavedVideosContainer()}
              </SavedVideosContentContainer>
            )
          }}
        </ThemeContext.Consumer>
      </SavedVideosContainer>
    </>
  )
}

export default SavedVideos
