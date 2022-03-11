import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { colors } from '../../assets/styles/common';

// default color is black

const Button = ({ lable, containerStyle, textStyle, onPress }) => {
    return (
        <View style={{ ...styles.mainContainer, ...containerStyle }} onPress={onPress}>
            <Text style={{ ...styles.text, ...textStyle }}>{lable}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.richBlack,
        borderWidth: 0.2,
        borderColor: colors.richBlack,
        borderRadius: 6,
        alignItems: 'center',
        paddingVertical: 10
    },
    text: { color: colors.white, fontSize: 18 }
});

export default Button;
