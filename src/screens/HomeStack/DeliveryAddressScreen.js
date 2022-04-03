import React, { useState } from 'react';
import { TextInput, ScrollView, StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';

import {RefreshCw, Trash } from 'react-native-feather';

import ScreenHeader from '../../components/common/ScreenHeader';
import DoubleTopHeader from '../../components/common/DoubleTopHeader';

import { commonStyles, colors } from '../../assets/styles/common';
// import { reactNavigation } from '../../services/index';

import Button from '../../components/common/Button';

const DeliveryAddressScreen = ({ navigation: { navigate } }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [defaultRetailer, setDefaultRetailer] = useState(false);
    const myAddress = {
        'name': "Monica Geller",
        'mobile': '123456789',
        'pincode': '1234',
        'state': 'state',
        'address': 'address',
        'localityOrTown': 'localityOrTown',
        'cityOrDistrict': 'cityOrDistrict'
    }
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <ScreenHeader text="My Delivery Address" />
                    <DoubleTopHeader text={'Default Address'} />
                    <View
                        style={{
                            flex: 4,
                            // marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            borderBottomWidth: 0.9,
                            borderColor: colors.lightGray,
                            marginTop: 20,
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                padding: 20,
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['name']}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['address']}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['localityOrTown']}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['state']+' - '+myAddress['pincode']}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['cityOrDistrict']}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: '400'}}>
                                Mobile:{' '+myAddress['mobile']}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 4,
                            backgroundColor: colors.borderColor,
                            marginBottom: 20,
                            borderBottomRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRightWidth: 0.2
                            }}
                        >
                            <RefreshCw width={22} height={22} color={colors.richBlack} />
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>UPDATE</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Trash width={22} height={22} color={colors.richBlack}/>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>REMOVE</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10 }}>
                        <DoubleTopHeader text={'Other Address'} />
                    </View>
                    <View
                        style={{
                            flex: 4,
                            // marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            borderColor: colors.lightGray,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                padding: 20,
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['name']}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['address']}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['localityOrTown']}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['state']+' - '+myAddress['pincode']}
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold'}}>
                                {myAddress['cityOrDistrict']}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ ...commonStyles.flexOne, ...commonStyles.marginTop40 }}>
                            <Button label={'+Add New Address'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DeliveryAddressScreen;

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
