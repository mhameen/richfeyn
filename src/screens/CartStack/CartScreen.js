import React, { useEffect, useState } from 'react';
import { ScrollView, View, SafeAreaView, Text } from 'react-native';

import CartRow from '../../components/common/CartRow';
import CustomModal from '../../components/common/CustomModal';
import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';

import { commonStyles } from '../../assets/styles/common';
import { getUserCart, deleteItemCart } from '../../services/api';
import { notifySuccess } from '../../../src/services/handler';
import { BASE_URL } from '../../services/constants';

const CartScreen = ({ navigation: { toggleDrawer } }) => {
    const [cartItems, setCartItems] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [deleteItem, setDeleteItem] = useState('');

    const callAPI = (pageNo = 1, pageSize = 10, query = '') => {
        getUserCart(pageNo, pageSize, query).then((response) => {
            setCartItems(response?.data?.body?.results);
        });
    };

    const onSearch = (text) => {
        setSearchText(text);
        callAPI(1, 20, text);
    };

    const onSearchPress = () => {
        callAPI(1, 20, searchText);
    };

    const toggleAction = () => {
        console.log(deleteItem);
    };

    const trashAction = (id) => {
        setDeleteItem(id);
        setModalVisible(true);
    };

    const deleteCart = () => {
        deleteItemCart(deleteItem).then((response) => {
            console.log(response);
            notifySuccess(response?.data?.body?.msg);
            setModalVisible(false);
            callAPI();
        });
    };

    useEffect(() => {
        callAPI();
    }, []);

    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <TopBar toggleDrawer={toggleDrawer} />
                    <SearchBar placeholder={'Search for items...'} onTextChange={onSearch} onPress={onSearchPress} />
                    <View
                        style={{
                            ...commonStyles.flexOne,
                            ...commonStyles.marginTop10
                        }}
                    >
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => {
                                return (
                                    <CartRow
                                        name={item?.product?.name}
                                        imageSrc={{ uri: BASE_URL + item?.product?.mobile_img }}
                                        quantity={item?.quantity}
                                        price={item?.product?.price}
                                        isWishlist={item?.is_wishlist}
                                        dataId={item.id}
                                        key={item.id}
                                        trashAction={trashAction}
                                    />
                                );
                            })
                        ) : (
                            <Text style={{ fontSize: 16 }}>No item found</Text>
                        )}
                        {/* <CartRow name={'Penne Pasta'} imageSrc={require('../../assets/images/pasta.png')} />
                        <CartRow name={'Penne Pasta'} imageSrc={require('../../assets/images/pasta.png')} /> */}
                    </View>
                    <CustomModal
                        modalText={'Are you sure you want to remove this item from cart?'}
                        modalVisible={modalVisible}
                        actionText={'Delete'}
                        setModalVisible={setModalVisible}
                        toggleAction={toggleAction}
                        modalAction={deleteCart}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CartScreen;
