import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import CrewMember from 'library/models/CrewMember'

import colors from 'res/colors'

export interface CrewMemberCardProps {
    crewMember: CrewMember
    onPress: () => void
}

const CrewMemberCard = ({ crewMember, onPress }: CrewMemberCardProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.85}>
            <ImageBackground source={{ uri: crewMember.image }} style={styles.image} resizeMode='cover'>
                <View style={styles.cardContent}>
                    <Text style={styles.crewMemberTitle}>{crewMember.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CrewMemberCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginHorizontal: 10,
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
        backgroundColor: colors.primary,
    },
    crewMemberTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
})
