import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'

const List = (props) => {
    const[listVal, setListVal]=useState([])
    useEffect(()=>{
        setListVal(props.data)
    },[props.data])
  return (
    <>
    <View style={{gap:10, width:'100%', alignItems:'center', paddingTop:10}}>
    {listVal.map((item)=>{
      return(
        <View style={{ borderWidth: 2, width:'50%', alignItems:'center', borderRadius:5 }}>
          <Text style={{gap:10}}>Id:{item.id}</Text>
          <Text>Name{item.name}</Text>
        </View>
      )
    })}
    </View>  
    </>
  )
}

export default List