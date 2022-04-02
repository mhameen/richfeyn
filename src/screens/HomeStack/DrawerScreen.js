import { Image, ScrollView, StyleSheet, View, SafeAreaView, Text, Modal, Pressable } from 'react-native';
import { commonStyles, colors } from '../../assets/styles/common';
import React, {useState} from 'react'
import { Bell, FileText, FolderMinus, LogOut, MapPin, User } from 'react-native-feather';

const DrawerScreen = ({ navigate, modalVisible, setModalVisible}) => {
    const [userName, setUserName] = useState('Monica Geller')
  return (
    <SafeAreaView style={[commonStyles.safeArea, {flexDirection:'row'}]}>
            <ScrollView
                style={styles.drawerContainer}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text>Hello</Text>
                        <Text style={styles.userName}>{userName}</Text>
                    </View>
                    <Image
                        style={styles.logoImage}
                        source={require('../../assets/images/logo.png')}
                        resizeMode="contain"
                    />
                </View>
                <Pressable style={styles.drawerItem} onPress={()=> navigate('ProfileScreen')}>
                    <User width={22} height={22} color={colors.richBlack} />
                    <Text style={styles.itemText}>My Profile</Text>
                </Pressable>
                <Pressable style={styles.drawerItem}>
                    <MapPin width={22} height={22} color={colors.richBlack} onPress={()=> navigate('DeliveryAddressScreen')}/>
                    <Text style={styles.itemText}>My Delivery Address</Text>
                </Pressable>
                <Pressable style={styles.drawerItem}>
                    <FileText width={22} height={22} color={colors.richBlack} onPress={()=> navigate('RetailerListScreen')}/>
                    <Text style={styles.itemText}>Retailer list</Text>
                </Pressable>
                <Pressable style={styles.drawerItem}>
                    <FolderMinus width={22} height={22} color={colors.richBlack} onPress={()=> navigate('ProfileScreen')}/>
                    <Text style={styles.itemText}>My Orders</Text>
                </Pressable>
                <Pressable style={styles.drawerItem}>
                    <Bell width={22} height={22} color={colors.richBlack} onPress={()=> navigate('NotificationScreen')}/>
                    <Text style={styles.itemText}>Notifications</Text>
                </Pressable>
                <Pressable style={styles.drawerItem}>
                    <User width={22} height={22} color={colors.richBlack} onPress={()=> navigate('WishListScreen')}/>
                    <Text style={styles.itemText}>My Whishlist</Text>
                </Pressable>
                <Pressable style={styles.drawerItem}>
                    <LogOut width={22} height={22} color={colors.richBlack} onPress={()=> navigate('ProfileScreen')}/>
                    <Text style={styles.itemText}>Logout</Text>
                </Pressable>
            </ScrollView>
            <Pressable style={{flex: 1}} onPress={()=> setModalVisible(false)}>
            </Pressable>
    </SafeAreaView>
  )
}

export default DrawerScreen

const styles = StyleSheet.create({
    drawerContainer: {
        // borderWidth: 1,
        // flex:4,
        width: '50%',
        backgroundColor: '#ffffff'
    },
    menuContainer:{
        borderWidth: 1,
        flex:1,
    },
    header: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical: '10%',
        paddingHorizontal: '5%'
    },
    logoImage: {
        width: 90,
        height: 90
    },
    userName: {
        fontWeight: 'bold'
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        paddingBottom: 10,
        paddingHorizontal: '5%',
        marginBottom: 15
    },
    itemText: {
        fontWeight: 'bold',
        marginLeft: 10
    }
})