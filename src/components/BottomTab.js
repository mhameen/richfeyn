import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeStack/HomeScreen';
import NotificationScreen from '../screens/HomeStack/NotificationScreen';
import ProfileScreen from '../screens/HomeStack/ProfileScreen';
import SearchScreen from '../screens/HomeStack/SearchScreen';
import InventoryScreen from '../screens/InventoryStack/InventoryScreen';
import NutritionScreen from '../screens/NutritionStack/NutritionScreen';
import NutritionChartScreen from '../screens/NutritionStack/NutritionChartScreen';
import RecipeScreen from '../screens/RecipeStack/RecipeScreen';
import RecipeDetailScreen from '../screens/RecipeStack/RecipeDetailScreen';
import CartScreen from '../screens/CartStack/CartScreen';
import WishListScreen from '../screens/HomeStack/WishListScreen';

import HomeTab from '../assets/icons/bottomTab/homeTab.png';
import ActiveHomeTab from '../assets/icons/bottomTab/activeHomeTab.png';
import InventoryTab from '../assets/icons/bottomTab/inventoryTab.png';
import ActiveInventoryTab from '../assets/icons/bottomTab/activeInventoryTab.png';
import NutritionTab from '../assets/icons/bottomTab/nutritionTab.png';
import ActiveNutritionTab from '../assets/icons/bottomTab/activeNutritionTab.png';
import CartTab from '../assets/icons/bottomTab/cartTab.png';
import ActiveCartTab from '../assets/icons/bottomTab/activeCartTab.png';
import RecipeTab from '../assets/icons/bottomTab/recipeTab.png';
import ActiveRecipeTab from '../assets/icons/bottomTab/activeRecipeTab.png';

import { heightToDP } from '../services/utils';
import RetailerListScreen from '../screens/HomeStack/RetailerListScreen';
import AddressScreen from '../screens/HomeStack/AddressScreen';
import DeliveryAddressScreen from '../screens/HomeStack/DeliveryAddressScreen';
import { Fragment } from 'react/cjs/react.production.min';
import { AuthContext } from '../services/appContext';
import DrawerScreen from '../screens/HomeStack/DrawerScreen';
import ProductDetailsScreen from '../screens/InventoryStack/ProductDetailsScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// TODO later move all stack navigation into separate files
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" header={false} component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" header={false} component={ProfileScreen} />
            <Stack.Screen name="DeliveryAddressScreen" header={false} component={DeliveryAddressScreen} />
            <Stack.Screen name="AddressScreen" header={false} component={AddressScreen} />
            <Stack.Screen name="RetailerListScreen" header={false} component={RetailerListScreen} />
            <Stack.Screen name="NotificationScreen" header={false} component={NotificationScreen} />
            <Stack.Screen name="SearchScreen" header={false} component={SearchScreen} />
            <Stack.Screen name="WishListScreen" header={false} component={WishListScreen} />
            <Stack.Screen name="ProductDetailsScreen" header={false} component={ProductDetailsScreen} />
        </Stack.Navigator>
    );
};

const InventoryStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="InventoryScreen" header={false} component={InventoryScreen} />
            <Stack.Screen name="ProductDetailsScreen" header={false} component={ProductDetailsScreen} />
        </Stack.Navigator>
    );
};

const BottomTab = () => {
    return (
        <Tab.Navigator
            activeColor="#000000"
            inactiveColor="#ffff"
            backBehavior="initialRoute"
            barStyle={styles.color}
            screenOptions={({ route }) => ({
                headerShown: false,
                showLabel: true,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <Image source={ActiveHomeTab} /> : <Image source={HomeTab} />;
                    }
                }}
            />
            <Tab.Screen
                name="InventoryStack"
                component={InventoryScreen}
                options={{
                    tabBarLabel: 'Inventory',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <Image source={ActiveInventoryTab} /> : <Image source={InventoryTab} />;
                    }
                }}
            />
            <Tab.Screen
                name="NutritionStack"
                component={NutritionScreen}
                options={{
                    tabBarLabel: 'Nutrition',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <Image source={ActiveNutritionTab} /> : <Image source={NutritionTab} />;
                    }
                }}
            />
            <Tab.Screen
                name="RecipeStack"
                component={RecipeScreen}
                options={{
                    tabBarLabel: 'Recipe',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <Image source={ActiveRecipeTab} /> : <Image source={RecipeTab} />;
                    }
                }}
            />
            <Tab.Screen
                name="CartStack"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <Image source={ActiveCartTab} /> : <Image source={CartTab} />;
                    }
                }}
            />
        </Tab.Navigator>
    );
};

const DrawerTab = () => {
    const { signOut } = useContext(AuthContext);

    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label="Logout" onPress={() => signOut()} />
            </DrawerContentScrollView>
        );
    };

    return (
        <Drawer.Navigator
            initialRouteName="HomeScreen"
            screenOptions={({ route }) => ({
                headerShown: false,
                showLabel: true,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray'
            })}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            // drawerContent={(props) => <DrawerScreen {...props} />}
        >
            {/* <Drawer.Screen
                name="HomeScreen"
                component={BottomTab}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size }) =>
                        focused ? <Image source={ActiveHomeTab} /> : <Image source={HomeTab} />
                }}
            /> */}
            <Drawer.Screen name="My Orders" component={BottomTab} />
            <Drawer.Screen name="My Profile" component={ProfileScreen} />
            <Drawer.Screen name="My Delivery Address" component={DeliveryAddressScreen} />
            <Drawer.Screen name="Retailer List" component={RetailerListScreen} />
            <Drawer.Screen name="Notifications" component={NotificationScreen} />
            <Drawer.Screen name="My Wishlist" component={WishListScreen} />
            {/* <Drawer.Screen name="Logout" component={<Fragment></Fragment>} /> */}
        </Drawer.Navigator>
    );
};
export default DrawerTab;

const styles = StyleSheet.create({
    color: {
        backgroundColor: '#ffff',
        height: heightToDP('8%'),
        justifyContent: 'center'
    },
    tabImage: {
        marginBottom: heightToDP('10%')
    }
});
