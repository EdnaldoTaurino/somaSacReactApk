import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styles";
import { useAuth } from "../../contexts/auth";
import { Picker } from '@react-native-picker/picker';
import MessageComponent from "./MessageComponent";

export function SaveContact({ route }) {
  const navigation = useNavigation();
  const { authData } = useAuth();
  const [selectedValue, setSelectedValue] = useState("tronco");
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
    <SafeAreaView style={styles.containerSaveContact}>
      {/* <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack("NewChat")}>
          <Image source={require("../../../assets/backIcon.png")}
            style={{ resizeMode: "contain", width: 35, height: 35 }}
          />
        </TouchableOpacity>
      </View> */}

      {/* <View style={styles.userContainer}> */}
        {/* <Image
          source={require('../../../assets/userIconClick.png')}
          style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 2, borderColor: 'orange'}}
        /> */}
        {/* <Text style={{ fontSize: 18 }}>{authData?.user.name}</Text>
        <Text style={{ fontSize: 18}}>{authData?.user.phone}</Text> */}
      {/* </View> */}

      <View style={styles.containerText}>
        <Text style={{fontWeight:"bold", fontSize:18, marginBottom: 6, marginLeft:'3%',}}>Novo contato</Text>
        <Text style={{marginLeft:'3%',}}>Informe os dados do cliente para um cadastro completo. Preencha as informações necessárias,
          como nome, contato e detalhes adicionais, para oferecer um atendimento personalizado e de qualidade.
        </Text>
      </View>

      <View style={{marginTop: '15%', flex:1}} >
        <View style={styles.inputName}>
          <TextInput
            style={styles.inputText}
            placeholder="Nome completo"
            keyboardType="name-phone-pad"
            autoCapitalize="none" // Define que nenhuma letra deve ser capitalizada automaticamente
            //value={''} //lógica do login
            //onChangeText={''} //lógica do login
          />
        </View>

      <View style={styles.dddPhone}>  
        <View style={styles.ddd}>  
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="DDD 81" value="1" />
            <Picker.Item label="DDD 82" value="2" />
            <Picker.Item label="DDD 83" value="3" />
          </Picker>
        </View>
        
        <TextInput
          style={styles.inputPhone}
          keyboardType="phone-pad"
          placeholder='Telefone:'
          maxLength ={11}
          autoCapitalize= 'none'
          />
        </View>

          <TextInput
            style={styles.cpf}
            keyboardType="numeric"
            placeholder='CPF:'
            maxLength ={11}
            autoCapitalize= 'none'
          />
      </View>

      <View style={{top:'20%', flex: 1}}>
          <TouchableOpacity style={styles.saveContactButton}>
            <Text style={{fontSize: 18, fontWeight: "bold", color:"white"}}>Salvar</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}