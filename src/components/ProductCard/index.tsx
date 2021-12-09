import React from 'react'

import { Product, useCartStore } from '../../store/cart'

import * as S from './styles'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  const storeProducts = useCartStore(store => store.state.products)
  const exists = !!storeProducts.find(({ id }) => id === product.id)
  const addToCart = useCartStore(store => store.actions.add)
  const removeToCart = useCartStore(store => store.actions.remove)

  return (
    <S.Container>
      <S.Header>
        <S.Image source={{ uri: product.image }} />
        <S.Title>{product.title}</S.Title>
        <S.Amount>$ {product.price}</S.Amount>
      </S.Header>
      <S.Footer>
        <S.ButtonContainer onPress={() => (!exists ? addToCart(product) : removeToCart(product))}>
          <S.ButtonTitle>{!exists ? 'Add' : 'Remove'}</S.ButtonTitle>
        </S.ButtonContainer>
      </S.Footer>
    </S.Container>
  )
}
