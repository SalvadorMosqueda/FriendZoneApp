import { View, Text } from 'react-native'
import React from 'react'
import { AuthNavigation } from './stacks/index.js'
import { AppNavigation } from './AppNavigation.jsx'

export function HandlerNavigation() {
    const user = { name: "John Doe"};
    return (
        user ? <AppNavigation /> : <AuthNavigation />)
}