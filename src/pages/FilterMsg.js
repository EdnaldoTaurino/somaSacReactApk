import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/styles";
import { useAuth } from "../contexts/auth";

export function FilterMsg() {
  const navigation = useNavigation();
  const { authData } = useAuth();
  
  return (
    <View style={styles.container2}>
      <Text style={styles.title}>Tela de filtro de mensagens não lidas</Text>
      <Text>{authData?.user.name} </Text>
    </View>
  );
}