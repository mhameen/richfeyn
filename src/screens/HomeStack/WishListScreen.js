import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';

import { ShoppingCart } from 'react-native-feather';

import { commonStyles, colors } from '../../assets/styles/common';
import { getWishlistCart } from '../../services/api';

import ScreenHeader from '../../components/common/ScreenHeader';
import CardItems from '../../components/common/CardItems';
import { BASE_URL } from '../../services/constants';

const WishListScreen = () => {
    const [wishListItems, setWishList] = useState([]);

    useEffect(() => {
        getWishlistCart((page = 1), (pageSize = 50), (query = '')).then((response) => {
            const data = response?.data?.body?.results;
            if (data.length > 0) {
                const result = data.reduce(function (rows, key, index) {
                    return (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
                }, []);
                setWishList(result);
            }
        });
    }, []);

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
                    {wishListItems ? (
                        wishListItems.map((row) => {
                            return (
                                <View style={styles.itemCard}>
                                    {row.length > 1
                                        ? row.map((item) => {
                                              return (
                                                  <CardItems
                                                      name={item?.product?.name}
                                                      imageSrc={{ uri: BASE_URL + item?.product?.mobile_img }}
                                                      price={item?.product?.price}
                                                      dataId={item?.product?.id}
                                                  />
                                              );
                                          })
                                        : row.map((item) => {
                                              return (
                                                  <>
                                                      <CardItems
                                                          name={item?.product?.name}
                                                          imageSrc={{ uri: BASE_URL + item?.product?.mobile_img }}
                                                          price={item?.product?.price}
                                                          dataId={item?.product?.id}
                                                      />
                                                      <View style={{ flex: 1 }}></View>
                                                  </>
                                              );
                                          })}
                                </View>
                            );
                        })
                    ) : (
                        <></>
                    )}
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
        flex: 1,
        ...commonStyles.row,
        ...commonStyles.marginTop10,
        justifyContent: 'space-between',
        alignContent: 'space-between'
    }
});
