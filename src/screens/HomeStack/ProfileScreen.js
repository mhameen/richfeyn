import React from 'react';
import { Image, ScrollView, StyleSheet, View, SafeAreaView, TextInput } from 'react-native';

import { commonStyles, colors } from '../../assets/styles/common';

import ScreenHeader from '../../components/common/ScreenHeader';
import Button from '../../components/common/Button';

const CustomTextInput = ({ label, maxLength, onChange, onBlur, customStyles }) => {
    return (
        <TextInput
            // value={'9029138947'}
            // onChange={onChange}
            // onBlur={onBlur}
            placeholder={label}
            maxLength={maxLength}
            style={{
                color: colors.richBlack,
                borderBottomColor: '#000',
                borderBottomWidth: 0.5,
                paddingBottom: 5,
                fontSize: 18,
                ...customStyles
            }}
        />
    );
};

const SearchScreen = () => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    {/* <TopBar name="Monica Gellar" /> */}
                    <ScreenHeader text="My Profile" />
                    <View style={{ ...commonStyles.flexOne, padding: 24 }}>
                        <View style={{ ...commonStyles.flexOne, flexDirection: 'row' }}>
                            <View style={commonStyles.flexHalf}>
                                <Image
                                    source={require('../../assets/images/pasta.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: 10,
                                        borderColor: colors.richBlack,
                                        borderWidth: 0.2
                                    }}
                                />
                            </View>
                            <View style={commonStyles.flexOne}>
                                <CustomTextInput label={'First Name'} customStyles={commonStyles.marginTop20} />
                                <CustomTextInput label={'Last Name'} customStyles={commonStyles.marginTop20} />
                            </View>
                        </View>
                        <View style={commonStyles.flexOne}>
                            <CustomTextInput label={'Phone No'} customStyles={commonStyles.marginTop40} />
                            <CustomTextInput label={'Date Of Birth'} customStyles={commonStyles.marginTop40} />
                            <CustomTextInput label={'Email'} customStyles={commonStyles.marginTop40} />
                            <CustomTextInput label={'Address'} customStyles={commonStyles.marginTop40} />
                            <CustomTextInput label={'Current City'} customStyles={commonStyles.marginTop40} />
                            <CustomTextInput label={'Language'} customStyles={commonStyles.marginTop40} />
                        </View>
                        <View style={{ ...commonStyles.flexOne, ...commonStyles.marginTop40 }}>
                            <Button label={'Save'} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;

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
