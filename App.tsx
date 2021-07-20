import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { QueryClient, QueryClientProvider } from 'react-query'

import Rockets from 'screens/Rockets/Rockets'
import CrewMembers from 'screens/CrewMembers/CrewMembers'

const queryClient = new QueryClient()

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'

    //   const backgroundStyle = {
    //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    //   };

    const Tab = createBottomTabNavigator()

    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                    <Tab.Navigator>
                        <Tab.Screen name='Rockets' component={Rockets} />
                        <Tab.Screen name='Crew Members' component={CrewMembers} />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </QueryClientProvider>
    )
}

export default App
