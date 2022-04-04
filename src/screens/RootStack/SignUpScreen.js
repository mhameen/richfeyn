import * as Yup from 'yup';

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
import { Eye, RefreshCcw } from 'react-native-feather';

import { colors } from '../../assets/styles/common';

import Button from '../../components/common/Button';

import { widthToDP, heightToDP } from '../../services/utils';
import { reactNavigation } from '../../services';

import { signUpUser } from '../../../src/services/auth';

import { notifySuccess, notifyError } from '../../../src/services/handler';

const formSchema = Yup.object().shape({
    full_name: Yup.string('Please enter valid alphabets').required('Please enter your full name'),
    mobile_no: Yup.string('Please enter a valid 10 digit mobile no!')
        .required('Please enter a valid 10 digit mobile no!')
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits'),
    email: Yup.string().email('Please enter a valid email')
});

const SignUpScreen = ({ navigation: { navigate } }) => {
    const [otp, setOtp] = useState();

    const handleSignUp = (full_name, mobile_no, email) => {
        const [first_name, last_name] = full_name.split(' ');
        console.log({ first_name, last_name, mobile_no, email });
        signUpUser({ first_name, last_name, mobile_no, email }).then((response) => {
            if (response?.data?.header?.status == 400) {
                console.log(response?.data?.errors?.errorList[0]);
                notifyError(response?.data?.errors?.errorList[0]?.field_error);
                return;
            }
            if (response?.data?.body?.status == 409) {
                notifyError('User with the same mobile no already exists');
                return;
            }
            navigate('LoginScreen', { mobile_no, data_id: 10 });
        });
    };

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
                        <View>
                            <Image style={{ width: 65, height: 65 }} source={require('../../assets/images/logo.png')} />
                        </View>
                    </ImageBackground>
                </View>
                <View
                    style={{
                        flex: 2,
                        backgroundColor: colors.white,
                        width: '100%',
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
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
                                initialValues={{ full_name: '', mobile_no: '', email: '' }}
                                onSubmit={(values) => handleSignUp(values.full_name, values.mobile_no, values.email)}
                                validationSchema={formSchema}
                            >
                                {({ handleChange, handleBlur, handleSubmit, errors, values, touched }) => (
                                    <>
                                        <View style={{ flex: 1 }}>
                                            <TextInput
                                                name="full_name"
                                                onChangeText={handleChange('full_name')}
                                                onBlur={handleBlur('full_name')}
                                                placeholder="Enter your name"
                                                maxLength={50}
                                                style={{
                                                    color: colors.richBlack,
                                                    borderBottomColor: '#000',
                                                    borderBottomWidth: 1,
                                                    paddingBottom: 10,
                                                    fontSize: 18
                                                }}
                                            />
                                            {errors?.full_name && touched?.full_name ? (
                                                <Text style={{ color: 'red' }}>{errors?.full_name}</Text>
                                            ) : null}
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <TextInput
                                                onChangeText={handleChange('mobile_no')}
                                                onBlur={handleBlur('mobile_no')}
                                                name="mobile_no"
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
                                            {errors?.mobile_no && touched?.mobile_no ? (
                                                <Text style={{ color: 'red' }}>{errors?.mobile_no}</Text>
                                            ) : null}
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <TextInput
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                name="email"
                                                placeholder="Enter your email (Optional)"
                                                maxLength={30}
                                                autoCapitalize={'none'}
                                                style={{
                                                    color: colors.richBlack,
                                                    borderBottomColor: '#000',
                                                    borderBottomWidth: 1,
                                                    paddingBottom: 10,
                                                    fontSize: 18
                                                }}
                                            />
                                            {errors?.email && touched?.email ? (
                                                <Text style={{ color: 'red' }}>{errors?.email}</Text>
                                            ) : null}
                                        </View>
                                        <View style={{ flex: 0.8, alignItems: 'center' }}>
                                            <Button
                                                onPress={handleSubmit}
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
