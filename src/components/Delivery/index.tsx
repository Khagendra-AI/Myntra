import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../../assets';

const Delivery = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.deliverView}>
          <Image
          source={Icon.cod}
          style={styles.image}
          />
          <Text style={styles.deliverText}>Deliver to 110020</Text>
        </View>
      </View>
      <View style={styles.middleView}>
        <Image
        source={Icon.home}
        style={styles.image}
        />
        <Text style={styles.expressText}>Express Delivery by Wed,8 Jan</Text>
      </View>
    <View style={styles.lowerView}>
      <View style={styles.leftView}>
        <Image source={Icon.return} style={styles.image} />
        <Text style={styles.text}>14 Day Return & </Text><Text>Exchange</Text>
      </View>
      <View style={styles.centerView}>
        <Image source={Icon.cod} style={styles.image} />
        <Text style={styles.text}>Pay on</Text><Text>Delivery</Text>
      </View>
      <View style={styles.rightView}>
        <Image source={Icon.secure} style={styles.image} />
        <Text style={styles.text}>M-Tracked</Text><Text>with Blockchain</Text>
      </View>
    </View>
    </View>
  );
};

export default Delivery;
