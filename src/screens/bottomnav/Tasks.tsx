import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { dark, darkShade1, gold, green, greenShade1, greenShade2, greenShade3, light, lightShade1 } from '../../config/StaticColors';
import { DayDate, getMonthToDatesArray } from '../../config/MonthsToDateArray';


interface TasksProps {
  navigation: any;
}

const { width, height } = Dimensions.get("window");


const Tasks: React.FC<TasksProps> = ({ navigation }) => {
  const mtda = getMonthToDatesArray();
  const currentDay: number = new Date().getDate();
  const currentYear: number = new Date().getFullYear();
  const currentMonth: string = new Date().toLocaleString('en-US', { month: 'long' });

  // const [curIndex, setCurIndex] = useState<any>(new Date().getDate());
  const flatListRef = useRef<FlatList<DayDate>>(null);

  const getItemLayout = (data: any, index: number) => {
    return ({
      length: 52,
      offset: 52 * index,
      index,
    });
  }

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index: currentDay });
    }
  }, [currentDay]);

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

          <Text style={styles.headText}>Tasks</Text>

          <TouchableOpacity style={styles.pIcon}>
            {/* <Image style={{width: 20, height: 20}} source={{uri: ""}} /> */}
          </TouchableOpacity>
        </View>

        {/* calendar  */}
        <View style={styles.calndWrap}>
          <Text style={styles.calndText}>{currentMonth} {currentYear}</Text>

          <FlatList
            ref={flatListRef}
            data={mtda}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <>
                <TouchableOpacity
                  style={item.date == currentDay ? styles.dateBoxActive : styles.dateBox}
                >
                  <Text
                    style={[{ fontSize: 13, fontWeight: "600", marginBottom: 8 },
                    item.date == currentDay ? { color: greenShade2 } : { color: darkShade1 }
                    ]}
                  >
                    {item.day.toUpperCase()}
                  </Text>
                  <Text
                    style={[{ fontSize: 17, fontWeight: "600" },
                    item.date == currentDay ? { color: light } : { color: dark }
                    ]}
                  >
                    {item.date}
                  </Text>
                </TouchableOpacity>

                {index == mtda.length - 1 ? null : <View style={{ marginHorizontal: 4 }} />}
              </>
            )}
            getItemLayout={getItemLayout}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Tasks;

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
  calndWrap: {
    marginTop: 25,
  },
  calndText: {
    color: dark,
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 15,
  },
  dateBox: {
    backgroundColor: light,
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    width: 55,
  },
  dateBoxActive: {
    backgroundColor: green,
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    width: 55,
  },
  // calndWrap:{},
  // calndWrap:{},
});