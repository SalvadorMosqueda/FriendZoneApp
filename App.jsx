import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { HandlerNavigation } from "./src/navigations";



export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <HandlerNavigation/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}