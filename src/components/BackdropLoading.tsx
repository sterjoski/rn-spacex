import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { View } from 'react-native'

import colors from 'res/colors'

const BackdropLoading = () => {
    return (
        <View style={styles.backdrop}>
            <ActivityIndicator size='large' color={colors.primary} />
        </View>
    )
}

export default BackdropLoading

const styles = StyleSheet.create({
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.backdrop,
        bottom: 0,
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 10,
    },
})
