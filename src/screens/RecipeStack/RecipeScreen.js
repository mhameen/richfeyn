import React from 'react';
import { ScrollView, View, SafeAreaView, Image, Text, StyleSheet } from 'react-native';

import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';

import { colors, commonStyles } from '../../assets/styles/common';

const RecipeImage = ({ imageSrc, label }) => {
    return (
        <View style={commonStyles.flexOne}>
            <View style={styles.scrollBox}>
                <Image style={{ width: '100%', height: '100%' }} source={imageSrc} resizeMode="contain" />
            </View>
            <View style={{ paddingTop: 8, alignItems: 'center' }}>
                <Text style={{ fontSize: 12, fontWeight: '600' }}>{label}</Text>
            </View>
        </View>
    );
};

const RecipeCard = () => {
    return (
        <View style={{ flex: 1, marginLeft: 10, marginBottom: 35 }}>
            <View style={styles.recipeMain}>
                <View style={{ top: -25, flex: 1 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            style={styles.recipeImage}
                            source={require('../../assets/images/recipe.png')}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ flex: 1.3, alignItems: 'center' }}>
                        <Text style={{ color: colors.richBlack, fontSize: 20 }}>Idli</Text>
                    </View>
                    <View style={{ flex: 0.9, flexDirection: 'row' }}>
                        <Text style={{ color: colors.darkGray, fontSize: 16 }}>Servings </Text>
                        <View style={commonStyles.jccaie}>
                            <Text style={styles.textServing}>5</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ color: colors.darkGray, fontSize: 16 }}>Cooking time</Text>
                        <View style={commonStyles.jccaie}>
                            <Text
                                style={{
                                    color: colors.richBlack,
                                    fontSize: 10
                                }}
                            >
                                30 mins
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};
const CartScreen = ({ navigation: { toggleDrawer } }) => {
    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <ScrollView
                style={commonStyles.container}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ ...commonStyles.flexOne, marginBottom: 60 }}>
                    <TopBar toggleDrawer={toggleDrawer} />
                    <SearchBar placeholder={'Search for items...'} />
                    <ScrollView horizontal style={{ ...commonStyles.flexOne, marginTop: 28 }}>
                        <RecipeImage imageSrc={require('../../assets/images/recipe.png')} label={'Breakfast'} />
                        <RecipeImage imageSrc={require('../../assets/images/recipe.png')} label={'Lunch'} />
                        <RecipeImage imageSrc={require('../../assets/images/recipe.png')} label={'Dinner'} />
                        <RecipeImage imageSrc={require('../../assets/images/recipe.png')} label={'Desserts'} />
                    </ScrollView>
                </View>
                <View style={commonStyles.row}>
                    <RecipeCard />
                    <RecipeCard />
                </View>
                <View style={commonStyles.row}>
                    <RecipeCard />
                    <RecipeCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollBox: {
        flex: 1,
        width: 90,
        height: 90,
        borderWidth: 0.2,
        borderRadius: 7,
        marginRight: 10
    },
    recipeMain: {
        flex: 1,
        height: 180,
        borderWidth: 0.2,
        borderRadius: 10,
        backgroundColor: colors.white,
        borderColor: colors.white,
        paddingHorizontal: 10
    },
    recipeImage: {
        width: 116,
        height: 116,
        borderRadius: 60,
        borderColor: colors.lightGray,
        borderWidth: 0.3
    },
    textServing: {
        color: colors.richBlack,
        fontSize: 14,
        alignSelf: 'flex-end',
        borderWidth: 0.2,
        padding: 2
    }
});
export default CartScreen;
