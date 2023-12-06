import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image,  SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styles";
import { useAuth } from "../../contexts/auth";

export function FinishScreen({route}) {
  const navigation = useNavigation();
  const { authData } = useAuth();
  const { data } = route.params;


  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{flexDirection:"row"}}>
          <Image
          source={require('../../../assets/userIconClick.png')}
          style={{ width: 45, height: 45, borderRadius: 50, borderWidth: 2, borderColor: 'orange'}}
                />
            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 6}}>{data.sender.name}</Text>
        </View>
      ),
    });
  });

  return (
    
      <SafeAreaView style={styles.containerFinish}>
        <Text style={styles.titleFinish}>Tem centerza que deseja finalizar o atendimento?</Text>
        <TouchableOpacity style={styles.buttonFinalizar }>
          <Text style={{fontWeight:'bold', color:'white', fontSize: 18 }} >Finalizar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    
  );
}