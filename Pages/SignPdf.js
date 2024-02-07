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
    const [orderId, setOrderId] = React.useState('');
    const [resData,setResData] =React.useState([]);
    // const [fileName,setFileName]=useState('')
    const handleInput = () => {

    }
    const handleSubmit = async() => {
        try {
            const docRes = await DocumentPicker.getDocumentAsync({});            
            setFile(prev=>[{file:docRes.name},...prev]);
            // setFileName(docRes.assets[0].name)
            console.log(docRes);
            const currentOrderId = orderId;
            await uploadFileToServer(docRes,currentOrderId)
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

    const uploadFileToServer = async (doc, currentOrderId) => {
        console.log('currentOrderId======', currentOrderId, orderId, doc);
        // return;
        try {
          // Construct the FormData object for the file upload
          const fileData = new FormData();
          fileData.append('image', {
            uri: doc.assets[0].uri,
            type: doc.assets[0].mimeType,
            name: doc.assets[0].name,
          });
          fileData.append('order_id', currentOrderId);
          fileData.append('user_id', '131');
          console.log('fileData===========', fileData);
    
          // Make the API call to upload the file
          const response = await fetch(
            '....',
            {
              method: 'POST',
              body: fileData,
              headers: {
                // Add any headers needed for your API request
                'Content-Type': 'multipart/form-data',
                Keydata: '.....',
              },
            },
          );
          // Handle the response from the server
          const responseData = await response.json();
          console.log('Server response:', responseData);
          // setLoadState(false)
          if (responseData.status === 'success') {
            setResData(responseData?.data);
            // setLoadState(true)
            if (!currentOrderId) {
              setOrderId(
                prevOrderId => responseData?.data[0].order_id || prevOrderId,
              );
              
            }
          } else {
            console.error('Invalid response', responseData);
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      };
      console.log('filessss=======', file, orderId);
      const handleNavigation=()=>{
        props.navigation.navigate('PayList',{orderId})
      }
    return (
        <View>
            <Button title='OnboardScreenTwo'
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
                                value={file.file!=='' ? file.file:''}
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
                <View style={{width:'30%', marginTop:5, marginLeft:5}}>
                <Button title='PayList Page Submit'
                onPress={handleNavigation} />
                </View>
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