import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChart from 'react-native-pie-chart';
import LinearGradient from 'react-native-linear-gradient';

import { colors, commonStyles, dimensions } from '../../assets/styles/common';

const widthAndHeight = 100;
// const series = [123, 321];
const sliceColor = [colors.richBlack, colors.white];

const NutritionCard = ({ title, nutrient, label }) => {
    const series = [90, 10];
    return (
        <LinearGradient
            style={styles.mainContainer}
            colors={['#F1F6FA', '#E8F0F3', '#E8F0F3', '#CAD4DD', '#BEC5CC', '#BEC5CC']}
        >
            <View style={commonStyles.flexOne}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={commonStyles.flexOneCenter}>
                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    doughnut={true}
                    coverRadius={0.8}
                    coverFill={'#E8F0F3'}
                    style={{ opacity: 0.7 }}
                />
            </View>
            <View style={styles.viewOne}>
                <Text style={styles.nutrient}>{nutrient}</Text>
                <Text style={styles.label}>{label}</Text>
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
