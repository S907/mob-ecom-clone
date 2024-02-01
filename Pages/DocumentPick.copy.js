import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import * as DocumentPicker from 'expo-document-picker';

const DocumentPickCopy = () => {
    const [arrObj, setArrObj] = useState([]);
    const [fileFields, setFileFields] = useState([{ id: 1, value: '', uploaded: false }]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [newDocumentName, setNewDocumentName] = useState('');

    const handleUploadPress = async (id) => {
        // Add your logic for handling the upload here
        console.log('id', id);
        const updatedFields = fileFields.map(field =>
            field.id === id ? { ...field, uploaded: true } : field
        );
        let value = await pickDoc()
        console.log('value====', value);
        console.log('handleuploadpress====', updatedFields);

        //   setFileFields(updatedFields);
        //   // Update the uploaded files list
        //   const uploadedFile = fileFields.find(field => field.id === id);
        //   setUploadedFiles([...uploadedFiles, uploadedFile.value]);

    };

    const handleAddField = () => {
        const newField = { id: Date.now(), value: '', uploaded: false };
        setFileFields([...fileFields, newField]);
    };
    const pickDoc = async () => {
        // console.log('eeeeee=====',e);
        try {
            const doc = await DocumentPicker.getDocumentAsync();
            let emptyArr = [];
            for (const key in doc) {
                if (key === 'assets') {
                    let docVal = doc[key][0];
                    console.log('docVal===', docVal);
                    let mimeVal = doc[key][0].mimeType;
                    let getFileUri = doc[key][0].uri;
                    let getFileName = doc[key][0].name;
                    if (mimeVal !== 'image/png' && mimeVal !== 'image/jpg' && mimeVal !== 'application/pdf') return
                    { mimeVal, getFileUri, getFileName }
                    emptyArr.push(docVal)
                }
            }
            setUploadedFiles(emptyArr)
            setArrObj(doc)
            // if (doc) {
            //     const { mimeType, uri, name } = doc.assets[0];
            //     console.log('mimeType',mimeType);
            //     console.log('uri',uri);
            //     console.log('name',name);
            //     // Add your logic to filter documents based on mime types
            //     if (mimeType !== 'image/png' && mimeType !== 'image/jpg' && mimeType !== 'application/pdf') {
            //         return;
            //     }

            //     // Create a new object to represent the selected document
            //     const newDocument = { mimeType, uri, name };
            //     emptyArr.push(newDocument)
            //     console.log('Here');
            //     // Update the state with the new document
            //     setUploadedFiles(emptyArr);
            // }
        } catch (error) {
            console.log('Err====', error);
        }
    };

    console.log('arrObj files', arrObj);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={styles.background}
                />
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.button}>
                    <TouchableOpacity onPress={pickDoc}>
                        <Text style={styles.text}>Pick document</Text>
                    </TouchableOpacity>
                    {/* <Text style={styles.text}>Sign in with Facebook</Text> */}
                </LinearGradient>
            </View>
            {/* <View style={styles.containero}>
                <ScrollView style={styles.scrollView}>
                    {fileFields.map((field, index) => (
                        <View key={field.id} style={styles.fieldContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder={`Type file name ${index + 1} here...`}
                                value={field.value}
                                onChangeText={(text) => setFileFields((fields) =>
                                    fields.map((f) => (f.id === field.id ? { ...f, value: text } : f))
                                )}
                            />
                            <TouchableOpacity
                                style={[styles.uploadButton, field.uploaded ? styles.disabledButton : null]}
                                onPress={() => pickDoc()}
                                disabled={field.uploaded}
                            >
                                <Text>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.addButton} onPress={handleAddField}>
                    <Text>Add File Field</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.uploadedFilesInput}
                    placeholder="Uploaded Files"
                    // value={uploadedFiles.join(', ')}
                    editable={false}
                />
            </View> */}

            <View style={styles.containero}>
                {uploadedFiles.length === 0 ? (
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type document name here..."
                            value={newDocumentName}
                            onChangeText={setNewDocumentName}
                        />
                        <TouchableOpacity style={styles.uploadButton} onPress={pickDoc}>
                            <Text>Upload Document</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <ScrollView style={styles.scrollView}>
                        {uploadedFiles.map((document, index) => (
                            <View key={document.name} style={styles.uploadedFileContainer}>
                                <Text>{`File ${index + 1}: ${document.name}`}</Text>
                            </View>
                        ))}
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'paleturquoise',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 100,
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },

    // containero: {
    //     flex: 1,
    //     padding: 20,
    //   },
    //   scrollView: {
    //     marginBottom: 20,
    //   },
    //   fieldContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginBottom: 10,
    //   },
    //   textInput: {
    //     flex: 1,
    //     padding: 10,
    //     borderRadius: 8,
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //     marginRight: 10,
    //   },
    //   uploadButton: {
    //     padding: 10,
    //     borderRadius: 8,
    //     backgroundColor: 'lightblue',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    //   disabledButton: {
    //     backgroundColor: 'lightgray',
    //   },
    //   addButton: {
    //     padding: 10,
    //     borderRadius: 8,
    //     backgroundColor: 'lightblue',
    //     alignItems: 'center',
    //     marginBottom: 10,
    //   },
    //   uploadedFilesInput: {
    //     padding: 10,
    //     borderRadius: 8,
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //     marginBottom: 10,
    //   },


    containero: {
        flex: 1,
        padding: 20,
    },
    scrollView: {
        marginBottom: 20,
    },
    uploadedFileContainer: {
        padding: 10,
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    textInput: {
        padding: 10,
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    uploadButton: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default DocumentPickCopy
