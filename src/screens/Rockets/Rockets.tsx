import React from 'react'
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native'
import { useQuery } from 'react-query'

import SafeAreaView from 'components/SafeAreaView'
import BackdropLoading from 'components/BackdropLoading'
import Error from 'components/Error'

import { CacheDuration, CacheKeys } from 'config/constants'

import { rocketService } from 'library/services/rocketService'

import RocketCard from './RocketCard'

const Rockets = () => {
    const {
        data: rockets,
        isError,
        isFetching,
        isLoading,
        refetch,
    } = useQuery(CacheKeys.Rockets, rocketService.getRockets, {
        cacheTime: CacheDuration.Long,
    })

    if (isLoading) return <BackdropLoading />

    if (isError) return <Error />

    if (rockets?.length === 0)
        return (
            <View>
                <Text>Empty</Text>
            </View>
        )

    return (
        <SafeAreaView>
            <FlatList
                data={rockets}
                keyExtractor={(item) => item.id}
                renderItem={({ item: rocket }) => <RocketCard rocket={rocket} />}
                refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
                style={styles.list}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    )
}

export default Rockets

const styles = StyleSheet.create({
    list: {},
    listContainer: {
        paddingBottom: 18,
    },
})
