import { View, Text,Image, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { jpg } from '../../assests/jpg'
import  {styles} from './SearchScreen.styles.jsx'

export  function SearchScreen() {

  
    return (
    
        <View style={styles.imgPerfilContainer}>
        <ImageBackground style={styles.imgPerfil} source={jpg.yo}>
          <Text style={{color:'#fff'}}>SearchScreen</Text>
        </ImageBackground>
      </View>
  )
}