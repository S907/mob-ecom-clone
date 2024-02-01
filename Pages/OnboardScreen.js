import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Footer } from '../Components/Footer';
import { dataOnboard } from '../Api/cardApi';
import { COLORS } from './constants/color';

const { width, height } = Dimensions.get('window');

const OnboardScreen = (props) => {
  const [curentIndex, setCurrIndex] = React.useState(0)
  const flatListRef = React.useRef(null);

  const navObjFooter = props.navigation;
  const totalSlides = 3; /* total number of slides */;
  React.useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      const nextIndex = (curentIndex + 1) % totalSlides;
      flatListRef.current.scrollToIndex({ animated: true, index: nextIndex });
      setCurrIndex(nextIndex);
    }, 6000); // Adjust the interval as needed (e.g., 3000 milliseconds for 3 seconds)

    return () => clearInterval(autoScrollInterval); // Cleanup on component unmount
  }, [curentIndex]);
  const currSlideIndex = (e) => {
    // console.log('event', e);
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    console.log('currentIndex', currentIndex);
    const adjustedIndex = (currentIndex + totalSlides) % totalSlides;
    setCurrIndex(adjustedIndex);
  };

  const renderFn = (params) => {
    // console.log('props============', props.item);
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', width: width }}>
        <Image source={params.item.image}
          style={{
            height: '30%',
            resizeMode: 'contain'
          }}
        />
        <Text
          style={
            [styles.titleStyl,
            { color: COLORS.white, }]}
        >{params.item.title}</Text>
        <Text style={
          [styles.subtxtStyl,
          { color: COLORS.white, }]
        }>{params.item.subTilte}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        data={dataOnboard}
        // onMomentumScrollEnd={currSlideIndex}
        renderItem={renderFn}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={{ height: height * 0.75, }}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={flatListRef}
        onMomentumScrollEnd={(e) => {
          const contentOffsetX = e.nativeEvent.contentOffset.x;
          const newIndex = Math.round(contentOffsetX / Dimensions.get('window').width);
          setCurrIndex(newIndex);
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {
          dataOnboard.map((_, index) =>
            <View style={[{
              height: 10,
              width: 10,
              borderRadius: 10 / 2,
              backgroundColor: 'gray',
              marginHorizontal: 3
            },
            curentIndex === index && {
              backgroundColor: COLORS?.white,
              width: 25
            }
            ]} key={index} />
          )
        }
      </View>
      <Footer width={width} height={height} navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  subtxtStyl: {
    fontSize: 16,
    width: '88%',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20
  },
  titleStyl: {
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  }
});