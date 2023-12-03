import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../../utils";
import {LoginScreen,RegisterScreen,AuthStartScreen } from "../../screens/Auth";
import { IconBack } from "../../components/Navigation";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            ...styles.stackNavigationStyles,
            headerLeft:IconBack
        }}
        >
            <Stack.Screen
                name={screens.auth.authStartScreen} component={AuthStartScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={screens.auth.loginScreen} component={LoginScreen}
                options={{
                    title:"Iniciar Sesion",
                    headerTitleAlign: 'center'
                }} />

            <Stack.Screen
            name={screens.auth.registerScreen} component={RegisterScreen}
            options={{
                title:"Registro ",
                headerTitleAlign: 'center'
            }}
            />
        </Stack.Navigator>
    )
}