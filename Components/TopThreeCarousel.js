import React from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { cardDataApi } from '../Api/cardApi'
import { AntDesign } from '@expo/vector-icons';

const TopThreeCarousel = ({productVal, filterValue}) => {
  {/* {
    Array(20).fill(null).map((item) => {
      return (
        <Image
          source={{
            uri: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png'
          }}
          style={{
            width: 100,
            height: 150,
            // borderRadius: 15,
          }}
        />
      )
    })
  } */}
  const propsDta = filterValue? filterValue:productVal;
  return (
    <View>
      <Text className='text-lg font-extrabold mx-4'>Top rated near you</Text>

      <FlatList
        data={propsDta}
        renderItem={({ item }) =>
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
              width:'100%' 
              }}>
              <Text numberOfLines={1}>{item?.title}</Text>
              <Text numberOfLines={1}><Text>4.7</Text>15 mins</Text>
              <Text numberOfLines={1} className='text-gray-400'>{item.description}</Text>
            </View>
          </View>
        }
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default TopThreeCarousel;


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffff',
    zIndex: 1,
    // borderWidth: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 220,
    width: 140,
    // borderRadius: 15,
    position: 'relative',
    alignItems: 'center',
    // elevation: 5,
    shadowColor: 'gray',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10
  },
})