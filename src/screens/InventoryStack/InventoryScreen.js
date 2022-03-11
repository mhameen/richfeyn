import React from 'react';
import { Image, ScrollView, StyleSheet, View, SafeAreaView, Text } from 'react-native';

import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';

import { commonStyles, colors } from '../../assets/styles/common';

const InventoryBanner = ({ text, color }) => {
    return (
        <View
            style={{
                flex: 1,
                height: 47,
                backgroundColor: colors.white,
                marginVertical: 20,
                overflow: 'visible',
                marginHorizontal: -20
            }}
        >
            <View
                style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ color: color, fontSize: 20, marginLeft: 20 }}>{text}</Text>
            </View>
        </View>
    );
};

const HomeScreen = () => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <TopBar name="Monica Gellar" />
                    <SearchBar placeholder={'Search food from pantry...'} />
                    <InventoryBanner color={colors.richOrange} text="Tracked Items" />
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: colors.white,
                            height: 140,
                            borderWidth: 0.5,
                            borderColor: colors.borderColor,
                            borderRadius: 8
                        }}
                    >
                        <View style={{ ...commonStyles.row }}>
                            <View style={{ flex: 1, padding: 12 }}>
                                <Image resizeMode="contain" source={require('../../assets/images/basmati.png')} />
                            </View>
                            <View style={{ flex: 4, padding: 12 }}>
                                <Text style={{ color: colors.richBlack, fontSize: 16 }}>
                                    India Gate Basmati Rice Bag
                                </Text>
                                <View
                                    style={{
                                        backgroundColor: colors.buttonGray,
                                        width: 43,
                                        paddingVertical: 2,
                                        paddingHorizontal: 3,
                                        borderRadius: 4,
                                        alignItems: 'center',
                                        marginBottom: 10,
                                        marginTop: 5
                                    }}
                                >
                                    <Text>5 kg</Text>
                                </View>
                                <View
                                    style={{
                                        backgroundColor: colors.richBlack,
                                        width: 80,
                                        paddingVertical: 2,
                                        paddingHorizontal: 3,
                                        borderRadius: 4,
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text style={{ color: colors.white }}>In cart</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ fontSize: 10 }}>Expires in 2 days</Text>
                            </View>
                        </View>
                    </View>
                    <InventoryBanner color={colors.richGreen} text="Untracked Items" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    mainCard: {
        ...commonStyles.paddingCards,
        height: 186,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        borderRadius: 8,
        backgroundColor: colors.white
    },
    midCard: {
        flex: 1,
        height: 32,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 0.2,
        backgroundColor: colors.darkGray
    },
    nutrientCard: {
        ...commonStyles.row,
        ...commonStyles.marginTop10,
        justifyContent: 'space-between',
        alignContent: 'space-between'
    }
});
