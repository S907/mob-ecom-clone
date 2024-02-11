import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyOrder from '../Pages/MyOrder';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function OrderNav() {
  return (
    <NavigationContainer>
    <Stack.Navigator>        
        <Stack.Screen name="MyOrder" component={MyOrder} options={{ headerShown: true }} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({})