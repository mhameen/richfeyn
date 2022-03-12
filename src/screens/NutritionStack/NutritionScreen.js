import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';

import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';
import BarCard from '../../components/common/BarCard';
import Button from '../../components/common/Button';

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
                    <TopBar name="Monica Gellar" />
                    <SearchBar placeholder={'Search for items...'} />
                    <View style={{ ...commonStyles.row, ...commonStyles.marginTop20, justifyContent: 'space-between' }}>
                        <Button lable={'Daily'} containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }} />
                        <Button lable={'Weekly'} containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }} />
                        <Button lable={'Monthly'} containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }} />
                    </View>
                    <View
                        style={{
                            ...commonStyles.row,
                            ...commonStyles.marginTop20
                        }}
                    >
                        <BarCard nutrient={'Carbohydrates'} target={'Target: 100g'} series={[100, 40]} />
                        <BarCard nutrient={'Protien'} target={'Target: 120g'} series={[40, 60]} />
                    </View>
                    <View
                        style={{
                            ...commonStyles.row,
                            ...commonStyles.marginTop20
                        }}
                    >
                        <BarCard nutrient={'Carbohydrates'} target={'Target: 100g'} series={[90, 10]} />
                        <BarCard nutrient={'Protien'} target={'Target: 120g'} series={[30, 70]} />
                    </View>
                    <View
                        style={{
                            ...commonStyles.row,
                            ...commonStyles.marginTop20
                        }}
                    >
                        <BarCard nutrient={'Carbohydrates'} target={'Target: 100g'} series={[90, 10]} />
                        <BarCard nutrient={'Protien'} target={'Target: 120g'} series={[30, 70]} />
                    </View>
                </View>
                <View style={{ ...commonStyles.row, marginBottom: 50, justifyContent: 'space-between' }}>
                    <Button lable={'See Graphs'} containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }} />
                    <Button lable={'Add Nutrients'} containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CartScreen;
