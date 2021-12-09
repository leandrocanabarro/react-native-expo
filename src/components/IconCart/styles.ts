import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const CartContainer = styled.View``

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`

export const CartTotal = styled.Text`
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`
