import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { dark, darkShade1, darkShade3, gold, green, greenShade1, greenShade2, greenShade3, light } from '../../config/StaticColors';
import { DayDate, getMonthToDatesArray } from '../../config/MonthsToDateArray';
import { tasks } from '../../config/StaticVariables';


interface TasksProps {
  navigation: any;
}

const { width, height } = Dimensions.get("window");


const Tasks: React.FC<TasksProps> = ({ navigation }) => {
  const mtda = getMonthToDatesArray();
  const currentDay: number = new Date().getDate();
  const currentYear: number = new Date().getFullYear();
  const currentMonth: string = new Date().toLocaleString('en-US', { month: 'long' });
  const actvProg: number = 35;

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
            onPress={() => navigation.goBack()}
          >
            <Image style={styles.menuIcon} source={require("../../assets/icons/back.png")} />
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

        <View style={styles.actvWrap}>
          {/* activity head  */}
          <View style={styles.actvHead}>
            <Text style={{ color: dark, fontSize: 17, fontWeight: "600" }}>Activity</Text>
            <Text style={{ color: green, fontSize: 13 }}>{1} OF {tasks.length} COMPLETE</Text>
          </View>

          {/* progress bar */}
          <View style={styles.actvProgBarWrap}>
            <View
              style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
            >
              <Text>🙂</Text>
              <Text style={{ color: dark, fontSize: 19, marginTop: 15, }}>{actvProg}%</Text>
            </View>

            <View style={{ height: 12, backgroundColor: darkShade3, borderRadius: 12, marginTop: 5 }}>
              <View style={{ width: (width - 44) * (actvProg / 100), height: 11, backgroundColor: gold, borderRadius: 12 }}></View>
            </View>
          </View>

          {/* activities */}
          <FlatList
            style={{ marginTop: 15 }}
            data={tasks}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <>
                {index == 0 ? <View style={{ marginTop: 10 }} /> : null}

                <View style={item.is_complete ? styles.actvItemActive : styles.actvItem}>
                  <View style={item.is_complete ? styles.actvItemBoxActive : styles.actvItemBox}></View>
                  <Text style={[
                    { flex: 1, fontSize: 15, fontWeight: "600" },
                    item.is_complete ? { color: light } : { color: dark }
                  ]}
                  >
                    {item.desp}
                  </Text>
                  {!item.is_complete ?
                    <TouchableOpacity style={styles.actvBtn}>
                      <Text style={{ color: green }}>Done</Text>
                    </TouchableOpacity>
                    :
                    <View style={{ alignItems: "center" }}>
                      <Image
                        style={{ width: 45, height: 45 }}
                        source={require("../../assets/icons/correct.png")}
                      />
                    </View>
                  }
                </View>

                {index == tasks.length - 1 ? null : <View style={{ marginBottom: 15 }} />}
              </>
            )}
          />
        </View>

        {/* add task button  */}
        <TouchableOpacity style={styles.addTaskBtn}>
          <Text style={{ color: light, fontWeight: "bold", fontSize: 13 }}>ADD TASK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

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
  actvWrap: {
    marginTop: 30,
    flex: 1,
  },
  actvHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actvProgBarWrap: {
    backgroundColor: light,
    borderRadius: 12,
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  actvItem: {
    backgroundColor: light,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    padding: 12,
  },
  actvItemActive: {
    backgroundColor: green,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    padding: 12,
  },
  actvItemBox: {
    width: 80,
    height: 80,
    backgroundColor: greenShade3,
    borderRadius: 12,
    marginRight: 15,
  },
  actvItemBoxActive: {
    width: 80,
    height: 80,
    backgroundColor: greenShade1,
    borderRadius: 12,
    marginRight: 15,
  },
  actvBtn: {
    borderWidth: 1,
    borderColor: green,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    width: 102,
  },
  addTaskBtn: {
    backgroundColor: green,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 22,
    marginVertical: 12,
  },
  // calndWrap:{},
});