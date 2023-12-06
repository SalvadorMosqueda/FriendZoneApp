import { View, Text } from 'react-native'
import React from 'react'
import {userAuth} from '../../hooks'
export  function AuthStartScreen() {
  const auth = userAuth()
  
  console.log(auth)
  return (
    <View>
      
      <Text style={{color:'#fff'}}>AuthStartScreen</Text>
    </View>
  )
}