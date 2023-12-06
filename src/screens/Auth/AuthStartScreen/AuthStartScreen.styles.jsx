import {  StyleSheet } from 'react-native';

export const  styles = new StyleSheet.create({
    content: {
        flex: 1,
        margin:20,
        justifyContent: 'space-between',
    },
    img:{
        width: '100%',
        height: 400, 
        resizeMode: 'contain',
        marginVertical: 50
    },
    title:{
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    descripcion:{
        fontSize: 16,
        color: '#fff',
        opacity: 0.6,
        textAlign: 'center',
        marginBottom: 20
    },
    btn:{
        backgroundColor: '#0891b2',
        fontWeight: '600',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        textAlign: 'center',
        marginTop:20
    },

})
 