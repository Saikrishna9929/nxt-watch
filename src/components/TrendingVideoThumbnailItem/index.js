import {formatDistanceToNow} from 'date-fns'

import {ThemeContext} from '../../context/index'

import {
  ThumbnailListItem,
  ThumbanailImage,
  ThumbnailVideoDetailsContainer,
  ProfileImage,
  ThumbnailDetailsContainer,
  ThumbnailTitle,
  ThumbnailDetails,
  ChannelName,
  Dot1,
  Dot2,
  ThumbnailViewsPublishedDetails,
  ThumbnailVideoViewCount,
  ThumbnailVideoPublishedDate,
  ThumbnailLink,
} from './styledComponents'

const TrendingVideoThumbnailItem = props => {
  const {videoThumbnailItem} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoThumbnailItem

  const publishedDate = new Date(publishedAt)

  const timeAgo = formatDistanceToNow(publishedDate, {addSuffix: false})

  const dateArray = timeAgo.split(' ')

  const modifiedDateArray = dateArray.slice(1)

  const dateString = `${modifiedDateArray.join(' ')} ago`

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <ThumbnailLink to={`/videos/${id}`}>
            <ThumbnailListItem>
              <ThumbanailImage src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailVideoDetailsContainer>
                <ProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <ThumbnailDetailsContainer>
                  <ThumbnailTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </ThumbnailTitle>
                  <ThumbnailDetails>
                    <ChannelName isDarkTheme={isDarkTheme}>
                      {channel.name}
                    </ChannelName>
                    <Dot1 size="25" color="#475569" />
                    <ThumbnailViewsPublishedDetails>
                      <ThumbnailVideoViewCount isDarkTheme={isDarkTheme}>
                        {viewCount} views
                      </ThumbnailVideoViewCount>
                      <Dot2 size="25" color="#475569" />
                      <ThumbnailVideoPublishedDate isDarkTheme={isDarkTheme}>
                        {dateString}
                      </ThumbnailVideoPublishedDate>
                    </ThumbnailViewsPublishedDetails>
                  </ThumbnailDetails>
                </ThumbnailDetailsContainer>
              </ThumbnailVideoDetailsContainer>
            </ThumbnailListItem>
          </ThumbnailLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoThumbnailItem
