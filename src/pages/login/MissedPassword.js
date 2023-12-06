import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styles";
import { useAuth } from "../../contexts/auth";
import Icon from 'react-native-vector-icons/MaterialIcons';

export function MissedPassword() {
  const navigation = useNavigation();
  const { authData } = useAuth();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text>Voltar</Text>
      ),
      headerStyle: {} // adicionado para o fundo ficar transparente
    });
  });


  return (
    <SafeAreaView style={styles.containerLogin}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.logo}
        animation="flipInY" //efect flip in image, inside view add image animatable before for acept a animation animatable.Image
      />
      
      <View style={styles.containerForm}>
        <View>
          <Text style={styles.email}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o e-mail cadastrado"
            keyboardType="email-address"
            autoCapitalize="none" // Define none char capitalized automatic

          />
        </View>
        
        <View>
          <TouchableOpacity style={[styles.button, { top:'50%'}]}>
            <Text style={{fontSize:16, color: 'white', fontWeight: 'bold'}}>Recuperar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
