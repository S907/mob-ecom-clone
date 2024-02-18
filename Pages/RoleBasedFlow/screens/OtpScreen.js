import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import { getIsSignedIn } from '../navigation_role/RoleNav';
import UserContext from '../context/UserContext';

const OtpScreen = (props) => {
    console.log('props',props);
    console.log('props',props.route.params.otp);
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const [otp, setOtp] = useState(null);
    const [userDta, setUserDta] = useState([])
    const [otpVal, stOtpVal] = useState('');
    const [userName, setUserName] = useState();
    const{setStatus} =useContext(UserContext)
    useFocusEffect(
        React.useCallback(()=>{
          stOtpVal(props?.route?.params?.otp);
          toastKeyboardView(props?.route?.params?.otp)
          setUserDta(props?.route?.params?.data);
          if(props?.route?.params?.otp){
            const userDta = props?.route?.params?.data;;
            console.log('userDta',userDta.name);
            setUserName(userDta?.name);
          }
        },[props?.route?.params?.otp])
      );
      const toastKeyboardView = error => {
        ToastAndroid.showWithGravity(error, ToastAndroid.LONG, ToastAndroid.CENTER);
      };
    const checkOtp = val => {
        console.log('here');
        const values1 = Object.values(val).join('');
        const values2 = otpVal;
        // console.log('values2', values2);
        
        if(values1 === values2){
            console.log('here');
            // getIsSignedIn(true)
            // props.setStatus(true)
            setStatus(true)
          props.navigation.navigate('Maintab',{screen:'Home'});
          stOtpVal('');
        }
      };
    return (
        <View styles={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <TextInput
                    style={[styles.otpText, { borderWidth: 1 }, styles.otpTxt]}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={firstInput}
                    onChangeText={text => {
                        setOtp({ ...otp, 1: text });
                        text && secondInput.current.focus();
                    }}
                />

                <TextInput
                    style={[styles.otpText, { borderWidth: 1 }, styles.otpTxt]}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={secondInput}
                    onChangeText={text => {
                        setOtp({ ...otp, 2: text });
                        text
                            ? thirdInput.current.focus()
                            : firstInput.current.focus();
                    }}
                />
                <TextInput
                    style={[styles.otpText, { borderWidth: 1 }, styles.otpTxt]}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={thirdInput}
                    onChangeText={text => {
                        setOtp({ ...otp, 3: text });
                        text
                            ? fourthInput.current.focus()
                            : secondInput.current.focus();
                    }}
                />
                <TextInput
                    style={[styles.otpText, { borderWidth: 1 }, styles.otpTxt]}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={fourthInput}
                    onChangeText={text => {
                        setOtp({ ...otp, 4: text });
                        !text && thirdInput.current.focus();
                    }}
                />
                <Button title='Submit' onPress={()=>checkOtp(otp)} />
            </View>

        </View>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    otpTxt: {
        fontSize: 25,
        color: 'black',
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
    innerContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        gap: 3,
        borderRadius: 3, alignItems: 'center'
    }
})