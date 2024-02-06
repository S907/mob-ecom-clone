import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { styles } from './styles/onboardTwo';
import { data, dataTwo } from '../Api/cardApi';

const OnboardScreenTwo = (props) => {
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
      <View style={{ flex: 1, backgroundColor: 'gray', }}>

        {/* home carousel screen wrapper */}
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
        {/* home carousel screen wrapper */}

        {/* onboard carousel wrapper */}
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Text style={{ textAlign: 'center', }}>OnboardScreen</Text>
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}>
            <Image style={{ height: 200, }} source={require('../assets/wave1.png')} />
          </View>
          <View style={{
            flex: 3, 
            // backgroundColor: 'green',
          }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 40 }}>
              <Carousel
                data={dataTwo}
                renderItem={({ item, index }) => {
                  console.log('item carousel', item);
                  return (
                    <View
                      key={item.id}
                      style={{
                        alignItems: 'center',
                        // backgroundColor:'red',
                        flex: 1,
                      }}>
                      <Image
                        source={{
                          uri: item?.src
                        }}
                        style={{ width: 300, height: 300, }}
                        key={item.id}
                      />
                      <Text style={{
                        fontFamily: 'Mulish-ExtraBold',
                        fontSize: 20,
                        // backgroundColor:'green',    
                        color: 'black',
                        fontWeight: 'bold'
                      }}>{item.title}</Text>
                      <Text style={{ paddingTop: 10, width: '90%', textAlign: 'center', color: 'black', }}>{item.subTilte}</Text>
                    </View>
                  );
                }}
                sliderWidth={400}
                itemWidth={400}
                // onSnapToItem={index => setIndex(index)}
                // autoplayInterval={4000}
                // autoplay={true}
                enableMomentum={false}
                lockScrollWhileSnapping={true}
                // loop={true}
              />

            </View>
            {/* <View style={styles.paginationBullet}>
              <Pagination dotsLength={dataTwo.length}  />
            </View> */}
          </View>
          <View style={{
            width: '100%',
            flex: 1,
            alignItems: 'center',
            zIndex: 2
          }}>
            <TouchableOpacity
              style={styles.inputAll}
              onPress={() => props.navigation.navigate('ListAccordion')}>
              <Text style={styles.textStyleOne}>List Accordion</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.inputAll}
              onPress={() => props.navigation.navigate('SignPdf')}>
              <Text style={styles.textStyleTwo}>SignPdf Screen</Text>
            </TouchableOpacity>
          </View>

          <View style={{
            // backgroundColor:'red',
            position: 'absolute',
            bottom: 0,
            right: 200,
            width: '100%',
            height: 200,
          }}>
            <Image source={require('../assets/wave2.png')} />
          </View>
        </View>
        {/* onboard carousel wrapper */}

      </View>
    </View>
  )

}

export default OnboardScreenTwo

// const styles = StyleSheet.create({})



































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