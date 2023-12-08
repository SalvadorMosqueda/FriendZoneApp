import * as Yup from 'yup';

export const initialValues = () => {
    return {
        email: '',
        password: '',
        // confirmPassword: '',
    }
}

//validationSchema
export const validationSchema = () => {

    return Yup.object({
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
      });

    return Yup.object({
        email: Yup.string()
            .email('Correo electrónico inválido')
            .required('El correo electrónico es requerido'),
        password: Yup.string()
            .min(6, 'La contraseña debe tener mínimo 6 caracteres')
            .required('La contraseña es requerida'),
        // confirmPassword: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        //     .required('La confirmación de la contraseña es requerida'),
    })
}