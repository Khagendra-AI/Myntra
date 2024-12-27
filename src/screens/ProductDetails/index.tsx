import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Header from '../../components/Header';
import {useRoute} from '@react-navigation/native';
import { Icon } from '../../assets';
import SecondaryHeader from '../../components/SecondaryHeader';
import Delivery from '../../components/Delivery';
import { useDispatch } from 'react-redux';
import { addToBag, addWatchlist } from '../../redux/config/configSlice';

const ProductDetails = () => {
  const dispatch=useDispatch()
  const route = useRoute();
  console.log('route', route.params.item);
  const onWishListPress=()=>{
    dispatch(addWatchlist(route.params.item))
  }
  const onBagPress=()=>{
    dispatch(addToBag(route.params.item))
  }

  return (
    <View style={styles.container}>
      <SecondaryHeader headerText={route.params.item.brand_name}/>
      <ScrollView style={styles.dataView}>
        <Image
        style={styles.mainImage}
        source={route.params.item.item_photo}
        />
        <View style={styles.dataTextView}>
          <Text  numberOfLines={1} style={styles.brandText}>{route.params.item.brand_name} <Text  style={styles.descriptionText}>{route.params.item.product_description}</Text></Text>
          <Text style={styles.productNameText}>{route.params.item.item_name}</Text>
          <Text style={styles.priceText}>MRP <Text style={{textDecorationLine:'line-through'}}>${route.params.item.price}</Text><Text style={styles.price}>${route.params.item.discounted_price}</Text></Text>
        </View>
        <Delivery/>
      </ScrollView>
      <View style={styles.footerView}>
        <TouchableOpacity style={styles.wishlistView} onPress={onWishListPress}>
          <Image
          source={Icon.heart}
          style={styles.heartImage}
          />
          <Text style={styles.wishlistText}>WishList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addbagView} onPress={onBagPress}>
        <Image
          source={Icon.Bag}
          style ={[styles.heartImage, {tintColor:'white'}]}
          />
          <Text style={styles.addbagText}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
