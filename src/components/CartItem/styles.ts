import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 10px;
`

export const Wrapper = styled.View``

export const Detail = styled.View`
  flex: 1;
  flex-direction: column;
`

export const Total = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
`

export const Buttons = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right: 10px;
`

export const IconDecrease = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`

export const IconIncrease = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`

export const IconRemove = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
`

export const Quantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.secondary};
`

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  padding-bottom: 10px;
`
