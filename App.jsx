import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { HandlerNavigation } from "./src/navigations";
import { AuthProvider } from "./src/contexts";
import {
  QueryClientProvider,
  QueryClient
} from '@tanstack/react-query'



export default function App() {
  const queryClient = new QueryClient()

  return (
    
    <NavigationContainer>
      <NativeBaseProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <HandlerNavigation />
          </QueryClientProvider>
        </AuthProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}