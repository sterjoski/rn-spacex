import React, { ReactNode } from 'react'
import { SafeAreaView as CSafeAreaView } from 'react-native-safe-area-context'

interface Props {
    children: ReactNode
}

const SafeAreaView = ({ children }: Props) => {
    return <CSafeAreaView style={{ flex: 1 }}>{children}</CSafeAreaView>
}

export default SafeAreaView
