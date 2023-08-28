import styled from 'styled-components'

export const NotFoundViewContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const NotFoundContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const NotFoundImage = styled.img`
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  max-width: 400px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  line-height: 1.5;
`

export const NotFoundDesc = styled.p`
  max-width: 450px;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  line-height: 1.5;
  margin-top: -10px;
`
