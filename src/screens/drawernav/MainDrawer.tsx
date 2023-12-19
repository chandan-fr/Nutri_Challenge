import { View } from 'react-native'
import React from 'react'
import TabNavigation from '../bottomnav/TabNavigation';

const MainDrawer = () => {
    return (
        <View style={{ flex: 1 }}>
            <TabNavigation />
        </View>
    )
}

export default MainDrawer;