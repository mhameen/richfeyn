import React from 'react';

import { View, StyleSheet, StatusBar, ImageBackground, Image, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';

import { colors } from '../../assets/styles/common';

import Button from '../../components/common/Button';
import { widthToDP, heightToDP } from '../../services/utils';

const SplashScreen = ({ navigation }) => {
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
                        borderRadius: 60,
                        borderWidth: 0.2,
                        borderColor: colors.lightBorder
                    }}
                >
                    <View style={{ flex: 1, padding: 40 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 31, color: colors.richBlack, fontWeight: 'bold' }}>Welcome!</Text>
                            <Text style={{ fontSize: 20, color: colors.lightGray, marginTop: 10, fontWeight: '400' }}>
                                Sign in to continue
                            </Text>
                        </View>
                        <Formik initialValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
                            {({ handleChange, handleBlur, handleSubmit, values }) => (
                                <>
                                    <View style={{ flex: 1 }}>
                                        <TextInput
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            // value={'9029138947'}
                                            placeholder="Please enter your 10 digit mobile no"
                                            style={{
                                                color: colors.richBlack,
                                                borderBottomColor: '#000',
                                                borderBottomWidth: 1,
                                                paddingBottom: 10,
                                                fontSize: 16
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Button onPress={handleSubmit} label={'Submit'} containerStyle />
                                    </View>
                                </>
                            )}
                        </Formik>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default SplashScreen;

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
    logo: {
        position: 'absolute'
    }
});
