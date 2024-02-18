// SignUp.js
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Sign Up" onPress={() => navigation.goBack()} />
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

export default SignUp;
