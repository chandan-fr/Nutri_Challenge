import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { dark, darkShade1, darkShade2, gold, goldShade1, green, greenShade3, light, lightShade2 } from '../../config/StaticColors';


type MessagesProps = {
  navigation: any;
}

const { width, height } = Dimensions.get("window");


const Messages = ({ navigation }: MessagesProps) => {
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
        <View style={styles.dpWrap}>
          <Text style={styles.secHead}>Diet Programs</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.dpCont}>
              <View style={styles.dpContBox}></View>

              <View style={styles.dpContBody}>
                <Text style={styles.contBodyHead}>Food Diet Plan</Text>
                <Text style={styles.contBodySubHead}>February, 12 2023</Text>
              </View>
            </View>

            <View style={[styles.dpCont, { marginLeft: 10 }]}>
              <View style={styles.dpContBox}></View>

              <View style={styles.dpContBody}>
                <Text style={styles.contBodyHead}>Exercise Plan</Text>
                <Text style={styles.contBodySubHead}>January, 16 2023</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* diet recipes */}
        <View style={styles.drWrap}>
          <Text style={styles.secHead}>Diet Recipes</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[styles.drCont, { marginTop: 10 }]}>
              <View style={styles.drContBox}></View>

              <View style={styles.drContBody}>
                <View>
                  <Text style={styles.contBodyHead}>Oatmeal Salad</Text>
                  <Text style={styles.contBodySubHead}>March, 10 2023</Text>
                </View>

                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.drCont, { marginVertical: 10, }]}>
              <View style={styles.drContBox}></View>

              <View style={styles.drContBody}>
                <View>
                  <Text style={styles.contBodyHead}>Banana Smoothie</Text>
                  <Text style={styles.contBodySubHead}>March, 12 2023</Text>
                </View>

                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
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
    color: darkShade1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: darkShade2,
    marginLeft: 15,
  },
  dpWrap: {
    marginTop: 25,
  },
  secHead: {
    color: dark,
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 18,
  },
  dpCont: {
    borderRadius: 12,
    backgroundColor: light,
    padding: 12,
    flexDirection: "row",
    width: width / 1.8,
    alignItems: "center",
  },
  dpContBox: {
    width: 70,
    height: 70,
    backgroundColor: greenShade3,
    borderRadius: 12,
  },
  dpContBody: {
    flex: 1,
    marginLeft: 15,
  },
  contBodyHead: {
    color: dark,
    fontSize: 15,
    fontWeight: "600",
  },
  contBodySubHead: {
    color: darkShade1,
    fontSize: 13,
    marginTop: 7,
  },
  drWrap: {
    marginTop: 25,
    flex: 1,
  },
  drCont: {
    backgroundColor: light,
    borderRadius: 12,
    padding: 12,
  },
  drContBox: {
    backgroundColor: greenShade3,
    borderRadius: 12,
    flex: 1,
    height: 160,
  },
  drContBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  btn: {
    backgroundColor: green,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  btnText: {
    color: light,
    fontSize: 13,
    fontWeight: 'bold',
  },
});