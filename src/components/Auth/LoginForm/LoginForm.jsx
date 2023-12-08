import {View,Text} from 'react-native';
import { Input, Button,Alert } from 'native-base'
import { styles } from './LoginForm.styles'

export function LoginForm() {
    return (
        <View>
           <View style={styles.viewInput}>
            <Input
              variant="unstyled"
            placeholder='Correo electronico'
            autoCorrect={false}
            autoCapitalize='none'
            style={styles.input}

            
            />

           </View>
        </View>
    )
}