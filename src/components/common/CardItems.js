import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import { colors, commonStyles } from '../../assets/styles/common';
import { ArrowRight } from 'react-native-feather';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CardItems = ({ name, imageSrc, price, dataId }) => {
    return (
        <View style={{ ...commonStyles.flexOne, marginTop: 10 }}>
            <View style={commonStyles.row}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: colors.white,
                        alignItems: 'center',
                        borderRadius: 11,
                        marginRight: 6,
                        marginLeft: 6,
                        paddingVertical: 10,
                        paddingHorizontal: 13
                    }}
                >
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/basmati.png')}
                        resizeMode="contain"
                    />
                    <View
                        style={{
                            ...commonStyles.flexOne,
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            width: '100%'
                        }}
                    >
                        <Text style={{ fontSize: 13, color: colors.richBlack, paddingTop: 5 }}>{name}</Text>
                        <Text style={{ fontSize: 13, color: colors.richBlack, fontWeight: 'bold', paddingBottom: 5 }}>
                            {price} /-
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 11, color: colors.richBlack, paddingTop: 5 }}>MOVE TO CART</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        ...commonStyles.row,
        alignItems: 'center',
        paddingBottom: 16
    },
    text: { fontSize: 828, color: colors.richBlack }
});

export default CardItems;
