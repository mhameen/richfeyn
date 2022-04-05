import React from 'react';
import { Text, Image, View, StyleSheet, Pressable } from 'react-native';

import Button from './Button';

import { colors, commonStyles } from '../../assets/styles/common';
import { reactNavigation } from '../../services/index.js';

const InventoryRow = ({ imagePath, itemUnit, itemName, retailerPath, inCart, navigateTo }) => {
    const containerStyle = {
        ...styles.cartLabel,
        backgroundColor: inCart ? colors.richBlack : colors.white,
        borderColor: inCart ? colors.white : colors.richBlack
    };
    const textStyle = { color: inCart ? colors.white : colors.richBlack, fontSize: 14 };
    return (
        <Pressable style={styles.mainContainer} onPress={()=>reactNavigation.navigate(navigateTo)}>
            <View style={{ ...commonStyles.row }}>
                <View style={{ flex: 1, padding: 12, marginRight: 10 }}>
                    <Image style={{ width: 80 }} resizeMode="contain" source={imagePath} />
                </View>
                <View style={{ flex: 3, padding: 12 }}>
                    <Text style={{ color: colors.richBlack, fontSize: 16 }}>{itemName}</Text>
                    <View style={styles.cartBtn}>
                        <Text>{itemUnit}</Text>
                    </View>
                    <Button
                        containerStyle={containerStyle}
                        textStyle={textStyle}
                        label={inCart ? 'In cart' : 'Add to cart'}
                    />
                </View>
                <View style={{ flex: 1.5 }}>
                    <Text style={{ fontSize: 10, marginBottom: 15 }}>Expires in 32 days</Text>
                    <Text>Retailer</Text>
                    <View style={{ flex: 1, marginTop: 15 }}>
                        <Image style={{ width: 75 }} resizeMode="contain" source={retailerPath} />
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        height: 130,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        borderRadius: 8,
        marginVertical: 6
    },
    cartBtn: {
        backgroundColor: colors.buttonGray,
        width: 43,
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 5
    },
    cartLabel: {
        width: 80,
        paddingVertical: 2,
        paddingHorizontal: 3,
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center'
    }
});

export default InventoryRow;
