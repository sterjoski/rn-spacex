import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Error = () => {
    return (
        <View style={styles.container}>
            <Text>It looks like our servers are temporarily down, please try again later</Text>
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
