import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '../../assets'
import { useSelector } from 'react-redux'

const WishList = ({navigation}) => {
  const handlenav = item => {
    navigation.navigate('ProductDetails', {item});
  };
  const {products, totalPrice,totaldiscountedPrice,watchlistdata} = useSelector((store: any) => store.mainapi);
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
      <View style={styles.addBagView}>
        <Text style={styles.moveBagText}>MOVE TO BAG</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <View style={styles.leftHeader}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image
        source={Icon.back}
        style={styles.backImage}
        />
        </TouchableOpacity>
        <Text style={styles.shoppingText}>WishList</Text>
      </View>
      <View style={styles.rightHeader}>
      <TouchableOpacity onPress={()=>navigation.navigate("Bag")}>
        <Image
        source={Icon.Bag}
        style={styles.backImage}
        />
        </TouchableOpacity>
      </View>
     </View>
     {watchlistdata.length ==0 ? <View></View> :
     <View style={styles.upperFlatView}>
      <View style={styles.flatlistView}>
         <FlatList
          numColumns={2}
          data={watchlistdata}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      </View>
      }
    </SafeAreaView>
  )
}

export default WishList

