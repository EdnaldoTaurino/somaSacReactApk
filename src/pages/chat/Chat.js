import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, FlatList, ScrollView, TouchableOpacity, Text, Modal, Image } from "react-native";
import { styles } from "../../styles/styles";
import { useAuth } from "../../contexts/auth";
import axios from "../../utils/axios";
import ChatMessageInput from "./ChatMessageInput";
import MessageComponent from "./MessageComponent";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from "@expo/vector-icons";

const userTemplates = [
  { id: 1, text: 'Salvar o contato' }
];

const optionsTemplates = [
  { id: 1, text: 'Transferir o contato' },
  { id: 2, text: 'Finalizar atendimento' },
]
export function Chat({ route, navigation }) {
  const [initialElements, changeEl] = useState([]); 
  const [chatMessages, setChatMessages] = useState(initialElements);
  const { authData } = useAuth();
  //👇🏻 modal
  const [isUserModalVisible, setUserModalVisible] = useState(false);
  const [isOptionsModal, setOptionsModal]= useState(false);
  //👇🏻 Access the chatroom's data and id
  const { id, data } = route.params;

  const openUserModal = () => {
    console.log("Modal user open")
    setUserModalVisible(true);
  };
  
  const closeUserModal = () => {
    setUserModalVisible(false);
  };

  const openOptionsModal = () => {
    console.log("Options modal open")
    setOptionsModal(true);
  }

  const closeOptionsModal = () => {
    setOptionsModal(false);
  }

  useEffect(() => {
    loadChatInfo();
  }, []);

  const loadChatInfo = async () => {
    try {
      const response = await axios.get(`/api/chat/${id}`);

      if (response.status === 200) {
        const { data } = response;

        setChatMessages(data.messages);
      } else {
        // Trate erros de resposta aqui
        signOut();
      }
    } catch (error) {
      console.error("Erro na solicitação de contatos: ", error);
      console.log(error);
    }
  };

  const handleNewMessage = () => {
    const hour =
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`;

    const mins =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`;
  };

  const handleSendMessage = async (message) => {
    try {
      let data = {
        internalCorrelationId: message.uid,
        text: message.text,
      };

      // Messages type docs and videos
      if (
        message.attachmentType !== "text" &&
        message.attachmentType !== "audio" &&
        message.attachmentType !== "template"
      ) {
        const fdata = new FormData();
        fdata.append("internalCorrelationId", message.text);
        fdata.append("text", message.text || "[Anexo]");
        fdata.append("attachment", message.attachments[0]);
        data = fdata;
        message.urlForce = true;
      }

      // Messages type audio
      if (message.attachmentType === "audio") {
        const fdats = new FormData();
        fdats.append("internalCorrelationId", message.text);
        fdats.append("text", message.text || "[Audio]");
        fdats.append("attachmentDuration", message.attachmentDuration);
        const fileOfBlob = new File(
          message.attachments,
          "custom-soma1234.ogg",
          { type: "audio/ogg;codecs=opus" }
        );

        fdats.append("attachment", fileOfBlob);
        data = fdats;
        message.urlForce = true;
      }
      // Messages type template
      if (message.attachmentType === "template") {
        const nTempalte = { ...message.template };
        const newParam = [];

        nTempalte.components.forEach((element) => {
          const newParamArray = {
            type: element.type,
            parameters: [],
          };
          if (element.type === "HEADER") {
            if (element?.format === "IMAGE") {
              newParamArray.parameters.push({
                type: "image",
                image: {
                  link: element.example.header_handle[0],
                },
              });
            }
          }
          if (element.type === "BODY") {
            // Check if is array
            if (element.example && Array.isArray(element.example?.body_text)) {
              element.example.body_text[0].forEach((body) => {
                newParamArray.parameters.push({
                  type: "text",
                  text: body,
                });
              });
            }
          }
          if (element.type === "BUTTONS") {
            element.buttons.forEach((button, i) => {
              newParam.push({
                type: "button",
                sub_type: button.type,
                index: `${i}`,
                parameters: [
                  {
                    type: "text",
                    text: button.text,
                  },
                ],
              });
            });
            return;
          }
          if (newParamArray.parameters.length > 0) {
            newParam.push(newParamArray);
          }
        });

        nTempalte.components = newParam;
        data.template = nTempalte;
      }

      // Send to server the menssages
      await axios.post(`/api/chat/${message.conversationId}/send`, data);

      // Show in screen in real time
      const NewArry = [...chatMessages];
      message.sentByMe = true;
      message.timestamp = `${new Date()}`;
      NewArry.push(message);
      setChatMessages(NewArry);
    } catch (error) {
      console.log(error);
    }
  };

  //👇🏻 Sets the header title to the name chatroom's name
  // useLayoutEffect(() => {
  //   navigation.setOptions({ title: data.sender.name });
  // }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity  onPress={openUserModal} style={{flexDirection:"row"}}>
          <Image
          source={require('../../../assets/userIconClick.png')}
          style={{ width: 45, height: 45, borderRadius: 50, borderWidth: 2, borderColor: 'orange'}}
        />
          <Text style={{fontSize: 18, marginTop: 10, marginLeft: 6}}>{data.sender.name}</Text>
        </TouchableOpacity>
        
      ),
      headerRight: () => (
        <TouchableOpacity onPress={openOptionsModal}>
          <Icon name="format-list-bulleted" size={30} color="#333" />
        </TouchableOpacity>
      )
    });
  });

  return (
    <>
      <View style={styles.messagingscreen}>
        <View
          style={[
            styles.messagingscreen,
            { paddingVertical: 15, paddingHorizontal: 10 },
          ]}
        >
          <ScrollView
            ref={(ref) => {
              this.scrollView = ref;
            }}
            onContentSizeChange={() =>
              this.scrollView.scrollToEnd({ animated: true })
            }
          >
            {chatMessages[0]
              ? chatMessages.map((item, index) => (
                  <MessageComponent item={item} key={index} />
                ))
              : ""}
          </ScrollView>
        </View>

        <ChatMessageInput
          conversationId={data._id}
          onSend={handleSendMessage}
        />

        {/* Modal para as opções do usuário */}
        <Modal transparent={true} visible={isUserModalVisible} animationType="slide"
          onRequestClose={() => {
            closeUserModal();
          }}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <FlatList
                data={userTemplates}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => { closeUserModal();
                    if (item.id === 1) {
                      navigation.navigate("SaveContact", {data});
                    } 
                    }}>
                    <Text style={styles.templateText}>{item.text}</Text>
                  </TouchableOpacity> )}
              />
                  <TouchableOpacity onPress={closeUserModal}>
                    <Text style={styles.closeText}>Voltar</Text>
                  </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal para os templates options*/}
        <Modal transparent={true} visible={isOptionsModal} animationType="fade">
          <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <FlatList
              data={optionsTemplates}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => { closeOptionsModal();
                    if (item.id === 1) {
                      navigation.navigate("TransferContact", {data});
                    } else if (item.id === 2) {
                      navigation.navigate("FinishScreen", {data});
                    }
                    }}>
                    <Text style={styles.templateText}>{item.text}</Text>
                  </TouchableOpacity> )}
            />
            <TouchableOpacity onPress={closeOptionsModal}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Modal>


      </View>
    </>
  );
}
