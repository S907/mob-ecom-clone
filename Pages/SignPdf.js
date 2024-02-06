import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
import * as DocumentPicker from "expo-document-picker";
import { FlatList } from 'react-native-gesture-handler';
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
    const [file, setFile] = useState([{ file: null }])
    const [selectedOption, setSelectedOption] = useState(null);
    const [checked, setChecked] = React.useState(false);
    // const [fileName,setFileName]=useState('')
    const handleInput = () => {

    }
    const handleSubmit = async() => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({});            
            setFile(prev=>[{file:docRes.name},...prev]);
            // setFileName(docRes.assets[0].name)
            console.log(docRes);
          } catch (error) {
            console.log("Error while selecting file: ", error);
          }

    }
    const handleDelete=(index)=>{
        console.log('index', index);
        setFile(prev=>{
             return index === 0 ? [prev[0]] : prev.filter((_, i) => i !== index);
        })
    };

    const uploadFileToServer = async (doc) => {
        console.log('fileCopyUri======', doc);
        // return;
        try {
          // Construct the FormData object for the file upload
          const fileData = new FormData();
          fileData.append('image', {
            uri: doc.uri,
            type: doc.type,
            name: doc.name,
          });
          fileData.append('order_id', '');
          fileData.append('user_id', '131');
    
          // Make the API call to upload the file
          const response = await fetch(
            'https://dev.jbmtpl.com/printdoc/printdoc/api/order',
            {
              method: 'POST',
              body: fileData,
              headers: {
                // Add any headers needed for your API request
                'Content-Type': 'multipart/form-data',
                Keydata: '9566589658545896589',
              },
            },
          );
    
          // Handle the response from the server
          const responseData = await response.json();
          console.log('Server response:', responseData);
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
      console.log('filessss=======', file);
    return (
        <View>
            <Button title='Onboard Page'
                onPress={() => { props.navigation.navigate('OnboardScreenTwo') }} />
           

            <FlatList
                data={file}
                renderItem={({item,index})=>{
                    return(
                        <View>                           
                            <TextInput
                                placeholder='Drop a file'
                                style={styles.textBtn}
                                editable={false}
                                value={file.name!==null ? file.name:''}
                            />
                            <TouchableOpacity style={styles.touchBtn} onPress={handleSubmit}>
                                <Text style={{ fontWeight: 'bold' }}>Submit</Text>
                            </TouchableOpacity>
                            {
                                index == 0 ? null : <View style={styles.btnView}>
                                <Button title='delete' onPress={()=>handleDelete(index)}/>
                                </View>
                            }
                            
                        </View> 
                    )
                }}
            />

        </View>
    )
}

export default SignPdf

const styles = StyleSheet.create({
    touchBtn: {
        borderWidth: 2,
        width: '20%',
        marginTop: 10,
        marginLeft: 5,
        alignItems: 'center',
        padding: 2,
        borderRadius: 3,
    },
    textBtn: {
        borderWidth: 1,
        padding: 3,
        marginTop: 10,
        margin: 5,
        borderRadius: 5
    },
    btnView:{width:'20%', marginLeft:5, marginTop:4}
})