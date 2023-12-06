import { View, Text } from 'react-native'
import React from 'react'
import { AuthNavigation } from './stacks/index.js'
import { AppNavigation } from './AppNavigation.jsx'

export function HandlerNavigation() {
    const user = null;
    return (
        user ? <AppNavigation /> : <AuthNavigation />)
}