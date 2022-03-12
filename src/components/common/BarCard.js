import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PieChart from 'react-native-pie-chart';
import { Edit2 } from 'react-native-feather';

import { commonStyles, colors } from '../../assets/styles/common';

const BarCard = ({ nutrient, target, series }) => {
    const widthAndHeight = 100;
    // const series = [123, 321];
    const sliceColor = [colors.white, colors.richBlack];
    return (
        <View style={styles.mainContainer}>
            <View style={{ ...commonStyles.row, justifyContent: 'flex-end' }}>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Edit2
                        color={colors.darkGray}
                        width={18}
                        backgroundColor={colors.darkGray}
                        fill={colors.darkGray}
                    />
                </View>
            </View>
            <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.8}
                coverFill={colors.counterGray}
            />
            <View style={{ ...styles.viewOne, marginTop: 20 }}>
                <Text style={styles.nutrient}>{nutrient}</Text>
                <Text style={styles.label}>{target}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 0.5,
        borderColor: colors.lightBorder,
        borderRadius: 14,
        backgroundColor: colors.counterGray,
        height: 190,
        padding: 12,
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        marginRight: 10
    },
    nutrient: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.gray
    },
    viewOne: {
        justifyContent: 'flex-end',
        flex: 1,
        alignItems: 'center'
    },
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: colors.gray
    }
});

export default BarCard;
