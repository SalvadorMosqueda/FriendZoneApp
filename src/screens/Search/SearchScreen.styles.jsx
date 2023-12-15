import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window')

console.log(height)
export const styles = new StyleSheet.create({
    imgPerfil:{
        width: '95%',
        height:  height/2,
        borderRadius: 100,
        alignContent: 'center',
        // borderRadius: 100,
      
    }
})