import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { Text } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Text> Hello world</Text>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}