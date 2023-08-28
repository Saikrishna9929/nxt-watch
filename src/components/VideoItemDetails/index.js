import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {CgPlayListAdd} from 'react-icons/cg'
import {BiLike, BiDislike} from 'react-icons/bi'

import Header from '../Header'
import Banner from '../Banner'

import {ThemeContext, UserContext} from '../../context/index'

import {
  VideoItemContainer,
  VideoItemContentContainer,
  VideoPlayerContainer,
  PlayerContainer,
  VideoItemTitle,
  VideoDetailsContainer,
  VideoViewsPublishedDetails,
  VideoViewsCount,
  Dot,
  VideoPublishedDate,
  VideoLikeSaveButtonContainer,
  VideoLikeButton,
  VideoDisLikeButton,
  VideoSaveButton,
  HorizontalLine,
  ChannelDetailsContainer,
  ChannelProfileImage,
  ChannelDetails,
  ChannelName,
  ChannelSubscribersCount,
  VideoDescription,
  LikeText,
  DisLikeText,
  SaveText,
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

class VideoItemDetails extends Component {
  state = {
    videoItemApiStatus: apiStatus.initial,
    videoItemDetails: {},
    isFocused: false,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({videoItemApiStatus: apiStatus.inProgress})

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const {match} = this.props
    const {params} = match
    const {id} = params
    const VideoItemApiUrl = `https://apis.ccbp.in/videos/${id}`

    const response = await fetch(VideoItemApiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const videoDetails = data.video_details

      const updatedVideoItemData = {
        id: videoDetails.id,
        title: videoDetails.title,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
        videoUrl: videoDetails.video_url,
      }

      this.setState({
        videoItemDetails: updatedVideoItemData,
        videoItemApiStatus: apiStatus.success,
      })
    } else {
      this.setState({videoItemApiStatus: apiStatus.failure})
    }
  }

  onHandleMouseEnter = () => {
    this.setState({isFocused: true})
  }

  onHandleMouseLeave = () => {
    this.setState({isFocused: false})
  }

  onLikeVideo = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onDisLikeVideo = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderVideoItemContainer = () => {
    const {videoItemDetails, isFocused, isLiked, isDisLiked} = this.state
    const {
      id,
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      videoUrl,
      description,
    } = videoItemDetails
    const {name, profileImageUrl, subscriberCount} = channel

    const publishedDate = new Date(publishedAt)

    const timeAgo = formatDistanceToNow(publishedDate, {addSuffix: false})

    const dateArray = timeAgo.split(' ')

    const modifiedDateArray = dateArray.slice(1)

    const dateString = `${modifiedDateArray.join(' ')} ago`

    return (
      <ThemeContext.Consumer>
        {themeValue => (
          <UserContext.Consumer>
            {userValue => {
              const {
                savedVideosList,
                onAddToSaveList,
                onRemoveFromSaveList,
              } = userValue
              const {isDarkTheme} = themeValue
              const isSaved = savedVideosList.some(
                eachVideo => eachVideo.id === id,
              )

              const onToggleSavingVideo = () => {
                if (isSaved === true) {
                  onRemoveFromSaveList(id)
                } else {
                  onAddToSaveList(videoItemDetails)
                }
              }

              let saveIconColor
              if (isSaved) {
                saveIconColor = '#2563eb'
              } else {
                saveIconColor = '#64748b'
              }
              let LikeIconColor
              if (isLiked) {
                LikeIconColor = '#2563eb'
              } else {
                LikeIconColor = '#64748b'
              }
              let disLikeIconColor
              if (isDisLiked) {
                disLikeIconColor = '#2563eb'
              } else {
                disLikeIconColor = '#64748b'
              }

              return (
                <>
                  <VideoPlayerContainer>
                    <PlayerContainer
                      url={videoUrl}
                      light={isFocused ? false : thumbnailUrl}
                      width="100%"
                      height="100%"
                      controls
                      onMouseEnter={this.onHandleMouseEnter}
                      onMouseLeave={this.onHandleMouseLeave}
                    />
                  </VideoPlayerContainer>
                  <VideoItemTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </VideoItemTitle>
                  <VideoDetailsContainer>
                    <VideoViewsPublishedDetails>
                      <VideoViewsCount isDarkTheme={isDarkTheme}>
                        {viewCount} views
                      </VideoViewsCount>
                      <Dot size="25" color="#475569" />
                      <VideoPublishedDate isDarkTheme={isDarkTheme}>
                        {dateString}
                      </VideoPublishedDate>
                    </VideoViewsPublishedDetails>
                    <VideoLikeSaveButtonContainer>
                      <VideoLikeButton type="button" onClick={this.onLikeVideo}>
                        <BiLike size="25" color={LikeIconColor} />
                        <LikeText isDarkTheme={isDarkTheme} liked={isLiked}>
                          Like
                        </LikeText>
                      </VideoLikeButton>
                      <VideoDisLikeButton
                        type="button"
                        onClick={this.onDisLikeVideo}
                      >
                        <BiDislike size="25" color={disLikeIconColor} />
                        <DisLikeText
                          isDarkTheme={isDarkTheme}
                          disLiked={isDisLiked}
                        >
                          Dislike
                        </DisLikeText>
                      </VideoDisLikeButton>
                      <VideoSaveButton
                        type="button"
                        onClick={onToggleSavingVideo}
                      >
                        <CgPlayListAdd size="23" color={saveIconColor} />
                        <SaveText isDarkTheme={isDarkTheme} saved={isSaved}>
                          {isSaved ? 'Saved' : 'Save'}
                        </SaveText>
                      </VideoSaveButton>
                    </VideoLikeSaveButtonContainer>
                  </VideoDetailsContainer>
                  <HorizontalLine isDarkTheme={isDarkTheme} />
                  <ChannelDetailsContainer>
                    <ChannelProfileImage
                      src={profileImageUrl}
                      alt="channel logo"
                    />
                    <ChannelDetails>
                      <ChannelName isDarkTheme={isDarkTheme}>
                        {name}
                      </ChannelName>
                      <ChannelSubscribersCount isDarkTheme={isDarkTheme}>
                        {subscriberCount} subscribers
                      </ChannelSubscribersCount>
                    </ChannelDetails>
                  </ChannelDetailsContainer>
                  <VideoDescription isDarkTheme={isDarkTheme}>
                    {description}
                  </VideoDescription>
                </>
              )
            }}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    )
  }

  onReloadContent = () => {
    this.getVideoItemDetails()
  }

  renderVideoItemFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer isDarkTheme={isDarkTheme}>
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

  renderVideoItemContentSection = () => {
    const {videoItemApiStatus} = this.state
    console.log(videoItemApiStatus)
    switch (videoItemApiStatus) {
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderVideoItemContainer()
      case 'FAILURE':
        return this.renderVideoItemFailureView()
      default:
        return null
    }
  }

  render() {
    const clickedId = ''
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header clickedId={clickedId} />
              <VideoItemContainer>
                <Banner clickedId={clickedId} />
                <VideoItemContentContainer
                  data-testid="videoItemDetails"
                  isDarkTheme={isDarkTheme}
                >
                  {this.renderVideoItemContentSection()}
                </VideoItemContentContainer>
              </VideoItemContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
