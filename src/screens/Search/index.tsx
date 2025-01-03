import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {useSelector} from 'react-redux';

import {Icon} from '../../assets';
import data from '../../../data';
import styles from './styles';

const Search = ({
  index,
  navigateMainCrypto,
  navigation,
}: {
  index: any;
  navigateMainCrypto: any;
  navigation: any;
}) => {
  const handlenav = (item: any) => {
    navigation.navigate('ProductDetails', {item});
  };
  const {products} = useSelector((store: any) => store.mainapi);
  const [searchQuery, setSearchQuery] = useState('');
  const filtereddata = () => {
    if (!(searchQuery.length > 2)) {
      return [];
    } else {
      return data.filter(
        (item: any) =>
          item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.brand_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.cat.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
  };
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
  // console.log(filteredCoins);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{width: '80%'}}>
          <TextInput
            placeholder="Search for products"
            style={styles.searchbox}
            autoFocus={true}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity
            style={styles.touchableCancelImage}
            onPress={() => setSearchQuery('')}>
            <Image source={Icon.close} style={styles.cancelImage} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.touchableCancel}
          onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.trendingView}>
        <View>
          <Text style={styles.trendingText}>Trending Now</Text>
        </View>
        <View style={styles.trendingSubView}>
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('Jeans')}>
            <Text style={styles.trendingEleText}>Jeans</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('Watch')}>
            <Text style={styles.trendingEleText}>Watch</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('UrbanStyle')}>
            <Text style={styles.trendingEleText}>UrbanStyle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('Bedsheet')}>
            <Text style={styles.trendingEleText}>Bedsheet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.trendingTextView}
            onPress={() => setSearchQuery('Kurta')}>
            <Text style={styles.trendingEleText}>Kurta</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flatlistView}>
        <FlatList
          bounces={false}
          numColumns={2}
          data={filtereddata()}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
