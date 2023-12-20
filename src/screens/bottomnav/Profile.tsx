import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { dark, darkShade1, gold, green, greenShade1, greenShade2, greenShade3, light, lightShade1 } from '../../config/StaticColors';
import { slides, tasks } from '../../config/StaticVariables';

interface ProfileProps {
  navigation: any;
}

const { width, height } = Dimensions.get("window");


const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const [curIndex, setCurIndex] = useState<any>(0);


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

          <Text style={styles.headText}>Profile</Text>

          <TouchableOpacity style={styles.pIcon}>
            {/* <Image style={{width: 20, height: 20}} source={{uri: ""}} /> */}
          </TouchableOpacity>
        </View>

        {/* welcom user  */}
        <View style={styles.welcomeSec}>
          <Text style={styles.welcomeText}>Hi, Ryan Davis 👋</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 25, }}>
          {/* slider */}
          <View style={styles.sliderWrap}>
            <FlatList
              data={slides}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.slideList}
              onScroll={event => {
                const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
                const x = contentOffset.x;
                setCurIndex((x / width).toFixed(0));
              }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <>
                  <TouchableOpacity style={styles.slideItem}>
                    <View style={styles.slideBox}></View>
                    <View style={styles.slideBody}>
                      <Text style={{ color: light, fontSize: 25 }}>
                        {item.discount}
                        <Text style={{ color: greenShade2, fontSize: 15 }}>  Discount</Text>
                      </Text>
                      <Text style={{ color: greenShade2, fontSize: 15, marginTop: 10 }}>{item.desp}</Text>
                    </View>
                  </TouchableOpacity>
                  {/* {index === slides.length -1 ? null : <View style={{marginRight: 5}} />} */}
                </>
              )}
            />

            {/* slide dots */}
            <View style={styles.slideDotWrap}>
              {slides.map((item, index: number) => (
                <View key={index} style={curIndex == index ? styles.slideDotActive : styles.slideDot} />
              ))}
            </View>
          </View>

          {/* task today  */}
          <View style={styles.taskWrap}>
            <View style={styles.taskHead}>
              <Text style={{ color: dark, fontSize: 17, fontWeight: "600" }}>Task Today</Text>
              <Text style={{ color: green, fontSize: 13 }}>{1} OF {tasks.length} COMPLETE</Text>
            </View>

            <FlatList
              data={tasks}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <>
                  <View style={item.is_complete ? styles.taskContDone : styles.taskCont}>
                    <View style={item.is_complete ? styles.taskContBoxDone : styles.taskContBox}></View>

                    <View>
                      <Text style={item.is_complete ? styles.taskContTextDone : styles.taskContText}>
                        {item.desp}
                      </Text>

                      {!item.is_complete ?
                        <TouchableOpacity style={styles.taskBtn}>
                          <Text style={{ color: green }}>Done</Text>
                        </TouchableOpacity>
                        :
                        <View style={{ alignItems: "center" }}>
                          <Image style={{ width: 50, height: 50 }} source={require("../../assets/icons/correct.png")} />
                        </View>
                      }
                    </View>
                  </View>
                  
                  {index == tasks.length - 1 ? null : <View style={{ marginHorizontal: 7 }} />}
                </>
              )}
            />

          </View>

          {/* Recomendation article  */}
          <View style={{ marginTop: 30, marginBottom: 20 }}>
            <Text style={{ color: dark, fontSize: 17, fontWeight: "600" }}>Recommendation Article</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20, }}>
              <View style={styles.raWrap}>
                <View style={styles.raBox}></View>

                <View>
                  <Text style={styles.raText}>Most Effective Sports</Text>
                  <Text style={styles.raSubText}>Curabitur eget ligula convallis, mattis an tellus sed, consequat odio.</Text>
                </View>
              </View>

              <View style={[styles.raWrap, { marginLeft: 10 }]}>
                <View style={styles.raBox}></View>

                <View>
                  <Text style={styles.raText}>Diet Nutrition Considerations</Text>
                  <Text style={styles.raSubText}>Donec orci quam, maximus rhoncus diet pellentesque ut, molestie nec lectus.</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Profile;

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
  sliderWrap: {
    borderRadius: 12,
    alignItems: "center"
  },
  slideList: {
    borderRadius: 12,
  },
  slideItem: {
    backgroundColor: green,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: width - 24,
    borderRadius: 12,
    padding: 12,
  },
  slideBox: {
    width: 150,
    height: 100,
    backgroundColor: greenShade1,
    borderRadius: 12,
  },
  slideBody: {
    flex: 1,
    marginLeft: 10,
    paddingLeft: 5,
  },
  slideDotWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  slideDot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: lightShade1,
    marginHorizontal: 5
  },
  slideDotActive: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: gold,
    marginHorizontal: 5
  },
  taskWrap: {
    marginTop: 25,
  },
  taskHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  taskCont: {
    padding: 12,
    backgroundColor: light,
    alignItems: "center",
    borderRadius: 12,
    width: 174,
  },
  taskContDone: {
    padding: 12,
    backgroundColor: green,
    alignItems: "center",
    borderRadius: 12,
    width: 174,
  },
  taskContBox: {
    width: 150,
    height: 100,
    backgroundColor: greenShade3,
    borderRadius: 12,
  },
  taskContBoxDone: {
    width: 150,
    height: 100,
    backgroundColor: greenShade1,
    borderRadius: 12,
  },
  taskContText: {
    color: dark,
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 13,
  },
  taskContTextDone: {
    color: light,
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 13,
  },
  taskBtn: {
    borderWidth: 1,
    borderColor: green,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  raWrap: {
    width: 274,
    backgroundColor: light,
    padding: 12,
    borderRadius: 12
  },
  raBox: {
    width: 250,
    height: 120,
    backgroundColor: greenShade3,
    borderRadius: 12,
  },
  raText: {
    color: dark,
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 10,
  },
  raSubText: {
    color: darkShade1,
    fontSize: 13,
  },
});