import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import { Icon, Images } from '../../assets';
import DealCard from '../DealCard';
import { useNavigation } from '@react-navigation/native';

const ContinueBrowsing = ({heading}:{heading:any}) => {
  const navigation=useNavigation();
  const navigateToProductList=(brand_name)=>{
    navigation.navigate("ProductList",{brand_name})
  }
  const brands = [
    {
      id: 1,
      brand_name: "SHOES",
      image: Images.banner1,
      logoimage:Icon.pumalogo,
      topText:"MIN. 50%off",
      midText:"+ Extra 5% Off",
      botText:"Stylish Sneakers",
    },
    {
      id: 2,
      brand_name: "JACKET",
      image: Images.banner2,
      logoimage:Icon.levislogo,
      topText:"MIN. 60%off",
      midText:"+ Extra 15% Off",
      botText:"Winter Collection",
    },
    {
      id: 3,
      brand_name: "SHOES",
      image: Images.banner3,
      logoimage:Icon.pumalogo,
      topText:"MIN. 40%off",
      midText:"+ Extra 10% Off",
      botText:"Stylish Footwear",
    },
    {
      id: 4,
      brand_name: "GJEANS",
      image: Images.banner4,
      logoimage:Icon.levislogo,
      topText:"MIN. 50%off",
      midText:"+ Extra 15% Off",
      botText:"Stylish Trousers",
    }
  ];
  const renderItem = ({item,}: {item: any}) => {
    return (
      <TouchableOpacity onPress={()=>navigateToProductList(item.brand_name) }activeOpacity={1}>
     <DealCard bgimage={item.image} logoimage={item.logoimage} topText={item.topText} midText={item.midText} botText={item.botText}/>
     </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.textView}>
        <Text
          style={styles.headingText}>
          {heading}
        </Text>
        </View>
      </View>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        data={brands}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ContinueBrowsing;
