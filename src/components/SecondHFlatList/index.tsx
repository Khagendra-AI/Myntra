import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles';
import { Icon } from '../../assets';

const SecondHFlatList = () => {
  const data = [
    {
      id: 1,
      brand_name: "KURTAS",
      image: Icon.home
    },
    {
      id: 2,
      brand_name: "TOPS",
      image: Icon.home
    },
    {
      id: 3,
      brand_name: "LIPSTICK",
      image: Icon.home
    },
    {
      id: 4,
      brand_name: "JEANS",
      image: Icon.home
    },
    {
      id: 5,
      brand_name: "T-SHIRTS",
      image: Icon.home
    },
    {
      id: 6,
      brand_name: "JACKETS",
      image: Icon.home
    },
    {
      id: 7,
      brand_name: "WATCHES",
      image: Icon.home
    }
  ];
  const Item = ({item}:{item:any}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => console.log(item.id, 'idd')}>
        <View style={styles.imageView}>
      <Image source={item.image} style={styles.image} />
      </View>
      <Text>{item.brand_name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
      data={data}  
      renderItem={({item}) => (
        <Item
         item={item}
        />
      )}
      keyExtractor={item => item.id}  
    />
  </View>
  )
}

export default SecondHFlatList

