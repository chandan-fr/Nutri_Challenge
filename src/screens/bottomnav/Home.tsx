import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { dark, darkShade1, darkShade2, gold, goldShade1, green, greenShade3, light, lightShade2 } from '../../config/StaticColors';

interface HomeProps {
  navigation: any;
}

const { width, height } = Dimensions.get("window");

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [isMidSBtn, setIsMidSBtn] = useState<string>("appointment");

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.body}>

        {/* head bar */}
        <View style={styles.headWrap}>
          <TouchableOpacity style={{ padding: 7 }} onPress={() => navigation.openDrawer()}>
            <Image style={styles.menuIcon} source={require("../../assets/icons/hamburger.png")} />
          </TouchableOpacity>

          <Text style={styles.headText}>Home</Text>

          <TouchableOpacity style={styles.pIcon}>
            {/* <Image style={{width: 20, height: 20}} source={{uri: ""}} /> */}
          </TouchableOpacity>
        </View>

        {/* welcom user  */}
        <View style={styles.welcomeSec}>
          <Text style={styles.welcomeText}>Welcome, Olivia</Text>
          <Text style={styles.welcomeTime}>Today, 21 March 2023</Text>
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

        <ScrollView style={{ marginTop: 25 }} showsVerticalScrollIndicator={false}>
          {/* mid section  */}
          <View style={styles.midS}>
            <Text style={styles.secHText}>Book Doctor's Appointment Now</Text>

            {/* toggle button  */}
            <View style={styles.midSWrap}>
              <TouchableOpacity
                style={[isMidSBtn === "appointment" ? styles.midSBtnActive : styles.midSBtn, { marginRight: 10 }]}
                onPress={() => setIsMidSBtn("appointment")}
              >
                <Text
                  style={isMidSBtn === "appointment" ? styles.midSBtnTextActive : styles.midSBtnText}
                >
                  Appointment
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[isMidSBtn === "analytics" ? styles.midSBtnActive : styles.midSBtn, { marginLeft: 10 }]}
                onPress={() => setIsMidSBtn("analytics")}
              >
                <Text
                  style={isMidSBtn === "analytics" ? styles.midSBtnTextActive : styles.midSBtnText}
                >
                  Analytics
                </Text>
              </TouchableOpacity>
            </View>

            {/* mid section content  */}
            <View style={styles.midSContWrap}>
              <TouchableOpacity style={styles.midSCont}>
                <View style={styles.leftMidSContBox}></View>

                <View style={styles.rightMidSContBox}>
                  <View style={styles.trmscont}>
                    <View>
                      <Text style={{ color: dark, fontSize: 16, marginBottom: 10 }}>Alex Johnson</Text>
                      <Text style={{ color: darkShade1, fontSize: 14 }}>Nutritionist</Text>
                    </View>

                    <TouchableOpacity
                      style={{ backgroundColor: goldShade1, paddingVertical: 5, paddingHorizontal: 7, borderRadius: 8 }}
                    >
                      <Image
                        style={{ width: 25, height: 25, tintColor: gold }}
                        source={require("../../assets/icons/videocamera.png")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.brmsCont}>
                    <Image
                      style={{ width: 14, height: 14, tintColor: darkShade2 }}
                      source={require("../../assets/icons/calendar-solid.png")}
                    />
                    <Text style={{ color: darkShade1, fontSize: 14, marginLeft: 7 }}>Mon, Mar 23 - 09:00 am</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.midSCont, { marginTop: 10 }]}>
                <View style={styles.leftMidSContBox}></View>

                <View style={styles.rightMidSContBox}>
                  <View style={styles.trmscont}>
                    <View>
                      <Text style={{ color: dark, fontSize: 16, marginBottom: 10 }}>Samantha Lee</Text>
                      <Text style={{ color: darkShade1, fontSize: 14 }}>Nutrition Specialist</Text>
                    </View>

                    <TouchableOpacity
                      style={{ backgroundColor: goldShade1, paddingVertical: 5, paddingHorizontal: 7, borderRadius: 8 }}
                    >
                      <Image
                        style={{ width: 25, height: 25, tintColor: gold }}
                        source={require("../../assets/icons/videocamera.png")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.brmsCont}>
                    <Image
                      style={{ width: 14, height: 14, tintColor: darkShade2 }}
                      source={require("../../assets/icons/calendar-solid.png")}
                    />
                    <Text style={{ color: darkShade1, fontSize: 14, marginLeft: 7 }}>Mon, Mar 23 - 11:30 am</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* bottom section  */}
          <View style={styles.btmS}>
            <Text style={styles.secHText}>Upcoming Diet Programs</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={styles.btmSWrap}>
                <TouchableOpacity style={styles.btmSBox}></TouchableOpacity>

                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: dark, fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
                    Food Diet Plan
                  </Text>
                  <Text style={{ color: darkShade1, fontSize: 12 }}>February, 12 2023</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.btmSWrap, { marginLeft: 10 }]}>
                <TouchableOpacity style={styles.btmSBox}></TouchableOpacity>

                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: dark, fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
                    Exercise Plan
                  </Text>
                  <Text style={{ color: darkShade1, fontSize: 12 }}>January, 16 2023</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.btmSWrap, { marginLeft: 10 }]}>
                <TouchableOpacity style={styles.btmSBox}></TouchableOpacity>

                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: dark, fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
                    Personal Training
                  </Text>
                  <Text style={{ color: darkShade1, fontSize: 12 }}>January, 4 2023</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home;

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
    backgroundColor: greenShade3,
    borderRadius: 40,
  },
  welcomeSec: {
    marginTop: 20,
  },
  welcomeText: {
    color: dark,
    fontSize: 20,
    fontWeight: "600",
  },
  welcomeTime: {
    color: darkShade1,
    fontSize: 14,
    marginTop: 3,
  },
  searchWrap: {
    marginTop: 30,
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
  midS: {
    // marginTop: 25,
  },
  secHText: {
    color: dark,
    fontSize: 16,
    fontWeight: "600"
  },
  midSWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
  midSBtn: {
    backgroundColor: light,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 12,
  },
  midSBtnActive: {
    backgroundColor: green,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 12,
  },
  midSBtnText: {
    color: darkShade1,
  },
  midSBtnTextActive: {
    color: light,
  },
  midSContWrap: {
    marginTop: 20,
  },
  midSCont: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: light,
    padding: 13,
    borderRadius: 12,
  },
  leftMidSContBox: {
    width: 100,
    height: 100,
    backgroundColor: greenShade3,
    borderRadius: 12,
  },
  rightMidSContBox: {
    flex: 1,
    marginLeft: 15,
  },
  trmscont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brmsCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  btmS: {
    marginTop: 25,
    marginBottom: 15,
  },
  btmSWrap: {
    backgroundColor: light,
    padding: 15,
    width: 160,
    borderRadius: 10,
    marginTop: 20,
  },
  btmSBox: {
    width: 130,
    height: 100,
    backgroundColor: greenShade3,
    borderRadius: 10,
  }
});