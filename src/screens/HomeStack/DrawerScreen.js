import { Image, ScrollView, StyleSheet, View, SafeAreaView, Text, Modal, Pressable } from 'react-native';
import { commonStyles, colors } from '../../assets/styles/common';
import React, { useState } from 'react';
import { Bell, FileText, FolderMinus, LogOut, MapPin, User } from 'react-native-feather';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const DrawerScreen = (props) => {
    const [userName, setUserName] = useState('Monica Geller');
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={commonStyles.safeArea}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text>Hello</Text>
                        <Text style={styles.userName}>{userName}</Text>
                    </View>
                    <Image
                        style={styles.logoImage}
                        source={require('../../assets/images/logo.png')}
                        resizeMode="contain"
                    />
                </View>
                <Pressable label="My Profile" style={styles.drawerItem} onPress={()=>{}}>
                    <User width={22} height={22} color={colors.richBlack} />
                    <Text style={styles.itemText}>My Profile</Text>
                </Pressable>
                <Pressable style={styles.drawerItem} label="My Delivery Address">
                    <MapPin
                        width={22}
                        height={22}
                        color={colors.richBlack}
                    />
                    <Text style={styles.itemText}>My Delivery Address</Text>
                </Pressable>
                <Pressable style={styles.drawerItem} label="Retailer list">
                    <FileText
                        width={22}
                        height={22}
                        color={colors.richBlack}
                    />
                    <Text style={styles.itemText}>Retailer list</Text>
                </Pressable>
                <Pressable style={styles.drawerItem} label="My Orders">
                    <FolderMinus
                        width={22}
                        height={22}
                        color={colors.richBlack}
                    />
                    <Text style={styles.itemText}>My Orders</Text>
                </Pressable>
                <Pressable style={styles.drawerItem} label="Notifications">
                    <Bell
                        width={22}
                        height={22}
                        color={colors.richBlack}
                    />
                    <Text style={styles.itemText}>Notifications</Text>
                </Pressable>
                <Pressable style={styles.drawerItem} label="My Whishlist">
                    <User width={22} height={22} color={colors.richBlack}/>
                    <Text style={styles.itemText}>My Whishlist</Text>
                </Pressable>
                <Pressable style={styles.drawerItem} label="Logout">
                    <LogOut width={22} height={22} color={colors.richBlack}/>
                    <Text style={styles.itemText}>Logout</Text>
                </Pressable>
        </DrawerContentScrollView>
    );
};

export default DrawerScreen;

const styles = StyleSheet.create({
    drawerContainer: {
        // borderWidth: 1,
        // flex:4,
        width: '50%',
        backgroundColor: '#ffffff'
    },
    menuContainer: {
        borderWidth: 1,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '10%',
        paddingHorizontal: '5%'
    },
    logoImage: {
        width: 90,
        height: 90
    },
    userName: {
        fontWeight: 'bold'
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        paddingBottom: 10,
        paddingHorizontal: '5%',
        marginBottom: 15
    },
    itemText: {
        fontWeight: 'bold',
        marginLeft: 10
    }
});
