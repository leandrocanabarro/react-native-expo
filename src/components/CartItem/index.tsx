import React from 'react'

import * as S from './styles'

import { useCartStore, Product } from '../../store/cart'

import { BorderlessButton } from 'react-native-gesture-handler'

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
          <BorderlessButton onPress={() => decrease(product)}>
            <S.IconDecrease name="minus-circle" size={30} />
          </BorderlessButton>
          <S.Quantity>{product.quantity}</S.Quantity>
          <BorderlessButton onPress={() => increase(product)}>
            <S.IconIncrease name="plus-circle" size={30} />
          </BorderlessButton>
        </S.Buttons>
      </S.Detail>
      <S.Total>
        <S.Amount>$ {product.price}</S.Amount>
        <BorderlessButton onPress={() => remove(product)}>
          <S.IconRemove name="trash-2" size={30} />
        </BorderlessButton>
      </S.Total>
    </S.Container>
  )
}
