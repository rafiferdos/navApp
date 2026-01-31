import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Feed from '../screens/Feed'
import Home from '../screens/Home'

const RootStackNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome Rafi' component={Home} />
      <Stack.Screen name='Feed' component={Feed} />
    </Stack.Navigator>
  )
}
export default RootStackNavigation
