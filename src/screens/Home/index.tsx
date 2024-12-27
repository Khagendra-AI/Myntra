import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContinueBrowsing from '../../components/ContinueBrowsing';
import Header from '../../components/Header';
import styles from './styles';
import SlidingBanner from '../../components/SlidingBanner';
import ProductList from '../ProductList';
import FirstHFlatList from '../../components/FirstHFlatList';
import SecondHFlatList from '../../components/SecondHFlatList';


const Home = ({navigation}:{navigation:any}) => {
  const navigateToProfile = () => {
    navigation.navigate("Profile")
  };
  // const navigateToProductList=()=>{
  //   navigation.navigate("ProductList")
  // }
  return (
    <>
      <Header navigateToProfile={navigateToProfile}/>
      <ScrollView style={styles.container}>
        <FirstHFlatList/>
        <SecondHFlatList/>
        {/* <ProductList/> */}
        <ContinueBrowsing heading={'Joyful Savings To Bag'} />
        <ContinueBrowsing heading={'Major Steals For Your Spree'} />
        <ContinueBrowsing heading={'Major Steals For Your Spree'} />
        <ContinueBrowsing heading={'Major Steals For Your Spree'} />
        <SlidingBanner/>

      </ScrollView>
    </>
  );
};

export default Home;
