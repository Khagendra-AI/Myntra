import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '../../assets'

const SecondaryHeader = ({headerText}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.leftView}>
      <Image
      style={styles.backImage}
      source={Icon.back}
      />
      <Image
       style={styles.backImage}
       source={Icon.home}
      />
      <View style={styles.leftSubView}>
        <Text style={styles.categoryText}>{headerText}</Text>
        {/* <Text style={styles.categorySubText}></Text> */}
      </View>
    </View>
    <View style={styles.rightView}>
      <Image
      source={Icon.share}
      style={styles.backImage}
      />
      <Image
      source={Icon.heart}
      style={styles.backImage}
      />
      <Image
      source={Icon.Bag}
      style={styles.backImage}
      />
    </View>
    </SafeAreaView>
  )
}

export default SecondaryHeader

