import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonContainer } from './styles';

export function MyButton({ title, style, ...rest }) {
  return (
    <ButtonContainer {...rest} style={[style]}>
      <Text style={styles.text}>{title}</Text>
    </ButtonContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
  },
  
});