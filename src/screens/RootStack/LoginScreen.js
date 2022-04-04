import React, { useState, useContext } from 'react';

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
import { Eye, RefreshCcw } from 'react-native-feather';

import Button from '../../components/common/Button';

import { AuthContext } from '../../services/appContext';
import { reactNavigation } from '../../services';

import { colors } from '../../assets/styles/common';
import { widthToDP, heightToDP } from '../../services/utils';

const LoginScreen = ({ navigation }) => {
    const { signIn } = useContext(AuthContext);

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
                        flex: 1.5,
                        backgroundColor: colors.white,
                        width: '100%',
                        borderTopRightRadius: 60,
                        borderTopLeftRadius: 60,
                        borderWidth: 0.2,
                        borderColor: colors.lightBorder
                    }}
                >
                    <View style={{ flex: 2, padding: 28, paddingTop: 30 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 31, color: colors.richBlack, fontWeight: 'bold' }}>Welcome!</Text>
                            <Text style={{ fontSize: 20, color: colors.lightGray, marginTop: 10, fontWeight: '600' }}>
                                Sign in to continue
                            </Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Formik initialValues={{ email: '', otp: '' }} onSubmit={(values) => console.log(values)}>
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <>
                                        <View style={{ flex: 0.5 }}>
                                            <TextInput
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
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
                                        <View style={{ flex: 2 }}>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 1, alignItems: 'center' }}>
                                                    <OTPInputView
                                                        // style={{ width: '80%', height: 200 }}
                                                        pinCount={4}
                                                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                                        // onCodeChanged = {code => { this.setState({code})}}
                                                        autoFocusOnLoad
                                                        codeInputFieldStyle={styles.underlineStyleBase}
                                                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                                        onCodeFilled={(code) => {
                                                            console.log(`Code is ${code}, you are good to go!`);
                                                        }}
                                                    />
                                                </View>
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        alignItems: 'flex-end',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Eye
                                                        fill={colors.lightGray}
                                                        height={30}
                                                        width={30}
                                                        color={colors.white}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ fontSize: 16, color: colors.lightGray }}>
                                                        05 : 00
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        flex: 1,
                                                        flexDirection: 'row',
                                                        justifyContent: 'flex-end'
                                                    }}
                                                >
                                                    <RefreshCcw height={18} width={18} color={colors.lightGray} />
                                                    <Text
                                                        style={{
                                                            fontSize: 16,
                                                            color: colors.lightGray,
                                                            fontWeight: '500'
                                                        }}
                                                    >
                                                        {' '}
                                                        Send again
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                            <Button
                                                onPress={() => {
                                                    signIn();
                                                    // reactNavigation.navigate('BottomTab');
                                                }}
                                                label={'Login'}
                                                containerStyle={{ width: '70%', alignItems: 'center', justifyContent: 'center' }}
                                                textStyle={{ fontSize: 24, fontWeight: 'bold' }}
                                            />
                                        </View>
                                    </>
                                )}
                            </Formik>
                        </View>
                    </View>
                    <View style={{ flex: 0.2, padding: 40, paddingBottom: 20 }}>
                        <Text style={{ fontSize: 18, color: colors.lightGray, fontWeight: '600' }}>
                            Don't have an account?{' '}
                            <TouchableOpacity
                                onPress={() => {
                                    reactNavigation.navigate('SignUpScreen');
                                }}
                            >
                                <Text style={{ color: colors.richBlack, fontWeight: 'bold' }}> Sign Up</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default LoginScreen;

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
