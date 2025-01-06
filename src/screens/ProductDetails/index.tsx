import {
  Alert,
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../components/Header';
import {useRoute} from '@react-navigation/native';
import {Icon} from '../../assets';
import SecondaryHeader from '../../components/SecondaryHeader';
import Delivery from '../../components/Delivery';
import {useDispatch, useSelector} from 'react-redux';
import {
  adddiscountedPrice,
  addPrice,
  addToBag,
  addWatchlist,
  removeWatchlist,
} from '../../redux/config/configSlice';

interface Product {
  id: string | number;
  brand_name: string;
  product_description: string;
  item_name: string;
  price: number;
  discounted_price: number;
  item_photo: any;  
}

interface ReduxState {
  mainapi: {
    products: Product[];
    totalPrice: number;
    totaldiscountedPrice: number;
    watchlistdata: Product[];
  };
}

const ProductDetails = ({navigation}: {navigation: any}) => {
  const [inbag, setinbag] = useState(false);
  const [starred, setstarred] = useState(false);
  const [mainindex, setmainindex] = useState(-1);
  const {products, totalPrice, totaldiscountedPrice, watchlistdata} =
    useSelector((store: any) => store.mainapi);
  const dispatch = useDispatch();
  const route = useRoute() as {
    params: {
      item: {
        id: string;
        price: number;
        discounted_price: number;
        brand_name: string;
        item_photo: any;
        product_description: string;
        item_name: string;
      };
    };
  };
  // console.log('route', route.params.item);
  // console.log(products[0],"what");
  const onWishListPress = () => {
    if (starred) {
      dispatch(removeWatchlist(route?.params?.item.id));
      setstarred(false);
      // checkWatchlist();
    } else {
      // console.log('route-->', route);
      dispatch(addWatchlist(route?.params?.item));
      setstarred(true);
      // checkWatchlist();
    }
  };
  const onBagPress = () => {
    if (inbag) {
      navigation.navigate('Bag');
    } else {
      dispatch(addPrice(route?.params?.item.price));
      dispatch(addToBag(route?.params?.item));
      dispatch(adddiscountedPrice(route?.params?.item.discounted_price));
      setinbag(true);
    }
  };
  const checkBag = () => {
    (products ?? [])?.map((item: any, index: any) => {
      // console.log(item, 'itemmmmm');
      if (item.id === route.params?.item?.id) {
        // console.log('yesss');
        setinbag(true);
      }
    });
  };
  const checkWatchlist = () => {
    (watchlistdata ?? [])?.map((item: any, index: any) => {
      if (item.id === route.params?.item?.id) {
        setstarred(true);
        // console.log(index, 'index');
        setmainindex(index);
      }
    });
  };
  useEffect(() => {
    checkBag();
    checkWatchlist();
    // console.log('ho gya run', totalPrice, totaldiscountedPrice);
  }, []);
  const navigateToWishList = () => {
    navigation.navigate('WishList');
  };
  const navigateToBag = () => {
    navigation.navigate('Bag');
  };
  const onBackClick = () => {
    navigation.goBack();
  };
  const onShare = async () => {
    try {
      
      const { item_name, brand_name, discounted_price, price } = route.params.item;
  
     
      const shareData = `${brand_name}: ${item_name}\nPrice: $${discounted_price}\nOriginal Price: $${price}`;
  
      
      const result = await Share.share({
        message: shareData, 
      });
  
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else {
        console.log('Share action was dismissed');
      }
    } catch (error:any) {
      Alert.alert('Error', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <SecondaryHeader
      onShare={onShare}
        headerText={route?.params?.item.brand_name}
        navigateToBag={navigateToBag}
        navigateToWishList={navigateToWishList}
        onBackClick={onBackClick}
      />
      <ScrollView style={styles.dataView} showsVerticalScrollIndicator={false}>
        <Image
          style={styles.mainImage}
          source={route?.params?.item.item_photo}
        />
        <View style={styles.dataTextView}>
          <Text numberOfLines={1} style={styles.brandText}>
            {route?.params?.item.brand_name}{' '}
            <Text style={styles.descriptionText}>
              {route?.params?.item.product_description}
            </Text>
          </Text>
          <Text style={styles.productNameText}>
            {route?.params?.item.item_name}
          </Text>
          <Text style={styles.priceText}>
            MRP{' '}
            <Text style={{textDecorationLine: 'line-through'}}>
              ${route?.params?.item.price}
            </Text>
            <Text style={styles.price}>
              ${route?.params?.item.discounted_price}
            </Text>
          </Text>
        </View>
        <Delivery />
      </ScrollView>
      <View style={styles.footerView}>
        <TouchableOpacity
          style={styles.wishlistView}
          onPress={onWishListPress}
          activeOpacity={1}>
          <Image
            source={starred ? Icon.favorite : Icon.heart}
            style={styles.heartImage}
          />
          <Text style={styles.wishlistText}>WishList</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addbagView}
          onPress={onBagPress}
          activeOpacity={1}>
          <Image
            source={Icon.Bag}
            style={[styles.heartImage, {tintColor: 'white'}]}
          />
          {inbag == true ? (
            <Text style={styles.addbagText}>Go to Bag</Text>
          ) : (
            <Text style={styles.addbagText}>Add to Bag</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
