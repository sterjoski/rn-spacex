import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import { Screen } from 'config/constants'

import colors from 'res/colors'

import Rockets from 'screens/Rockets/Rockets'

import CrewMembersStackNavigator from './CrewMembersStackNavigator'

const MainTabNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === Screen.Rockets) {
                        iconName = focused ? 'ios-rocket' : 'ios-rocket-outline'
                    } else if (route.name === Screen.CrewMembersStack) {
                        iconName = focused ? 'ios-people' : 'ios-people-outline'
                    }

                    return <Icon name={iconName as string} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name={Screen.Rockets} component={Rockets} />
            <Tab.Screen
                name={Screen.CrewMembersStack}
                component={CrewMembersStackNavigator}
                options={{ title: 'Crew Members' }}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator
