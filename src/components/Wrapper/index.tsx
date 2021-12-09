import * as React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export function Wrapper({ children }: Props) {
  return <S.Container>{children}</S.Container>
}
