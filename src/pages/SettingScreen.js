import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../contexts/auth";
import { styles } from "../styles/styles";
import Icon from 'react-native-vector-icons/MaterialIcons';

export function SettingScreen() {
  const navigation = useNavigation();
  const { authData } = useAuth();
  const { signOut } = useAuth();
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleSignOut = () => {
    // Show modal confirmation
    setConfirmModalVisible(true);
  };

  const confirmSignOut = () => {
    // Execut action logout
    signOut();

    // Ocult modal confirmation
    setConfirmModalVisible(false);
  };

  const cancelSignOut = () => {
    // Ocult modal confirmation
    setConfirmModalVisible(false);
  };

  return (
    <View style={styles.containerSettings}>
      <Text style={styles.title}>Configurações</Text>

      <TouchableOpacity
        style={{ position: "absolute", top:'5%', right: '2%', flexDirection:'column' }}
        onPress={handleSignOut}
      >
        {/* <Image
          source={require("../../assets/logoutIcon.png")}
          style={{ width: 45, height: 47 }}
        /> */}
        <Icon name="exit-to-app" size={30} color="#333" />
        <Text style={{ left: '12%' }}>Sair</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isConfirmModalVisible}
      >
        <View style={styles.confirmModal}>
          <Text style={styles.confirmModalText}>
            Tem certeza de que deseja sair do SomaSac?
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.cancelModalButton}
              onPress={cancelSignOut}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.OkModalButton}
              onPress={confirmSignOut}
            >
              <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={{bottom:350}}>
        <TouchableOpacity onPress={() => navigation.navigate("TesteScreen")}>
          <Text style={{}}>CHATSCREEN TESTE</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
