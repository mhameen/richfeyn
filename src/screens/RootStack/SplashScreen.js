import React from 'react';
import { useEffect, useState } from 'react';

import { View, StyleSheet, StatusBar, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { reactNavigation } from '../../services';
import { widthToDP, heightToDP } from '../../services/utils';
import RootScreen from './RootScreen';
const SplashScreen = ({ navigation }) => {
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        setTimeout(() => setInitializing(false), 1000);
    }, []);

    if (!initializing) {
        return <RootScreen />;
    }

    return (
        <ScrollView>
            <StatusBar hidden />
            <ImageBackground source={require('../../assets/images/background.png')} style={styles.container}>
                <View style={styles.logoBgContainer}>
                    <Image source={require('../../assets/images/logobg.png')} />
                    <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
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
        position: 'absolute',
        top: '22%'
    }
});
