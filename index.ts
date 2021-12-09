import { registerRootComponent } from 'expo'
import 'react-native-gesture-handler'
import App from './App'

if (process.env.NODE_ENV === 'development') {
  require('./miragejs').makeServer()
}

registerRootComponent(App)
