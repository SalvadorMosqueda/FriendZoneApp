import { View, Text } from 'react-native'
import { styles } from './LoginScreen.styles'
import { screens } from '../../../utils'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export const LoginScreen = () => {
    const navigation = useNavigation()

    const goToRegister = () => {
        navigation.navigate(screens.auth.registerScreen);
      };

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Entra y empieza a encontrar amigos!</Text>

            <Text style={{ color: '#fff' }}>Login Form</Text>


            <Text onPress={goToRegister} style={styles.register}  >
                Registrarse
            </Text>

            <Text style={styles.info}>
                Debes de tener al menos 16 años de edad para registrarte. Más
                información sobre cómo trabaja FriendZone en las politicas.
            </Text>
        </View>
    )
}