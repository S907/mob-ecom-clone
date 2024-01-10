import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
// import { DocumentMinusIcon, DocumentPlusIcon, MapIcon, StarIcon } from 'react-native-heroicons/outline'


const CardscreenCard = ({callbackCard,item}) => {
    const [count, setCount] = useState(0);
    // console.log('Here.........................');

    const onClickHandle = () => {
        setCount(count+1);
        callbackCard(count,item);
        
    };
    return (
        <View className='flex-row items-start px-2 pt-2'>
            <View className='bg-white shadow rounded border-solid border'>
                <Image
                    source={{
                        uri: 'https://img2.storyblok.com/filters:format(webp)/f/62776/512x256/47c289a9f4/pizza-wide.jpg'
                    }}
                    className='h-20 w-30 p-4 rounded'
                />
                <View className='px-2 pb-4'>
                    <Text className='font-bold text-lg pt-2'>Title</Text>
                    <View className='flex-row items-center space-x-1'>
                        <StarIcon color='green' opacity={0.4} />
                        <Text className='font-bold text-xs pt-2 opacity-50'>
                            <Text className='text-green-700'>Rating</Text> Genre
                        </Text>
                    </View>

                    <View className='flex-row pt-2 items-center'>
                        <MapIcon color='green' opacity={0.4} />
                        <Text className='font-bold text-gray-500 px-1 text-xs'>NearBy Address</Text>
                    </View>
                    <View className='flex-row pt-2 items-center gap-5'>
                        <TouchableOpacity onPress={onClickHandle}>
                            <DocumentPlusIcon color={'black'} size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <DocumentMinusIcon color={'black'} size={25} />
                        </TouchableOpacity>
                        <Text className='text-black-600 text-2xl'>{count}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default CardscreenCard;