import React from 'react';
import { StyleSheet, Image, Picker } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeStack/HomeScreen';
import NotificationScreen from '../screens/HomeStack/NotificationScreen';
import ProfileScreen from '../screens/HomeStack/ProfileScreen';
import SearchScreen from '../screens/HomeStack/SearchScreen';
import InventoryScreen from '../screens/InventoryStack/InventoryScreen';
import NutritionScreen from '../screens/NutritionStack/NutritionScreen';
import RecipeScreen from '../screens/RecipeStack/RecipeScreen';
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

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

// TODO later move all stack navigation into separate files
function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NotificationScreen" header={false} component={NotificationScreen} />
            <Stack.Screen name="HomeScreen" header={false} component={HomeScreen} />
            <Stack.Screen name="ProfileScreen" header={false} component={ProfileScreen} />
            <Stack.Screen name="SearchScreen" header={false} component={SearchScreen} />
            <Stack.Screen name="WishListScreen" header={false} component={WishListScreen} />
        </Stack.Navigator>
    );
}

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
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <Image source={ActiveHomeTab} /> : <Image source={HomeTab} />;
                    }
                }}
            />
            <Tab.Screen
                name="Inventory"
                component={InventoryScreen}
                options={{
                    tabBarLabel: 'Inventory',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <Image source={ActiveInventoryTab} /> : <Image source={InventoryTab} />;
                    }
                }}
            />
            <Tab.Screen
                name="Nutrition"
                component={NutritionScreen}
                options={{
                    tabBarLabel: 'Nutrition',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <Image source={ActiveNutritionTab} /> : <Image source={NutritionTab} />;
                    }
                }}
            />
            <Tab.Screen
                name="Recipe"
                component={RecipeScreen}
                options={{
                    tabBarLabel: 'Recipe',
                    tabBarIcon: ({ focused }) => {
                        return focused ? <Image source={ActiveRecipeTab} /> : <Image source={RecipeTab} />;
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
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

export default BottomTab;

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
