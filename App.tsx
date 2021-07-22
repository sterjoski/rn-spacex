import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider } from 'react-query'

import NetworkError from 'components/NetworkError'

import MainTabNavigator from 'navigation/MainTabNavigator'

const queryClient = new QueryClient()

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'

    //   const backgroundStyle = {
    //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    //   };

    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                    <NetworkError />
                    <MainTabNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </QueryClientProvider>
    )
}

export default App
