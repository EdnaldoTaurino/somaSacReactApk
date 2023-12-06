import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../contexts/auth";
import { Picker } from '@react-native-picker/picker';

export function TransferContact({route}) {
const navigation = useNavigation();
const { authData } = useAuth();
const [selectedValue, setSelectedValue] = useState("tronco"); // variavel do Picker
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
  <View style={styles.containerTransfer}>

    {/* <View style={styles.userContainer}>
      <Image
        source={require('../../../assets/userIconClick.png')}
        style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 2, borderColor: 'orange'}}
      />
      <Text style={{ fontSize: 18 }}>{authData?.user.name}</Text>
      <Text style={{ fontSize: 18, left: 75, bottom: 60 }}>{authData?.user.phone}</Text>
    </View> */}
      
    <View style={styles.textTransfer}>
      <Text style={styles.titleTransfer}>Transferir o atendimento</Text>
      <Text style={{paddingTop:10}}>Deseja transferir para outro atendente? informe o nome ou identificador
      do colega de equipe e adicione quaisquer detalhes relevantes para uma transição suave e eficiente. </Text>
    </View>

    <View style={styles.troncoContainer}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="(11) 92000-2020 - Wellington" value="Edy" />
        <Picker.Item label="(81) 99662-9070 - Edy" value="Edy" />
        <Picker.Item label="(11) 92000-2020 - Will" value="Will" />
      </Picker>
    </View>

    <View>
      <TouchableOpacity style={styles.buttonIniciarChat }>
        <Text style={{fontSize: 18, fontWeight: "bold", color:"white"}}>Transferir</Text>
      </TouchableOpacity>
    </View>

   </View>
  );
}

{/* <Text style={{top:200}}>Colocar dentro da string  atendimento com o : user.phone no finalizar atendimento</Text> */}


// tabBarStyle: { display: "none" }