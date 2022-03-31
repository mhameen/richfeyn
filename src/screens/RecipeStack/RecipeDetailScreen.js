import React from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView, Text, Image, FlatList } from 'react-native';

import { commonStyles, colors } from '../../assets/styles/common';

import ScreenHeader from '../../components/common/ScreenHeader';

const RecipeDetailScreen = () => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <View style={styles.itemCard}>
                        <ScreenHeader text="Recipe" />
                    </View>

                    <View style={{...styles.mainCard, ...commonStyles.marginTop20}}>
                        <View style={{paddingBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.flexContainer}>
                                <View style={styles.imgSection}>
                                    <Image style={styles.img} source={require('../../assets/images/tomatoes.png')} />
                                </View>
                                <View style={styles.headingSection}>
                                    <Text style={styles.itemName}>Idli</Text>
                                    <View style={styles.flexContainer}>
                                        <Text style={[styles.itemSubHeading, styles.imgSection]}>Number of Servings</Text>
                                        <Text style={styles.itemSubHeading}>5</Text>
                                    </View>
                                    <View style={styles.flexContainer}>
                                        <Text style={[styles.itemSubHeading, styles.imgSection]}>Time to cook</Text>
                                        <Text style={styles.itemSubHeading}>25 mins</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{paddingBottom: 20}}>
                            <Text style={styles.headContent}>Ingredients</Text>
                            <FlatList
                                data={[
                                    {key: '¼ cup urad dal '},
                                    {key: '¼ cup chana dal, roasted chana dal can also be used'},
                                    {key: '4 to 5 dry red chilies'},
                                    {key: '2 tablespoons white sesame seeds'},
                                    {key: '½ teaspoon asafoetida (hing)'},
                                    {key: '½ teaspoons oil – optional'},
                                    {key: '1 to 1.5 teaspoons salt or add as per taste'},
                                    {key: '2 sprigs curry leaves or 22 to 24 curry leaves'}
                                ]}
                                renderItem={({item}) => <Text style={styles.listItems}>{item.key}</Text>}
                            />
                        </View>
                        <View style={{paddingBottom: 20}}>
                            <Text style={styles.headContent}>Instructions</Text>
                            <FlatList
                                data={[
                                    {key: 'Keep all the spices and lentils ready before you begin. Take a heavy kadai or a pan and heat it. Keep the flame to a low. Add ¼ cup urad dal to the pan.'},
                                    {key: 'Keep on stirring often while roasting urad dal.'},
                                    {key: 'Roast till the urad dal becomes golden and you get a nice aroma of the roasted urad dal. Remove the roasted urad dal in a separate plate.'},
                                    {key: 'Then add ¼ cup chana dal to the same pan.'},
                                    {key: 'Keep on stirring often, while roasting chana dal.'},
                                    {key: 'Chana dal takes longer to roast. The chana dal should get browned or golden. For uniform cooking and color, keep on stirring them often.'},
                                    {key: 'Remove aside in the same plate.'},
                                    {key: 'Now take 2 tablespoons sesame seeds in the same pan.'},
                                    {key: 'Stirring often roast till the sesame seeds change color and start popping. keep them aside. In the same pan add ½ teaspoon oil. You can use sesame oil (gingelly oil which is made from raw sesame seeds).'},
                                    {key: 'Add 4 to 5 dry red chilies. Remove the crown from the red chilies, before roasting them. Break or halve the chilies and remove the seeds before roasting them.'},
                                    {key: 'Mix the red chilies with oil and roast them on lowest flame.'},
                                    {key: 'Roast the red chilies, stirring them till they change color and you can get their pungent smoky aroma.'},
                                    {key: 'Roast the red chilies, stirring them till they change color and you can get their pungent smoky aroma.'},
                                    {key: '22 to 24 curry leaves (2 sprigs) in the pan.'},
                                    {key: 'Stirring non stop, fry for a few seconds till the curry leaves become crisp. Switch off flame and add ½ teaspoon hing (asafoetida). mix well.'},
                                    {key: 'Then add 1 teaspoon salt. mix again.'},
                                    {key: 'Then add 2 teaspoon salt. mix again.'},
                                    {key: 'Take this spice mixture in the same plate. Let all the roasted spices cool down and come at room temperature.'}
                                ]}
                                renderItem={
                                    ({item, index}) => 
                                        <View style={{
                                            flexDirection: "row",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start"
                                        }}>
                                            <Text style={styles.listItemsCount}>{index+1}</Text>
                                            <Text style={styles.listItems}>{item.key}</Text>
                                        </View>
                                }
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
    mainCard: {
        ...commonStyles.padding12,
        flex: 1,
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        borderRadius: 8,
        backgroundColor: colors.white
    },
    
    itemCard: {
        ...commonStyles.row,
        ...commonStyles.marginTop10
    },

    flexContainer: {
        flexDirection: 'row'
    },

    imgSection: {
        flex: 1
    },

    img: {
        borderRadius: 60,
        overflow: 'hidden',
        width: 100,
        height: 100,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        elevation: 10
    },

    headingSection: {
        flex: 1.5
    },

    itemName: {
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 34,
        display: 'flex',
        alignItems: 'center',
        color: '#130F26'
    },

    itemSubHeading: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 22,
        display: 'flex',
        alignItems: 'center',
        color: '#5E5E5E',
        marginTop: 10
    },

    headContent: {
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 27,
        display: 'flex',
        alignItems: 'center',
        color: '#000000'
    },

    listItems: {
        fontFamily: 'Noto Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 23,
        display: 'flex',
        alignItems: 'flex-start',
        color: '#000000',
        marginBottom: 5
    },

    listItemsCount: {
        borderRadius: 60,
        overflow: 'hidden',
        width: 20,
        height: 20,
        color: '#ffffff',
        backgroundColor: '#130F26',
        textAlign: 'center',
        marginTop: 5,
        marginRight: 10
    }

});
