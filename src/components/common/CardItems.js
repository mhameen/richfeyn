import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import { colors, commonStyles } from '../../assets/styles/common';
import { ArrowRight } from 'react-native-feather';

const CardItems = ({ text = '' }) => {
    return (
        <View style={{ ...commonStyles.flexOne, marginTop: 10 }}>
            <View style={commonStyles.row}>
                <View
                    style={{
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
                    <View style={{ ...commonStyles.flexOne, borderBottomColor: 'black', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 13, color: colors.richBlack, paddingTop: 5 }}>
                            Daawat Rozana Gold Basmati Rice
                        </Text>
                        <Text style={{ fontSize: 13, color: colors.richBlack, fontWeight: 'bold', paddingBottom: 5 }}>
                            120 /-
                        </Text>
                    </View>
                    <Text style={{ fontSize: 11, color: colors.richBlack, paddingTop: 5 }}>MOVE TO CART</Text>
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
