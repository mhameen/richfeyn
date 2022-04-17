import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors, commonStyles } from '../../assets/styles/common';
import { Menu, Bell, Bookmark, ShoppingCart } from 'react-native-feather';
import { navigate } from '../../services/reactNavigation';
import { getData } from '../../services/utils';
import { getUserCart } from '../../services/api';

const TopBar = ({ onPress, modalVisible, setModalVisible, toggleDrawer }) => {
    const [fullName, setFullName] = useState('');
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {}, [getData('full_name').then((name) => setFullName(name))]);
    useEffect(() => {
        getUserCart().then((response) => {
            setCartCount(response?.data?.body?.count);
        });
    }, []);

    return (
        <View style={{ ...commonStyles.row, marginBottom: 10, alignItems: 'center' }}>
            <TouchableOpacity
                style={{ flex: 0.2 }}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                onPress={() => toggleDrawer()}
            >
                <Menu color={colors.richBlack} height="28" width="28" />
            </TouchableOpacity>
            <View style={commonStyles.row}>
                <View style={commonStyles.flexOne}>
                    <Image style={styles.icon} source={require('../../assets/images/inventory.png')} />
                </View>
                <View style={commonStyles.flexThree}>
                    <Text style={{ color: colors.lightGray }}>Hello</Text>
                    <Text style={commonStyles.font16}>{fullName}</Text>
                </View>
            </View>
            <View style={styles.notificationContainer}>
                <TouchableOpacity style={styles.viewContainer} onPress={onPress}>
                    <Bell color={colors.richBlack} />
                </TouchableOpacity>
                <Bookmark color={colors.richBlack} />
                <TouchableOpacity
                    onPress={() => {
                        navigate('CartStack');
                    }}
                    style={{ flexDirection: 'row' }}
                >
                    <ShoppingCart color={colors.richBlack} />
                    {cartCount ? (
                        <View
                            style={{
                                backgroundColor: 'red',
                                width: 16,
                                height: 16,
                                borderRadius: 8,
                                borderWidth: 0.2,
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: -4,
                                left: -8
                            }}
                        >
                            <Text style={{ color: colors.white }}>{cartCount}</Text>
                        </View>
                    ) : (
                        <></>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'flex-end'
    },
    notificationContainer: {
        flex: 0.34,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default TopBar;
