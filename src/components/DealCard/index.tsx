import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '../../assets'

const DealCard = ({bgimage,logoimage,topText,midText,botText}) => {
  return (
    <ImageBackground source={bgimage} imageStyle={styles.bgimage} resizeMode='stretch' style={styles.container}>
      <View style={styles.dataView}>
        <View style={styles.imageView}>
        <Image
        style={styles.logo}
        source={logoimage}
        />
        </View>
        <Text style={styles.topText}>{topText}</Text>
        <Text style={styles.midText}>{midText}</Text>
        <Text style={styles.botText}>{botText}</Text>
      </View>
    </ImageBackground>
  )
}

export default DealCard

