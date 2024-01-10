import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { Button, ScrollView, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { View } from 'react-native'
import { cardDataApi } from '../Api/cardApi'
import CardscreenCard from '../Components/CardscreenCard'
import AppContext from '../context/AppContext'
import { useFocusEffect } from '@react-navigation/native'

const CardScreen = (props) => {
    const context=useContext(AppContext)
    const [cardDta, setCardDta] = useState([]);
    const [ctDta, setCtDta] = useState(0);
    const [cardArr,setCardArr]=useState([]);
    useLayoutEffect(
        React.useCallback(() => {
            setCardDta(cardDataApi);
        }, [])
    );

    // useEffect(()=>{
    //     setCtDta(data)
    // },[count])
    // console.log('context.state2......',context.state2);

    useFocusEffect(
            React.useCallback(()=>{
                if(context.state1){
                    setCardArr(context?.state1);
                }
            },[context])
        )
    const checkCardScreen=(data, item)=>{    
        console.log('item.................',item);       
        let dataValue= data;
        setCtDta(dataValue); 
        let emptyArr= cardArr || [];
        if(emptyArr.length>0){
            let checkIndex = emptyArr.findIndex((i)=>i.id === item.id);
            if(checkIndex >= 0){
                console.log('Here...1');
                emptyArr[checkIndex].qty = emptyArr[checkIndex].qty +1
            }else{
                let perItemObj=item;
                perItemObj.qty = 1;
                emptyArr.push(perItemObj);
            }
        }else{
            let perItemObj = item
            perItemObj.qty = 1;
            emptyArr.push(perItemObj);
        }
        // setCardArr(emptyArr)
        setCardArr(emptyArr);
        };

    return (
        <View>
            <Button onPress={() => props.navigation.navigate('Cart')} title='Click Navigate' />
            <Text>{ctDta}</Text>
            <ScrollView
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingBottom: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {
                    cardDta.map((item) => {
                        // console.log('item...............',item);
                        return (
                            <CardscreenCard item={item} key={item.id} callbackCard={checkCardScreen} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
};

export default CardScreen;