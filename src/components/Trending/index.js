import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import Banner from '../Banner'

import TrendingVideoThumbnailItem from '../TrendingVideoThumbnailItem'

import {ThemeContext} from '../../context/index'

import {
  TrendingContainer,
  TrendingVideosContainer,
  TrendingVideoHeaderContainer,
  TrendingLogoContainer,
  TrendingHeading,
  TrendingVideosListContainer,
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

class Trending extends Component {
  state = {
    trendingVideosList: [],
    trendingApiStatus: apiStatus.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({trendingApiStatus: apiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const trendingVideosApiUrl = `https://apis.ccbp.in/videos/trending`

    const response = await fetch(trendingVideosApiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatedVideosData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))

      this.setState({
        trendingVideosList: updatedVideosData,
        trendingApiStatus: apiStatus.success,
      })
    } else {
      this.setState({trendingApiStatus: apiStatus.failure})
    }
  }

  onReloadContent = () => {
    this.getTrendingVideos()
  }

  renderTrendingVideosContainer = () => {
    const {trendingVideosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <TrendingVideoHeaderContainer
                data-testid="banner"
                isDarkTheme={isDarkTheme}
              >
                <TrendingLogoContainer isDarkTheme={isDarkTheme}>
                  <HiFire size="30" color="#ff0000" />
                </TrendingLogoContainer>
                <TrendingHeading isDarkTheme={isDarkTheme}>
                  Trending
                </TrendingHeading>
              </TrendingVideoHeaderContainer>
              <TrendingVideosListContainer isDarkTheme={isDarkTheme}>
                {trendingVideosList.map(eachItem => (
                  <TrendingVideoThumbnailItem
                    key={eachItem.id}
                    videoThumbnailItem={eachItem}
                  />
                ))}
              </TrendingVideosListContainer>
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

  renderTrendingFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailureViewContainer>
            <FailureImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
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

  renderTrendingContnetSection = () => {
    const {trendingApiStatus} = this.state
    switch (trendingApiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderTrendingVideosContainer()
      case 'FAILURE':
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  render() {
    const clickedId = 'trendingLink'
    return (
      <>
        <Header clickedId={clickedId} />
        <TrendingContainer>
          <Banner clickedId={clickedId} />
          <ThemeContext.Consumer>
            {value => {
              const {isDarkTheme} = value
              return (
                <TrendingVideosContainer
                  data-testid="trending"
                  isDarkTheme={isDarkTheme}
                >
                  {this.renderTrendingContnetSection()}
                </TrendingVideosContainer>
              )
            }}
          </ThemeContext.Consumer>
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
