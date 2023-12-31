import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../../assets/styles/common';
import { Search } from 'react-native-feather';

const SearchTab = ({ placeholder, onPress, onTextChange, textValue }) => {
    return (
        <View style={styles.view}>
            <TextInput
                placeholder={placeholder}
                style={styles.textInput}
                value={textValue}
                onChangeText={(value) => {
                    onTextChange(value);
                }}
            ></TextInput>
            <TouchableOpacity style={styles.viewContainer} onPress={onPress}>
                <Search color={colors.richBlack} height="24" width="24" />
            </TouchableOpacity>
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
