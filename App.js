import React from "react";
import { View, StatusBar } from "react-native";
import { AuthProvider } from "./src/contexts/auth";
import { Router } from "./src/routes/index.js";
import { ThemeProvider } from "./src/theme/Theme";

const App = () => {
  return (
    <ThemeProvider>
      {/*Ele fornece variáveis de estilo */}
      <AuthProvider>
        {/*Autenticação de usuários e fornece informações de autenticação para componentes que precisam delas.*/}
        <View>
          <StatusBar barStyle="light-content" 
          hidden={false}
          backgroundColor="orange"
          />
        </View>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;