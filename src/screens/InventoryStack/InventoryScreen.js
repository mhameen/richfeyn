import React from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView, Text } from 'react-native';

import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';
import InventoryRow from '../../components/common/InventoryRow';
import Button from '../../components/common/Button';

import { commonStyles, colors } from '../../assets/styles/common';

const InventoryBanner = ({ text, color }) => {
    return (
        <View style={styles.inventoryContainer}>
            <View style={styles.inventoryView}>
                <Text style={{ ...styles.bannerText, color: color }}>{text}</Text>
            </View>
        </View>
    );
};

const InventoryScreen = () => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <TopBar />
                    <SearchBar placeholder={'Search food from pantry...'} />
                    <InventoryBanner color={colors.richOrange} text="Tracked Items" />
                    <InventoryRow
                        imagePath={require('../../assets/images/basmati.png')}
                        retailerPath={require('../../assets/images/dus.png')}
                        itemName={'India Gate Basmati Rice Bag'}
                        itemUnit={'5 kg'}
                        inCart
                    />
                    <InventoryRow
                        imagePath={require('../../assets/images/tomatoes.png')}
                        retailerPath={require('../../assets/images/bb.png')}
                        itemName={'Fresh Tomatoes'}
                        itemUnit={'1 kg'}
                        inCart={false}
                    />
                    <InventoryBanner color={colors.richGreen} text="Untracked Items" />
                    <Button label={'Add Item to Inventory'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default InventoryScreen;

const styles = StyleSheet.create({
    mainCard: {
        ...commonStyles.padding12,
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
    },
    inventoryContainer: {
        flex: 1,
        height: 47,
        backgroundColor: colors.white,
        marginVertical: 20,
        overflow: 'visible',
        marginHorizontal: -20
    },
    inventoryView: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    bannerText: { fontSize: 20, marginLeft: 20 }
});
