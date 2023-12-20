import { Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Tasks from './Tasks';
import Messages from './Messages';
import Profile from './Profile';
import Icon from '../../utility/Icon';
import { darkShade2, green } from '../../config/StaticColors';

const Tab = createBottomTabNavigator();

interface TabNavigationProps {
    navigation: any;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let rn = route.name;
                    return <Icon name={rn} size={22} iconColor={focused ? green : darkShade2} />
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    // backgroundColor: "#ff0",
                    height: 60,
                },
            })}
        >
            <Tab.Screen
                name="home"
                options={{
                    headerShown: false,
                }}
                component={Home}
            />
            <Tab.Screen
                name="tasks"
                options={{
                    headerShown: false,
                    tabBarStyle: { display: "none" }
                }}
                component={Tasks}
            />
            <Tab.Screen
                name="msg"
                options={{
                    headerShown: false
                }}
                component={Messages}
            />
            <Tab.Screen
                name="profile"
                options={{
                    headerShown: false
                }}
                component={Profile}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation;