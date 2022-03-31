import React from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView, Text } from 'react-native';
import PieChart from 'react-native-pie-chart';

import { commonStyles, colors } from '../../assets/styles/common';

import ScreenHeader from '../../components/common/ScreenHeader';
import Button from '../../components/common/Button';

const DATAITEMS = [
    { value: 300, name: 'Carbohydrates', color: '#4CAF50' },
    { value: 150, name: 'Protiens', color: '#FFEB3B' },
    { value: 100, name: 'Calscium', color: '#FF9800' },
    { value: 80, name: 'Potassium', color: '#F44333' },
    { value: 50, name: 'Fat', color: '#2196F3' }
]

const NutritionChartScreen = () => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <View style={styles.itemCard}>
                        <ScreenHeader text="Nutrition Chart" />
                    </View>

                    <View style={{ ...commonStyles.row, ...commonStyles.marginTop20, justifyContent: 'space-between' }}>
                        <Button label={'Day'} containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }} />
                        <Button label={'Week'} containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }} />
                        <Button label={'Month'} containerStyle={{ paddingHorizontal: 20, borderRadius: 10 }} />
                    </View>
                    <View style={{...styles.mainCard, ...commonStyles.marginTop20}}>
                        <View style={{paddingBottom: 15, justifyContent: 'center', alignItems: 'center'}}>
                            <PieChart
                                widthAndHeight={220}
                                series={DATAITEMS.map((item, index) => item.value)}
                                sliceColor={DATAITEMS.map((item, index) => item.color)}
                                doughnut={true}
                                coverRadius={0.60}
                                coverFill={'#FFF'}
                                dataKey="value"
                            />
                        </View>
                        <View style={{paddingTop: 15, paddingBottom: 15}}>
                            { DATAITEMS.map((item, index) => {
                                return (
                                    <Text>
                                        <View style={{
                                            backgroundColor: `${item.color}`, 
                                            width: 15, 
                                            height: 15, 
                                            borderRadius: 5
                                        }}></View>
                                        &nbsp; {item.name}
                                    </Text>)
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NutritionChartScreen;

const styles = StyleSheet.create({
    mainCard: {
        ...commonStyles.padding12,
        flex: 1,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        borderRadius: 8,
        backgroundColor: colors.white
    },
    inventoryImage: {
        width: '100%',
        height: '100%',
        overflow: 'visible',
        justifyContent: 'flex-end'
    },
    midCard: {
        flex: 1,
        height: 32,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 0.2,
        backgroundColor: colors.darkGray
    },
    itemCard: {
        ...commonStyles.row,
        ...commonStyles.marginTop10,
        justifyContent: 'space-between',
        alignContent: 'space-between'
    }
});
