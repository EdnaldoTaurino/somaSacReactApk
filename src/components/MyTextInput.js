// não sendo usado ver depois;
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useTheme } from 'styled-components/native';

export function MyTextInput(props) {
  const { colors } = useTheme();
  return (
    <TextInput
      placeholderTextColor="#727272"
      style={[
        styles.input,
        { borderColor: colors.primary, color: colors.onBackground },
        props.style, // Adicione esta linha para incluir estilos personalizados
      ]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginBottom: 16,
  },
});
