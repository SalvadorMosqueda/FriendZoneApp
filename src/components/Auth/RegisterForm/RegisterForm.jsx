import { View } from 'react-native'
import { Input, Button } from 'native-base'
import { styles } from './RegisterForm.styles'
import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import { Auth } from "../../../api"
import {QueryClient,useMutation,useQuery,} from '@tanstack/react-query'
import { initialValues, validationSchema } from './RegisterForm.form'

export function RegisterForm() {

  authController = new Auth()
 const  navigation = useNavigation()

  const mutation = useMutation({
    mutationFn: authController.register,
    onSuccess: () => {
      
      navigation.goBack();
    },
    onError: (error) => {
    
     
    }
  })

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async ({ email, password }) => {
      mutation.mutate({ email, password });
    }
  })


  return (
    
    <View>
       
      <View style={styles.viewInput}>
    
        <Input
          placeholder="Correo electronico"
          variant="unstyled"
          autoCapitalize={'none'}
    
          autoCorrect={false}
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          style={[
            styles.input,
            formik.touched.email && formik.errors.email && styles.inputError
          ]}
        />
      </View>
      <Input
        placeholder="Contraseña"
        variant="unstyled"
        secureTextEntry
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.inputError
        ]}
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