import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Footer } from '../Components/Footer';
import { dataOnboard } from '../Api/cardApi';

export const COLORS = { primary: '#282534', white: '#fff' };
const { width, height } = Dimensions.get('window');

const OnboardScreen = (props) => {
  const renderFn = (props) => {
    console.log('props============', props.item);
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: width }}>
        <Image source={props.item.image} style={{ height: '55%', resizeMode: 'contain' }} />
        <Text style={styles.titleStyl}>{props.item.title}</Text>
        <Text style={styles.subtxtStyl}>{props.item.subTilte}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />

      <FlatList
        data={dataOnboard}
        renderItem={renderFn}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={{ height: height * 0.75, }}
        // style={{backgroundColor:'red'}}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <Footer width={width} height={height} />
    </SafeAreaView>
  )
}

export default OnboardScreen

const styles = StyleSheet.create({
  subtxtStyl: {
    color: COLORS.white,
    fontSize: 16,
    width: '88%',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20
  },
  titleStyl: {
    color: COLORS.white,
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  }
})