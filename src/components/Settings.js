import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SettingScreen } from "../pages/SettingScreen";

export function Settings({ SettingsButton }) {
  return (
    <View>
      <TouchableOpacity onPress={SettingScreen}>
        <Text>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}
