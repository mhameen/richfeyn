import React from 'react';
import { Image, ScrollView, StyleSheet, View, SafeAreaView, Text } from 'react-native';

import { Bell, PlusCircle } from 'react-native-feather';

import CartRow from '../../components/common/CartRow';
import NutritionCard from '../../components/common/NutritionCard';
import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';
import ScreenHeader from '../../components/common/ScreenHeader';
import DoubleTopHeader from '../../components/common/DoubleTopHeader';

import { commonStyles, colors } from '../../assets/styles/common';
import { reactNavigation } from '../../services/index';

import RecipeCard from '../../components/common/RecipeCard';

const NotificationScreen = ({ navigation: { navigate } }) => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <ScreenHeader text="Notifications" />
                    <DoubleTopHeader text={'Default Notifications'} />
                    <View
                        style={{
                            flex: 4,
                            marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            borderBottomWidth: 0.9,
                            borderColor: colors.lightGray,
                            marginTop: 20
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 20,
                                marginHorizontal: 40,
                                flexDirection: 'row'
                            }}
                        >
                            <Bell width={22} height={22} color={colors.richBlack} />
                            <Text style={{ fontSize: 18, fontWeight: '400', marginLeft: 10 }}>
                                Receive notifications all time
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 4,
                            marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            borderBottomWidth: 0.9,
                            borderColor: colors.lightGray,
                            marginBottom: 20
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>EDIT</Text>
                            <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>REMOVE</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <DoubleTopHeader text={'Set Notifications'} />
                    </View>
                    <View
                        style={{
                            flex: 4,
                            marginHorizontal: -40,
                            backgroundColor: colors.borderColor
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                flexDirection: 'row'
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>EDIT</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    mainCard: {
        ...commonStyles.padding12,
        height: 186,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        borderRadius: 8,
        backgroundColor: colors.white
    },
    inventoryImage: {
        width: '100%',
        height: '100%',
        overflow: 'visible',
        justifyContent: 'flex-end'
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
