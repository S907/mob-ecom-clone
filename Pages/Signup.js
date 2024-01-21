
import { getApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
// import { firebaseConfig } from '../FireBaseConfig';
// initializeApp(firebaseConfig)
// const app = getApp();
// console.log('app....', app);
// const auth = getAuth(app);
const Signup = (props) => {
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const recaptchaVerifier = useRef(null);
    const [num, setNum] = useState('')
    const [message, showMessage] = React.useState();
    const [modal, setModal] = useState(true)
    const [verificationCode, setVerificationCode] = React.useState();
    const firebaseConfig = app ? app.options : undefined;


    const sendVerification = async () => {
        try {
            const newNum = "+91" + num
            const phoneProvider = new PhoneAuthProvider(auth);
            console.log('here', phoneProvider);
            const verificationId = await phoneProvider.verifyPhoneNumber(
                `+91${num}`,
                recaptchaVerifier.current
            );
            setCode(verificationId)
            console.log('verificationId0', verificationId);
            // phoneProvider.verifyPhoneNumber(
            //     newNum,
            //     recaptchaVerifier.current
            // ).then(data=>{
            //     console.log('data.........', data)
            // }).catch(err=>err)
            // console.log('verificationId.....', verificationId);
            // console.log('here2222');
            //   setVerificationId(verificationId);
            showMessage({
                text: 'Verification code has been sent to your phone.',
            });
        } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
        }
    }

    const confirmCode = async () => {
        try {
            const credential = PhoneAuthProvider.credential(code, verificationCode);
            await signInWithCredential(auth, credential);
            showMessage({ text: 'Phone authentication successful 👍' });
            props.navigation.navigate('CardScreen');
        } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
        }
    };
    return (
        <View style={{ width: '80%', gap: 10, marginRight: 'auto', marginLeft: 'auto' }} >
            <Text style={{textAlign:'center', fontSize:21}}>{JSON.stringify(message == '' ? '' :message)}</Text>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebaseConfig}
                attemptInvisibleVerification
            />
            <Text
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 40,
                    color: 'orange'
                }}>Sign<Text style={{ color: 'black' }}>Up</Text></Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    fontWeight: '500',
                    paddingLeft: 10,
                    backgroundColor: '#ffff',
                    borderRadius: 4,
                    height: 40,
                    fontSize: 17,
                }}
                keyboardType="phone-pad"
                maxLength={10}
                value={num}
                onChangeText={num => setNum(num)}
            />
            <TouchableOpacity onPress={sendVerification}
                style={{
                    // borderWidth:1,
                    padding: 8,
                    backgroundColor: 'orange',
                    elevation: 4,
                }}><Text
                    style={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: 17,
                    }}>Send Verification Code</Text>
            </TouchableOpacity>
            <Text style={{ textAlign:'center' }}>Enter Verification code</Text>
            <TextInput
                style={{ marginVertical: 10, fontSize: 17 }}
                // editable={!!verificationId}
                placeholder="123456"
                onChangeText={setVerificationCode}
            />
            <Button
                title="Confirm Verification Code"
                // disabled={!code}
                onPress={confirmCode}
            />
        </View>
    )
}

export default Signup;