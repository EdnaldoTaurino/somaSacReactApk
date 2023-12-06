// pagina de auth
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/login/index";
import { useTheme } from "styled-components";
import { MissedPassword } from "../pages/login/MissedPassword";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  const { colors } = useTheme();
  return (
    <Stack.Navigator screenOptions={{
        headerTintColor: colors.onBackground,
        headerStyle: {
          backgroundColor: colors.backgroundSecondary,
        },
      }}
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="MissedPassword" component={MissedPassword} options={{ headerShown: true, headerTransparent: true }}/>
    </Stack.Navigator>
  );
}
