import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import Rocket from 'library/models/Rocket'

import colors from 'res/colors'

export interface RocketCardProps {
    rocket: Rocket
}

const RocketCard = ({ rocket }: RocketCardProps) => {
    return (
        <View style={styles.card}>
            <ImageBackground source={{ uri: rocket.image }} style={styles.image} resizeMode='cover'>
                <View style={styles.cardContent}>
                    <Text style={styles.rocketTitle}>{rocket.name}</Text>
                    <View style={styles.icons}>
                        <Text>{rocket.successRatePercentage}%</Text>
                        <Text>Test</Text>
                        <Text>Test</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default RocketCard

const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        width: '90%',
        height: 300,
        borderRadius: 18,
        marginTop: 18,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        elevation: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
    },
    cardContent: {
        padding: 18,
        height: 80,
        backgroundColor: colors.primary,
    },
    rocketTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
