import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window')


export const styles = new StyleSheet.create({
    imgPerfilContainer: {
        width: '100%',
        height: height/2 +10*4,
        borderRadius: 30,
        // justifyContent:'space-between',
        overflow: 'hidden',
      },
      contentImageBackground:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      imgPerfil: {
        width: '100%',
        justifyContent: 'flex-end',
       
        height: '100%',
      },
})