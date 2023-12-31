import { useRef, useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity} from "react-native";
// utils
import uuidv4 from "../../utils/uuidv4";
// Styles
import { styles } from "../../styles/styles";
import { Button } from "react-native-web";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ChatMessageInput({ disabled, conversationId, onSend }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [audio, setAudio] = useState(null);
  const [message, setMessage] = useState("");

  const showIcon = () => {
    if (message === "") {
      return(
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity>
          <Icon name="code" size={20} color="#888" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="code" size={20} color="#888" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="code" size={20} color="#888" style={styles.icon} />
        </TouchableOpacity>
      </View>
      );       
    }
    console.log('showicon funcionou');
    return null;
  }

  const handleFileChange = (e) => {
    if (e.removeAll) {
      fileInputRef.current.value = "";
      setFile(null);
      return;
    }
    if (e.target.files) {
      setFile([e.target.files[0]]);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSend = () => {
    if (typeof message === "object") {
      if (message.template) {
        onSend({
          conversationId,
          uid: uuidv4(),
          text: "template",
          attachmentType: "template",
          template: message,
          timestamp: new Date(),
          sentByMe: true,
        });

        return setMessage("");
      }
    }

    if (audio !== null) {
      onSend({
        conversationId,
        uid: uuidv4(),
        text: message,
        attachmentType: "audio",
        attachments: [audio.audio],
        timestamp: new Date(),
        sentByMe: true,
        attachmentDuration: audio.time,
      });
      setAudio(null);
    }

    if (onSend && conversationId && file !== null) {
      onSend({
        conversationId,
        uid: uuidv4(),
        text: message,
        attachmentType: file[0].attachmentType,
        attachments: file,
        timestamp: new Date(),
        sentByMe: true,
      });
      handleFileChange({ removeAll: true });
    }

    if (!message || message === "\n") {
      return "";
    }

    if (onSend && conversationId && file === null) {
      onSend({
        conversationId,
        uid: uuidv4(),
        text: message,
        attachmentType: "text",
        timestamp: new Date(),
        sentByMe: true,
      });
    }

    return setMessage("");
  };

  useEffect(() => {
    if (audio !== null) {
      handleSend();
    }
  }, [audio, handleSend]);

  if (disabled) return null;

  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity>
        <Icon name="smile-o" size={20} color="#888" style={styles.iconEmoji} />
      </TouchableOpacity>
      
      <TextInput
        value={message}
        style={styles.messagingInput}
        onChangeText={(value) => setMessage(value)}
      />
      {showIcon()}
      {/* <Icon name="photo" size={20} color="#888" style={styles.icon} /> */}

      <TouchableOpacity style={styles.messagingbuttonContainer} onPress={handleSend} activeOpacity={0.5}>
        <View>
          <Text style={{ color: "#f2f0f1", fontSize: 20, fontWeight: "bold" }} >Enviar</Text>
        </View>
        {/* change trouchable for animation click */}
      </TouchableOpacity>
    </View>
  );
}
