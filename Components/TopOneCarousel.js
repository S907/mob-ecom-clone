import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { cardDataApi } from '../Api/cardApi'
// import Swiper from 'react-native-swiper'
import { AntDesign } from '@expo/vector-icons';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d75',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: 'Third Item',
    },
];

const TopOneCarousel = ({productVal}) => {
    // console.log('productVal', productVal)
    const [parentVal,setParentVal]=useState(null)
    const flatlistRef=useRef(null)
    const totalLength = productVal.length-1;
    useEffect(()=>{
        setParentVal(productVal)
    },[productVal])
    useEffect(()=>{
        
    },[])
    const renderProduct = ({item}) =>{
        return(
            <View style={styles.item}>
        <Image 
         source={{
            uri: item?.image,
          }}
          style={styles.wrapper}
          resizeMode='contain'
        />
        
    </View>
        )};
    return (
        <FlatList
            data={parentVal}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
            ref={flatlistRef}
            horizontal
            showsHorizontalScrollIndicator={false}
        />

    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10 ,
        marginVertical: 8,
        marginHorizontal: 16,
        width:300,
        // height:100,
        // width:'90%',
        borderRadius:15,
        position:'relative',
        elevation:5    
    },
    title: {
        fontSize: 32,
        color:'white'
    },
    wrapper:{
        width:300, 
        height:185,
        borderRadius:15, 
        backgroundColor:'red', position:'absolute', top:0
    },   
});

export default TopOneCarousel;