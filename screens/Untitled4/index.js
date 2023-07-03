import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Untitled5");
      }}><View style={styles.sQkyQPIR}><Text style={styles.YlUcMJPC}>{"API ONE"}</Text></View></Pressable><View style={styles.VhcvuVHL}><Text style={styles.WrgGMgBb}>{"API TWO"}</Text></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  sQkyQPIR: {
    height: 60,
    width: 140,
    backgroundColor: "#4868ea",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 201,
    left: 104
  },
  VhcvuVHL: {
    height: 60,
    width: 140,
    backgroundColor: "#f06565",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    top: 334,
    left: 102,
    borderColor: "#ea6565"
  },
  YlUcMJPC: {
    width: 89,
    height: 18,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 22,
    left: 25
  },
  WrgGMgBb: {
    width: 86,
    height: 21,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center",
    position: "absolute",
    top: 24,
    left: 26
  }
});
export default Untitled4;