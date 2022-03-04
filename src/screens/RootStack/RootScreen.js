import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  Text,
  Pressable
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { widthToDP, heightToDP } from '../../services/utils';
import {reactNavigation} from '../../services/index';
const RootScreen = () => {
  return (
    <ScrollView>
        <StatusBar hidden />
        <ImageBackground source={require('../../assets/images/splashScreen/background.png')}
            style = {styles.container}
        >
            <View style={styles.logoBgContainer}>
                <Image source={require('../../assets/images/rootScreen/logo.png')}/>
                <Pressable style={styles.signUpButton}
                  onPress={()=>reactNavigation.navigate('SignUpScreen')}
                >
                  {({pressed})=><Text style={pressed?styles.activeText:styles.text}>Sign up</Text>}
                </Pressable>
                <Pressable style={styles.logInButton}
                  // onPress={()=>reactNavigation.navigate('LoginScreen')}
                  onPress={()=>reactNavigation.navigate('BottomTab')}
                >
                  {({pressed})=><Text style={pressed?styles.activeText:styles.text}>Login</Text>}
              </Pressable>
            </View>
        </ImageBackground>
    </ScrollView>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        height: heightToDP('100%'),
        width: widthToDP('100%'),
        justifyContent: 'center',
        alignItems:'center'
    },
    logoBgContainer:{
      // borderWidth: 2
    },
    signUpButton: {
      marginTop: heightToDP('23%'),
      borderRadius: widthToDP('2%'),
      justifyContent: 'center',
      alignItems:'center',
    },
    logInButton: {
      marginVertical: heightToDP('7%'),
      borderRadius: widthToDP('2%'),
      justifyContent: 'center',
      alignItems:'center'
    },
    text:{
      paddingVertical: heightToDP('1.5%'),
      paddingHorizontal: widthToDP('2%'),
      fontSize: widthToDP('6%'),
      color: '#000000',
      backgroundColor:'#ffffff',
      fontWeight: 'bold',
      alignSelf:'stretch',
      textAlign:'center',
      borderRadius: widthToDP('2%'),
    },
    activeText:{
      paddingVertical: heightToDP('1.5%'),
      paddingHorizontal: widthToDP('2%'),
      fontSize: widthToDP('6%'),
      color: '#ffffff',
      backgroundColor: '#000000',
      fontWeight: 'bold',
      alignSelf:'stretch',
      textAlign:'center',
      borderRadius: widthToDP('2%'),
    }
});