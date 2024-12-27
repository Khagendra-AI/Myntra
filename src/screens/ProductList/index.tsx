import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import {Icon, Images} from '../../assets';
import data from '../../../data';
import Header from '../../components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import SecondaryHeader from '../../components/SecondaryHeader';
const ProductList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const tag=route.params.brand_name;
  const handlenav = item => {
    navigation.navigate('ProductDetails', {item});
  };

  const[filteredItem,setFilteredItem]=useState([]);

  const fil=()=>{
    let filtered=[];
      if(tag==='SHIRTS'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='JEANS'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
    setFilteredItem(filtered);
  }

  useEffect(()=>{
    fil();
  },[])


  const Item = ({item}: {item: any}) => (
    <TouchableOpacity style={styles.item} onPress={() => handlenav(item)}>
      <Image source={item.item_photo} style={styles.image} />
      <View style={styles.infoView}>
        <View>
          <Text style={styles.name}>{item.brand_name}</Text>
          <Text style={styles.brand}>{item.item_name}</Text>
          <View style={styles.priceView}>
            <Text style={styles.priceBefore}>${item.price}</Text>
            <Text style={styles.price}>${item.discounted_price}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => console.log(item.id, 'idd heart')}>
          <Image style={styles.heartImage} source={Icon.heart} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
    <SecondaryHeader/>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={filteredItem}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default ProductList;
