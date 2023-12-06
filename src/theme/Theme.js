import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";

// Definição dos tipos de temas disponíveis
export const ThemeType = {
  light: "light",
  dark: "dark",
};

// Criação de objetos de tema para tema claro e tema escuro
const themes = {
  [ThemeType.light]: lightTheme,
  [ThemeType.dark]: darkTheme,
};

// Criação do contexto de tema
export const ThemeContext = createContext({
  theme: ThemeType.light, // Valor padrão do tema é "light"
  toggleTheme: () => {},  // Função vazia como padrão
});

// Componente ThemeProvider
export const ThemeProvider = ({ children }) => {
  // Estado para armazenar o tema atual
  const [theme, setTheme] = useState(ThemeType.light); // Inicializado com "light" por padrão

  // Efeito executado quando o componente é montado
  useEffect(() => {
    loadTheme(); // Carrega o tema previamente selecionado (do AsyncStorage) quando o componente é montado
  }, []);

  // Função para carregar o tema previamente selecionado
  async function loadTheme() {
    const savedTheme = await AsyncStorage.getItem("@theme");
    if (savedTheme) {
      setTheme(savedTheme); // Se um tema estiver salvo, define-o como o tema atual
    }
  }

  // Função para alternar entre temas (de light para dark e vice-versa)
  function toggleTheme() {
    let newTheme;
    if (theme === ThemeType.light) {
      newTheme = ThemeType.dark;
    } else {
      newTheme = ThemeType.light;
    }

    // Salva o novo tema no AsyncStorage
    AsyncStorage.setItem("@theme", newTheme);

    // Define o novo tema como o tema atual
    setTheme(newTheme);
  }

  // Retorna o contexto de tema com o valor do tema atual e a função para alternar temas
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Aplica o tema atual aos componentes filhos */}
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
