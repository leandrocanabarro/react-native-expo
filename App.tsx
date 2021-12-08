import {
  Poppins_400Regular as Poppins400Regular,
  Poppins_500Medium as Poppins500Medium,
  Poppins_700Bold as Poppins700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import { Dashboard } from './src/screens/Dashboard'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins400Regular,
    Poppins500Medium,
    Poppins700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}
