import * as Yup from 'yup';

import React, { useState, useContext, useEffect } from 'react';

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

import { createLoginOTP, verifyOtp } from '../../../src/services/auth';

import { notifySuccess, notifyError } from '../../../src/services/handler';

const formSchema = Yup.object().shape({
    mobile_no: Yup.string('Please enter a valid 10 digit mobile no!')
        .required('Please enter a valid 10 digit mobile no!')
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits')
});

const otpSchema = formSchema.shape({
    otp: Yup.string('Please enter a valid 4 digit mobile no!')
        .required('Please enter a valid 4 digit mobile no!')
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(4, 'Must be exactly 4 digits')
        .max(4, 'Must be exactly 4 digits')
});

const LoginScreen = ({ navigation, route }) => {
    const { signIn } = useContext(AuthContext);
    const [otpSent, setOTPSent] = useState(false);
    const [otpId, setOTPId] = useState();

    const sendOTP = (data) => {
        createLoginOTP(data).then((response) => {
            console.log(response?.data?.body?.status);
            if (response?.data?.body?.status == 200) {
                setOTPSent(true);
                notifySuccess('OTP sent to your registered mobile no');
                setOTPId(response?.data?.body?.data_id);
            } else if (response?.data?.body?.status == 401) {
                console.log('in else');
                const msg = `${data?.mobile_no} is not registered in our system`;
                notifyError(msg);
            }
        });
    };

    console.log(route);

    useEffect(() => {
        if (route?.params?.data_id) {
            setOTPId(route?.params?.data_id);
            setOTPSent(true);
            notifySuccess('OTP sent to your registered mobile no');
        }
    }, [route?.params?.data_id]);

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
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                        borderWidth: 0.2,
                        borderColor: colors.lightBorder
                    }}
                >
                    <View style={{ flex: 2, padding: 28, paddingTop: 30 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 31, color: colors.richBlack, fontWeight: 'bold' }}>Welcome!</Text>
                            <Text style={{ fontSize: 20, color: colors.lightGray, marginTop: 10, fontWeight: '600' }}>
                                Sign in to continue {route?.params?.data_id}
                            </Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Formik
                                initialValues={{ mobile_no: route?.params?.mobile_no || '', otp: '' }}
                                onSubmit={(values) => {
                                    otpSent
                                        ? signIn(otpId, values.mobile_no, values.otp)
                                        : sendOTP({ mobile_no: values.mobile_no });
                                }}
                                validationSchema={!otpSent ? formSchema : otpSchema}
                                enableReinitialize
                            >
                                {({
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    touched,
                                    errors,
                                    setFieldValue,
                                    values
                                }) => (
                                    <>
                                        <View style={{ flex: 0.5 }}>
                                            <TextInput
                                                onChangeText={handleChange('mobile_no')}
                                                onBlur={handleBlur('mobile_no')}
                                                name="mobile_no"
                                                value={values.mobile_no}
                                                placeholder="Enter your mobile no"
                                                maxLength={10}
                                                min={10}
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
                                        {otpSent ? (
                                            <View style={{ flex: 2 }}>
                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                                        <OTPInputView
                                                            // style={{ width: '80%', height: 200 }}
                                                            pinCount={4}
                                                            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                                            onCodeChanged={(otp) => {
                                                                setFieldValue('otp', otp);
                                                            }}
                                                            autoFocusOnLoad={false}
                                                            codeInputFieldStyle={styles.underlineStyleBase}
                                                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                                        />
                                                        {errors?.otp && touched?.otp ? (
                                                            <Text style={{ color: 'red' }}>{errors?.otp}</Text>
                                                        ) : null}
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
                                        ) : null}
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                            <Button
                                                onPress={handleSubmit}
                                                label={otpSent ? 'Login' : 'Sent OTP'}
                                                containerStyle={{ width: '70%' }}
                                                textStyle={{ fontSize: 26, fontWeight: 'bold' }}
                                                type="submit"
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
