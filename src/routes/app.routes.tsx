import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Cart } from '../screens/Cart'
import { Products } from '../screens/Products'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Cart" component={Cart} />
      <Screen name="Products" component={Products} />
    </Navigator>
  )
}
