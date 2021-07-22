import React from 'react'
import { useNetInfo } from '@react-native-community/netinfo'

import Modal from './Modal'

const NetworkError = () => {
    const { isConnected } = useNetInfo()

    return (
        <Modal
            open={!isConnected}
            title='Network Error'
            text='It appears that you are offline, please establish an internet connection and try again'
        />
    )
}

export default NetworkError
