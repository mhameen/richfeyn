/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import { useState, useRef, useMemo } from 'react';
import Toast from 'react-native-toast-message';

import { Text, StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/RootStack/SplashScreen';
import BottomTab from './src/components/BottomTab';
import RootScreen from './src/screens/RootStack/RootScreen';
import LoginScreen from './src/screens/RootStack/LoginScreen';
import SignUpScreen from './src/screens/RootStack/SignUpScreen';

import { verifyOtp } from './src/services/auth';

import { AuthContext } from './src/services/appContext';
import { reactNavigation } from './src/services/index';

const Stack = createStackNavigator();

const App = () => {
    let [userToken, setUserToken] = useState();
    let [isLoading, setIsLoading] = useState(false);
    const routeNameRef = useRef();

    if (Text.defaultProps == null) {
        Text.defaultProps = {};
    }

    // Text.defaultProps.allowFontScaling = false;

    const authContext = useMemo(() => ({
        signIn: async (id, mobile_no, otp) => {
            const data = { id, mobile_no, otp };
            console.log(data);
            verifyOtp(data).then((response) => {
                if (response?.data?.header?.status === 200) {
                    setUserToken(response?.data?.body?.token);
                    setIsLoading(false);
                }
            });
        },
        signOut: () => {
            setUserToken();
            setIsLoading(false);
        },
        signUp: () => {
            setUserToken('123');
            setIsLoading(false);
        }
    }));

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer
                ref={reactNavigation.navigation}
                onReady={() => {
                    reactNavigation.isNavigationReady.current = true;
                }}
                onStateChange={async (state) => {
                    const previousRouteName = routeNameRef.current;
                    const currentRouteName = reactNavigation.navigation.current.getCurrentRoute().name;
                }}
            >
                <StatusBar hidden />
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {!userToken ? (
                        <>
                            <Stack.Screen name="SplashScreen" header={false} component={SplashScreen} />
                            <Stack.Screen name="RootScreen" header={false} component={RootScreen} />
                            <Stack.Screen name="LoginScreen" header={false} component={LoginScreen} />
                            <Stack.Screen name="SignUpScreen" header={false} component={SignUpScreen} />
                        </>
                    ) : (
                        <Stack.Screen name="BottomTab" header={false} component={BottomTab} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
            <Toast />
        </AuthContext.Provider>
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
