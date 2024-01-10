import React from 'react'
import { Dimensions, FlatList, Image, ScrollView, Text, View, useWindowDimensions } from 'react-native'
const imgList=[
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png',
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png'
];
const TopTwoCarousel = () => {
  const {height, width, scale, fontScale} = useWindowDimensions();
  // console.log(height);
  return (
    <View>
      <Text className='text-lg font-extrabold mx-4'>Souvik, what's on your mind ?</Text>

      <ScrollView
        contentContainerStyle={{
          marginLeft: 15,
          height: height/2.5,
          flexWrap: "wrap",
          width: width*1.5,
          gap: 19
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {
          imgList.map((item) => {
            return (
              <Image
                source={{
                  uri: item
                }}
                style={{
                  width: 100,
                  height: 150,
                }}
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default TopTwoCarousel