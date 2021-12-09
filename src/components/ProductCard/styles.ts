import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 10px;
`

export const Header = styled.View``

export const Image = styled.Image`
  height: 120px;
`

export const Footer = styled.View``

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 10px 0;
`

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  align-items: center;
  margin-top: 10px;
`

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
`
