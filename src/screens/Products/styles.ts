import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 60px 0 80px 0;
`

export const Header = styled.View`
  align-items: flex-end;
  padding: 15px 0;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Products = styled.FlatList``

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.danger};
  text-align: center;
  padding: 10px 0;
  margin-bottom: 20px;
`
