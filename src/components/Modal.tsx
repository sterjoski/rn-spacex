import React, { ReactNode } from 'react'
import { NativeTouchEvent, StyleSheet, Text } from 'react-native'
import { View, TouchableOpacity, Modal as RNModal, NativeSyntheticEvent } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import colors from 'res/colors'

import Button from './Button'

export interface ModalProps {
    open: boolean
    onClose?: () => void
    title?: string
    text?: string
    primaryButtonTitle?: string
    onPrimaryButtonPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void
    secondaryButtonTitle?: string
    onSecondaryButtonPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void
    children?: ReactNode
}

const Modal = ({
    open,
    onClose,
    title,
    text,
    primaryButtonTitle,
    onPrimaryButtonPress,
    secondaryButtonTitle,
    onSecondaryButtonPress,
    children,
}: ModalProps) => {
    return (
        <RNModal
            transparent
            hardwareAccelerated={true}
            animationType='fade'
            visible={open}
            onRequestClose={onClose}
            statusBarTranslucent={true}
        >
            <View style={styles.backdrop} />
            <View style={styles.centeredView}>
                <View style={styles.modal}>
                    {!!onClose && (
                        <TouchableOpacity style={styles.closeIcon} activeOpacity={0.3} onPress={onClose}>
                            <Icon name='close' size={25} />
                        </TouchableOpacity>
                    )}
                    {!!title && <Text style={styles.title}>{title}</Text>}

                    {!!children && children}

                    {!!text && <Text style={styles.text}>{text}</Text>}

                    {!!primaryButtonTitle && !!onPrimaryButtonPress && (
                        <Button title={primaryButtonTitle} onPress={onPrimaryButtonPress} />
                    )}

                    {!!secondaryButtonTitle && !!onSecondaryButtonPress && (
                        <Button variant='secondary' title={secondaryButtonTitle} onPress={onSecondaryButtonPress} />
                    )}
                </View>
            </View>
        </RNModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.backdrop,
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        // ...shadows.dialog,
        marginLeft: 37,
        marginRight: 37,
        minWidth: 300,
    },
    closeIcon: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 13,
        right: 13,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 6,
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 18,
    },
})
