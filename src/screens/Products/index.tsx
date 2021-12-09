import * as React from 'react'

import { ListRenderItemInfo } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Wrapper } from '../../components/Wrapper'
import { IconCart } from '../../components/IconCart'
import { ProductCard } from '../../components/ProductCard'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { Product } from '../../store/cart'

import * as S from './styles'

export function Products() {
  const navigation = useNavigation()
  const { products, error } = useFetchProducts()
  const [localProducts, setLocalProducts] = React.useState([])

  React.useEffect(() => {
    setLocalProducts(products)
  }, [products])

  const navigateToCart = () => {
    navigation.navigate('Cart')
  }

  return (
    <Wrapper>
      <S.Container>
        {error ? (
          <S.Message>Server is down</S.Message>
        ) : (
          <>
            <S.Header>
              <S.ButtonCart onPress={navigateToCart}>
                <IconCart />
              </S.ButtonCart>
            </S.Header>
            <S.Products
              data={localProducts}
              keyExtractor={({ id }) => String(id)}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }: ListRenderItemInfo<Product>) => <ProductCard product={item} />}
            />
          </>
        )}
      </S.Container>
    </Wrapper>
  )
}
