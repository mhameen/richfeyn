import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar, ImageBackground, Image, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthToDP, heightToDP } from '../../services/utils';
import { reactNavigation } from '../../services/index';
import { commonStyles } from '../../assets/styles/common';

const RootScreen = () => {
    return (
        <ScrollView>
            <StatusBar hidden />
            <ImageBackground
                source={require('../../assets/images/splashScreen/background.png')}
                style={styles.container}
            >
                <SafeAreaView>
                    <View style={{ ...commonStyles.flexOne, marginTop: 40 }}>
                        <View style={commonStyles.flexTwo}>
                            <Image source={require('../../assets/images/rootScreen/logo.png')} />
                        </View>
                        <View style={commonStyles.flexOne}>
                            <Pressable
                                style={styles.signUpButton}
                                onPress={() => reactNavigation.navigate('SignUpScreen')}
                            >
                                {({ pressed }) => (
                                    <Text
                                        style={
                                            pressed
                                                ? styles.text
                                                : { ...styles.text, color: 'white', backgroundColor: 'black' }
                                        }
                                    >
                                        Sign up
                                    </Text>
                                )}
                            </Pressable>
                            <Pressable style={styles.logInButton} onPress={() => reactNavigation.navigate('BottomTab')}>
                                {({ pressed }) => (
                                    <Text
                                        style={
                                            pressed
                                                ? { ...styles.text, color: 'white', backgroundColor: 'black' }
                                                : { ...styles.text, borderColor: 'white' }
                                        }
                                    >
                                        Login
                                    </Text>
                                )}
                            </Pressable>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </ScrollView>
    );
};

export default RootScreen;

const height = heightToDP('100%');
const width = widthToDP('100%');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        alignItems: 'center'
    },
    logoBgContainer: {
        flex: 1
    },
    signUpButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logInButton: {
        marginVertical: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        borderRadius: 10,
        borderWidth: 1,
        overflow: 'hidden',
        paddingVertical: 12,
        fontSize: 26,
        backgroundColor: '#ffffff',
        fontWeight: 'bold',
        alignSelf: 'stretch',
        textAlign: 'center'
    }
});
