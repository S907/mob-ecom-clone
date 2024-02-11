import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import MyOrderCard from '../components/MyOrderCard';

const MyOrder = () => {
  const [fontsLoaded] = useFonts({
    'Mb-Black': require('../../../assets/fonts/Mulish-Black.ttf'),
    'Mb-bold': require('../../../assets/fonts/Mulish-Bold.ttf'),
    'Mb-regular': require('../../../assets/fonts/Mulish-Regular.ttf'),
    'Mb-sbold': require('../../../assets/fonts/Mulish-SemiBold.ttf')
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          Array(20).fill(0).map((_,index)=>{
            return <MyOrderCard key={index} />
          })
        }
      </ScrollView>
    </View>
  )
}

export default MyOrder

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  

})