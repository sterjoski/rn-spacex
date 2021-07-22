import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react'

import { Screen } from 'config/constants'

import { NavigationParams } from 'navigation/types'

import colors from 'res/colors'

const CrewMember = () => {
    const navigation = useNavigation()
    const {
        params: { crewMember },
    } = useRoute<RouteProp<NavigationParams, Screen.CrewMember>>()

    useEffect(() => {
        navigation.setOptions({ title: crewMember.name })
    }, [])

    return (
        <SafeAreaView>
            <ImageBackground source={{ uri: crewMember.image }} style={styles.image} resizeMode='cover'>
                <View style={styles.cardContent}>
                    <Text
                        style={styles.description}
                    >{`${crewMember.name} is an ${crewMember.status} crew member from ${crewMember.agency}.`}</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default CrewMember

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
    },
    cardContent: {
        padding: 18,
        backgroundColor: colors.primary,
    },
    description: {
        color: '#fff',
        fontSize: 14,
    },
})
