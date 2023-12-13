import { View, Text } from 'react-native'
import React from 'react'
import { AuthNavigation } from './stacks/index.js'
import { AppNavigation } from './AppNavigation.jsx'
import { userAuth } from '../hooks'

export function HandlerNavigation() {
    const { user } = userAuth()
    return (
        user ? <AppNavigation /> : <AuthNavigation />)
}