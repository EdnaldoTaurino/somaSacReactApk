import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./../styles/styles";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useAuth } from "../contexts/auth";
import { Picker } from "@react-native-picker/picker";
import MOCK_DATA from "../MOCK_DATA.json";

export function NewChat() {
  const navigation = useNavigation();
  const { authData } = useAuth();
  const [tronco, setTronco] = useState(""); // State for container valor tronco
  const [selectedValue, setSelectedValue] = useState("tronco");
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // State for controler if search it is actived
  const [selectedItem, setSelectedItem] = useState(null); // State for container a iten select

  //------------------ Function for click button go especifc screen
  const HomeClick = () => {
    // Navigation for window "HomeScreen" inside Tab.Navigator
    navigation.navigate("Mensagens", {
      screen: "HomeScreen",
    });
  };

  // Function for change text tronco
  const handleTextChange = (text) => {
    // Use regex remove char not numbers
    const numericText = text.replace(/[^0-9]/g, "");
    setTronco(numericText); // Atualized state tronco whith the valor filtred
  };

  const handleSearch = (text) => {
    setSearchWord(text);
    setIsSearching(!!text); // Define true if text not empty
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsSearching(false); // Closed list search after selection
  };

  return (
    <SafeAreaView style={styles.containerNewChat}>
      <View style={styles.headerNewChat}>
        <TouchableOpacity onPress={HomeClick}>
          <Image
            source={require("../../assets/backIcon.png")}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/logoHorizontalS_fundo.png")}
          style={{
            resizeMode: "contain",
            width: responsiveWidth(48),
            height: responsiveHeight(10),
          }}
        />
      </View>

      <View style={styles.textNewChatTop}>
        <Text style={{ fontWeight: "bold", fontSize: responsiveFontSize(2.2) }}>
          {" "}
          Nova conversa{" "}
        </Text>
        <Text> Inicie uma nova conversa enviando uma nova mensgem.</Text>
      </View>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.containerBody}>
          <View style={styles.troncoContainer}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
              style={{ borderRadius: 20 }}
            >
              <Picker.Item label="(11) 92000-2020- Whatsapp" value="Whatsapp" />
              <Picker.Item label="Instagram" value="Instagram" />
              <Picker.Item label="Facebook" value="Facebook" />
            </Picker>
          </View>
          <View style={styles.containerDddPara}>
            <View style={styles.dddContainer}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="DDD 83" value="" />
                <Picker.Item label="DDD 81" value="js" />
                <Picker.Item label="DDD" value="python" />
              </Picker>
            </View>
            <TextInput
              style={styles.inputNumber}
              keyboardType="phone-pad"
              placeholder="Para:"
              maxLength={11}
              autoCapitalize="none"
            />
          </View>
          <View>
            {selectedItem ? (
              <View syle={styles.templatesNewChat}>
                <TouchableOpacity onPress={() => setSelectedItem(null)}>
                  <Text style={styles.clearSelectionText}>Limpar seleção</Text>
                </TouchableOpacity>
                <TextInput
                  style={[styles.selectTemplate, { widh: "auto" }]}
                  placeholder="limpar"
                  value={selectedItem.first_name}
                  // onChangeText={handleClearText}
                />
              </View>
            ) : (
              <View style={styles.searchTemplateContainter}>
                <TextInput
                  placeholder="Procurar templates"
                  onChangeText={setSearchWord}
                  style={{ left: 10 }}
                />
                {searchWord.length > 0 && (
                  <ScrollView>
                    {MOCK_DATA.filter((val) => {
                      if (searchWord === "") {
                        return true;
                      } else if (
                        val.first_name
                          .toLowerCase()
                          .includes(searchWord.toLowerCase())
                      ) {
                        return true;
                      } else {
                        return false;
                      }
                    }).map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => handleSelectItem(item)}
                      >
                        <Text
                          style={{
                            left: 10,
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          {item.first_name}
                        </Text>
                        {/*stylo do texto selecionado*/}
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}
              </View>
            )}
          </View>
          <View style={styles.templatesContainter}>
            <ScrollView>
              <View style={{ left: 6 }}>
                <TouchableOpacity>
                  <Text style={{ marginBottom: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum ex quidem molestias, est tempora quae fugit
                    praesentium libero recusandae, repellendus natus nesciunt
                    eaque eius perspiciatis, optio veniam magnam enim facere!
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ marginBottom: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum ex quidem molestias, est tempora quae fugit
                    praesentium libero recusandae, repellendus natus nesciunt
                    eaque eius perspiciatis, optio veniam magnam enim facere!
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ marginBottom: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum ex quidem molestias, est tempora quae fugit
                    praesentium libero recusandae, repellendus natus nesciunt
                    eaque eius perspiciatis, optio veniam magnam enim facere!
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ marginBottom: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum ex quidem molestias, est tempora quae fugit
                    praesentium libero recusandae, repellendus natus nesciunt
                    eaque eius perspiciatis, optio veniam magnam enim facere!
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ marginBottom: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum ex quidem molestias, est tempora quae fugit
                    praesentium libero recusandae, repellendus natus nesciunt
                    eaque eius perspiciatis, optio veniam magnam enim facere!
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ marginBottom: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum ex quidem molestias, est tempora quae fugit
                    praesentium libero recusandae, repellendus natus nesciunt
                    eaque eius perspiciatis, optio veniam magnam enim facere!
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.containerFooterNewChat}>
        <TouchableOpacity
          style={styles.buttonIniciarChat}
          onPress={() => navigation.navigate("Chat")}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Iniciar Conversa</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
