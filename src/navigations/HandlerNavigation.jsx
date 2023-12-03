import { View, Text } from 'react-native'
import React from 'react'

const AppNavigation = () => {
    return (
        <View>
            <Text>AppNavigation</Text>
        </View>
    )
}

const AuthNavigation = () => {
    return (
        <View>
            <Text>AuthNavigation</Text>
        </View>
    )

}

export function HandlerNavigation() {
    const user = null;
    return (
        user ? <AppNavigation /> : <AuthNavigation />)
}