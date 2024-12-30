import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '../../assets'

const ProfileTile = ({heading,subheading,image}:{heading:string,subheading:string,image:any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <View style={styles.imageView}>
        <Image
        style={styles.mainImage}
        source={image}/>
        </View>
        <View style={styles.textView}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.subheading}>{subheading}</Text>
        </View>
      </View>
      <View style={styles.rightView}>
        <Image
        style={styles.arrowImage}
        source={Icon.next}/>
      </View>
      
    </View>
  )
}

export default ProfileTile

