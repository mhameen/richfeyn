import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { ArrowRightCircle } from 'react-native-feather';
import { colors, commonStyles, dimensions } from '../../assets/styles/common';

const RecipeCard = ({ title, nutrient, label }) => {
    return (
        <LinearGradient
            style={styles.mainContainer}
            colors={['#F1F6FA', '#E8F0F3', '#E8F0F3', '#CAD4DD', '#BEC5CC', '#BEC5CC']}
        >
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
                <Image
                    style={{ ...styles.image, overflow: 'visible' }}
                    source={require('../../assets/images/pasta.png')}
                />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        ...commonStyles.padding12,
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
