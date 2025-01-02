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
  const navigateToWishList=()=>{
    navigation.navigate("WishList")
  }
  const navigateToBag=()=>{
    navigation.navigate("Bag")
  }

  const[filteredItem,setFilteredItem]=useState([]);

  const fil=()=>{
    let filtered=[];
      if(tag==='SHIRTS'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='JEANS'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='BEDSHEET'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='SHOES'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='T-SHIRT'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='JACKET'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='WATCH'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='KURTA'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='TOP'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='LIPSTICK'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='GJEANS'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='JACKET'){
        filtered=data.filter(item=>item.cat.toLowerCase()===tag.toLowerCase());
      }
      else if(tag==='WATCH'){
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
    <SecondaryHeader navigateToWishList={navigateToWishList} navigateToBag={navigateToBag} headerText={tag}/>
      <View style={styles.container}>
        <FlatList
        bounces={false}
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
