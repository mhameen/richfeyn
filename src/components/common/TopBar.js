import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors, commonStyles } from '../../assets/styles/common';
import { Menu, Bell, Bookmark, ShoppingCart } from 'react-native-feather';

const TopBar = ({ name, onPress, modalVisible, setModalVisible, toggleDrawer }) => {
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
                    <Text style={commonStyles.font16}>{name}</Text>
                </View>
            </View>
            <View style={styles.notificationContainer}>
                <TouchableOpacity style={styles.viewContainer} onPress={onPress}>
                    <Bell color={colors.richBlack} />
                </TouchableOpacity>
                <Bookmark color={colors.richBlack} />
                <ShoppingCart color={colors.richBlack} />
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
