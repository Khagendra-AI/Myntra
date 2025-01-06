import {
  Alert,
  FlatList,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Icon, Images} from '../../assets';
import data from '../../../data';
import Header from '../../components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import SecondaryHeader from '../../components/SecondaryHeader';
import {useDispatch, useSelector} from 'react-redux';
import {addWatchlist, removeWatchlist} from '../../redux/config/configSlice';
const ProductList = () => {
  
  const {watchlistdata} = useSelector((store: any) => store.mainapi);
  const navigation = useNavigation<any>();
  const route = useRoute() as {
    params: any;
  };;
  const tag = route?.params?.brand_name;
  const handlenav = (item: any) => {
    navigation.navigate('ProductDetails', {item});
  };
  const navigateToWishList = () => {
    navigation.navigate('WishList');
  };
  const navigateToBag = () => {
    navigation.navigate('Bag');
  };
  const onBackClick = () => {
    navigation.goBack();
  };
  
  const [filteredItem, setFilteredItem] = useState([]);
  // console.log(filteredItem,"data")
  const onShare = async () => {
    try {
      const shareData = filteredItem
        .map((item:any) => `${item.brand_name}: ${item.item_name}\nPrice: $${item.discounted_price}`)
        .join('\n\n');
  
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
      Alert.alert(error.message);
    }
  };
  
  const fil = () => {
    let filtered: any = [];
    if (tag === 'SHIRTS') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'JEANS') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'BEDSHEET') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'SHOES') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'T-SHIRT') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'JACKET') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'WATCH') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'KURTA') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'TOP') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'LIPSTICK') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'GJEANS') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'JACKET') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    } else if (tag === 'WATCH') {
      filtered = data.filter(
        item => item.cat.toLowerCase() === tag.toLowerCase(),
      );
    }
    setFilteredItem(filtered);
  };

  useEffect(() => {
    fil();
  }, []);
  const dispatch = useDispatch();

  const onWishListPress = (item:any) => {
    if (watchlistdata.find((ele :any)=> ele.id === item.id)) {
      dispatch(removeWatchlist(item.id));
    } else {
      dispatch(addWatchlist(item));
    }
  };

  const Item = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handlenav(item)}
      activeOpacity={1}>
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
        <TouchableOpacity onPress={() => onWishListPress(item)}>
          <Image
            style={styles.heartImage}
            source={
              watchlistdata.find((ele :any)=> ele.id === item.id)
                ? Icon.favorite
                : Icon.heart
            }
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  return (
    <>
      <SecondaryHeader
      onShare={onShare}
        navigateToWishList={navigateToWishList}
        navigateToBag={navigateToBag}
        headerText={tag}
        onBackClick={onBackClick}
      />
      <View style={styles.container}>
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={filteredItem}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={(item:any) => item.id}
        />
      </View>
    </>
  );
};

export default ProductList;
