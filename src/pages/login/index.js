import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,} from "react-native";
import * as animatable from "react-native-animatable";
import { useAuth } from "../../contexts/auth";
import { styles } from "../../styles/styles";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Login({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { signIn } = useAuth();

  // Function for show and closed password
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const MissedClick = () => {
    // Navigation for screen "MissedPassword" in Tab.Navigator
    navigation.navigate("MissedPassword");
  };
  
  return (
    <View style={styles.containerLogin}>
      <animatable.Image
        source={require("../../../assets/logo.png")}
        style={styles.logo}
        animation="flipInY" //efect flip in image, inside view add image animatable before for acept a animation animatable.Image
      />
      {/* <View style={styles.barraSlide}>
            <Slider
              style={{ height: 100 }}
              minimumValue={6} // tamanho minimo da barra
              maximumValue={100} // tamanho maximo da barra
              maximumTrackTintColor="#ff0000" // cor no final do slide deifinida como maxima
              minimumTrackTintColor="#000" // cor inicial do slider
              thumbTintColor="#392de9"
            />
          </View> */}
      <View style={styles.containerForm}>
        <animatable.View delay={600} animation="fadeInUp">
          <Text style={styles.email}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            autoCapitalize="none" // Define none char capitalized automatic
            value={username} //logic login
            onChangeText={setUsername} //logic login
          />
          <Text style={styles.senha}>Senha:</Text>
          <TextInput
          
            style={styles.input}
            placeholder="Digite sua senha"
            autoCapitalize="none"
            secureTextEntry={!isPasswordVisible}
            value={password} 
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.passwordVisibilityButton}
            onPress={togglePasswordVisibility}
          >
            <Icon
              name={isPasswordVisible ? "eye" : "eye-slash"} // Nome dos ícones de olho
              size={20} 
              color="#000"
            />
          </TouchableOpacity>
        </animatable.View>

        <TouchableOpacity onPress={() => navigation.navigate('MissedPassword')}> 
          <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => signIn(username, password)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
