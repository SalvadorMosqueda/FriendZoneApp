import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../../utils";
import { SearchScreen } from '../../screens/Search';
import { styles } from "../Styles.styles";
import { jpg } from '../../assests/jpg';
import React from 'react'

export  function SearchNavigation() {
                                             
    const Stack = createNativeStackNavigator()
                                             
    return (
        <Stack.Navigator
        screenOptions={{
          ...styles.stackNavigationStyles,
        }}
      >
         <Stack.Screen
            name={screens.tab.search.root}
            component={SearchScreen}
            options={{ headerShown: false }}
        />
        
        </Stack.Navigator>
       
    )
}