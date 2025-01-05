import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Images } from '../../assets'

const TrendsCard = ({heading,color,onProductsClick,image}) => {
  return (
    <View style={[styles.container , {backgroundColor:color}]}>
      <Text style={styles.headingText}>{heading}</Text>
      <View style={styles.subcontainer}>
      <View style={styles.leftView}>
        <View style={styles.upperView}>
          <Image
          source={image}
          style={styles.leftImage}
          />
          <Image
          source={image}
          style={styles.leftImage}
          />
        </View>
        <View style={styles.lowerView}>
        <Image
          source={image}
          style={styles.leftImage}
          />
          <Image
          source={image}
          style={styles.leftImage}
          />
        </View>
      </View>
      <View style={styles.rightView}>
      <Image
          source={image}
          style={styles.rightImage}
          />
      </View>
      </View>
      <TouchableOpacity style={styles.viewall} onPress={onProductsClick}>
        <Text style={styles.viewText}>VIEW ALL PRODUCTS</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TrendsCard

