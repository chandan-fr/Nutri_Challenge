import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

interface SplashProps {
  navigation: any;
}

const { width, height } = Dimensions.get("screen");

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace("drawernav"), 2000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={"transparent"} translucent={true} />
      <Image
        style={{ width: width, height: height }}
        source={require("../assets/images/screen.png")}
      />
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({});