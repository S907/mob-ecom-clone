import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import List from '../Components/List';
let id=0;

const Input = () => {
    const [name,setName]=useState('');
    const[makeList,setList]=useState([]);
  
    const handleUserInput=(text)=>{
      console.log(text);
      setName(text);
    };
    const onSubmitForm=()=>{
      if(!name)return;
      setList([...makeList, {id:id++, name:name}]);
      setName('')
    };
  return (
    <>
    <View style={{backgroundColor:'pink'}}>
        <Text style={styles.txtStyl}>This is a text hopefully i can see it</Text>
        </View>
        <View>
          <TextInput style={styles.input}  placeholder="Submit a artist name" value={name} onChangeText={handleUserInput}/>
          <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress={onSubmitForm} style={styles.opacityBtn}>
            <Text style={styles.opacityTxt}>Submit</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View>
          <List data={makeList} />
        </View>
      
    </>
  )
}

export default Input;

const styles=StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:4
      },
      txtStyl:{fontSize:20, textAlign:'center'},
      opacityBtn:{backgroundColor:'green', width:'30%', height:40, justifyContent:'center', alignItems:'center', borderRadius:4},
      opacityTxt:{fontSize:19, color:'white', fontWeight:'bold'}
})