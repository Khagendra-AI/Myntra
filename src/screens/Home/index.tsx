import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContinueBrowsing from '../../components/ContinueBrowsing';
import Header from '../../components/Header';
import styles from './styles';
import SlidingBanner from '../../components/SlidingBanner';
import ProductList from '../ProductList';
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

const Home = ({navigation}:{navigation:any}) => {

  const navigateToProfile = () => {
    navigation.navigate("Profile")
  };
  const navigateToWishList=()=>{
    navigation.navigate("WishList")
  }
  // const navigateToProductList=()=>{
  //   navigation.navigate("ProductList")
  // }
  return (
    <SafeAreaView style={{flex:1}}>
      <Header navigateToProfile={navigateToProfile} navigateToWishList={navigateToWishList}/>
      <ScrollView style={styles.container}>
        <FirstHFlatList/>
        <SecondHFlatList/>
        {/* <ProductList/> */}
        <Banner adData={data}/>
        <ContinueBrowsing heading={'Joyful Savings To Bag'} />
        
        <ContinueBrowsing heading={'Major Steals For Your Spree'} />
        <ContinueBrowsing heading={'Major Steals For Your Spree'} />
        <ContinueBrowsing heading={'Major Steals For Your Spree'} />
        <SlidingBanner/>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
