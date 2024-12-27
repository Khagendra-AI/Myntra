import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from '../../assets';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const FirstHFlatList = () => {
  const data = [
    {
      id: 1,
      brand_name: 'SHIRTS',
      image: Icon.home,
    },
    {
      id: 2,
      brand_name: 'JEANS',
      image: Icon.home,
    },
    {
      id: 3,
      brand_name: 'BEDSHEET',
      image: Icon.home,
    },
    {
      id: 4,
      brand_name: 'SHOES',
      image: Icon.home,
    },
    {
      id: 5,
      brand_name: 'T-SHIRTS',
      image: Icon.home,
    },
    {
      id: 6,
      brand_name: 'JACKETS',
      image: Icon.home,
    },
    {
      id: 7,
      brand_name: 'WATCHES',
      image: Icon.home,
    },
  ];

  const navigation=useNavigation();
  const navigateToProductList=(brand_name)=>{
    navigation.navigate("ProductList",{brand_name})
  }

  const Item = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={()=>navigateToProductList(item.brand_name)}>
      <View style={styles.imageView}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text>{item.brand_name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FirstHFlatList;
