import {SafeAreaView, ScrollView, StyleSheet, Text, View,Platform} from 'react-native';
import React from 'react';
import ContinueBrowsing from '../../components/ContinueBrowsing';
import Header from '../../components/Header';
import styles from './styles';
import FirstHFlatList from '../../components/FirstHFlatList';
import SecondHFlatList from '../../components/SecondHFlatList';
import Banner from '../../components/Banner';
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
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        navigateToSearch={navigateToSearch}
        navigateToProfile={navigateToProfile}
        navigateToWishList={navigateToWishList}
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
