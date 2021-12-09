import * as React from 'react'

import { ListRenderItemInfo } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Wrapper } from '../../components/Wrapper'
import { IconCart } from '../../components/IconCart'
import { CartItem } from '../../components/CartItem'
import { useCartStore, Product } from '../../store/cart'

import * as S from './styles'

export function Cart() {
  const navigation = useNavigation()
  const { products } = useCartStore(store => store.state)

  const totalProducts = products.reduce((acc, product) => (acc += product.quantity), 0)

  const hasProducts = totalProducts > 0

  const navigateToProducts = () => {
    navigation.goBack()
  }

  return (
    <Wrapper>
      <S.Container>
        <S.Header>
          <S.ButtonBack onPress={navigateToProducts}>
            <S.IconBack name="arrow-left" size={32} />
          </S.ButtonBack>
          <IconCart />
        </S.Header>
        {!hasProducts ? (
          <S.Title>There are no items in the cart</S.Title>
        ) : (
          <S.Products
            data={products}
            keyExtractor={({ id }) => String(id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }: ListRenderItemInfo<Product>) => <CartItem product={item} />}
          />
        )}
      </S.Container>
    </Wrapper>
  )
}
