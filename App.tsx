import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/Splash';
import DrawerNavigation from './src/screens/drawernav/DrawerNavigation';


const RootStack = createNativeStackNavigator();


const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='splash'>
        <RootStack.Screen name="splash" options={{headerShown: false}} component={Splash} />
        <RootStack.Screen name="drawernav" options={{headerShown: false}} component={DrawerNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({});