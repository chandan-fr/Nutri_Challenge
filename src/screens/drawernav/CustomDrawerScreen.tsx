import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { dark, darkShade1, gold, goldShade1, green, greenShade1, greenShade3, light } from '../../config/StaticColors';
import { Activity, activityList } from '../../config/StaticVariables';

interface CustomDrawerScreenProps {
    navigation: any;
}

const CustomDrawerScreen: React.FC<CustomDrawerScreenProps> = ({ navigation }) => {
    const [curIndex, setCurIndex] = useState<number>(2);

    return (
        <SafeAreaView style={styles.parent}>
            <View style={styles.body}>
                <View style={[styles.contBox, { flexDirection: "row", alignItems: "center" }]}>
                    <View style={{ width: 50, height: 50, backgroundColor: greenShade3, borderRadius: 12, }} />

                    <View
                        style={{ borderRadius: 12, flex: 1, alignItems: 'center', justifyContent: "center", marginLeft: 10, }}
                    >
                        <Text style={{ color: dark, fontSize: 19, fontWeight: "600" }}>
                            Hi, Olivia 👋
                        </Text>
                    </View>
                </View>

                <View style={[styles.contBox]}>
                    {activityList.map((item: Activity, i) => (
                        <View key={i}>
                            <TouchableOpacity
                                style={curIndex == i ? styles.acWrapActive : styles.acWrap}
                                onPress={() => setCurIndex(i)}
                            >
                                <Image style={styles.acImgIcon} source={item.acImg} />

                                <View
                                    style={{ flexDirection: "row", alignItems: "center", flex: 1, justifyContent: "space-between", marginLeft: 20, }}
                                >
                                    <View>
                                        <Text style={{ color: curIndex == i ? dark : darkShade1, fontWeight: "600", fontSize: 16 }}>
                                            {item.name}
                                        </Text>
                                    </View>

                                    {item.notification > 0 ?
                                        <View
                                            style={{ backgroundColor: "#1EEFFF", paddingVertical: 6, paddingHorizontal: 12, alignItems: "center", justifyContent: "center" }}
                                        >
                                            <Text style={{ color: dark, fontWeight: "600" }}>
                                                {item.notification}
                                            </Text>
                                        </View>
                                        :
                                        null
                                    }
                                </View>
                            </TouchableOpacity>

                            {i < activityList.length - 1 ? <View style={{ marginBottom: 10 }} /> : null}
                        </View>
                    ))}
                </View>

                <View style={[styles.contBox]}>
                    <Text style={{ fontSize: 17, color: dark, fontWeight: "600" }}>
                        Projects {3}
                    </Text>

                    <View style={{ backgroundColor: darkShade1, height: 1, marginVertical: 10, }} />

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ backgroundColor: "#f00", padding: 3 }}>
                            <Image style={styles.projectImgIcon} source={require("../../assets/icons/clipboards.png")} />
                        </View>

                        <View
                            style={{ borderRadius: 12, flex: 1, marginLeft: 15, }}
                        >
                            <Text style={{ color: dark, fontSize: 15, fontWeight: "600" }}>
                                Personal
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <View style={{ backgroundColor: "#FFD06C", padding: 3 }}>
                            <Image style={styles.projectImgIcon} source={require("../../assets/icons/clipboards.png")} />
                        </View>

                        <View
                            style={{ borderRadius: 12, flex: 1, marginLeft: 15, }}
                        >
                            <Text style={{ color: dark, fontSize: 15, fontWeight: "600" }}>
                                Travel
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 6 }}>
                        <View style={{ backgroundColor: "#57B3FE", padding: 3 }}>
                            <Image style={styles.projectImgIcon} source={require("../../assets/icons/clipboards.png")} />
                        </View>

                        <View
                            style={{ borderRadius: 12, flex: 1, marginLeft: 15, }}
                        >
                            <Text style={{ color: dark, fontSize: 15, fontWeight: "600" }}>
                                Business
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.contBox, {flexDirection: "row",  alignItems: "center"}]}>
                    <View>
                        <Image style={styles.profileImg} source={require("../../assets/icons/woman.png")} />
                    </View>

                    <View style={{marginLeft: 15, flex: 1}}>
                        <Text style={{fontSize: 19, color: dark, fontWeight: "600"}}>Olivia Davis</Text>
                        <Text style={{fontSize: 15, color: darkShade1, }}>MERN Developer</Text>
                        <Text style={{fontSize: 15, color: darkShade1, }}>React Native Developer</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CustomDrawerScreen;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    body: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    contBox: {
        borderRadius: 12,
        padding: 12,
        elevation: 5,
        marginBottom: 20,
        backgroundColor: light,
    },
    acWrap: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderRadius: 12,
    },
    acWrapActive: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderRadius: 12,
        backgroundColor: green,
    },
    acImgIcon: {
        width: 30,
        height: 30,
        tintColor: darkShade1,
    },
    projectImgIcon: {
        width: 25,
        height: 25,
        tintColor: light,
    },
    profileImg:{
        width: 70,
        height: 70,
    }
});