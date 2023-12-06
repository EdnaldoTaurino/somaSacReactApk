import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../styles/styles";
import moment from 'moment';

export default function MessageComponent({ item }) {
  const status = !item.sentByMe;

  return (
    <View>
      <View
        style={
          status
            ? styles.mmessageWrapper
            : [styles.mmessageWrapper, { alignItems: "flex-end"}]
        }
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="person-circle-outline"
            size={30}
            color="black"
            style={styles.mavatar}
          />
          <View
            style={
              status
                ? styles.mmessage
                : [styles.mmessage, { backgroundColor: "rgb(194, 243, 194)" }]
            }
          >
            <Text>{item.text}</Text>
            <Text style={{ opacity: 0.3, fontSize: 12 }}>
              {moment(item.timestamp).format("DD/MM/YY - HH:mm")}
              {/* {moment(item.timestamp).format("DD/MM/YY - HH:mm:ss")} */}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}