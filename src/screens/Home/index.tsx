import {SafeAreaView, ScrollView, StyleSheet, Text, View,Platform, PermissionsAndroid} from 'react-native';
import React from 'react';
import ContinueBrowsing from '../../components/ContinueBrowsing';
import Header from '../../components/Header';
import styles from './styles';
import FirstHFlatList from '../../components/FirstHFlatList';
import SecondHFlatList from '../../components/SecondHFlatList';
import Banner from '../../components/Banner';
import { launchCamera } from 'react-native-image-picker';
const data = [
  require('../../assets/images/banner1.png'),
  require('../../assets/images/banner2.png'),
  require('../../assets/images/banner3.png'),
  require('../../assets/images/banner4.png'),
  require('../../assets/images/banner5.png'),
];

const Home = ({navigation}: {navigation: any}) => {
  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };
  const navigateToWishList = () => {
    navigation.navigate('WishList');
  };
  const navigateToSearch = () => {
    navigation.navigate('Search');
  };
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'We need access to your camera to take photos.',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Camera permission granted');
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  const handleTakePhoto = async() => {

  await requestCameraPermission()
    launchCamera({ mediaType: 'photo', quality: 1 }, (response: any) => {
        console.log('launch camera',response);
        if (response.didCancel) {
          console.log('User canceled photo picker');
        } else if (response.errorCode) {
          console.log('Camera Error: ', response.errorMessage);
        } else if (response.assets && response.assets[0]) {
          console.log('Photo taken:', response.assets[0].uri);
        }
        if (response.assets && response.assets[0]) {

        }
    });
    
};
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        navigateToSearch={navigateToSearch}
        navigateToProfile={navigateToProfile}
        navigateToWishList={navigateToWishList}
        handleOpenCamera={handleTakePhoto}
      />
      <ScrollView style={styles.container} bounces={false} showsVerticalScrollIndicator={false}>
        <FirstHFlatList />
        <SecondHFlatList />
        {Platform.OS=='ios' ?
        <Banner adData={data} /> 
        : null
        }
        {/* <ProductList/> */}
        {/* <Banner adData={data} /> */}
        <ContinueBrowsing heading={'Add Joyful Savings To The Bag'} />

        <ContinueBrowsing heading={'Find Major Steals For Your Spree'} />
        <ContinueBrowsing heading={'Searching Festiv Bonanza...?'} />
        <ContinueBrowsing heading={'Major Discounts by Your Side Now'} />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
