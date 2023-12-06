import React, { useState, useEffect } from "react";
import {View, Text, Image, TouchableOpacity, SafeAreaView, FlatList,} from "react-native";
import { styles } from "../styles/styles";
import { useAuth } from "../contexts/auth";
import { Ionicons } from "@expo/vector-icons";
import moment from 'moment';
import Icon from "react-native-vector-icons/FontAwesome";

export function HomeScreen({ navigation }) {
  const { authData, signOut } = useAuth();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  
  const loadContacts = async () => {
    const token = authData.token;
    const companyId = authData.user.companyId;

    try {
      const response = await fetch(
        "https://dev2.somasac.com.br:8443/api/chat/my",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ companyId }),
        }
      );

      if (response.status === 200) {
        const data = await response.json();

        setContacts(data);
      } else {
        // Trate erros de resposta aqui
        signOut();
      }
    } catch (error) {
      console.error("Erro na solicitação de contatos: ", error);
    }
  };

  const renderContactItem = ({ item }) => (
   <>
    <TouchableOpacity
      style={styles.cchat}
      onPress={() => {
        navigation.navigate("Chat", { id: item._id, data: item });
      }}
    >
      <Ionicons
        name="person-circle-outline"
        size={65}
        color="black"
        style={styles.cavatar}
      />
    
      <View style={styles.crightContainer}>
        <View>
          <Text style={styles.cusername}>{item.sender.name}</Text>
          <Text style={styles.cmessage} numberOfLines={1}>
            {item.messages[0].text}
          </Text>
        </View>
        <View style={{}}>
          <Text style={styles.ctime}>
            {moment(item.updatedAt).format("HH:mm")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </>
  );

  return (
    <SafeAreaView style={styles.chatscreen}>
      
      <Image
        source={require("../../assets/logoHorizontalS_fundo.png")}
        resizeMode="contain"
        style={{  width: '60%', height: '10%'}}
      />

      <View style={{position: "absolute", right:0, paddingRight:100, paddingTop:30, top:"1%"}}>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <Icon name="search" color="black" size={28}  />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style ={{ position:"absolute", right:0, paddingTop:30, paddingRight: 20, top:"1%" }}onPress={() => navigation.navigate("FilterMsg")}>
        <Icon name="filter" color="black" size={28}  />
      </TouchableOpacity>

      <View style= {styles.chatheader}>
        {/* 👇🏻 Logs "ButtonPressed" to the console when the icon is clicked */}
        {/* <TouchableOpacity onPress={() => console.log("Button Pressed!")}>
          <Feather name="edit" size={24} color="green" />
        </TouchableOpacity> */}
      </View>

      <View style={styles.chatlistContainer}>
        {contacts.length > 0 ? (
          <FlatList
            data={contacts}
            keyExtractor={(item) => item._id}
            renderItem={renderContactItem} 
          />
        ) : (
        <View style={styles.chatemptyContainer}>
          <Text style={styles.chatemptyText}>Sem atendimentos!</Text>
          <Text>Clique no icone abaixo para cirar uma nova conversa</Text>
        </View>
        )}
      </View>
    </SafeAreaView>

    //------------------------------------------------------------------------------------------------------------------------------
    // <View style={styles.container2}>

    //   <Image
    //     source={require("../../assets/logoHorizontalS_fundo.png")}
    //     resizeMode="contain"
    //     style={{ top: 25, right:70, top: 10,  left: 0, width: '60%', height: '10%',  }}
    //   />
    //   {/* <Button style={{}}  onPress={() => navigation.navigate("SearchScreen")} title="LUPaaaaaAA"
    //     color="#841584"
    //     accessibilityLabel="Learn more about this purple button"
    //   /> */}

    //   <TouchableOpacity style ={{ position: "absolute", top:36, right:100}}onPress={() => navigation.navigate("SearchScreen")}>
    //     <Icon name="search" color="black" size={28}  />
    //   </TouchableOpacity>

    //   <TouchableOpacity style ={{ position: "absolute", top:36, right:20}}onPress={() => navigation.navigate("FilterMsg")}>
    //     <Icon name="filter" color="black" size={28}  />
    //   </TouchableOpacity>

    //     <View style={styles.msgContainer}>

    //     <FlatList
    //   data={contacts}
    //   keyExtractor={(item) => item._id}
    //   renderItem={renderContactItem}
    //   nestedScrollEnabled
    // />

    //       {/* <ScrollView style={{ width: 400}}>
    //         <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
    //           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //             <Image source={require("../../assets/avatarMasculino.png")} style={{ width: 100, height: 110 }} />
    //             <View style={{flex:1, flexDirection: 'column', marginLeft: 10, top: 40 }}>
    //               <Text style={{ fontSize: 17, color: 'black', fontWeight: "bold" }}>Edy Silva</Text>
    //               <Text numberOfLines={2} style={{ fontSize: 14, color: 'blue', fontWeight: "bold", maxWidth: 200, }}>
    //                 Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, adipiscing elit.</Text>
    //                 <Text style={{left:210, bottom:35}}>09:59</Text>
    //                 <Text style={styles.notification}>2</Text>
    //             </View>
    //           </View>
    //           <Image source={require("../../assets/whatsappIcon.png")} style={{ width: 30, height: 30, left:65, bottom:20 }} />
    //         </TouchableOpacity>

    //       </ScrollView> */}
    //     </View>

    //   {/* <Text style={styles.textUsuario}>{authData?.user.name}  {authData?.user.name} </Text> */}
    // </View>
  );
}
