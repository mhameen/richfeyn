import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, ScrollView, StyleSheet, View, SafeAreaView, Text, Modal, Pressable } from 'react-native';

import { AlertTriangle, PlusCircle } from 'react-native-feather';

import CartRow from '../../components/common/CartRow';
import NutritionCard from '../../components/common/NutritionCard';
import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';

import { commonStyles, colors } from '../../assets/styles/common';

import RecipeCard from '../../components/common/RecipeCard';
import DrawerScreen from './DrawerScreen';

import { getUserCart } from '../../services/api';
import { BASE_URL } from '../../services/constants';

const HomeScreen = ({ navigation: { navigate, toggleDrawer } }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        getUserCart().then((response) => {
            if (response?.data?.header?.status == 200) {
                console.log(response?.data?.body?.results);
                setCartProducts(response?.data?.body?.results);
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
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <DrawerScreen />
                </Modal>
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <TopBar
                        name="Monica Gellar"
                        onPress={() => navigate('DrawerScreen')}
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        toggleDrawer={toggleDrawer}
                    />
                    <SearchBar placeholder={'Search food ...'} onPress={() => navigate('SearchScreen')} />
                    <View
                        style={{
                            ...commonStyles.flexOne,
                            ...commonStyles.marginTop10
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigate('InventoryStack')}
                            style={{
                                ...commonStyles.flexOne,
                                ...commonStyles.marginTop10
                            }}
                        >
                            <View style={{ marginTop: 20 }}>
                                <View style={styles.mainCard}>
                                    <View style={commonStyles.row}>
                                        <View style={{ flex: 0.8 }}>
                                            <Text
                                                style={{
                                                    fontSize: 23,
                                                    fontWeight: '400'
                                                }}
                                            >
                                                Inventory
                                            </Text>
                                        </View>
                                        <View style={styles.midCard}>
                                            <View style={{ flex: 1 }}>
                                                <AlertTriangle color={colors.white} height="18" />
                                            </View>
                                            <View style={{ flex: 5 }}>
                                                <Text
                                                    style={{
                                                        color: colors.white,
                                                        fontWeight: '500',
                                                        fontSize: 12
                                                    }}
                                                >
                                                    Running low on rice
                                                </Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <PlusCircle color={colors.white} height="18" />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={commonStyles.row}>
                                        <View style={{ flex: 0.5 }}>
                                            <Text
                                                style={{
                                                    fontWeight: '300',
                                                    fontSize: 15
                                                }}
                                            >
                                                check what's running out and add it to you're inventory
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flex: 1,
                                                justifyContent: 'flex-end'
                                            }}
                                        >
                                            <Image
                                                style={styles.inventoryImage}
                                                resizeMode="cover"
                                                source={require('../../assets/images/inventory.png')}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.nutrientCard}>
                            <View style={{ flex: 1, paddingRight: 5 }}>
                                <TouchableOpacity onPress={() => navigate('NutritionStack')}>
                                    <NutritionCard
                                        title={` Nutrition${'\n'} relay`}
                                        nutrient={'Carbohydrates'}
                                        label={'Target: 300g'}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, paddingLeft: 5 }}>
                                <TouchableOpacity onPress={() => navigate('RecipeStack')}>
                                    <RecipeCard />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {cartProducts.length > 0 ? (
                            <View style={{ flex: 1, marginVertical: 20 }}>
                                <Text style={{ color: colors.darkGray, fontSize: 32, fontWeight: '500' }}>Cart</Text>
                            </View>
                        ) : null}
                        <>
                            {cartProducts.map((item) => {
                                return (
                                    <CartRow
                                        dataId={item?.product?.id}
                                        name={item?.product?.name}
                                        price={item?.product?.price}
                                        weight={item?.product?.weight}
                                        unit={item?.product?.unit}
                                        quantity={item?.quantity}
                                        imageSrc={{
                                            uri: BASE_URL + item?.product?.mobile_img
                                        }}
                                    />
                                );
                            })}
                        </>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

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
