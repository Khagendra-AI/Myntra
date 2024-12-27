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

const Header = ({navigateToProfile}:{navigateToProfile:any}) => {
  return (
    
      <SafeAreaView style={styles.container}>
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
            <Image source={Icon.heart} style={styles.profileImage} />
            <TouchableOpacity onPress={navigateToProfile}>
            <Image source={Icon.profile} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.lowerView}>
          <View style={styles.lowerSubView}>
            <TouchableOpacity>
              <View style={styles.touchableView}>
                <Image source={Icon.search} style={styles.searchImage} />
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
      
    </SafeAreaView>
  );
};

export default Header;
