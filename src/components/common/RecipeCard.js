import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { ArrowRightCircle } from 'react-native-feather';
import { colors, commonStyles, dimensions } from '../../assets/styles/common';

const RecipeCard = ({ title, nutrient, label }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={commonStyles.row}>
                <View style={commonStyles.flexThree}>
                    <Text style={styles.label}>Recipes</Text>
                    <Text style={styles.itemText}>Italian Pasta</Text>
                </View>
                <View style={commonStyles.flexOne}>
                    <ArrowRightCircle color={colors.richBlack} />
                </View>
            </View>
            <View style={commonStyles.flexOne}>
                <Image style={styles.image} source={require('../../assets/images/homeScreen/pasta.png')} />
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
        marginTop: 20,
        flex: 1,
        backgroundColor: colors.white
    },
    itemText: { color: colors.lightGray, marginTop: 6 },
    label: {
        fontSize: 23,
        fontWeight: '400'
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default RecipeCard;
