import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {ChatsScreen,CreateChatScreen,} from '../../screens/Chats'
import { screens } from '../../utils'
import { styles } from '../Styles.styles'
import { View, Text } from 'react-native'
import React from 'react'

const Stack = createNativeStackNavigator()

export  function ChatsNavigation() {
    return (
        <Stack.Navigator
          screenOptions={{
            ...styles.stackNavigationStyles,
          }}
        >
          <Stack.Screen
            name={screens.tab.chats.chatsScreen}
            component={ChatsScreen}
            options={{ title: "Chats",  headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name={screens.tab.chats.createChatScreen}
            component={CreateChatScreen}
            options={{
              title: "Nuevo chat",
              presentation: "modal",
              ...styles.modalStyles,
            }}
          />
        </Stack.Navigator>
      );
}