/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useCallback, useEffect, useState, useRef} from 'react';
import {Text, StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import BottomTab from './src/components/BottomTab';

import {AppContextProvider} from './src/services/appContext'
import {reactNavigation} from './src/services/index';

const Stack = createStackNavigator();

const App = () => {
    SplashScreen.hide();
    const [user, setUser] = useState();
    const routeNameRef = useRef();
    if (Text.defaultProps == null) {
        Text.defaultProps = {};
    }
    Text.defaultProps.allowFontScaling = false;

    return (
        <AppContextProvider user={user}>
            <NavigationContainer
                ref={reactNavigation.navigation}
                onReady={() => {
                    reactNavigation.isNavigationReady.current = true;
                }}
                onStateChange={async (state) => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName =
                    reactNavigation.navigation.current.getCurrentRoute().name;
                // if (previousRouteName !== currentRouteName) {
                //     await analytics().logScreenView({
                //     screen_name: currentRouteName,
                //     screen_class: currentRouteName,
                //     });
                // }
                }}>
                <StatusBar hidden />
                <Stack.Navigator headerShown={false}>
                    <Stack.Screen name="BottomTab" component={BottomTab} />
                    {/* <Stack.Screen name="AcademiesScreen" component={AcademiesScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </AppContextProvider>
    );
};

export default App;