import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon, Images } from '../../assets'
import { SafeAreaView } from 'react-native-safe-area-context'

const Bag = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
      <View style={styles.leftHeader}>
        <Image
        source={Icon.back}
        style={styles.backImage}
        />
        <Text style={styles.shoppingText}>SHOPPING BAG</Text>
      </View>
      <View style={styles.rightHeader}>
        <Image
        source={Icon.heart}
        style={styles.backImage}
        />
      </View>
     </View>
     <View style={styles.emptycartView}>
     <Image
     source={Images.emptycart}
     style={styles.emptycartImage}
     />
     <Text style={styles.headingEmpty}>Hey, it feels so light!</Text>
     <Text style={styles.subheadingEmpty}>There is nothing in your bag. Lets's add some items.</Text>
     </View>
    </SafeAreaView>
  )
}

export default Bag

