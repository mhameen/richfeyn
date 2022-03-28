import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors, commonStyles } from '../../assets/styles/common';

const DoubleTopHeader = ({ text = '' }) => {
    return (
        <View style={styles.view}>
            <View style={styles.mainRow}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginHorizontal: -40,
        borderTopWidth: 0.9,
        borderBottomWidth: 0.9,
        borderColor: colors.lightGray
    },
    mainRow: { flex: 1, paddingVertical: 10, marginHorizontal: 40 },
    text: { fontSize: 18, fontWeight: '400' }
});

export default DoubleTopHeader;
