import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import { colors, commonStyles } from '../../assets/styles/common';
import { ArrowRight } from 'react-native-feather';

import { BASE_URL } from '../../services/constants';

const SearchRow = ({ imageUrl, id, name = '' }) => {
    return (
        <View style={{ ...commonStyles.flexOne, marginTop: 10 }}>
            <View style={commonStyles.row}>
                <View style={{ flex: 0.6 }}>
                    <Image
                        source={imageUrl}
                        resizeMode="contain"
                        style={{
                            height: 120,
                            width: 100,
                            backgroundColor: colors.white,
                            alignItems: 'center',
                            paddingVertical: 5,
                            borderRadius: 11,
                            marginRight: 20
                        }}
                    />
                </View>
                <View style={commonStyles.flexOne}>
                    <View style={commonStyles.flexOne}>
                        <Text style={{ fontSize: 17, color: colors.richBlack }}>{name}</Text>
                    </View>
                    <View style={commonStyles.flexOne}>
                        <View
                            style={{
                                flex: 1,
                                width: 70,
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: colors.richGreen,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ fontSize: 12, color: colors.white }}>Tracked</Text>
                        </View>
                    </View>
                    <View style={{ ...commonStyles.row, alignItems: 'center' }}>
                        <Text style={{ paddingRight: 12, fontSize: 14 }}>View Details</Text>
                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <ArrowRight color={colors.richBlack} height="20" width="20" />
                        </View>
                    </View>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    marginTop: 20,
                    width: '120%',
                    overflow: 'visible',
                    marginLeft: -20,
                    borderBottomWidth: 0.3,
                    borderColor: colors.lightGray
                }}
            ></View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        ...commonStyles.row,
        alignItems: 'center',
        paddingBottom: 16
    },
    text: { fontSize: 28, color: colors.richBlack }
});

export default SearchRow;
