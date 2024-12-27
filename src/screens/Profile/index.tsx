import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from '../../assets'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
    <View style={styles.subHeader}>
      <Image
      source={Icon.back}
      style={styles.backImage}
      />
      <Text style={styles.profileText}>Profile</Text>
    </View>
    </View>
    <View style={styles.topView}>
      <View style={styles.blackView}>

      </View>
      <View style={styles.whiteView}>
        
      <View style={styles.redView}>
        <Text style={styles.loginText}>LOG IN/SIGN UP</Text>
        
        </View>
      </View>
      <View style={styles.profileImageView}>
        
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Profile

