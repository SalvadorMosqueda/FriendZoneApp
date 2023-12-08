import { View, Text } from 'react-native'
import { Input, Button } from 'native-base'
import { styles } from './RegisterForm.styles'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './RegisterForm.form'


export function RegisterForm() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema,
    validationOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
    }
  })


  return (
    <View>
      <View style={styles.viewInput}>
      <Input
          placeholder="Correo electronico"
          variant="unstyled"
          autoCapitalize={'none'}
          underline={false}
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          style={[styles.input, formik.errors.email && styles.inputError]}
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
        onPress={formik.handleSubmit}
        isLoading={formik.isSubmitting}
      >
        CREAR CUENTA
      </Button>
    </View>
  )
}