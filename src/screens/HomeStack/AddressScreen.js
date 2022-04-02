import React, { useState } from 'react';
import { TextInput, ScrollView, StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';

import {CheckSquare, Square, ChevronDown } from 'react-native-feather';

import ScreenHeader from '../../components/common/ScreenHeader';
import DoubleTopHeader from '../../components/common/DoubleTopHeader';

import { commonStyles, colors } from '../../assets/styles/common';
// import { reactNavigation } from '../../services/index';

import Button from '../../components/common/Button';

const AddressScreen = ({ navigation: { navigate } }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [defaultAddress, setDefaultAddress] = useState(false);

    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <ScreenHeader text="Address" />
                    <DoubleTopHeader text={'Add New Address'} />
                    <View
                        style={{
                            flex: 4,
                            marginTop: 20,
                            // marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            paddingTop: 20,
                            paddingBottom: 30,
                            paddingHorizontal: 20
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                width: '100%',
                                borderBottomWidth: 0.2,
                                marginVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500'}}>
                            Name*
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                width: '100%',
                                borderBottomWidth: 0.2,
                                marginVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500'}}>
                                Mobile*
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 4,
                            marginTop: 20,
                            // marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            paddingTop: 20,
                            paddingBottom: 30,
                            paddingHorizontal: 20
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                // paddingVertical: 10,
                                // width: '100%',
                                // borderBottomWidth: 0.2,
                                // marginVertical: 10,
                                flexDirection: 'row',
                                // justifyContent: 'space-between',
                                // alignItems: 'center'
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    paddingVertical: 10,
                                    width: '100%',
                                    borderBottomWidth: 0.2,
                                    marginVertical: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginRight: 20
                                }}
                            >
                                <Text style={{ fontSize: 16, fontWeight: '500'}}>
                                Pincode*
                                </Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    paddingVertical: 10,
                                    width: '100%',
                                    borderBottomWidth: 0.2,
                                    marginVertical: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ fontSize: 16, fontWeight: '500'}}>
                                State*
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                width: '100%',
                                borderBottomWidth: 0.2,
                                marginVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500'}}>
                            Address*
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                width: '100%',
                                borderBottomWidth: 0.2,
                                marginVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500'}}>
                            Locality/ Town*
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                width: '100%',
                                borderBottomWidth: 0.2,
                                marginVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500'}}>
                                City/ District*
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}
                        >
                            {defaultAddress?
                            <CheckSquare width={22} height={22} color={colors.richBlack} onPress={()=>setDefaultAddress(!defaultAddress)}/>:
                            <Square width={22} height={22} color={colors.richBlack} onPress={()=>setDefaultAddress(!defaultAddress)}/>
                            }
                            <Text style={{ fontSize: 14, color: colors.lightGray, fontWeight: '400', marginLeft: 10 }}>
                                Mark this as my default address
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ ...commonStyles.flexOne, ...commonStyles.marginTop40 }}>
                            <Button label={'Save'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AddressScreen;

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
