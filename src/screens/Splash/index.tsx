import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {Icon, Images} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';

const Splash = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch<any>();
  const {watchlistdata, splashtoken} = useSelector((store:any) => store.mainapi);
  useEffect(() => {
    const timer = setTimeout(async () => {
      navigation.replace('BottomNav');
      // if (splashtoken=="") {
      //   navigation.replace('Tutorial');
      // } else {
      //   navigation.replace('Tutorial');

      // }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={Icon.home}
        style={styles.splashalterate}
      />
      <Text style={styles.text}>Myntra</Text>
      <View style={styles.activityView}>
        <ActivityIndicator size="large" color="white" />
      </View>
    </View>
  );
};

export default Splash;