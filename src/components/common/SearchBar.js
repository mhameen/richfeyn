import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

import { colors } from '../../assets/styles/common';
import { Search } from 'react-native-feather';

const SearchTab = ({ placeholder }) => {
    return (
        <View style={styles.view}>
            <TextInput placeholder={placeholder} style={styles.textInput}></TextInput>
            <View style={styles.viewContainer}>
                <Search color={colors.richBlack} height="24" width="24" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        borderWidth: 1.2,
        borderColor: colors.borderColor,
        borderRadius: 20,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewContainer: { paddingRight: 20 },
    textInput: {
        width: '90%',
        height: 40,
        paddingLeft: 12,
        fontSize: 14
    }
});

export default SearchTab;
