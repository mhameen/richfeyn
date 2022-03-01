/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import HomeScreen from './src/screens/HomeScreen';
import HomeStackNavigation from './src/navigations/HomeStackNavigation';

const App = () => {
    return (
        <NavigationContainer>
            <HomeStackNavigation />
        </NavigationContainer>
    );
};

export default App;
