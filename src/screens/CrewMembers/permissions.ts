import { Platform } from 'react-native'
import { checkMultiple, PERMISSIONS, requestMultiple } from 'react-native-permissions'

export const permissionsIOS = [
    PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
]

export const permissionsAndroid = [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]

export const checkPermissions = Platform.select({
    ios: async () => {
        const statuses = await checkMultiple(permissionsIOS)
        return permissionsIOS.every((key) => statuses[key] === 'granted')
    },
    android: async () => {
        const statuses = await checkMultiple(permissionsAndroid)
        console.log(statuses)

        return permissionsAndroid.every((key) => statuses[key] === 'granted')
    },
}) as () => Promise<boolean>

export const requestPermissions = Platform.select({
    ios: async () => {
        const statuses = await requestMultiple(permissionsIOS)

        return permissionsIOS.every((key) => statuses[key] === 'granted')
    },
    android: async () => {
        const statuses = await requestMultiple(permissionsAndroid)

        return permissionsAndroid.every((key) => statuses[key] === 'granted')
    },
}) as () => Promise<boolean>
