import { View, Text } from 'react-native';
import { Input, Button, Alert } from 'native-base'
import { styles } from './LoginForm.styles'
import { initialValues, validationSchema } from './LoginForm.form';
import { useFormik } from 'formik';


export function LoginForm() {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <View>
            <View style={styles.viewInput}>
                <Input
                    variant="unstyled"
                    placeholder='Correo electronico'
                    autoCorrect={false}
                    autoCapitalize='none'
                    style={[
                        styles.input,
                        formik.touched.email && formik.errors.email && styles.inputError
                    ]}
                    value={formik.values.email}
                    onChangeText={(text) => formik.setFieldValue("email", text)}
                />
            </View>
            <Input
                placeholder='Contraseña'
                variant='unstyled'
                secureTextEntry
                style={[
                    styles.input,
                    formik.touched.password && formik.errors.password && styles.inputError
                ]}
                value={formik.values.password}


            />

            <Button style={styles.btn} onPress={formik.handleSubmit}>
                INICIAR SESION
            </Button>
        </View>
    )
}