import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const ThumbnailListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const ThumbanailImage = styled.img`
  width: 100%;
  border-radius: 12px;
`

export const ThumbnailVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: Column;
  margin-top: 8px;
`

export const ThumbnailTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
`

export const ThumbnailVideoViewCount = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  margin-top: -5px;
`
export const ThumbnailLink = styled(Link)`
  width: 47%;
  text-decoration: none;
  cursor: pointer;
  @media screen and (min-width: 568px) {
    max-width: 210px;
  }
`
