import { FlatList, ImageBackground, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const data = [
  { id: '1', src: 'https://images.yourstory.com/cs/2/d99b1110116911ed9e63f54395117598/Rapido-04-1705071387363.png' },
  { id: '2', src: 'https://images.yourstory.com/cs/2/d99b1110116911ed9e63f54395117598/Rapido-04-1705071387363.png' },
  { id: '3', src: 'https://images.yourstory.com/cs/2/d99b1110116911ed9e63f54395117598/Rapido-04-1705071387363.png' }
]
const OnboardScreenTwo = () => {
  const { height, width } = useWindowDimensions();
  const ITEM_WIDTH = width * .76;
  const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
  const renderFn = ({ item }) => {
    console.log('item', item);
    return (
      <View style={{
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          borderRadius: 18,
          borderWidth: 13,
          // elevation:5
          borderColor: 'pink',
          shadowColor: '#000',
          shadowOpacity: 1,
          PADDING: 12,
          shadowRadius: 20,
          shadowOffset: {
            width: 0,
            height: 0
          },
        }}>

          <View style={{
            width: ITEM_WIDTH,
            height: 200,
            overflow: 'hidden',
            alignItems: 'center',
            borderRadius: 5
          }}>
            <ImageBackground source={{
              uri: item.src
            }}
              style={{
                width: ITEM_WIDTH * 1.4,
                height: 200,
                resizeMode: 'cover',
                // backgroundColor:'red'
              }}
            />
          </View>
        </View>

      </View>
    )
  }
  return (
    <View style={{
      flex: 1,
      // backgroundColor:'green',
    }}>
      {/* <View style={{marginTop:10,}}>
        <FlatList
          data={data}
          renderItem={renderFn}
          keyExtractor={item=>item.id}
          horizontal
          pagingEnabled={true}
        />
      </View> */}
      <View>
        <Text>Heiii</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'gray' }}>
        <Text style={{ textAlign: 'center' }}>OnboardScreen</Text>
        <View style={{ margin: 10, borderColor: 'white', borderRadius: 3, borderWidth: 3 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <View>
                  <ImageBackground
                    source={{
                      uri: item.src
                    }}
                    style={{
                      width: width,
                      height: 200
                    }}
                  />
                </View>
              )
            }}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )

}

export default OnboardScreenTwo

const styles = StyleSheet.create({})



































// const OnboardScreenTwo = () => {
//   const renderFn = ({ item }) => {
//     console.log('item', item);
//     return (
//       <View style={{
//         // backgroundColor:'red',
//         width: 350,
//         borderWidth: 1,
//         borderRadius: 6,
//         marginRight: 10,
//         // marginLeft: 10,
//         // marginTop: 10,
//         // height:100
//         height: '100%',
//         // justifyContent:'center',
//         alignItems:'center'
//       }}>
//         <ImageBackground source={{
//           uri: item.src
//         }}
//           style={{
//             width: '90%',
//             height: '100%',
//             // width:370,
//             // height:200,
//             resizeMode: 'contain',
//             // backgroundColor:'red'
//           }}
//         />
//       </View>
//     )
//   }
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor:'red'}}>
//       <View style={{
//         flex: 1,
//         backgroundColor: 'green',
//         width: '100%',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         <FlatList
//           data={data}
//           renderItem={renderFn}
//           style={{backgroundColor:'gray',height:'10%'}}
//           contentContainerStyle={{
//             backgroundColor: 'plum',
//             height: '10%',
//             justifyContent:'center',
//             alignItems:'center',
//             paddingBottom:10,
//           }}
//           horizontal
//           pagingEnabled={true}
//         />
//       <View>
//         <Text style={{ backgroundColor: 'red' }}>OnboardScreenTwo</Text>
//       </View>
//       </View>
//     </SafeAreaView>
//   )
// }