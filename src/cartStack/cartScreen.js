import * as React from 'react';
import {useEffect, useState, useRef} from 'react';
import {
  Animated,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {widthToDP, heightToDP} from '../../services/utils';

const CartScreen = () => {

  return (
    <Text>CartScreen</Text>
  );
};

export default CartScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: heightToDP('20%'),
  },
  logo: {
    marginTop: -heightToDP('30%'),
    width: widthToDP('100%'),
    height: heightToDP('130%'),
  },
  footer: {
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    paddingTop: heightToDP('1%'),
    marginTop: heightToDP('50%'),
    paddingBottom: heightToDP('10%'),
  },
});
