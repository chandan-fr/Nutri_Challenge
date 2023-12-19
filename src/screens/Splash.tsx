import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

interface SplashProps {
  navigation: any;
}

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(()=> navigation.replace("drawernav"), 2000);
  }, []);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({});