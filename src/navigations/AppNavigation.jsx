import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { screens } from '../utils'
import { BottomTabNavigation } from './BottomTabNavigation/ButtomTabNavigation'

const Stack = createNativeStackNavigator()
export function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.tab.root}
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}