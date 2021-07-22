import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import colors from 'res/colors'

interface Props {
    title: string
    variant?: 'primary' | 'secondary'
}

export type ButtonProps = Props & TouchableOpacityProps

const Button = ({ title, variant = 'primary', style, ...props }: ButtonProps) => {
    const variantStyle = variant === 'primary' ? [] : [styles.secondary]

    return (
        <TouchableOpacity style={[styles.button, ...variantStyle, style]} {...props}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: colors.primary,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    secondary: {
        backgroundColor: 'transparent',
    },
})

export default Button
