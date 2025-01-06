import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import TrendsCard from '../../components/TrendsCard'
import { Icon, Images } from '../../assets'

const Trends = ({navigation}:{navigation:any}) => {
  const navigateToProductList=(brand_name:any)=>{
    navigation.navigate("ProductList",{brand_name})
  }
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
        <View style={styles.leftHeader}>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Icon.back} style={styles.backImage} />
          </TouchableOpacity> */}
          <Text style={styles.shoppingText}>TRENDS</Text>
        </View>
        <View style={styles.rightHeader}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")} style={styles.searchtouch} activeOpacity={1}>
            <Image source={Icon.search} style={[styles.backImage,{tintColor:'black'}]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("WishList")} activeOpacity={1}>
            <Image source={Icon.heart} style={styles.backImage} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
      <TrendsCard heading={"#Jeans"} color={"#F5EFFF"} onProductsClick={()=>navigateToProductList("JEANS")} image={Images.gjeans}/>
      <TrendsCard heading={"#Kurtas"} color={"#FFF7D1"} onProductsClick={()=>navigateToProductList("KURTA")} image={Images.kurta}/>
      <TrendsCard heading={"#Jackets"} color={"#D4F6FF"} onProductsClick={()=>navigateToProductList("JACKET")} image={Images.jacket}/>
      <TrendsCard heading={"#Tops"} color={"#F5EDED"} onProductsClick={()=>navigateToProductList("TOP")} image={Images.top}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Trends

