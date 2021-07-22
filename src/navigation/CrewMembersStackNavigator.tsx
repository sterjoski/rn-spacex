import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Screen } from 'config/constants'

import CrewMembers from 'screens/CrewMembers/CrewMembers'
import CrewMember from 'screens/CrewMember/CrewMember'

const CrewMembersStackNavigator = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name={Screen.CrewMembers} component={CrewMembers} />
            <Stack.Screen name={Screen.CrewMember} component={CrewMember} options={{ title: 'Crew Members' }} />
        </Stack.Navigator>
    )
}

export default CrewMembersStackNavigator
