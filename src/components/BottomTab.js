import React from 'react';
import HomeScreen from '../screens/HomeStack/HomeScreen';
import InventoryScreen from '../screens/InventoryStack/InventoryScreen';
import NutritionScreen from '../screens/NutritionStack/NutritionScreen';
import RecipeScreen from '../screens/RecipeStack/RecipeScreen';
import CartScreen from '../screens/CartStack/CartScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet, Image } from 'react-native';
import { heightToDP } from '../services/utils';
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

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            activeColor="#000000"
            inactiveColor="#ffff"
            tabBarOptions={{
                showLabel: false,
                showIcon: true
            }}
            backBehavior="initialRoute"
            barStyle={styles.color}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => {
                        if (color === '#ffff') {
                            return <Image source={HomeTab} />;
                        } else {
                            return <Image source={ActiveHomeTab} />;
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Inventory"
                component={InventoryScreen}
                options={{
                    tabBarLabel: 'Inventory',
                    tabBarIcon: ({ color }) => {
                        if (color === '#ffff') {
                            return <Image source={InventoryTab} />;
                        } else {
                            return <Image source={ActiveInventoryTab} />;
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Nutrition"
                component={NutritionScreen}
                options={{
                    tabBarLabel: 'Nutrition',
                    tabBarIcon: ({ color }) => {
                        if (color === '#ffff') {
                            return <Image source={NutritionTab} />;
                        } else {
                            return <Image source={ActiveNutritionTab} />;
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Recipe"
                component={RecipeScreen}
                options={{
                    tabBarLabel: 'Recipe',
                    tabBarIcon: ({ color }) => {
                        if (color === '#ffff') {
                            return <Image source={RecipeTab} />;
                        } else {
                            return <Image source={ActiveRecipeTab} />;
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => {
                        if (color === '#ffff') {
                            return <Image source={CartTab} />;
                        } else {
                            return <Image source={ActiveCartTab} />;
                        }
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
