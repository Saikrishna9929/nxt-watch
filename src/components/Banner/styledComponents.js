import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const BannerContainer = styled.div`
  min-height: 85vh;
  width: 22%;
  max-width: 350px;
  min-width: 250px;
  display: none;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const BannerListItemsContainer = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`

export const BannerLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  background-color: ${props => {
    let color = ''
    if (props.isClicked && props.isDarkTheme) {
      color = '#424242'
    } else if (props.isClicked && !props.isDarkTheme) {
      color = '#f1f5f9'
    } else {
      color = 'transparent'
    }
    return color
  }};
  line-height: 0.8;
  padding-left: 25px;
`

export const BannerListItem = styled.li`
  display: flex;
  align-items: center;
`

export const BannerItemText = styled.p`
  margin-left: 25px;
  color: ${props => {
    let color = ''
    if (props.isClicked) {
      color = props.isDarkTheme ? '#ffffff' : '#000000'
    } else {
      color = props.isDarkTheme ? '#f9f9f9' : '#606060'
    }
    return color
  }};
  font-family: 'Roboto';
  font-weight: ${props => (props.isClicked ? 500 : 400)};
  font-size: 18px;
`

export const BannerFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;
`

export const FooterHeading = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
`

export const FooterIconsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
`

export const IconListItem = styled.li`
  margin-right: 13px;
`

export const FooterIcon = styled.img`
  width: 38px;
  height: 38px;
`

export const FooterDesc = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 19px;
`
