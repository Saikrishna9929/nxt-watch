import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

export const ThumbnailListItem = styled.li`
  width: 100%;
  @media screen and (min-width: 568px) {
    display: flex;
  }
`

export const ThumbanailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 568px) {
    align-self: flex-start;
    max-width: 310px;
    margin-top: 20px;
  }
`

export const ThumbnailVideoDetailsContainer = styled.div`
  display: flex;
  padding: 8px;
  @media screen and (min-width: 568px) {
    padding-left: 20px;
  }
`

export const ProfileImage = styled.img`
  margin-top: 13px;
  margin-right: 13px;
  width: 50px;
  height: 50px;
  @media screen and (min-width: 568px) {
    display: none;
  }
`

export const ThumbnailDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ThumbnailTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
`

export const ThumbnailDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: -18px;
  @media screen and (min-width: 568px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
`

export const Dot1 = styled(BsDot)`
  @media screen and (min-width: 568px) {
    display: none;
  }
`

export const Dot2 = styled(BsDot)``

export const ThumbnailViewsPublishedDetails = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 568px) {
    margin-top: -22px;
  }
`

export const ThumbnailVideoViewCount = styled(ChannelName)``

export const ThumbnailVideoPublishedDate = styled(ChannelName)``

export const ThumbnailLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  cursor: pointer;
`
