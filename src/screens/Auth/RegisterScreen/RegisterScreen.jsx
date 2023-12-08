import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { screens } from '../../../utils'
import { styles } from './RegisterScreen.styles'
import { RegisterForm } from '../../../components/Auth'
export  function RegisterScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Crear tu cuenta y empieza a buscar amigos!</Text>
    
      <RegisterForm/>

      <Text style={styles.register} onPress={navigation.goBack}>
        Iniciar sesión
      </Text>
    </View>
  )
}