import { View, Text, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'native-base';
import { jpg } from '../../assests/jpg'
import { BlurView } from 'react-native-blur';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { styles } from './SearchScreen.styles.jsx'
export function SearchScreen() {


    return (
        <View >
            <View style={styles.imgPerfilContainer}>
                <ImageBackground style={styles.imgPerfil} source={jpg.yo}>

                  
                    <View style={{ backgroundColor: '#0891b2',alignItems:'center' }} >
                        <Text style={{ color: '#fff',fontSize:22  }}>Salvador mosqueda, 26 </Text>
                        <Text style={{ color: '#fff', fontSize:22}}>Tijuana Bc </Text>
                    </View>
                </ImageBackground>

            </View>


            {/* <View style={styles.contentImageBackground}>
                <TouchableOpacity style={{ backgroundColor: 'black' }}>
                    <Icon as={FontAwesome6} size={10} color={'#fff'} name='arrow-left' />
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: 'black', }}>
                    <Icon as={FontAwesome6} size={10} color={'#fff'} name='heart' />
                </TouchableOpacity>
            </View> */}

        </View>
    )
}