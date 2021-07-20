import React from 'react'
import { ActivityIndicator, FlatList, RefreshControl, Text } from 'react-native'
import { useQuery } from 'react-query'

import SafeAreaView from 'components/SafeAreaView'

import { CacheDuration, CacheKeys } from 'config/constants'

import { rocketService } from 'library/services/rocketService'

const Rockets = () => {
    const {
        data: rockets,
        isFetching,
        refetch,
    } = useQuery(CacheKeys.Rockets, rocketService.getRockets, {
        cacheTime: CacheDuration.Long,
    })

    if (isFetching) return <ActivityIndicator />

    return (
        <SafeAreaView>
            <FlatList
                data={rockets}
                keyExtractor={(item) => item.id}
                renderItem={({ item: rocket }) => <Text key={rocket.id}>{rocket.name}</Text>}
                refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
            />
        </SafeAreaView>
    )
}

export default Rockets
