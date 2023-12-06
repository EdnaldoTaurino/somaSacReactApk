import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, SafeAreaView, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./../styles/styles";
import { useAuth } from "../contexts/auth";
import axios from "../utils/axios";


export function ContactScreen() {
  const navigation = useNavigation();
  const { authData } = useAuth();
  const [contactList, setContactList] = useState(null);

  // Effects
  useEffect(() => {
    // Initial Effect
    const fristLoad = async () => {
      // Requests
      const groupRes = await axios.get(
        `api/company/${authData.user.companyId}`
      );

      if (groupRes.status) {
        let newData = [];
        newData = newData.concat(groupRes.data.contacts, authData.user.contacts)
        setContactList(newData);
      }
    };

    if (contactList === null) fristLoad();
  }, [authData, contactList]);

  const handleContactPress = (contact) => {
    // 👇🏻 Lógica para verificar se a conversa já existe 
    const conversationExists = console.log('teste')

    conversationExists
    ? navigation.navigate('Mensagens', { contact }, console.log('entrou na conversa')) 
    : navigation.navigate('NewChat', { contact }, console.log('iniciando nova conversa'));
};

  return ( 
    <ScrollView style={{backgroundColor:'white'}}>
      <SafeAreaView style={styles.containerContact}>
        <View style={styles.textTopContact}>
          <Text style={styles.titleContact}>Contatos: </Text>
          <Text style={{left:'6%', fontSize:18}}>{authData?.user.name}</Text>
        </View>
        {contactList !== null &&
          contactList.map((contact, index) => (
            <TouchableOpacity
              key={index}
              style={styles.contactContainer}
              // navegar para uma tela nova com os contatos e todos os dados DATA, reenderizar todas as informações na tela 
              // e ali perguntar se quer criar uma nova conversa.
              //onPress={() => navigation.navigate('Mensagens', { contact })}
              onPress={() => handleContactPress(contact) }
            >
              
              <Image
                source={require('../../assets/userIconClick.png')}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: 'orange',
                }}
              />
              <Text style={styles.contactName}>{contact.name}</Text>
            </TouchableOpacity>
          ))}
          <View style={{ height: 120 }} /> 
          
      </SafeAreaView>
    </ScrollView>
    // <View style={styles.containerContact}>
    //   <Text style={styles.title}>contatos</Text>
    //   <Text>{authData?.user.name} </Text>
    //   {contactList !== null && contactList.map((n) => <Text style={styles.contactSave}>{n.name}</Text>)}
    // </View>
  );
}
