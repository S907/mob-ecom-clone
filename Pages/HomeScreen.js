import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TopOneCarousel from '../Components/TopOneCarousel';
import TopTwoCarousel from '../Components/TopTwoCarousel';
import TopThreeCarousel from '../Components/TopThreeCarousel';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import FormScreen from './FormScreen';
import CardList from '../Components/CardList';
{/* <Entypo name="chevron-small-down" size={24} color="black" /> */ }
{/* <Entypo name="chevron-small-up" size={24} color="black" /> */ }
let id = 0;

const HomeScreen = () => {
    const [productVal, setProductVal] = useState([]);
    const [load, setLoad] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [selectCategory, setSelectCategory] = useState([]);
    const [isChecked, setChecked] = useState(false);


    useFocusEffect(
        React.useCallback(() => {
            let isActive = true;
            const fetchProducts = async () => {
                try {
                    const products = await fetch('https://fakestoreapi.com/products');
                    const response = await products.json();
                    // const stringData=JSON.stringify(response)
                    console.log('jsonRes', response[0]);
                    console.log('Here focus');
                    setProductVal(response);
                } catch (e) {
                    console.log('ERROOR......', error);
                }
            };
            fetchProducts();
            console.log('HERE');

            return () => {
                isActive = false;
            };
        }, [])
    )


    let bottomSheetModalRef = useRef(null);
    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();

    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
        let filterProduct = productVal;
        console.log('filterProduct', filterProduct);
        let emptyArrKeys = []
        let uniqueCategories = new Set();
        for (let i = 0; i < filterProduct.length - 1; i++) {
            // emptyArrKeys.push(filterProduct[i].category);
            const category = filterProduct[i].category;
            if (!uniqueCategories.has(category)) {
                emptyArrKeys.push(category);
                uniqueCategories.add(category)
            }
        }
        setSelectCategory(emptyArrKeys);
        console.log('emptyArrKeys', emptyArrKeys);
    }, []);
    const changeHandle = (value) => {
        console.log('>>>>>>>>>>>>>>>>>>');
        let filterProduct = productVal
        let filterProductValue = productVal.filter(i => i.id === 1)
        console.log('filterProductValue', filterProductValue);
        return;
        setFilterProducts(filterProductValue);
    }

    return (
        <BottomSheetModalProvider>
            <ScrollView className='pt-2 bg-white flex-1'>
                <View>
                    <View className='w-11/12 mx-auto pb-5'>
                        {/* header */}
                        <View className='flex-row justify-between'>
                            <View>
                                <View className='flex-row items-center gap-1'>
                                    <Entypo name="home" size={24} color="orange" />
                                    <Text className='text-lg font-extrabold'>Home</Text>
                                    <TouchableOpacity>
                                        <View>
                                            <MaterialIcons name="keyboard-arrow-down" size={26} color="black" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View className='w-4/5'>
                                    <Text numberOfLines={1} className='text-gray-500 font-medium'>115/60, Bosepukur Road, Kol-700039</Text>
                                </View>
                            </View>

                            <View className='flex-row items-center gap-2 '>
                                <View className='items-center justify-between rounded border border-1 border-orange-300 rounded-full h-10 w-20 relative shadow-inner'>
                                    <Text className='text-base absolute bottom-6 z-1 bg-gray-100 font-normal'>BUY</Text>
                                    <Text className='my-2 text-xl absolute top-0 font-extrabold text-orange-500'>One</Text>
                                </View>
                                <Octicons name="feed-person" size={24} color="black" />
                            </View>
                        </View>
                    </View>


                    {/* search */}
                    <View className='mx-auto w-11/12 flex-row justify-center bg-gray-100 p-3 rounded'>
                        <View className='flex-1'>
                            <TextInput placeholder='Find your favourite place' className='' />
                        </View>
                        <View className='flex-row gap-3 items-center' >
                            <View className='border-r-2 border-gray-400 px-2' >
                                <Entypo name="magnifying-glass" size={24} color="black" />
                            </View>
                            <FontAwesome name="microphone" size={24} color="orange" />
                        </View>
                    </View>
                </View>
                {/* top section first carousel */}
                <View style={{ height: 200, marginTop: 20, width: '100%', marginBottom: 20 }}>
                    <TopOneCarousel productVal={productVal} />
                </View>

                <View>
                    <TopTwoCarousel />
                </View>

                <View style={{ height: 240, marginTop: 20, width: '100%', marginBottom: 30 }}>
                    <TopThreeCarousel productVal={productVal} />
                </View>

                <View style={{
                    flex: 1,
                    // backgroundColor: 'green',                
                    marginBottom: 14,
                }}>
                    <ScrollView
                        contentContainerStyle={styles.scrollStyl}
                        horizontal={true}
                    >
                        <View style={{
                            flexDirection: 'row',
                            gap: 10,
                            width: '100%',
                            paddingRight: 180
                        }}>
                            <TouchableOpacity style={styles.button} onPress={handlePresentModalPress}>
                                <Text style={styles.txtClr}>Filter</Text>
                                <Ionicons name="filter-outline" size={10} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.txtClr}>Filter</Text>
                                <Ionicons name="filter-outline" size={10} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.txtClr}>Filter</Text>
                                <Ionicons name="filter-outline" size={10} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.txtClr}>Filter</Text>
                                <Ionicons name="filter-outline" size={10} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.txtClr}>Filter</Text>
                                <Ionicons name="filter-outline" size={10} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.txtClr}>Filter</Text>
                                <Ionicons name="filter-outline" size={10} color="black" />
                            </TouchableOpacity>
                        </View>
                        <BottomSheetModal
                            ref={bottomSheetModalRef}
                            index={1}
                            snapPoints={snapPoints}
                            onChange={handleSheetChanges}
                        >
                            <View style={styles.contentContainer}>
                                <Text>Awesome 🎉</Text>
                                <Text key={id++}>{JSON.stringify(selectCategory)}</Text>
                                {
                                    selectCategory.map((_cat,index) => {
                                        console.log('_cat...', _cat);
                                        return (
                                            <>
                                                <Text key={index}>{JSON.stringify(selectCategory)}</Text>
                                              
                                            </>

                                        )
                                    })
                                }
                            </View>
                        </BottomSheetModal>
                    </ScrollView>

                </View>
                
                <View style={{ paddingBottom: 10 }}>
                    <CardList productVal={productVal} filterValue={filterProducts} />
                </View>

            </ScrollView>
        </BottomSheetModalProvider>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    scrollStyl: {
        // marginTop: 10,
        // backgroundColor: 'red',
        marginLeft: 10,
        gap: 10,
    },
    button: {
        alignItems: 'center',
        // backgroundColor:'plum',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
        width: '15%',
        height: 40,
        borderRadius: 19,
        borderColor: '#D3D3D3',
        // borderBottomWidth: 1.3,
        borderWidth: 2,
        // elevation:1
    },
    contentContainer: {
        zIndex: 1,
        flex: 1,
        // width:200,
        alignItems: 'center',
    },
    txtClr: {
        color: 'gray'
    }
})