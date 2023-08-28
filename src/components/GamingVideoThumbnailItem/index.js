import {
  ThumbnailListItem,
  ThumbanailImage,
  ThumbnailVideoDetailsContainer,
  ThumbnailTitle,
  ThumbnailVideoViewCount,
  ThumbnailLink,
} from './styledComponents'

import {ThemeContext} from '../../context/index'

const GamingVideoThumbnailItem = props => {
  const {videoThumbnailItem} = props
  const {id, title, thumbnailUrl, viewCount} = videoThumbnailItem

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <ThumbnailLink to={`/videos/${id}`}>
            <ThumbnailListItem>
              <ThumbanailImage src={thumbnailUrl} alt="video thumbnail" />
              <ThumbnailVideoDetailsContainer>
                <ThumbnailTitle isDarkTheme={isDarkTheme}>
                  {title}
                </ThumbnailTitle>
                <ThumbnailVideoViewCount isDarkTheme={isDarkTheme}>
                  {viewCount} Watching Worldwide
                </ThumbnailVideoViewCount>
              </ThumbnailVideoDetailsContainer>
            </ThumbnailListItem>
          </ThumbnailLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoThumbnailItem
