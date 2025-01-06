import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../../assets';

interface SecondaryHeaderProps {
  headerText: string;
  navigateToWishList: () => void;
  navigateToBag: () => void;
  onBackClick: () => void;
}

const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({
  headerText,
  navigateToWishList,
  navigateToBag,
  onBackClick,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftView}>
        <TouchableOpacity onPress={onBackClick} activeOpacity={1}>
          <Image style={styles.backImage} source={Icon.back} />
        </TouchableOpacity>
        <Image style={styles.backImage} source={Icon.home} />
        <View style={styles.leftSubView}>
          <Text style={styles.categoryText}>{headerText}</Text>
          {/* <Text style={styles.categorySubText}></Text> */}
        </View>
      </View>
      <View style={styles.rightView}>
        <Image source={Icon.share} style={styles.backImage} />
        <TouchableOpacity onPress={navigateToWishList} activeOpacity={1}>
          <Image source={Icon.heart} style={styles.backImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToBag} activeOpacity={1}>
          <Image source={Icon.Bag} style={styles.backImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecondaryHeader;
