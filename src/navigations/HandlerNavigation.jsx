import { View, Text } from 'react-native'
import React from 'react'
import { AuthNavigation } from './stacks/index.js'

const AppNavigation = () => {
    return (
        <View>
            <Text>AppNavigation</Text>
        </View>
    )
}



export function HandlerNavigation() {
    const user = null;
    return (
        user ? <AppNavigation /> : <AuthNavigation />)
}