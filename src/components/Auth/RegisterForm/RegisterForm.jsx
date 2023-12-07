import { View, Text } from 'react-native'
import {Input,Button} from 'native-base'
import {styles} from './RegisterForm.styles'
import { useNavigation } from '@react-navigation/native'


export  function RegisterForm() {
  return (
    <View>
      <View style={styles.viewInput}>
      
      <Input
        placeholder='Correo electrónico'
        style={styles.input}
        variant={"unstyled"}
        autoCapitalize={false}
      />
      
      </View>
      <Input
        placeholder="Contraseña"
        variant="unstyled"
        secureTextEntry
        // value={formik.values.password}
        // onChangeText={(text) => formik.setFieldValue("password", text)}
        style={[styles.input]}
      />
      <Button
        style={styles.btn}
        // onPress={formik.handleSubmit}
        // isLoading={formik.isSubmitting}
      >
        CREAR CUENTA
      </Button>
    </View>
  )
}