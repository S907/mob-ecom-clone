import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';

const PayList = (props) => {
  const[urlData,setUrlData]=useState('')
  const[dataArr,setDataArr]=useState('')
  console.log(props?.route?.params?.orderId);
  useFocusEffect(
    React.useCallback(()=>{
      setUrlData(props?.route?.params?.orderId)
    },[])
  );

  React.useEffect(()=>{
    if(!urlData){
      // return
      handlePost(urlData);
    }
  },[])

  const handlePost= async (data)=>{
    console.log('data==============',typeof data);
    // return
    try {
      const routeData = data;
      const newFormData = new FormData();
            newFormData.append('order_id',urlData)
            const response = await fetch('https://dev.jbmtpl.com/printdoc/printdoc/api/order', {
              method: 'POST',
              body: newFormData,
              headers: {
                'Content-Type': 'application/json',
                'Keydata': '9566589658545896589',
              },
            });
            console.log('response========',response);
            const responseData = await response.json();
            setDataArr(response)
            console.log('dataArr',dataArr);

    } catch (error) {
      console.log('error========',error);
    }
  };
console.log('urlData=====',urlData);
  return (
    <View>
      <Text>PayList</Text>
    </View>
  )
}

export default PayList

const styles = StyleSheet.create({})