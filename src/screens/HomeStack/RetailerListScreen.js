import React, { useState } from 'react';
import { TextInput, ScrollView, StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';

import {CheckSquare, Square, ChevronDown } from 'react-native-feather';

import ScreenHeader from '../../components/common/ScreenHeader';
import DoubleTopHeader from '../../components/common/DoubleTopHeader';

import { commonStyles, colors } from '../../assets/styles/common';
// import { reactNavigation } from '../../services/index';

import Button from '../../components/common/Button';

const RetailerListScreen = ({ navigation: { navigate } }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [defaultRetailer, setDefaultRetailer] = useState(false);

    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <ScreenHeader text="Retailer list" />
                    <DoubleTopHeader text={'Default Retailer'} />
                    <View
                        style={{
                            flex: 4,
                            // marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            borderBottomWidth: 0.9,
                            borderColor: colors.lightGray,
                            marginTop: 20,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 20,
                                // marginHorizontal: 40,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10
                            }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: '400'}}>
                                Dus Minute
                            </Text>
                            <Image style={styles.icon} source={require('../../assets/images/dus.png')} />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 4,
                            // marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            marginBottom: 20
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', flex: 1, borderRightWidth: 0.2, textAlign: 'center'}}>EDIT</Text>
                            {/* <View style={{ borderRightWidth: 0.2 }}></View> */}
                            <Text style={{ fontSize: 16, fontWeight: 'bold', flex: 1, textAlign: 'center'}}>REMOVE</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10 }}>
                        <DoubleTopHeader text={'Add Retailer'} />
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
                                paddingVertical: 10,
                                width: '100%',
                                borderBottomWidth: 0.2,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>
                                Retailer*
                            </Text>
                            <ChevronDown width={22} height={22} color={colors.richBlack} onPress={()=>setDefaultRetailer(!defaultRetailer)}/>
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
                            Retailer Email*
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
                                Retailer Mobile (Optional)*
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
                            {defaultRetailer?
                            <CheckSquare width={22} height={22} color={colors.richBlack} onPress={()=>setDefaultRetailer(!defaultRetailer)}/>:
                            <Square width={22} height={22} color={colors.richBlack} onPress={()=>setDefaultRetailer(!defaultRetailer)}/>
                            }
                            <Text style={{ fontSize: 14, color: colors.lightGray, fontWeight: '400', marginLeft: 10 }}>
                                Mark this as my default retailer
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

export default RetailerListScreen;

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
