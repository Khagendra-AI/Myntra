import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles';
import { Icon, Images } from '../../assets';
import { useNavigation } from '@react-navigation/native';

const SecondHFlatList = () => {
  const data = [
    {
      id: 1,
      brand_name: "KURTA",
      image: Images.kurta
    },
    {
      id: 2,
      brand_name: "TOP",
      image:Images.top
    },
    {
      id: 3,
      brand_name: "LIPSTICK",
      image: Images.lipstick
    },
    {
      id: 4,
      brand_name: "GJEANS",
      image: Images.gjeans
    },
    {
      id: 5,
      brand_name: "T-SHIRT",
      image: Images.gtshirt
    },
    {
      id: 6,
      brand_name: "JACKET",
      image: Images.gjacket
    },
    {
      id: 7,
      brand_name: "WATCH",
      image:Images.watch
    }
  ];

  const navigation=useNavigation<any>();
  const navigateToProductList=(brand_name:any)=>{
    navigation.navigate("ProductList",{brand_name})
  }
  const Item = ({item}:{item:any}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={()=>navigateToProductList(item.brand_name)} activeOpacity={1}>
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
      keyExtractor={(item:any) => item.id}  
    />
  </View>
  )
}

export default SecondHFlatList

