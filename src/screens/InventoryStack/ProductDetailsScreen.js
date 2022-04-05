import React, {useState} from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';

import SearchBar from '../../components/common/SearchBar';
import TopBar from '../../components/common/TopBar';
import InventoryRow from '../../components/common/InventoryRow';
import Button from '../../components/common/Button';
import { reactNavigation } from '../../services/index';

import { commonStyles, colors } from '../../assets/styles/common';
import ScreenHeader from '../../components/common/ScreenHeader';
import {CheckSquare, Square, ChevronDown } from 'react-native-feather';


const ProductDetailsScreen = () => {
    const [threshold, setThreshold] = useState(false)
    const [expiry, setExpiry] = useState(false)
    const [cart, setCart] = useState(false)
  return (
    <SafeAreaView style={commonStyles.safeArea}>
        <ScrollView
            style={commonStyles.container}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <ScreenHeader text="Product Details"/>
            <View style={styles.bgContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'black', fontWeight: '500', fontSize: 17}}>India Gate Basmati Rice Bag</Text>
                    <View style={{backgroundColor: '#629460', paddingVertical: 5, 
                                 paddingHorizontal: 10 ,flexDirection: 'row', marginLeft: 'auto', borderRadius: 3}}>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>Tracked</Text>
                    </View>
                </View>
                <View style={styles.imgBackground}>
                    <Image source={require('../../assets/images/basmati.png')}/>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 0.2, marginTop: 30, marginBottom: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start'}}>
                    <Text style={{fontWeight: '800', color: '#130F26', fontSize: 17}}>Threshold Quantity:</Text>
                    <Text style={{color: 'white', 
                                backgroundColor: 'black', 
                                paddingVertical: 5, 
                                paddingHorizontal: 10, fontSize: 17,
                                borderRadius: 5, marginLeft: 10}}>5</Text>
                    <Text style={{color: 'white', 
                                    backgroundColor: 'black', 
                                    paddingVertical: 5, 
                                    paddingHorizontal: 10, fontSize: 17, 
                                    borderRadius: 5, marginLeft: 10}}>kg</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                    {threshold?
                            <CheckSquare width={22} height={22} color={colors.richBlack} onPress={()=>setThreshold(!threshold)}/>:
                            <Square width={22} height={22} color={colors.richBlack} onPress={()=>setThreshold(!threshold)}/>
                    }
                    <Text style={{marginLeft: 10, color:'#000000', fontSize: 16}}>Auto add this threshold</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 0.2, marginTop: 30, marginBottom: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start'}}>
                    <Text style={{fontWeight: '800', color: '#130F26', fontSize: 17}}>Food expires in :</Text>
                    {/* <Text style={{color: 'white', 
                                backgroundColor: 'black', 
                                paddingVertical: 5, 
                                paddingHorizontal: 10, fontSize: 17,
                                borderRadius: 5, marginLeft: 10}}>5</Text> */}
                    <Text style={{color: 'white', 
                                    backgroundColor: 'black', 
                                    paddingVertical: 5, 
                                    paddingHorizontal: 10, fontSize: 17, 
                                    borderRadius: 5, marginLeft: 10}}>Days</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                    {threshold?
                            <CheckSquare width={22} height={22} color={colors.richBlack} onPress={()=>setExpiry(!expiry)}/>:
                            <Square width={22} height={22} color={colors.richBlack} onPress={()=>setExpiry(!expiry)}/>
                    }
                    <Text style={{marginLeft: 10, color:'#000000', fontSize: 16}}>Auto add this expiry</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 0.2, marginTop: 30, marginBottom: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start'}}>
                    <Text style={{fontWeight: '800', color: '#130F26', fontSize: 17}}>Add to Cart :</Text>
                    <Text style={{color: 'white', 
                                backgroundColor: 'black', 
                                paddingVertical: 5, 
                                paddingHorizontal: 10, fontSize: 17,
                                borderRadius: 5, marginLeft: 10}}>10</Text>
                    <Text style={{color: 'white', 
                                    backgroundColor: 'black', 
                                    paddingVertical: 5, 
                                    paddingHorizontal: 10, fontSize: 17, 
                                    borderRadius: 5, marginLeft: 10}}>kg</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                    {threshold?
                            <CheckSquare width={22} height={22} color={colors.richBlack} onPress={()=>setCart(!cart)}/>:
                            <Square width={22} height={22} color={colors.richBlack} onPress={()=>setCart(!cart)}/>
                    }
                    <Text style={{marginLeft: 10, color:'#000000', fontSize: 16}}>Auto add this quantity to cart</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 0.2, marginTop: 30, marginBottom: 15}}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start'}}>
                    <Text style={{fontWeight: '800', color: '#130F26', fontSize: 17}}>Price :</Text>
                    <Text style={{color: 'white', 
                                backgroundColor: 'black', 
                                paddingVertical: 5, 
                                paddingHorizontal: 10, fontSize: 17,
                                borderRadius: 5, marginLeft: 10}}>378</Text>
                </View>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 0.2, marginTop: 30, marginBottom: 15}}/>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: '#ffff',
        // alignItems: 'center'
    },
    imgBackground: {
        marginTop: 20,
        borderColor: '#000000',
        borderWidth: 0.3,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: 100,
        margin: 'auto',
        paddingVertical: 20,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})