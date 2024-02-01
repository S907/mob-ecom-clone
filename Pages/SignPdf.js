import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        //   borderRadius: 8,
        backgroundColor: 'white'
    },
    imageTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
    imageBottom: {
        position: 'absolute',
        bottom: 0,
        right: 300,
        width: '100%',
        height: 400,
    },
    input: {
        height: 50,
        marginBottom: 20,
        paddingLeft: 10,
        width: '79%',
        borderRadius: 9,
        justifyContent: 'center',
        backgroundColor: '#ECECEC',
        letterSpacing: .5,
    },
    inputTwo: {
        padding: 5,
        width: '100%',
        marginTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerform: {
        // padding:40,
        height: 700,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 4,

    },
    textStyleTwo: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    regText: {
        paddingTop: 25,
        paddingBottom: 20,
        fontSize: 20,
        //  fontWeight:'bold',  
        color: 'black',

    },
    // imgpicker
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '80%',
    },
    imagePickerButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',

    },
    filePathInput: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    imageContainer: {
        marginTop: 20,
    },
    selectedImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    // imgpicker
    imagePreview: {
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 9,
    },
    containerKeyboard: {
        flex: 1,
        width: '100%',
        zIndex: 1,
        paddingTop: 90,
        paddingBottom: 130
    },
    registrationContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    letterSpacing: {
        // letterSpacing:.2, 
        marginBottom: 8,
    },
    sumitBtnStyl: {
        color: 'white',
        width: '100%',
        fontSize: 17,
        textAlign: 'center',
        padding: 5
    }
})
const SignPdf = () => {
    const [formData, setFormData] = useState({
        // image: null,
        name: '',
        email: '',
        phone: '',
        address: '',
        county: '',
        state: '',
        zip_code: '',
        user_type: null,
        password: '',
        confirm_password: '',
    });
    const [selectedOption, setSelectedOption] = useState(null);
    const [checked, setChecked] = React.useState(false);

    const handleSubmit = () => {

    }
    const handleInputChange = () => {

    }
    return (
        <View style={styles.container}>
            <View style={styles.imageTop}>
                <Image source={require('../assets/wave1.png')} />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.containerKeyboard}>
                <View style={styles.registrationContainer}>
                    <View style={{ width: '80%', zIndex: 1 }}>
                        <View style={styles.containerform}>
                            <ScrollView
                                style={{ width: '100%',  }}
                                contentContainerStyle={{ 
                                    flexGrow:1,
                                    justifyContent:'center',
                                    alignItems: 'center' }}>
                                <Text style={styles.regText}>Register</Text>
                                {/* Image */}
                                <View style={{ width: '79%', backgroundColor:'green' }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,
                                        ]}>
                                        Name
                                    </Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your Name"
                                    value={formData.name}
                                    onChangeText={text => handleInputChange('name', text)}
                                />
                                <View style={{ width: '79%', paddingBottom: 2, marginLeft: 2 }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,
                                        ]}>
                                        Email
                                    </Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChangeText={text => handleInputChange('email', text)}
                                />
                                <View style={{ width: '79%', paddingBottom: 2 }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,
                                        ]}>
                                        Phone number
                                    </Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    maxLength={10}
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChangeText={text => handleInputChange('phone', text)}
                                />

                                <View style={{ width: '79%', paddingBottom: 2 }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,
                                        ]}>
                                        Address
                                    </Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your address"
                                    value={formData.address}
                                    onChangeText={text => handleInputChange('address', text)}
                                />

                                <View style={{ width: '79%', paddingBottom: 2, marginRight: -3 }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,
                                        ]}>
                                        Country Name
                                    </Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your country name"
                                    value={formData.county}
                                    onChangeText={text => handleInputChange('county', text)}
                                />

                                <View style={{ width: '79%', paddingBottom: 2 }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,

                                        ]}>
                                        State
                                    </Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your state"
                                    value={formData.state}
                                    onChangeText={text => handleInputChange('state', text)}
                                />

                                <View style={{ width: '79%', paddingBottom: 2, marginRight: -3 }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,

                                        ]}>
                                        Zip Code
                                    </Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your zip code"
                                    value={formData.zip_code}
                                    onChangeText={text => handleInputChange('zip_code', text)}
                                />

                                {/* <TextInput
                style={styles.input}
                placeholder="Enter user type"
                value={formData.user_type}
                onChangeText={text => handleInputChange('user_type', text)}
              /> */}
                                <View style={{ paddingBottom: 18, width:'79%', backgroundColor:'red'
                            }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,

                                        ]}>
                                        Choose user type:
                                    </Text>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: 8,
                                        }}>
                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginRight: 16,
                                            }}
                                            onPress={() => handleOptionSelect('user')}>
                                            <View
                                                style={{
                                                    height: 24,
                                                    width: 24,
                                                    borderRadius: 12,
                                                    borderWidth: 2,
                                                    borderColor: '#000',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: 8,
                                                }}>
                                                {selectedOption === 'user' && (
                                                    <View
                                                        style={{
                                                            height: 12,
                                                            width: 12,
                                                            borderRadius: 6,
                                                            backgroundColor: '#000',
                                                        }}
                                                    />
                                                )}
                                            </View>
                                            <Text>User</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={{ flexDirection: 'row', alignItems: 'center' }}
                                            onPress={() => handleOptionSelect('vendor')}>
                                            <View
                                                style={{
                                                    height: 24,
                                                    width: 24,
                                                    borderRadius: 12,
                                                    borderWidth: 2,
                                                    borderColor: '#000',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginRight: 8,
                                                }}>
                                                {selectedOption === 'vendor' && (
                                                    <View
                                                        style={{
                                                            height: 12,
                                                            width: 12,
                                                            borderRadius: 6,
                                                            backgroundColor: '#000',
                                                        }}
                                                    />
                                                )}
                                            </View>
                                            <Text>Vendor</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* <View style={{width: '79%', paddingBottom: 2}}>
                <Text>Select Image</Text>
              </View>
              <View style={styles.rowContainer}>
                ImagePicker
                <TouchableOpacity
                  onPress={openImagePicker}
                  style={styles.imagePickerButton}>
                  <Text style={styles.buttonText}>Select Image</Text>
                </TouchableOpacity>
                {formData.image && (
                  <Image
                    source={{uri: formData.image}}
                    style={styles.imagePreview}
                  />
                )}
              </View> */}

                                <View style={{ width: '79%', paddingBottom: 2 }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,

                                        ]}>
                                        Password
                                    </Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    secureTextEntry
                                    onChangeText={text => handleInputChange('password', text)}
                                />


                                <View style={{ width: '79%', paddingBottom: 2 }}>
                                    <Text
                                        style={[
                                            styles.letterSpacing,

                                        ]}>
                                        Confirm Password
                                    </Text>
                                </View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your password"
                                    secureTextEntry
                                    value={formData.confirm_password}
                                    onChangeText={text =>
                                        handleInputChange('confirm_password', text)
                                    }
                                />

                                <View
                                    style={{
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    {/* <LinearGradient
                    colors={['#66ccff', '#0058b0']}
                    style={[
                      {
                        width: '80%',
                        borderRadius: 8,
                        // borderWidth:1
                        justifyContent: 'center',
                        alignItems: 'center',
                      },
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}> */}
                                    <TouchableOpacity
                                        style={styles.inputTwo}
                                        onPress={handleSubmit}>
                                        <Text style={[styles.sumitBtnStyl]}>
                                            SUBMIT
                                        </Text>
                                    </TouchableOpacity>
                                    {/* </LinearGradient> */}
                                </View>
                                <Text
                                    style={[
                                        styles.letterSpacing,
                                        { paddingTop: 5 },
                                    ]}>
                                    Have an account?
                                    <Text
                                        style={{ color: 'blue' }}
                                        onPress={() => props.navigation.navigate('Login')}>
                                        {' '}
                                        Login
                                    </Text>
                                </Text>
                                <View style={{
                                    // paddingBottom:10
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text
                                        style={{
                                            // paddingBottom: 20,
                                            letterSpacing: 0.5,
                                        }}>

                                        Read our terms and conditions
                                    </Text>
                                    <Checkbox
                                        status={checked ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(!checked);
                                        }}

                                    />
                                </View>

                            </ScrollView>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <View style={styles.imageBottom}>
                <Image source={require('../assets/wave2.png')} />
            </View>
        </View>
    )
}

export default SignPdf

