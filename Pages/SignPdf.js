import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Checkbox } from 'react-native-paper';

const SignPdf = (props) => {
    const [formData, setFormData] = useState({
        // image: null,
        name: '',
        email: '',
        phone: '',
        address: '',
        county: '',
        state: '',
        zip_code: '',
        user_type: null,
        password: '',
        confirm_password: '',
    });
    const[file,setFile]=useState()
    const [selectedOption, setSelectedOption] = useState(null);
    const [checked, setChecked] = React.useState(false);

    const handleSubmit = () => {

    }
    const handleInputChange = () => {

    }
    return (
        <View>
            <TextInput 
            placeholder='Drop a file'
     
            />

            <Button title='Onboard Page' onPress={()=>{props.navigation.navigate('OnboardScreenTwo')}}/>
        </View>
    )
}

export default SignPdf

