import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import * as ImagePicker from 'expo-image-picker';
const data = [
  { label: 'User', value: 'User' },
  { label: 'Vendor', value: 'Vendor' },
];
const FormScreen = () => {
  const[getPhoto,setPhoto]=useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'user',
    phone: '',
    image: null,
    dropdown:null
    
  });
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const newErrors = {};

    // for (const key in formData) {
    //   if (!formData[key].trim()) {
    //     newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
    //   }
    // }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log('result=================',result.assets[0].uri);
    // setPhoto(result.assets[0].uri);
    setFormData({...formData,image:result.assets[0].uri});
  };
  console.log('getPhoto',getPhoto);

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    return;
    if (handleValidation()) {
      // Send data to the server
  
      // Reset form data after submission
      setFormData({
        name: '',
        email: '',
        password: '',
        userType: 'user',
        phone: '',
        image: null,
      });
    }
  };


  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <Text>User Type:</Text>
      <Dropdown
          style={[styles.dropdown,]}
          labelField="label"
          valueField="value"
          label="Dropdown"
          iconStyle={styles.iconStyle}
          placeholder='Select Role'
          value={formData.dropdown}
          data={data}
          onChange={item => {
            console.log('item-=====',item);
            // setValue(item.value);
            setFormData({...formData,dropdown:item.value})
            // setIsFocus(false);
          }}

        />

      <Text>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={formData.phone}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        keyboardType="phone-pad"
      />

      <TouchableOpacity onPress={pickImage} style={styles.imagePickerButton}>
        <Text>Select Image</Text>
      </TouchableOpacity>
      {formData.image && <Image source={{ uri: formData.image }} style={styles.imagePreview} />}

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormScreen

const styles=StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  imagePickerButton: {
    backgroundColor: 'lightgreen',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
})