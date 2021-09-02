import { createAppContainer, createSwitchNavigator,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import RegisterScreen from './screens/RegisterScreen';
import AnunciosScreen from './screens/AnunciosScreen';
import AnunciosCriarScreen from './screens/AnunciosCriarScreen';
import AnunciosUsuarioScreen from './screens/AnunciosUsuarioScreen';

const AuthStack = createStackNavigator({
  Logar: LoginScreen,
  Registrar: RegisterScreen
})

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Anuncios: AnunciosCriarScreen
})

const AnunciosStack = createStackNavigator({
  Anuncios: AnunciosScreen,
  AnunciosUsuario: AnunciosUsuarioScreen 
})

const BottomStack = createBottomTabNavigator({
  HomeS: HomeStack,
  Anuncios: AnunciosStack
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading : LoadingScreen,
      App: BottomStack,
      Auth: AuthStack
    },
    {
      initialRountName: "Loading"
    }
  )
)
