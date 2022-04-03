import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';

import CartRow from '../../components/common/CartRow';
import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';

import { commonStyles } from '../../assets/styles/common';

const CartScreen = () => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <TopBar />
                    <SearchBar placeholder={'Search for items...'} />
                    <View
                        style={{
                            ...commonStyles.flexOne,
                            ...commonStyles.marginTop10
                        }}
                    >
                        <CartRow
                            name={'India gate basmati rice'}
                            imageSrc={require('../../assets/images/basmati.png')}
                        />
                        <CartRow name={'Penne Pasta'} imageSrc={require('../../assets/images/pasta.png')} />
                        <CartRow name={'Penne Pasta'} imageSrc={require('../../assets/images/pasta.png')} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CartScreen;
