import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerScreen from './CustomDrawerScreen';
import MainDrawer from './MainDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = (): JSX.Element => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: styles.drawerStyle,
            }}
            drawerContent={props => <CustomDrawerScreen {...props} />}
        >
            <Drawer.Screen name="main" options={{ headerShown: false }} component={MainDrawer} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;

const styles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: "transparent",
    },
})