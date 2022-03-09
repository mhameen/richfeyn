import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Image, TextInput, ScrollView, StyleSheet, View, SafeAreaView, Text, ImageBackground } from 'react-native';

import { AlertTriangle, PlusCircle, Menu, ShoppingCart, Bell, Bookmark } from 'react-native-feather';
import { widthToDP, heightToDP } from '../../services/utils';

import { commonStyles, colors } from '../../assets/styles/common';

const HomeScreen = () => {
    return (
        <SafeAreaView style={commonStyles.flexOne}>
            <ScrollView style={commonStyles.container}>
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <View style={{ ...commonStyles.row, marginBottom: 10 }}>
                        <View style={{ flex: 0.3 }}>
                            <Menu color={colors.richBlack} height="28" width="28" />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ paddingRight: 10 }}>
                                <AlertTriangle color={colors.richBlack} height="32" width={32} />
                            </View>
                            <View style={{}}>
                                <Text style={{ color: colors.lightGray }}>Hello</Text>
                                <Text style={{ fontSize: 16 }}>Monica Gellar</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Bell color={colors.richBlack} />
                            <Bookmark color={colors.richBlack} />
                            <ShoppingCart color={colors.richBlack} />
                        </View>
                    </View>
                    <View style={{ ...commonStyles.flexOne, ...commonStyles.marginTop10 }}>
                        <View style={{ borderWidth: 0.2, borderColor: 'black', borderRadius: 20 }}>
                            <TextInput
                                placeholder="Search food ..."
                                style={{
                                    width: '90%',
                                    height: 40,
                                    paddingLeft: 12,
                                    fontSize: 14
                                }}
                            />
                        </View>
                        <View style={{ ...commonStyles.flexOne, ...commonStyles.marginTop10 }}>
                            <View style={{ marginTop: 20 }}>
                                <View
                                    style={{
                                        height: 186,
                                        borderWidth: 0.5,
                                        borderColor: colors.lightBorder,
                                        borderRadius: 8,
                                        ...commonStyles.paddingCards
                                    }}
                                >
                                    <View style={commonStyles.row}>
                                        <View style={{ flex: 0.8 }}>
                                            <Text style={{ fontSize: 23, fontWeight: '400' }}>Inventory</Text>
                                        </View>
                                        <View
                                            style={{
                                                flex: 1,
                                                height: 32,
                                                padding: 8,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 8,
                                                borderWidth: 0.2,
                                                backgroundColor: colors.darkGray
                                            }}
                                        >
                                            <View style={{ flex: 1 }}>
                                                <AlertTriangle color={'white'} height="18" />
                                            </View>
                                            <View style={{ flex: 5 }}>
                                                <Text style={{ color: 'white', fontWeight: '500', fontSize: 12 }}>
                                                    Running low on rice
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <PlusCircle color={'white'} height="18" />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={commonStyles.row}>
                                        <View style={{ flex: 0.5 }}>
                                            <Text style={{ fontWeight: '300', fontSize: 15 }}>
                                                check what's running out and add it to you're inventory
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    overflow: 'visible',
                                                    justifyContent: 'flex-end'
                                                }}
                                                resizeMode="cover"
                                                source={require('../../assets/images/homeScreen/inventory.png')}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                ...commonStyles.row,
                                ...commonStyles.marginTop10,
                                justifyContent: 'space-between',
                                alignContent: 'space-between'
                            }}
                        >
                            <View style={{ flex: 1 }}>
                                <View
                                    style={{
                                        borderWidth: 0.5,
                                        borderColor: colors.lightBorder,
                                        borderRadius: 8,
                                        height: 256,
                                        padding: 10,
                                        marginTop: 20,
                                        ...commonStyles.paddingCards
                                    }}
                                >
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 23, fontWeight: '400' }}>Nutrition{'\n'}relay</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', flex: 1, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '600', color: colors.gray }}>
                                            Carbohydrates
                                        </Text>
                                        <Text style={{ fontSize: 12, fontWeight: '500', color: colors.gray }}>
                                            Target: 300g
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View
                                    // source={require('../../assets/images/homeScreen/pasta.png')}
                                    style={{
                                        borderWidth: 0.5,
                                        borderColor: colors.lightBorder,
                                        borderRadius: 8,
                                        height: 256,
                                        marginTop: 20,
                                        ...commonStyles.paddingCards,
                                        flex: 1
                                    }}
                                >
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 23, fontWeight: '400' }}>Recipes</Text>
                                    </View>
                                    <View style={{ flex: 2 }}>
                                        <Image
                                            style={{ width: '100%', height: '100%' }}
                                            source={require('../../assets/images/homeScreen/pasta.png')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ ...commonStyles.flexOne, ...commonStyles.marginTop10 }}>
                            <View style={{ borderWidth: 0.2, height: 400, marginTop: 20 }}>
                                <Text>Text</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    logo: {
        marginTop: -heightToDP('30%'),
        width: widthToDP('100%'),
        height: heightToDP('130%')
    },
    footer: {
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        paddingTop: heightToDP('1%'),
        marginTop: heightToDP('50%'),
        paddingBottom: heightToDP('10%')
    }
});
