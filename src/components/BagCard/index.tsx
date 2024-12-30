import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '../../assets'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBag } from '../../redux/config/configSlice'

const BagCard = ({image,brandText,itemText,price,disPrice,infoText,id}) => {
  const {products} = useSelector((store: any) => store.mainapi);
  const dispatch=useDispatch()
  console.log(id,'idddd')
  const removeProduct=()=>{
    (products ?? [])?.map((item: any, index: any) => {
      if (item.id === id ) {
        dispatch(removeFromBag(index))
      }
    });
    
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cancelView} onPress={removeProduct}>
      <Image
      source={Icon.close}
      style={styles.closeImage}
      />
      </TouchableOpacity>
      <View style={styles.imageView}>
      <Image
      source={image}
      style={styles.itemImage}
      />
      </View>
      <View style={styles.dataView}>
        <Text style={styles.brandText}>{brandText}</Text>
        <Text style={styles.itemText}>{itemText}</Text>
        <Text style={styles.infoText}>{infoText}</Text>
       {/* <Text style={styles.quantityText}><Text>-</Text>  1<Text>  +</Text></Text> */}
        <Text style={styles.disPriceText}>$ {disPrice}  <Text style={styles.priceText}>$ {price}</Text></Text>
        <View style={styles.deliveryText}></View>

      </View>
    </View>
  )
}

export default BagCard

