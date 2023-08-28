import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import Banner from '../Banner'

import GamingVideoThumbnailItem from '../GamingVideoThumbnailItem'

import {ThemeContext} from '../../context/index'

import {
  GamingContainer,
  GamingVideosContainer,
  GamingVideoHeaderContainer,
  GamingLogoContainer,
  GamingHeading,
  GamingVideosListContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDesc,
  RetryButton,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    gamingApiStatus: apiStatus.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
    console.log('hii')
  }

  getGamingVideos = async () => {
    this.setState({gamingApiStatus: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const gamingVideosApiUrl = `https://apis.ccbp.in/videos/gaming`

    const response = await fetch(gamingVideosApiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedVideosData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        gamingVideosList: updatedVideosData,
        gamingApiStatus: apiStatus.success,
      })
    } else {
      this.setState({gamingApiStatus: apiStatus.failure})
    }
  }

  onReloadContent = () => {
    this.getGamingVideos()
  }

  renderGamingVideosContainer = () => {
    const {gamingVideosList} = this.state
    console.log(gamingVideosList)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <GamingVideoHeaderContainer
                data-testid="banner"
                isDarkTheme={isDarkTheme}
              >
                <GamingLogoContainer isDarkTheme={isDarkTheme}>
                  <SiYoutubegaming size="35" color="#ff0000" />
                </GamingLogoContainer>
                <GamingHeading isDarkTheme={isDarkTheme}>Gaming</GamingHeading>
              </GamingVideoHeaderContainer>
              <GamingVideosListContainer>
                {gamingVideosList.map(eachItem => (
                  <GamingVideoThumbnailItem
                    key={eachItem.id}
                    videoThumbnailItem={eachItem}
                  />
                ))}
              </GamingVideosListContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureImage src={failureImageUrl} alt="failure view" />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDesc isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDesc>
            <RetryButton type="button" onClick={this.onReloadContent}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamingContnetSection = () => {
    const {gamingApiStatus} = this.state
    switch (gamingApiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderGamingVideosContainer()
      case 'FAILURE':
        return this.renderGamingFailureView()
      default:
        return null
    }
  }

  render() {
    const clickedId = 'gamingLink'

    return (
      <>
        <Header clickedId={clickedId} />
        <GamingContainer>
          <Banner clickedId={clickedId} />
          <ThemeContext.Consumer>
            {value => {
              const {isDarkTheme} = value
              return (
                <GamingVideosContainer
                  data-testid="gaming"
                  isDarkTheme={isDarkTheme}
                >
                  {this.renderGamingContnetSection()}
                </GamingVideosContainer>
              )
            }}
          </ThemeContext.Consumer>
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
