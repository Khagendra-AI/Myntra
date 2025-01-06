import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../../assets';

const Header = ({navigateToProfile,navigateToWishList,navigateToSearch}:{navigateToProfile:any,navigateToWishList:any,navigateToSearch:any}) => {
  return (
    
      <View style={styles.container}>
        <View style={styles.upperView}>
          <View style={styles.leftUpperView}>
            
            <View style={styles.myntraView}>
              <Text style={styles.myntraText}>Myntra</Text>
              <Image style={styles.downarrowImage} source={Icon.downarrow} />
            </View>

            <View style={styles.insiderView}>
              <Image source={Icon.crown} />
              <View style={styles.insiderTextView}>
                <Text style={styles.becomeText}>BECOME</Text>
                <Text style={styles.insiderText}>INSIDER{`>`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightUpperView}>
            <Image source={Icon.bell} style={styles.profileImage} />
            <TouchableOpacity onPress={navigateToWishList} activeOpacity={1}>
            <Image source={Icon.heart} style={styles.profileImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToProfile} activeOpacity={1}>
            <Image source={Icon.profile} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerView}>
          <View style={styles.lowerSubView}>
            <TouchableOpacity onPress={navigateToSearch} >
              <View style={styles.touchableView}>
                <Image source={Icon.search} style={[styles.searchImage ,{tintColor:'black'}]} />
                <Text style={styles.placeholderText}>
                  Search for brands and products
                </Text>
              </View>
            </TouchableOpacity>

            <View style={styles.searchBaricons}>
              <TouchableOpacity>
                <Image
                  source={Icon.camera}
                  style={[styles.textInputIcons, {marginRight: 20}]}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Icon.microphone} style={styles.textInputIcons} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      
    </View>
  );
};

export default Header;
