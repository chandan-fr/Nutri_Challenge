import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { dark, darkShade1, darkShade2, gold, goldShade1, green, greenShade3, light, lightShade2 } from '../../config/StaticColors';

interface MessagesProps {
  navigation: any;
}

const { width, height } = Dimensions.get("window");


const Messages: React.FC<MessagesProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.body}>
        {/* head bar */}
        <View style={styles.headWrap}>
          <TouchableOpacity
            style={{ paddingVertical: 7, paddingRight: 7 }}
            onPress={() => navigation.openDrawer()}
          >
            <Image style={styles.menuIcon} source={require("../../assets/icons/hamburger.png")} />
          </TouchableOpacity>

          <Text style={styles.headText}>Shop Health Products</Text>

          <TouchableOpacity style={styles.pIcon}>
            <Image style={{ width: 20, height: 20 }} source={require("../../assets/icons/bell.png")} />
          </TouchableOpacity>
        </View>

        {/* search */}
        <View style={styles.searchWrap}>
          <View style={styles.inputGrp
          }>
            <Image style={styles.searchIcon} source={require("../../assets/icons/search.png")} />
            <TextInput
              style={styles.inputBox}
              placeholder='Search'
              placeholderTextColor={darkShade2}
            />
          </View>
        </View>

        {/* diet programs  */}
        <View>
          
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Messages;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    flex: 1,
    marginHorizontal: 12,
    marginTop: 30,
  },
  headWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  menuIcon: {
    width: 20,
    height: 20,
    tintColor: dark,
  },
  headText: {
    color: dark,
    fontSize: 16,
    fontWeight: "500",
  },
  pIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: 'center',
  },
  searchWrap: {
    marginTop: 25,
  },
  inputGrp: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: lightShade2,
    backgroundColor: light,
  },
  inputBox: {
    flex: 1,
    marginLeft: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: darkShade2,
    marginLeft: 15,
  },
});