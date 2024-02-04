import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListAccordion from '../Components/ListAccordion'

const accordionData = [
    { id: '1', label: 'Accordion 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: '2', label: 'Accordion 2', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { id: '3', label: 'Accordion 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
    { id: '4', label: 'Accordion 1', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
]

const ListAccordionScreen = () => {
    return (
        <View style={{
            flex:1,
            backgroundColor:'black'
        }}
        >
            <View style={{
                flex:1,
                backgroundColor:'white',
                margin:20,
                borderRadius:10
                }}>
                    <ScrollView style={{backgroundColor:'red'}}>
                        {
                            accordionData.map((value,index)=>{
                                return <ListAccordion value={value} index={index} />
                            })
                        }

                    <View style={{backgroundColor:'red'}}>
                        <Text>Hello</Text>
                    </View>
                    </ScrollView>
            </View>
        </View>
    )
}

export default ListAccordionScreen

const styles = StyleSheet.create({})