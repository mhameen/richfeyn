import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors, commonStyles } from '../../assets/styles/common';
import { ArrowLeft } from 'react-native-feather';

import { reactNavigation } from '../../services';

const ScreenHeader = ({ text = '' }) => {
    return (
        <View style={styles.view}>
            <TouchableOpacity
                style={commonStyles.paddingB10}
                onPress={() => {
                    reactNavigation.goBack();
                }}
            >
                <ArrowLeft color={colors.richBlack} height="26" width="26" />
            </TouchableOpacity>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        ...commonStyles.row,
        alignItems: 'center',
        paddingBottom: 16
    },
    text: { fontSize: 28, color: colors.richBlack }
});

export default ScreenHeader;
