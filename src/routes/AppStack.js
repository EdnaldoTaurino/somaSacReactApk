//criação das rotas do app
import React from "react";
import { View, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../styles/styles";
import { HomeScreen } from "../pages/HomeScreen";
import { SettingScreen } from "../pages/SettingScreen";
import { ContactScreen } from "../pages/ContactScreen";
import { NewChat } from "../pages/NewChat";
import { SearchScreen } from "../pages/SearchScreen";
import { Chat } from "../pages/chat/Chat";
import { FilterMsg } from "../pages/FilterMsg";
import { SaveContact } from "../pages/chat/SaveContact";
import { TransferContact } from "../pages/chat/TransferContact";
import { FinishScreen } from "../pages/chat/FinishScreen";
import { TesteScreen } from "../pages/TesteScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="início"
        component={TabRoute}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="NewChat" component={NewChat} />
      <Stack.Screen name="Mensagens" component={HomeScreen}  />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="TesteScreen" component={TesteScreen} options={{headerShown: false}}/>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="FilterMsg"
        component={FilterMsg}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SaveContact"
        component={SaveContact}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="TransferContact"
        component={TransferContact}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="FinishScreen"
        component={FinishScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

function TabRoute({ navigation }) {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          //screenOpitions para adicionar stilos na Tabbottom
          tabBarStyle: {
            position: "absolute",
            bottom: 16,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            height: 86,
            ...styles.shadow,
          },
          tabBarLabelStyle: { fontSize: 12, color: "black", bottom: 8 },
        }}
      >
        <Tab.Screen
          name="Mensagens"
          children={() => <HomeScreen navigation={navigation} />}
          options={{
            
            headerShown: false, //esconde o header
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 6,
                }}
              >
                <Image
                  source={require("../../assets/logoChatClick.png")}
                  style={{
                    width: 45,
                    height: 40,
                    // tintColor: focused ? "#e32f45" : "#748c94", //mudar a cor quando clica precisa de um icon transparente
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Conversas"
          component={NewChat}
          options={{
            tabBarStyle: { display: "none" }, // esconde o tabbar
            headerShown: false, //esconde o header
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 6,
                }}
              >
                <Image
                  source={
                    focused
                      ? require("../../assets/chatClick.png")
                      : require("../../assets/newmsg.png")
                  }
                  style={{
                    width: focused ? 40 : 110,
                    height: focused ? 40 : 80,
                    // tintColor: focused ? "#e32f45" : "#748c94", mudar a cor quando clica precisa de um icon transparente
                  }}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Contatos"
          component={ContactScreen}
          options={{
            headerShown: false, //esconde o header
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 6,
                }}
              >
                <Image
                  source={
                    focused
                      ? require("../../assets/contactsIcon.png")
                      : require("../../assets/contactsIcon2.png")
                  }
                  style={{
                    width: 40,
                    height: 40,
                    // tintColor: focused ? "#e32f45" : "#748c94", // mudar a cor quando clica precisa de um icon transparente
                  }}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Configurações"
          component={SettingScreen}
          options={{
            headerShown: false, //esconde o header
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  top: 6,
                }}
              >
                <Image
                  source={
                    focused
                      ? require("../../assets/userIconBlue.png")
                      : require("../../assets/userIcon.png")
                  }
                  style={{
                    width: 40,
                    height: 40,
                    // tintColor: focused ? "#e32f45" : "#748c94", mudar a cor quando clica precisa de um icon transparente
                  }}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>

      {/* botão mais flutuante */}
      {/* <View style={{ position: "absolute", bottom: 65, alignSelf: "center" }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("NewChat");
            }}
            style={styles.buttonMais}
          >
            <Text style={{ fontSize: 32, color: "white" }}>++++++++++</Text>
          </TouchableOpacity>
        </View> */}
      {/* </View> FECHAMENTO DA VIEW DO BOTÃO MAIS PARA FICAR ALINHADO NO CENTRO */}
    </>
  );
}
