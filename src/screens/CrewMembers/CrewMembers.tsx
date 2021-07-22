import React, { useState } from 'react'
import { RefreshControl, Text, View } from 'react-native'
import { useQuery } from 'react-query'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import SafeAreaView from 'components/SafeAreaView'
import Modal from 'components/Modal'
import BackdropLoading from 'components/BackdropLoading'
import Error from 'components/Error'

import { CacheDuration, CacheKeys, Screen } from 'config/constants'

import { crewService } from 'library/services/crewService'
import CrewMember from 'library/models/CrewMember'

import CrewMemberCard from './CrewMemberCard'
import { checkPermissions, requestPermissions } from './permissions'

const CrewMembers = () => {
    const navigation = useNavigation()
    const {
        data: crewMembers,
        isFetching,
        isLoading,
        isError,
        refetch,
    } = useQuery(CacheKeys.CrewMembers, crewService.getCrewMembers, {
        cacheTime: CacheDuration.Long,
    })

    const [isPermissionsError, setIsPermissionsError] = useState(false)

    const onCloseErrorModal = () => setIsPermissionsError(false)

    const onRequestPermissions = () => {
        requestPermissions()
        onCloseErrorModal()
    }

    const onMemberPress = async (crewMember: CrewMember) => {
        const arePermissionsGranted = await checkPermissions()

        if (!arePermissionsGranted) {
            setIsPermissionsError(true)
            return
        }

        navigation.navigate(Screen.CrewMember, { crewMember })
    }

    if (isLoading) return <BackdropLoading />

    if (isError) return <Error />

    if (crewMembers?.length === 0)
        return (
            <View>
                <Text>Empty</Text>
            </View>
        )

    return (
        <SafeAreaView>
            <Modal
                open={isPermissionsError}
                title='Permissions Required'
                text='The app needs certain permissions to access this page'
                onClose={onCloseErrorModal}
                primaryButtonTitle='Request Permissions'
                onPrimaryButtonPress={onRequestPermissions}
                secondaryButtonTitle='Close'
                onSecondaryButtonPress={onCloseErrorModal}
            />
            <FlatList
                data={crewMembers}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item: crewMember }) => (
                    <CrewMemberCard crewMember={crewMember} onPress={() => onMemberPress(crewMember)} />
                )}
                refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
            />
        </SafeAreaView>
    )
}

export default CrewMembers
