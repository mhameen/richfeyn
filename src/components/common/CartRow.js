import React, { useState } from 'react';
import Counter from 'react-native-counters';
import { Image, View, Text, StyleSheet } from 'react-native';

import { Bookmark, Minus, Plus, Trash } from 'react-native-feather';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { updateWishList } from '../../services/api';
import { colors, commonStyles } from '../../assets/styles/common';

const CartRow = ({ trashAction, name, imageSrc, weight, price, unit, quantity = 1, isWishlist = false, dataId }) => {
    const [isWish, setWishList] = useState(isWishlist);

    const minusIcon = () => {
        return <Minus width={16} color={colors.richBlack} />;
    };

    const plusIcon = () => {
        return <Plus name="plus" width={16} color={colors.richBlack} />;
    };

    const handleWishList = () => {
        const body = { id: dataId, is_wishlist: !isWish };
        updateWishList(dataId, body).then((response) => {
            if (response?.data?.header?.status === 200) {
                setWishList(!isWish);
            }
        });
    };

    return (
        <View
            style={{
                ...commonStyles.flexOne,
                ...commonStyles.marginV10
            }}
        >
            <View style={styles.view}>
                <View style={{ flex: 0.7 }}>
                    <Image style={styles.image} source={imageSrc} resizeMode="contain" />
                </View>
                <View style={commonStyles.flexOne}>
                    <View style={{ ...commonStyles.row }}>
                        <View style={commonStyles.flexFour}>
                            <Text style={{ fontSize: 19, fontWeight: '400' }}>{name}</Text>
                        </View>
                        <TouchableOpacity style={commonStyles.flexHalf} onPress={handleWishList}>
                            <Bookmark color={colors.richBlack} fill={isWish ? colors.richBlack : colors.white} />
                        </TouchableOpacity>
                    </View>
                    <View style={commonStyles.flexTwo}>
                        <View style={commonStyles.flexTwo}>
                            <Text style={styles.label}>
                                {weight} {unit}
                            </Text>
                            <View style={{ ...commonStyles.row, alignItems: 'center' }}>
                                <Text style={{ ...styles.label, marginRight: 20 }}>Quantity</Text>
                                <View style={styles.counterStyle}>
                                    <Counter
                                        start={quantity}
                                        minusIcon={minusIcon}
                                        plusIcon={plusIcon}
                                        buttonStyle={{
                                            borderColor: '#333',
                                            borderWidth: 0,
                                            marginHorizontal: -14
                                        }}
                                        buttonTextStyle={{
                                            color: colors.richBlack
                                        }}
                                        countTextStyle={{
                                            color: colors.richBlack,
                                            fontSize: 16
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ ...commonStyles.row, marginTop: 5 }}>
                            <View style={commonStyles.flexFour}>
                                <Text style={{ fontSize: 17 }}>₹ {price}/-</Text>
                            </View>
                            <TouchableOpacity
                                style={commonStyles.flexHalf}
                                onPress={() => {
                                    trashAction(dataId);
                                }}
                            >
                                <Trash color={colors.richBlack} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        borderWidth: 0.5,
        borderColor: colors.lightBorder,
        borderRadius: 14,
        backgroundColor: colors.white,
        height: 180,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: { color: colors.lightGray, fontSize: 16 },
    image: {
        width: '90%',
        height: '90%'
    },
    counterStyle: {
        backgroundColor: colors.counterGray,
        paddingHorizontal: 8,
        borderWidth: 0.2,
        borderRadius: 16,
        borderColor: colors.counterGray
    }
});

export default CartRow;
