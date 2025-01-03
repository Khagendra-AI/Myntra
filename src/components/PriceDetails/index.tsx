import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { useSelector } from 'react-redux';

const PriceDetails = () => {
  const {products, totalPrice,totaldiscountedPrice} = useSelector((store: any) => store.mainapi);
  const discount=totalPrice-totaldiscountedPrice
  console.log(totalPrice)
  return (
    <View style={styles.container}>
      <View style={styles.commonView}>
      <Text style={styles.priceText}>PRICE DETAILS</Text>
      </View>
      <View style={styles.hline}/>
      <View style={styles.commonView}>
        <Text style={styles.commonText}>Total MRP</Text>
        <Text style={styles.commonText}>${parseFloat(totalPrice).toFixed(2)}</Text>
      </View>
      <View style={styles.commonView}>
      <Text style={styles.commonText}>Discount on MRP</Text>
      <Text style={[styles.commonText,{color:'green'}]}>-${parseFloat(discount).toFixed(2)}</Text>
      </View>
      <View style={styles.commonView}>
      <Text style={styles.commonText}>Platform Fee</Text>
      <Text style={[styles.commonText,{color:'green'}]}>FREE</Text>
      </View>
      <View style={styles.commonView}>
      <Text style={styles.commonText}>Shipping Fee</Text>
      <Text style={[styles.commonText,{color:'green'}]}>FREE</Text>
      </View>
      <View style={styles.hline}/>
      <View style={styles.commonView}>
      <Text style={styles.totalAmount}>Total Amount</Text>
      <Text style={styles.totalAmount}>${parseFloat(totaldiscountedPrice).toFixed(2)}</Text>
      </View>
     
    </View>
  )
}

export default PriceDetails

