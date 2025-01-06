import {
  FlatList,
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon, Images} from '../../assets';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const FirstHFlatList = () => {
  const data = [
    {
      id: 1,
      brand_name: 'SHIRTS',
      image: Images.boy,
    },
    {
      id: 2,
      brand_name: 'JEANS',
      image: Images.jeans,
    },
    {
      id: 3,
      brand_name: 'BEDSHEET',
      image: Images.bedsheet,
    },
    {
      id: 4,
      brand_name: 'SHOES',
      image: Images.shoes,
    },
    {
      id: 5,
      brand_name: 'T-SHIRT',
      image: Images.tshirt,
    },
    {
      id: 6,
      brand_name: 'JACKET',
      image: Images.jacket,
    },
    {
      id: 7,
      brand_name: 'WATCH',
      image: Images.watch,
    },
  ];

  const navigation = useNavigation<any>();
  const navigateToProductList = (brand_name: any) => {
    navigation.navigate('ProductList', {brand_name});
  };

  const Item = ({item}: {item: any}) => (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.item}
      onPress={() => navigateToProductList(item.brand_name)}>
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
        keyExtractor={(item: any) => item.id}
        data={data}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

export default FirstHFlatList;
