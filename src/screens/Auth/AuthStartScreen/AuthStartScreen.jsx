import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { screens } from '../../../utils'
import { assets } from '../../../assests'
import { styles } from './AuthStartScreen.styles'


export function AuthStartScreen() {
const navigation = useNavigation()

const goToLogin = () => navigation.navigate(screens.auth.loginScreen)

  return (
    <View style={styles.content}>
      <Image style={styles.img} source={assets.image.jpg.portada} />
      <Text style={styles.descripcion}>Recomendamos usar este producto con responsabilidad
      para poder disfratar de la experencia completa de la aplicación.
      </Text>
      <Text style={styles.descripcion}>Consultar nuestra politica de privacidad.
      Pulsa "Continuar" para aceptar los terminos y condiciones.
      </Text>
      <Text onPress={goToLogin} style={styles.btn}><Text style={{color:'#fff',fontSize:18}}>Aceptar y Continuar</Text></Text>
    </View>
  )
}