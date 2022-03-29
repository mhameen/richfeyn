import React, { useState } from 'react';
import { TextInput, ScrollView, StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { Bell, PlusCircle } from 'react-native-feather';

import CartRow from '../../components/common/CartRow';
import NutritionCard from '../../components/common/NutritionCard';
import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';
import ScreenHeader from '../../components/common/ScreenHeader';
import DoubleTopHeader from '../../components/common/DoubleTopHeader';

import { commonStyles, colors } from '../../assets/styles/common';
import { reactNavigation } from '../../services/index';

import RecipeCard from '../../components/common/RecipeCard';
import Button from '../../components/common/Button';

const NotificationScreen = ({ navigation: { navigate } }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <ScreenHeader text="Notifications" />
                    <DoubleTopHeader text={'Default Notifications'} />
                    <View
                        style={{
                            flex: 4,
                            marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            borderBottomWidth: 0.9,
                            borderColor: colors.lightGray,
                            marginTop: 20
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 20,
                                marginHorizontal: 40,
                                flexDirection: 'row'
                            }}
                        >
                            <Bell width={22} height={22} color={colors.richBlack} />
                            <Text style={{ fontSize: 18, fontWeight: '400', marginLeft: 10 }}>
                                Receive notifications all time
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 4,
                            marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            marginBottom: 20
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>EDIT</Text>
                            <View style={{ borderRightWidth: 0.2 }}></View>
                            <Text style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>REMOVE</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <DoubleTopHeader text={'Set Notifications'} />
                    </View>
                    <View
                        style={{
                            flex: 4,
                            marginTop: 20,
                            marginHorizontal: -40,
                            backgroundColor: colors.borderColor,
                            paddingTop: 20,
                            paddingBottom: 30
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                paddingHorizontal: 40,
                                width: '100%'
                            }}
                        >
                            {/* <TextInput
                                style={{ fontSize: 16, fontWeight: '500', borderBottomWidth: 0.2, paddingBottom: 8 }}
                                placeholder="Number of times"
                            /> */}
                            <Picker
                                label="Number of times"
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                            >
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                paddingHorizontal: 40,
                                width: '100%'
                            }}
                        >
                            <TextInput
                                style={{ fontSize: 16, fontWeight: '500', borderBottomWidth: 0.2, paddingBottom: 8 }}
                                placeholder="Day"
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                paddingHorizontal: 40,
                                width: '100%'
                            }}
                        >
                            <TextInput
                                style={{ fontSize: 16, fontWeight: '500', borderBottomWidth: 0.2, paddingBottom: 8 }}
                                placeholder="Time"
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 10,
                                paddingHorizontal: 40,
                                width: '100%'
                            }}
                        >
                            <Text style={{ fontSize: 14, color: colors.lightGray, fontWeight: '400' }}>
                                Mark this as my default notification
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

export default NotificationScreen;

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
