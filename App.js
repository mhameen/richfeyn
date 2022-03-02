/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {useCallback, useEffect, useState, useRef, useContext} from 'react';
import {Text, StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import BottomTab from './src/components/BottomTab';

import {AppContextProvider} from './src/services/appContext'
import {reactNavigation} from './src/services/index';

const Stack = createStackNavigator();

const App = () => {
    // SplashScreen.hide();
    const {user, updateUserContext} = useContext(AppContextProvider);

    useEffect(() => {
        onAuthStateChanged();
    }, [onAuthStateChanged]);

    if (!user) {
        return <LoginScreen />;
    }
    if (!user.displayName) {
        return <UserNameScreen onAuthStateChanged={onAuthStateChanged} />;
    }    

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
                }}>
                <StatusBar hidden />
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {/* <Stack.Screen options={{headerShown: false}} name="BottomTab" header={false} component={BottomTab} /> */}
                    <Stack.Screen name="BottomTab" header={false} component={BottomTab} />
                    {/* <Stack.Screen name="AcademiesScreen" component={AcademiesScreen} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </AppContextProvider>
    );
};

export default App;

// import { NavigationContainer } from '@react-navigation/native';

// // import HomeScreen from './src/screens/HomeScreen';
// import HomeStackNavigation from './src/navigations/HomeStackNavigation';

// const App = () => {
//     return (
//         <NavigationContainer>
//             <HomeStackNavigation />
//         </NavigationContainer>
//     );
// };

// export default App;
