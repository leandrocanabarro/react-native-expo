import React from 'react'

import * as S from './styles'

import { useCartStore } from '../../store/cart'

export function IconCart() {
  const { products } = useCartStore(store => store.state)

  const totalProducts = products.reduce((acc, product) => (acc += product.quantity), 0)

  const hasProducts = totalProducts > 0

  return (
    <S.CartContainer>
      <S.Icon name="shopping-cart" size={32} />
      {hasProducts ? <S.CartTotal>{totalProducts}</S.CartTotal> : null}
    </S.CartContainer>
  )
}
