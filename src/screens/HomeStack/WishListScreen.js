import React from 'react';
import { Image, ScrollView, StyleSheet, View, SafeAreaView, Text } from 'react-native';

import { ShoppingCart } from 'react-native-feather';

import { commonStyles, colors } from '../../assets/styles/common';
import { reactNavigation } from '../../services/index';

import ScreenHeader from '../../components/common/ScreenHeader';
import CardItems from '../../components/common/CardItems';

const WishListScreen = () => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <View style={styles.itemCard}>
                        <ScreenHeader text="WishList" />
                        <ShoppingCart color={colors.richBlack} />
                    </View>
                    <View style={styles.itemCard}>
                        <CardItems />
                        <CardItems />
                    </View>
                    <View style={styles.itemCard}>
                        <CardItems />
                        <CardItems />
                    </View>
                    <View style={styles.itemCard}>
                        <CardItems />
                        <CardItems />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default WishListScreen;

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
    itemCard: {
        ...commonStyles.row,
        ...commonStyles.marginTop10,
        justifyContent: 'space-between',
        alignContent: 'space-between'
    }
});
