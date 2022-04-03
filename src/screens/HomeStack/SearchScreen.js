import React from 'react';
import { Image, ScrollView, StyleSheet, View, SafeAreaView, Text } from 'react-native';

import { ArrowRight } from 'react-native-feather';

import SearchBar from '../../components/common/SearchBar';

import { commonStyles, colors } from '../../assets/styles/common';
import { reactNavigation } from '../../services/index';

import ScreenHeader from '../../components/common/ScreenHeader';
import SearchRow from '../../components/common/SearchRow';

const SearchScreen = () => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    {/* <TopBar  /> */}
                    <ScreenHeader text="Search" />
                    <SearchBar
                        placeholder={'Search food ...'}
                        onPress={() => reactNavigation.navigate('SignUpScreen')}
                    />
                    <View
                        style={{
                            height: 38,
                            backgroundColor: colors.white,
                            marginVertical: 20,
                            marginHorizontal: -20,
                            paddingHorizontal: 20,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{ color: colors.darkGray }}>100 products found</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={commonStyles.flexOne}>
                            <SearchRow />
                            <SearchRow />
                            <SearchRow />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;

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
