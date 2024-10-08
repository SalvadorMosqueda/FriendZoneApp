import { StyleSheet } from "react-native";


export const styles = new StyleSheet.create({
    viewInput:{
   
    },
    input:{
        // backgroundColor: "#812C11",
        color: "black",
        borderBottomWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        borderColor: '#B7916A',
        fontSize: 18,
        // paddingLeft: 45,
        borderWidth: 0,
        marginVertical: 5,
        
    },
    optionLogin:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'center',
        // marginVertical: 20,
        gap: 30,
        marginTop:5
    },
    btn:{
        backgroundColor: '#F7DDA4',
        fontWeight: '600',
        color: '#202020',
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
        textAlign: 'center',
        marginTop:30
    },
    textBtn:{
        color: '#B7916A',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
    textOR:{
        color: '#B7916A',
        fontSize: 18,
        marginVertical: 15,
        fontWeight: '600',
        textAlign: 'center',},
    inputError: {
        backgroundColor: "#270C0D",
      },
   
})
