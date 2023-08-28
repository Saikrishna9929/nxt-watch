import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {VscClose} from 'react-icons/vsc'
import {AiOutlineSearch} from 'react-icons/ai'

import HomeVideoThumbnailItem from '../HomeVideoThumbnailItem'
import Header from '../Header'
import Banner from '../Banner'
import {ThemeContext} from '../../context/index'

import {
  HomeContainer,
  HomeContentSection,
  HomePremiumBannerContainer,
  HomeBannerCloseButton,
  HomeBannerContentContainer,
  HomeBannerLogo,
  HomeBannerDesc,
  HomeBannerGetItButton,
  SearchInputContainer,
  SearchInput,
  SearchIconButton,
  HomeVideosListContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDesc,
  RetryButton,
  NoSearchResultsContainer,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsDesc,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeApiStatus: apiStatus.initial,
    searchInput: '',
    homeVideosList: [],
    isClosed: false,
  }

  componentDidMount() {
    this.getHomeSectionVideos()
  }

  getHomeSectionVideos = async () => {
    this.setState({homeApiStatus: apiStatus.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const HomeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const response = await fetch(HomeVideosApiUrl, options)

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
        homeVideosList: updatedVideosData,
        homeApiStatus: apiStatus.success,
      })
    } else {
      this.setState({homeApiStatus: apiStatus.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({isClosed: true})
  }

  renderHomeBanner = () => {
    const {isClosed} = this.state
    return (
      <HomePremiumBannerContainer data-testid="banner" close={isClosed}>
        <HomeBannerCloseButton
          type="button"
          onClick={this.onCloseBanner}
          data-testid="close"
        >
          <VscClose size="25" />
        </HomeBannerCloseButton>
        <HomeBannerContentContainer>
          <HomeBannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <HomeBannerDesc>
            Buy Nxt Watch Premium prepaid plans with UPI
          </HomeBannerDesc>
          <HomeBannerGetItButton type="button">
            GET IT NOW
          </HomeBannerGetItButton>
        </HomeBannerContentContainer>
      </HomePremiumBannerContainer>
    )
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onGetSearchResults = () => {
    const {searchInput} = this.state
    this.setState({searchInput}, this.getHomeSectionVideos)
  }

  renderSearchInput = value => {
    const {searchInput} = this.state
    const {isDarkTheme} = value
    return (
      <SearchInputContainer>
        <SearchInput
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
          placeholder="Search"
          isDarkTheme={isDarkTheme}
        />
        <SearchIconButton
          type="button"
          onClick={this.onGetSearchResults}
          isDarkTheme={isDarkTheme}
          data-testid="searchButton"
        >
          <AiOutlineSearch
            size="20"
            color={isDarkTheme ? '#606060' : '#909090'}
          />
        </SearchIconButton>
      </SearchInputContainer>
    )
  }

  onReloadContent = () => {
    this.getHomeSectionVideos()
  }

  renderNoSearchResultsContainer = value => {
    const {isDarkTheme} = value
    return (
      <NoSearchResultsContainer>
        <NoSearchResultsImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchResultsHeading isDarkTheme={isDarkTheme}>
          No Search results found
        </NoSearchResultsHeading>
        <NoSearchResultsDesc isDarkTheme={isDarkTheme}>
          Try different key words or remove search filter
        </NoSearchResultsDesc>
        <RetryButton type="button" onClick={this.onReloadContent}>
          Retry
        </RetryButton>
      </NoSearchResultsContainer>
    )
  }

  renderHomeVideosContainer = () => {
    const {homeVideosList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => (
          <>
            {homeVideosList.length === 0 ? (
              this.renderNoSearchResultsContainer(value)
            ) : (
              <HomeVideosListContainer>
                {homeVideosList.map(eachItem => (
                  <HomeVideoThumbnailItem
                    key={eachItem.id}
                    videoThumbnailItem={eachItem}
                  />
                ))}
              </HomeVideosListContainer>
            )}{' '}
          </>
        )}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureImage src={failureImgUrl} alt="failure view" />
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

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderHomeContnetSection = () => {
    const {homeApiStatus} = this.state
    switch (homeApiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderHomeVideosContainer()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const clickedId = 'homeLink'

    return (
      <>
        <Header clickedId={clickedId} />
        <HomeContainer>
          <Banner clickedId={clickedId} />
          <ThemeContext.Consumer>
            {value => {
              const {isDarkTheme} = value
              return (
                <HomeContentSection
                  data-testid="home"
                  isDarkTheme={isDarkTheme}
                >
                  {this.renderHomeBanner()}
                  {this.renderSearchInput(value)}
                  {this.renderHomeContnetSection()}
                </HomeContentSection>
              )
            }}
          </ThemeContext.Consumer>
        </HomeContainer>
      </>
    )
  }
}

export default Home
