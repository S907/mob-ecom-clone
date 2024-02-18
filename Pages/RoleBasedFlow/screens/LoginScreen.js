// Login.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ToastAndroid, KeyboardAvoidingView, ScrollView } from 'react-native';



const Login = ({ navigation }) => {
  const [formState, setFormState] = useState({
    phone: '',
    password: ''
  })
  const [userDta, setUserDta] = useState([]);

  const toastKeyboardView = error => {
    ToastAndroid.showWithGravity(error, ToastAndroid.LONG, ToastAndroid.CENTER);
  };
  const handleInputChange = (field, value) => {
    setFormState({ ...formState, [field]: value });
  }

  const handleSubmit = async () => {
    let params = 'user_login';
    let postDta = await postData(params, formState);
    console.log('postDta=====', postDta);
    if (postDta === 'Login Failed !!'
      || postDta === undefined || postDta == 'Password does not Match !!') {
      toastKeyboardView(postDta);
      return;
    } else {
      setUserDta(postDta);
      navigation.navigate('Otp', { data: postDta, otp: postDta?.otp });
      toastKeyboardView(postDta?.status);
    }

  };

  return (

    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={formState.phone}
            placeholderTextColor='#e5fcf5'
            onChangeText={text => handleInputChange('phone', text)}
          />
          {/* <TextInput placeholder="Password" secureTextEntry style={styles.input} /> */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formState.password}
            placeholderTextColor='#e5fcf5'
            secureTextEntry
            onChangeText={text => handleInputChange('password', text)}
          />
          <Button title="Login" onPress={handleSubmit} />
        </View>
      </ScrollView>

    </KeyboardAvoidingView >


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 1
  },
  scrollViewContent: {
    // width:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 60,
    borderColor: '#e5fcf5',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
    color: '#e5fcf5',
    fontWeight: 'bold',
    borderRadius: 5,
    fontSize: 18
  },
  innerContainer: {
    backgroundColor: '#000080',
    width: '90%',
    justifyContent: 'center',
    height: 400,
    padding: 10,
    borderRadius: 7
  }
});

export default Login;
