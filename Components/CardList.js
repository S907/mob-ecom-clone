import React from 'react'
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const CardList = ({productVal}) => {
    // console.log('productVal',productVal);
    const renderDta = ({ item }) =>
    <View style={styles.item}>
      <ImageBackground
        source={{
          uri: item?.image,
        }}
        style={{
          width: 140,
          height: 150,
          backgroundColor: 'red',
          elevation: 9, shadowColor: 'gray',
          borderRadius: 10 
        }}
        imageStyle={{ borderRadius: 10}}
        resizeMode="cover"
      />
      <View style={styles.icon}>
        <AntDesign name="hearto" size={24} color="white" />
      </View>

      <View style={{ 
        padding: 5,
        // backgroundColor:'yellow',
        width:'60%',
        gap:10 
        }}>
        <Text numberOfLines={1} className='text-2xl'>{item?.title}
            
        </Text>
        <Text numberOfLines={1}>           
            <Text>4.7</Text>15 mins </Text>
            <Text>{item?.price}</Text>
        <Text numberOfLines={1} className='text-gray-400'>{item?.description}</Text>
      </View>
    </View>
  return (
    <View>
      <Text className='text-lg font-extrabold mx-4'>Top rated near you</Text>

      <FlatList
        data={productVal}
        renderItem={renderDta}
        keyExtractor={item => item.id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default CardList;

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#ffff',
    //   backgroundColor: 'red',
      flexDirection:'row',
      zIndex: 1,
      // borderWidth: 1,
      marginVertical: 8,
      marginHorizontal: 16,
    //   height: 220,
    //   width: 140,
      // borderRadius: 15,
      position: 'relative',
      alignItems: 'center',
      // elevation: 5,
      shadowColor: 'gray',
    },
    icon: {
      position: 'absolute',
      top: 6,
      left:110,
    },
  })