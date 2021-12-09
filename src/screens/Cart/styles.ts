import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  margin: 60px 0 80px 0;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

export const CartContainer = styled.View``

export const IconBack = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`

export const Products = styled.FlatList``
