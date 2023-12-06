import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const ChatPage = (props) => {
  // Lógica da página de chat
};

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const token = user.token;
    const companyId = user.user.companyId;

    try {
      const response = await fetch('https://dev2.somasac.com.br:8443/api/chat/my', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyId }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const currentContacts = data;

        const listContacts = currentContacts.map((e) => ({
          name: e.sender.name,
          message: e.messages[0].text.toString(),
          phone: e.sender.phone,
          _id: e._id,
        }));

        setContacts(listContacts);
      } else {
        // Tratar erros de resposta aqui
      }
    } catch (error) {
      console.error('Erro na solicitação de contatos: ', error);
    }
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {}}
    >
      <View>
        <Image source={require('./images/user.png')} style={{ width: 50, height: 50 }} />
        <Text>{item.name}</Text>
        <Text>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item._id}
      renderItem={renderContactItem}
    />
  );
}
