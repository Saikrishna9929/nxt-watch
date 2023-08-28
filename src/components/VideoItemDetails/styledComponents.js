import styled from 'styled-components'

import ReactPlayer from 'react-player'

import {BsDot} from 'react-icons/bs'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoItemContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
  min-height: 90vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 32vh;
  @media screen and (min-width: 568px) {
    min-height: 48vh;
  }
  @media screen and (min-width: 768px) {
    min-height: 40vh;
  }
  @media screen and (min-width: 992px) {
    min-height: 60vh;
  }
  @media screen and (min-width: 1200px) {
    min-height: 70vh;
  }
  background-color: #000000;
  background-size: cover;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    padding-bottom: 0px;
    padding-top: 0px;
  }
`

export const PlayerContainer = styled(ReactPlayer)`
  cursor: pointer;
`

export const VideoItemTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  padding: 15px;
  @media screen and (min-width: 768px) {
    padding: 0px;
    padding-top: 10px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-top: -30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    margin-top: 0px;
  }
`

export const VideoViewsPublishedDetails = styled.div`
  display: flex;
  align-items: center;
`

export const VideoViewsCount = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 17px;
`

export const Dot = styled(BsDot)``

export const VideoPublishedDate = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 17px;
`

export const VideoLikeSaveButtonContainer = styled.div`
  display: flex;
  margin-top: -10px;
`

export const VideoLikeButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  margin-right: 13px;
  cursor: pointer;
`
export const LikeText = styled.p`
  margin-left: 5px;
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
`

export const VideoDisLikeButton = styled(VideoLikeButton)``

export const DisLikeText = styled(LikeText)`
  color: ${props => (props.disLiked ? '#2563eb' : '#64748b')};
`

export const VideoSaveButton = styled(VideoLikeButton)``

export const SaveText = styled(LikeText)`
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
`

export const HorizontalLine = styled.hr`
  border: ${props =>
    props.isDarkTheme ? '1px solid #64748b' : '1px solid #cccccc'};
  width: 92%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  padding: 15px;
  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`

export const ChannelProfileImage = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 15px;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
`

export const ChannelSubscribersCount = styled.p`
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  margin-top: -8px;
`

export const VideoDescription = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 0px;
    padding-left: 88px;
  }
`

export const LoaderContainer = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureViewContainer = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const FailureImage = styled.img`
  width: 100%;
  max-width: 300px;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`

export const FailureHeading = styled.h1`
  max-width: 400px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  line-height: 1.5;
`

export const FailureDesc = styled.p`
  max-width: 450px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  line-height: 1.5;
  margin-top: -10px;
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  width: 110px;
  height: 45px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 40px;
`
