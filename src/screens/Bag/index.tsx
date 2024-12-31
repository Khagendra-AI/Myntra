import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon, Images } from '../../assets'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import BagCard from '../../components/BagCard'
import PriceDetails from '../../components/PriceDetails'

const Bag = ({navigation}) => {
  const dispatch=useDispatch()
  
  const {products} = useSelector((store: any) => store.mainapi);
  console.log(products,"rd")
  const renderItem = ({item, index}: {item: any; index: any}) => (
    <BagCard
      image={item.item_photo}
      itemText={item.item_name}
      price={item.price}
      disPrice={item.discounted_price}
      brandText={item.brand_name}
      infoText={item.product_description}
      id={item.id}
     
    />
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
        <Text style={styles.shoppingText}>SHOPPING BAG</Text>
      </View>
      <View style={styles.rightHeader}>
        <TouchableOpacity onPress={()=>navigation.navigate("WishList")}>
        <Image
        source={Icon.heart}
        style={styles.backImage}
        />
        </TouchableOpacity>
      </View>
     </View>
     {products?.length ==0 ? <View style={styles.emptycartView}>
     <Image
     source={Images.emptycart}
     style={styles.emptycartImage}
     />
     <Text style={styles.headingEmpty}>Hey, it feels so light!</Text>
     <Text style={styles.subheadingEmpty}>There is nothing in your bag. Lets's add some items.</Text>
     </View> : 
     <ScrollView>
      <FlatList
        bounces={false}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <PriceDetails/>
      </ScrollView>
}

      
      
    </SafeAreaView>
  )
}

export default Bag

