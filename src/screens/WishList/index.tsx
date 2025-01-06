import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {Icon, Images} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {
  adddiscountedPrice,
  addPrice,
  addToBag,
  removeWatchlist,
} from '../../redux/config/configSlice';

const WishList = ({navigation}:{navigation:any}) => {
  const dispatch = useDispatch();
  const handlenav = (item:any) => {
    navigation.navigate('ProductDetails', {item});
  };
  const {products, totalPrice, totaldiscountedPrice, watchlistdata} =
    useSelector((store: any) => store.mainapi);
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
      </View>
      <TouchableOpacity
        style={styles.addBagView}
        onPress={() => movetobagPress(item)}>
        <Text style={styles.moveBagText}>MOVE TO BAG</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  const movetobagPress = (item:any) => {
    let inbag = false;
    (products ?? [])?.map((it: any, index: any) => {
      if (it.id === item.id) {
        inbag = true;
        dispatch(removeWatchlist(item.id));
      }
    });
    if (!inbag) {
      dispatch(addPrice(item.price));
      dispatch(addToBag(item));
      dispatch(adddiscountedPrice(item.discounted_price));
      dispatch(removeWatchlist(item.id));
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={1}>
            <Image source={Icon.back} style={styles.backImage} />
          </TouchableOpacity>
          <Text style={styles.shoppingText}>WishList</Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Bag')} activeOpacity={1}>
            <Image source={Icon.Bag} style={styles.backImage} />
          </TouchableOpacity>
        </View>
      </View>
      {watchlistdata?.length == 0 ? (
        <View style={styles.emptycartView}>
          <Image source={Images.emptylist} style={styles.emptycartImage} />
          <Text style={styles.headingEmpty}>Hey, it feels so light!</Text>
          <Text style={styles.subheadingEmpty}>
            There is nothing in your WishList. Lets's add some items.
          </Text>
        </View>
      ) : (
        <View style={styles.upperFlatView}>
          <View style={styles.flatlistView}>
            <FlatList
            
              bounces={false}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={watchlistdata}
              renderItem={({item}) => <Item item={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default WishList;
