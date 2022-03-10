import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import { colors, commonStyles } from '../../assets/styles/common';
import { Bookmark, Trash } from 'react-native-feather';

const CartRow = ({ name }) => {
    return (
        <View
            style={{
                ...commonStyles.flexOne,
                ...commonStyles.marginV10
            }}
        >
            <View
                style={{
                    borderWidth: 0.5,
                    borderColor: colors.lightBorder,
                    borderRadius: 14,
                    backgroundColor: colors.white,
                    height: 180,
                    padding: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View style={{ flex: 0.8, marginRight: 12 }}>
                    <Image
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                        source={require('../../assets/images/homeScreen/pasta.png')}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 4 }}>
                            <Text style={{ fontSize: 19, fontWeight: '400' }}>Raw Pressed Almond Milk Plan</Text>
                        </View>
                        <View
                            style={{
                                flex: 0.5
                            }}
                        >
                            <Bookmark color={colors.richBlack} />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: colors.lightGray, fontSize: 16 }}>5kg</Text>
                        <Text style={{ color: colors.lightGray, fontSize: 16 }}>Quantity</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 17 }}>₹ 200/-</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <Trash color={colors.richBlack} />
                            </View>
                        </View>
                    </View>
                </View>
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

export default CartRow;
