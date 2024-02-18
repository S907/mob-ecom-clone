import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/mainScreen/HomeScreen'
import ProfileScreen from '../screens/mainScreen/ProfileScreen'
import SettingsScreen from '../screens/mainScreen/SettingsScreen'
import OtpScreen from '../screens/OtpScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserContext from '../context/UserContext';

const Stack = createNativeStackNavigator();
export const getIsSignedIn = (data) => {
  console.log('data',data);
  // custom logic
  return data;
};
const Tab = createBottomTabNavigator();
const HomeStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}
const MainTabNavigator = () => {
  return(
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
  )
};

const RoleNav = () => {
  const isSignedIn = getIsSignedIn(false);
  // const [status,setStatus]=useState(false)
  const {status} = useContext(UserContext)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {status ? (
          <Stack.Screen name='Maintab' component={MainTabNavigator} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Otp" component={OtpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoleNav;