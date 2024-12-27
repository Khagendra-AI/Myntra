import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '../../assets'

const DealCard = () => {
  return (
    <ImageBackground source={Icon.home} style={styles.container}>
      <View style={styles.dataView}>
        <View style={styles.imageView}>
        <Image
        style={styles.logo}
        source={Icon.pumalogo}
        />
        </View>
        <Text style={styles.topText}>MIN. 50%off</Text>
        <Text style={styles.midText}>+ Extra 5% Off</Text>
        <Text style={styles.botText}>Stylish Sneakers</Text>
      </View>
    </ImageBackground>
  )
}

export default DealCard

