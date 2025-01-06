import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon, Images} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import BagCard from '../../components/BagCard';
import PriceDetails from '../../components/PriceDetails';
import RazorpayCheckout from 'react-native-razorpay';
import { emptyBag, removeFromBag } from '../../redux/config/configSlice';
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const Bag = ({navigation}) => {
  const dispatch = useDispatch();

  const {token,
    products,
    watchlistdata,
    userDetail,
    totalPrice,
    totaldiscountedPrice,} = useSelector((store: any) => store.mainapi);
  // console.log(token, 'rd');
  const renderItem = ({item, index}: {item: any; index: any}) => (
    <BagCard
    item={item}
      image={item.item_photo}
      itemText={item.item_name}
      price={item.price}
      disPrice={item.discounted_price}
      brandText={item.brand_name}
      infoText={item.product_description}
      id={item.id}
    />
  );

  const onPaynowPress=()=>{
    const amount=Math.round(totaldiscountedPrice*100*80)
    if(token?.length!==0){
    var options = {
      description: 'Myntra Order',
      image: 'https://i.imgur.com/3g7nmJC.jpg',
      currency: 'INR',
      key: 'rzp_test_GnpMgYfbVsmYuV',
      amount: amount,
      name: userDetail.name,
      order_id: '',
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: 'userDetail.phone',
        name: 'userDetail.name'
      },
      theme: {color: '#53a20e'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      dispatch(emptyBag(''))
      Alert.alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      Alert.alert(`Error: ${error.code} | ${error.description}`);
    });
  }
  else{
    Alert.alert("Login First")
  }
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={1}>
            <Image source={Icon.back} style={styles.backImage} />
          </TouchableOpacity>
          <Text style={styles.shoppingText}>SHOPPING BAG</Text>
        </View>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('WishList')} activeOpacity={1}>
            <Image source={Icon.heart} style={styles.backImage} />
          </TouchableOpacity>
        </View>
      </View>
      {products?.length == 0 ? (
        <View style={styles.emptycartView}>
          <Image source={Images.emptycart} style={styles.emptycartImage} />
          <Text style={styles.headingEmpty}>Hey, it feels so light!</Text>
          <Text style={styles.subheadingEmpty}>
            There is nothing in your bag. Lets's add some items.
          </Text>
        </View>
      ) : (
        <View style={styles.scrollStyle}>
        <ScrollView style={styles.flatlist}  bounces={false} showsVerticalScrollIndicator={false} >
          <FlatList
            bounces={false}
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <PriceDetails />
          
        </ScrollView>
        <TouchableOpacity style={styles.footer} onPress={onPaynowPress} activeOpacity={1}>
          <Text style={styles.placeorderText}>PLACE ORDER</Text>
        </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Bag;
