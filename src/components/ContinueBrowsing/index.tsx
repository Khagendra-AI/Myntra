import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';
import { Icon } from '../../assets';
import DealCard from '../DealCard';

const ContinueBrowsing = ({heading}:{heading:any}) => {
  const brands = [
    {
      id: 1,
      brand_name: "Apple",
      image: "https://example.com/images/apple-logo.png"
    },
    {
      id: 2,
      brand_name: "Samsung",
      image: "https://example.com/images/samsung-logo.png"
    },
    {
      id: 3,
      brand_name: "Nike",
      image: "https://example.com/images/nike-logo.png"
    },
    {
      id: 4,
      brand_name: "Adidas",
      image: "https://example.com/images/adidas-logo.png"
    }
  ];
  const renderItem = ({item,}: {item: any}) => {
    return (
     <DealCard/>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.textView}>
        <Text
          style={styles.headingText}>
          {heading}
        </Text>
        </View>
      </View>
      <FlatList
        horizontal
        bounces={false}
        data={brands}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ContinueBrowsing;
