import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from '../../assets'
import ProfileTile from '../../components/ProfileTile'
import LoginModal from '../../components/LoginModal'

const Profile = ({navigation}) => {
  

 
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
    <ScrollView>
    <View style={styles.topView}>
      <View style={styles.blackView}>

      </View>
      <View style={styles.profileImageView}>
        <Image
        source={Icon.profile2}
        style={styles.profileImage}
        />
      </View>
      <View style={styles.whiteView}>
     
      <TouchableOpacity style={styles.redView} onPress={()=>navigation.navigate("LoginPage")}>
        <Text style={styles.loginText}>LOG IN/SIGN UP</Text>
        
        </TouchableOpacity>
        
      </View>
      
        
      
    </View>
    <View style={styles.orderView}>
    <ProfileTile heading='Orders' subheading='Check your order status' image={Icon.order}/>
    <ProfileTile heading='Help Center' subheading='Help regarding your recent purchase' image={Icon.support}/>
    <ProfileTile heading='Wishlist' subheading='Your most loved styles' image={Icon.heart}/>
    </View>
    <View style={styles.couponView}>
    <ProfileTile heading='Scan for coupon' subheading='Show coupon' image={Icon.qr}/>
    </View>
    <View style={styles.FAQView}>
      <Text style={styles.FAQText}>FAQs</Text>
      <Text style={styles.FAQText}>ABOUT US</Text>
      <Text style={styles.FAQText}>TERMS OF USE</Text>
      <Text style={styles.FAQText}>PRIVACY POLICY</Text>
      <Text style={styles.FAQText}>GRIEVANCE OFFICER</Text>
    </View>
    </ScrollView>
    

    </SafeAreaView>
  )
}

export default Profile

