// Login.js
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:  1,
    justifyContent: 'center',
    paddingHorizontal:  20,
  },
  input: {
    height:  40,
    borderColor: 'gray',
    borderWidth:  1,
    marginBottom:  10,
    paddingLeft:  5,
  },
});

export default Login;
