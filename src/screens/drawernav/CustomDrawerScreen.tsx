import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CustomDrawerScreenProps {
    navigation: any;
}

const CustomDrawerScreen: React.FC<CustomDrawerScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Text>CustomDrawerScreen</Text>
        </View>
    )
}

export default CustomDrawerScreen;

const styles = StyleSheet.create({});