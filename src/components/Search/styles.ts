import styled from 'styled-components/native'

export const Input = styled.TextInput`
  width: 250px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px;
`
