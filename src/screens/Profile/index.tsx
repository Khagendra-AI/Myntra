import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from '../../assets';
import ProfileTile from '../../components/ProfileTile';
import LoginModal from '../../components/LoginModal';
import {useDispatch, useSelector} from 'react-redux';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {removeLoginToken, removeUserData} from '../../redux/config/configSlice';
const Profile = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const {
    token,
    products,
    watchlistdata,
    userDetail,
    totalPrice,
    totaldiscountedPrice,
  } = useSelector((store: any) => store.mainapi);
  console.log(userDetail, 'gdsxzv');
  const handleLogout = async () => {
    try {
      await auth().signOut();
      dispatch(removeLoginToken(''));
      Alert.alert('Success', 'You have logged out successfully!');
      // console.log(watchlistdata,"////fuiwgevcawqy")
      const userId = token;
      const usersRef = firebase.firestore().collection('users');
      usersRef
        .doc(userId)
        .set(
          {
            favourites: watchlistdata || [],
            cart: products || [],
            disprice: totaldiscountedPrice,
            price: totalPrice,
          },
          {merge: true},
        )
        .then(() => {
          console.log('Data saved');
        })
        .catch(error => {
          console.error('Error saving data:', error);
        });
      dispatch(removeUserData(''));

      navigation.reset({
        index: 0,
        routes: [{name: 'BottomNav'}],
      });
    } catch (error) {
      Alert.alert('Error', 'There was a problem logging out.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Image source={Icon.back} style={styles.backImage} />
          </TouchableOpacity>
          <Text style={styles.profileText}>Profile</Text>
        </View>
      </View>
      {!token ? (
        <ScrollView>
          <View style={styles.topView}>
            <View style={styles.blackView}></View>
            <View style={styles.profileImageView}>
              <Image source={Icon.profile2} style={styles.profileImage} />
            </View>
            <View style={styles.whiteView}>
              <TouchableOpacity
                style={styles.redView}
                onPress={() => navigation.navigate('LoginPage')}>
                <Text style={styles.loginText}>LOG IN/SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.orderView}>
            <ProfileTile
              heading="Orders"
              subheading="Check your order status"
              image={Icon.order}
            />
            <ProfileTile
              heading="Help Center"
              subheading="Help regarding your recent purchase"
              image={Icon.support}
            />
            <ProfileTile
              heading="Wishlist"
              subheading="Your most loved styles"
              image={Icon.heart}
            />
          </View>
          <View style={styles.couponView}>
            <ProfileTile
              heading="Scan for coupon"
              subheading="Show coupon"
              image={Icon.qr}
            />
          </View>
          <View style={styles.FAQView}>
            <Text style={styles.FAQText}>FAQs</Text>
            <Text style={styles.FAQText}>ABOUT US</Text>
            <Text style={styles.FAQText}>TERMS OF USE</Text>
            <Text style={styles.FAQText}>PRIVACY POLICY</Text>
            <Text style={styles.FAQText}>GRIEVANCE OFFICER</Text>
          </View>
        </ScrollView>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.infoView}>
            <Image source={Icon.profile2} style={styles.profileImage} />
            <Text style={styles.nameText}>{userDetail.name}</Text>
            <Text style={styles.numberText}>{userDetail.phone}</Text>
            <Text style={styles.mailText}>{userDetail.email}</Text>
          </View>
          <View style={styles.accountView}>
            <Text style={styles.accountText}>Account Information</Text>
            <Text style={styles.accountsubText}>
              Find all yout profile related information
            </Text>
          </View>
          <View style={styles.accountTiles}>
            <ProfileTile
              heading={'Payments & Currencies'}
              image={Icon.camera}
              subheading="View balance and saved payment methods"
            />
            <ProfileTile
              heading={'Earn & Redeem'}
              image={Icon.camera}
              subheading="Scan coupons, view prizes and earn rewards"
            />
            <ProfileTile
              heading={'Manage Account'}
              subheading="Your account details & saved addresses"
              image={Icon.camera}
            />
            <ProfileTile
              heading={'Wishlist'}
              subheading="Your most loved styles"
              image={Icon.camera}
            />
            <ProfileTile
              heading={'Myntra Suggests'}
              subheading="100% personalized"
              image={Icon.camera}
            />
            <ProfileTile
              heading={'Settings'}
              subheading=""
              image={Icon.camera}
            />
          </View>
          <View style={styles.FAQView}>
            <Text style={styles.FAQText}>FAQs</Text>
            <Text style={styles.FAQText}>ABOUT US</Text>
            <Text style={styles.FAQText}>TERMS OF USE</Text>
            <Text style={styles.FAQText}>PRIVACY POLICY</Text>
            <Text style={styles.FAQText}>GRIEVANCE OFFICER</Text>
          </View>
          <TouchableOpacity
            style={styles.touchableLogout}
            onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Profile;
