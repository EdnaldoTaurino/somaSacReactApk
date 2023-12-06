import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import { useAuth } from "../contexts/auth";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export function TesteScreen() {
  const navigation = useNavigation();
  const { authData } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Content</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
}
// container: {
//   flex: 1,
//   flexDirection: "column",
//   justifyContent: "space-between",
//   alignItems: "stretch",
//   padding: 10,
// },
// header: {
//   top: 10,
//   height: 50,
//   backgroundColor: "skyblue",
//   alignItems: "center",
//   justifyContent: "center",
//   flexDirection: "column",
// },
// headerText: {
//   fontSize: 18,
//   fontWeight: "bold",
// },
// content: {
//   flex: 1,
//   backgroundColor: "lightgreen",
//   alignItems: "center",
//   justifyContent: "center",
// },
// contentText: {
//   fontSize: 20,
// },
// footer: {
//   height: 50,
//   backgroundColor: "red",
//   alignItems: "center",
//   justifyContent: "center",
// },
// footerText: {
//   fontSize: 16,
// },
