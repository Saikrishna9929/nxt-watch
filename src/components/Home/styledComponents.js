import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const HomeContentSection = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  width: 100%;
`

export const HomePremiumBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  display: ${props => (props.close ? 'none' : 'flex')};
  flex-direction: column;
  padding: 20px;
  padding-left: 35px;
  padding-right: 35px;
`

export const HomeBannerCloseButton = styled.button`
  align-self: flex-end;
  border: none;
  background: none;
  cursor: pointer;
`

export const HomeBannerContentContainer = styled.div`
  width: 70%;
  max-width: 400px;
`

export const HomeBannerLogo = styled.img`
  width: 140px;
  height: 35px;
`

export const HomeBannerDesc = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
`

export const HomeBannerGetItButton = styled.button`
  width: 125px;
  height: 40px;
  border: 1px solid #1e293b;
  background-color: transparent;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`

export const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  padding: 20px;
`

export const SearchInput = styled.input`
  border: ${props =>
    props.isDarkTheme ? '2px solid  #383838' : '2px solid #cccccc'};
  flex-grow: 1;
  height: 38px;
  border-radius: 2px;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#313131')};
  padding-left: 15px;
  font-size: 15px;
  font-weight: 500;
  outline: none;
  background-color: transparent;
`

export const SearchIconButton = styled.button`
  border: ${props =>
    props.isDarkTheme ? '1px solid #606060' : '2px solid #cccccc'};
  height: 38px;
  width: 80px;
  border-radius: 2px;
  padding-top: 5px;
  background-color: ${props => (props.isDarkTheme ? '#424242' : '#f4f4f4')};
  cursor: pointer;
`

export const HomeVideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (min-width: 568px) {
    padding: 22px;
  }
`

export const LoaderContainer = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureViewContainer = styled.div`
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

export const NoSearchResultsContainer = styled(FailureViewContainer)``

export const NoSearchResultsImage = styled(FailureImage)``

export const NoSearchResultsHeading = styled(FailureHeading)``

export const NoSearchResultsDesc = styled(FailureDesc)``
