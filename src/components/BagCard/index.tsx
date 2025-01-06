import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {
  removediscountedPrice,
  removeFromBag,
  removePrice,
} from '../../redux/config/configSlice';
import {useNavigation} from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';


interface BagCardProps {
  image: ImageSourcePropType;
  brandText: string;
  itemText: string;
  price: number;
  disPrice: number;
  infoText: string;
  id: string | number;
  item: any;
}



const BagCard: React.FC<BagCardProps> = ({
  image,
  brandText,
  itemText,
  price,
  disPrice,
  infoText,
  id,
  item,
},) => {
  const {products} = useSelector((store: any) => store.mainapi);
  const dispatch = useDispatch();
  console.log(id, 'idddd');
  const removeProduct = () => {
    (products ?? [])?.map((item: any, index: any) => {
      if (item.id === id) {
        dispatch(removeFromBag(index));
        dispatch(removediscountedPrice(disPrice));
        dispatch(removePrice(price));
      }
    });
  };

  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cancelView}
        onPress={removeProduct}
        activeOpacity={1}>
        <Image source={Icon.close} style={styles.closeImage} />
      </TouchableOpacity>
      <View style={styles.imageView}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails', {item})}>
          <Image source={image} style={styles.itemImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.dataView}>
        <Text style={styles.brandText}>{brandText}</Text>
        <Text style={styles.itemText}>{itemText}</Text>
        <Text style={styles.infoText}>{infoText}</Text>
        {/* <Text style={styles.quantityText}><Text>-</Text>  1<Text>  +</Text></Text> */}
        <Text style={styles.disPriceText}>
          $ {disPrice} <Text style={styles.priceText}>$ {price}</Text>
        </Text>
        <View style={styles.deliveryText}></View>
      </View>
    </View>
  );
};

export default BagCard;
