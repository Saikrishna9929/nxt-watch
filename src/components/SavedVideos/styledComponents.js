import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SavedVideosContentContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`

export const SavedVideosHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};
  padding: 10px;
  padding-left: 30px;
  @media screen and (min-width: 768px) {
    padding-left: 60px;
  }
`

export const SavedVideosLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#e2e8f0')};
  width: 50px;
  height: 50px;
  border-radius: 30px;
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    border-radius: 40px;
  }
`

export const SavedVideosHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 23px;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const SavedVideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 568px) {
    padding: 22px;
  }
`

export const NoSavedVideosContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const NoSavedVideosImage = styled.img`
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  max-width: 400px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  line-height: 1.5;
`

export const NoSavedVideosDesc = styled.p`
  max-width: 450px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  line-height: 1.5;
  margin-top: -10px;
`
