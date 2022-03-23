import React, { useState } from 'react';

import {
    ScrollView,
    View,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image,
    TouchableOpacity,
    Text,
    TextInput
} from 'react-native';

import { Formik } from 'formik';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import { colors } from '../../assets/styles/common';

import Button from '../../components/common/Button';
import { widthToDP, heightToDP } from '../../services/utils';
import { Eye, RefreshCcw } from 'react-native-feather';
import { reactNavigation } from '../../services';

const SignUpScreen = ({ navigation }) => {
    const [otp, setOtp] = useState();

    return (
        <ScrollView>
            <StatusBar hidden />
            <ImageBackground source={require('../../assets/images/background.png')} style={styles.container}>
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        style={{
                            width: 150,
                            height: 150,
                            marginTop: 100,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        source={require('../../assets/images/logobg.png')}
                    >
                        <View style={{}}>
                            <Image style={{ width: 65, height: 65 }} source={require('../../assets/images/logo.png')} />
                        </View>
                    </ImageBackground>
                </View>
                <View
                    style={{
                        flex: 2,
                        backgroundColor: colors.white,
                        width: '100%',
                        borderRadius: 60,
                        borderWidth: 0.2,
                        borderColor: colors.lightBorder
                    }}
                >
                    <View style={{ flex: 2, padding: 28, paddingTop: 30 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 31, color: colors.richBlack, fontWeight: 'bold' }}>Hello!</Text>
                            <Text style={{ fontSize: 20, color: colors.lightGray, marginTop: 10, fontWeight: '600' }}>
                                Create a new account
                            </Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Formik
                                initialValues={{ full_name: '', mobile: '', email: '' }}
                                onSubmit={(values) => console.log(values)}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <>
                                        <View style={{ flex: 1 }}>
                                            <TextInput
                                                onChangeText={handleChange('full_name')}
                                                onBlur={handleBlur('full_name')}
                                                // value={'9029138947'}
                                                placeholder="Enter your name"
                                                maxLength={10}
                                                style={{
                                                    color: colors.richBlack,
                                                    borderBottomColor: '#000',
                                                    borderBottomWidth: 1,
                                                    paddingBottom: 10,
                                                    fontSize: 18
                                                }}
                                            />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <TextInput
                                                onChangeText={handleChange('mobile')}
                                                onBlur={handleBlur('mobile')}
                                                // value={'9029138947'}
                                                placeholder="Enter your mobile no"
                                                maxLength={10}
                                                style={{
                                                    color: colors.richBlack,
                                                    borderBottomColor: '#000',
                                                    borderBottomWidth: 1,
                                                    paddingBottom: 10,
                                                    fontSize: 18
                                                }}
                                            />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <TextInput
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                // value={'9029138947'}
                                                placeholder="Enter your email"
                                                maxLength={10}
                                                style={{
                                                    color: colors.richBlack,
                                                    borderBottomColor: '#000',
                                                    borderBottomWidth: 1,
                                                    paddingBottom: 10,
                                                    fontSize: 18
                                                }}
                                            />
                                        </View>
                                        <View style={{ flex: 0.8, alignItems: 'center' }}>
                                            <Button
                                                onPress={() => {
                                                    reactNavigation.navigate('BottomTab');
                                                }}
                                                label={'Sign Up'}
                                                containerStyle={{ width: '70%' }}
                                                textStyle={{ fontSize: 26, fontWeight: 'bold' }}
                                            />
                                        </View>
                                    </>
                                )}
                            </Formik>
                        </View>
                    </View>
                    <View style={{ flex: 0.2, padding: 40, paddingBottom: 20 }}>
                        <Text style={{ fontSize: 18, color: colors.lightGray, fontWeight: '600' }}>
                            Already have an account?{' '}
                            <TouchableOpacity
                                onPress={() => {
                                    reactNavigation.navigate('LoginScreen');
                                }}
                            >
                                <Text style={{ color: colors.richBlack, fontWeight: 'bold' }}> Login</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: heightToDP('100%'),
        width: widthToDP('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoBgContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: colors.richBlack
    },

    underlineStyleBase: {
        width: 22,
        height: 22,
        borderWidth: 0,
        borderBottomWidth: 0.5,
        borderColor: colors.richBlack
    },

    underlineStyleHighLighted: {
        borderColor: colors.richBlack
    }
});
