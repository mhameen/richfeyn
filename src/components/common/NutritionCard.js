import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors, commonStyles, dimensions } from '../../assets/styles/common';

const NutritionCard = ({ title, nutrient, label }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={commonStyles.flexOne}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.viewOne}>
                <Text style={styles.nutrient}>{nutrient}</Text>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        ...commonStyles.paddingCards,
        borderWidth: 0.5,
        borderColor: colors.lightBorder,
        borderRadius: 8,
        height: dimensions.cardHeight,
        padding: 10,
        marginTop: 20,
        backgroundColor: colors.white
    },
    titleText: {
        fontSize: 23,
        fontWeight: '400'
    },
    viewOne: {
        justifyContent: 'flex-end',
        flex: 1,
        alignItems: 'center'
    },
    nutrient: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.gray
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.gray
    }
});

export default NutritionCard;
