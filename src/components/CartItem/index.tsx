import React from 'react'

import * as S from './styles'

import { useCartStore, Product } from '../../store/cart'

type Props = {
  product: Product
}

export function CartItem({ product }: Props) {
  const { remove, increase, decrease } = useCartStore(store => store.actions)

  return (
    <S.Container>
      <S.Image source={{ uri: product.image }} />
      <S.Detail>
        <S.Title>{product.title}</S.Title>
        <S.Buttons>
          <S.ButtonDecrease onPress={() => decrease(product)}>
            <S.IconDecrease name="minus-circle" size={30} />
          </S.ButtonDecrease>
          <S.Quantity>{product.quantity}</S.Quantity>
          <S.ButtonIncrease onPress={() => increase(product)}>
            <S.IconIncrease name="plus-circle" size={30} />
          </S.ButtonIncrease>
        </S.Buttons>
      </S.Detail>
      <S.Total>
        <S.Amount>$ {product.price}</S.Amount>
        <S.ButtonRemove onPress={() => remove(product)}>
          <S.IconRemove name="trash-2" size={30} />
        </S.ButtonRemove>
      </S.Total>
    </S.Container>
  )
}
