import * as  Yup from 'yup';

export const initialValues = () => ({
    email: '',
    password: ''
})

export const validationSchema = () => Yup.object({
    email: Yup.string().email('Correo electronico invalido').required('El correo electronico es requerido'),
    password: Yup.string().required('La contraseña es requerida')
})
