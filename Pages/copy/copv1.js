import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const App = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [newDocumentName, setNewDocumentName] = useState('');

  const pickDoc = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync();
      console.log(doc);

      if (doc.type === 'success') {
        const { mimeType, uri, name } = doc;
        
        // Add your logic to filter documents based on mime types
        if (mimeType !== 'image/png' && mimeType !== 'image/jpg' && mimeType !== 'application/pdf') {
          return;
        }

        // Create a new object to represent the selected document
        const newDocument = { mimeType, uri, name };

        // Update the state with the new document
        setUploadedFiles((prevFiles) => [...prevFiles, newDocument]);
      }
    } catch (error) {
      console.log('Err====', error);
    }
  };

  return (
    <View style={styles.container}>
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
            <View key={index} style={styles.uploadedFileContainer}>
              <Text>{`File ${index + 1}: ${document.name}`}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default App;
