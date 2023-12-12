import { View, Text, Image } from 'react-native';
import { Input, Button,Icon, Alert } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './LoginForm.styles'
import { initialValues, validationSchema } from './LoginForm.form';
import { useFormik } from 'formik';
import { Auth } from '../../../api';
import { assets } from '../../../assests';
import { QueryClient, useMutation, useQuery, } from '@tanstack/react-query'

export function LoginForm() {
    authController = new Auth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (values) => {
            mutation.mutate(values);
        }
    })


    const mutation = useMutation({
        mutationFn: authController.login,
        onSuccess: (response) => {
            console.log('exito', response.data)
        },
        onError: (error) => {
            console.log("error", error.response.data)
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
                onChangeText={(text) => formik.setFieldValue("password", text)}
                style={[
                    styles.input,
                    formik.touched.password && formik.errors.password && styles.inputError
                ]}
                value={formik.values.password}
            />
            <Text style={{ textAlign: 'right', marginRight: 15, marginTop: 5 }}>Olvidaste tu contraseña?</Text>

            <Button style={styles.btn} onPress={formik.handleSubmit}>
                <Text style={styles.textBtn}>INICIAR SESION</Text>
            </Button>
            <Text style={styles.textOR}>U</Text>

            <View style={styles.optionLogin}>
                <Image source={assets.image.jpg.facebook} />
                <Image source={assets.image.jpg.apple} />
                <Image source={assets.image.jpg.google} />
            </View>
        </View>
    )
}