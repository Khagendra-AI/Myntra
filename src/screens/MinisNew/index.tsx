import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import Video from 'react-native-video';

import {Icon} from '../../assets';
import styles from './styles';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const videos = [
  require('../../assets/Reels/video1.mp4'),
  require('../../assets/Reels/video2.mp4'),
  require('../../assets/Reels/video3.mp4'),
  require('../../assets/Reels/video4.mp4'),
  require('../../assets/Reels/video5.mp4'),
];

const MinisNew = ({navigation}: {navigation: any}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleScroll = (e: any) => {
    const index = Math.round(e.nativeEvent.contentOffset.y / SCREEN_HEIGHT);
    setSelectedIndex(index);
  };

  const handleGoBack = () => {
    setSelectedIndex(-1);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => handleGoBack()}>
        <Image source={Icon.back} style={styles.backArrowIcon} />
      </TouchableOpacity>
      <FlatList
        data={videos}
        keyExtractor={(_, index) => index.toString()}
        onScroll={handleScroll}
        pagingEnabled
        windowSize={2}
        nestedScrollEnabled
        snapToAlignment="start"
        decelerationRate="normal"
        scrollEventThrottle={16}
        onEndReachedThreshold={0.2}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        initialNumToRender={1}
        getItemLayout={(data, index) => ({
          length: SCREEN_HEIGHT,
          offset: SCREEN_HEIGHT * index,
          index,
        })}
        removeClippedSubviews
        renderItem={({item, index}) => (
          <View style={styles.videoContainer}>
            <Video
              style={styles.video}
              paused={selectedIndex !== index}
              source={item}
              resizeMode="cover"
              repeat
            />

            <TouchableOpacity
              style={styles.overlay}
              onPress={() =>
                setSelectedIndex(selectedIndex === -1 ? index : -1)
              }>
              {selectedIndex === -1 && (
                <Image source={Icon.camera} style={styles.pauseIcon} />
              )}
            </TouchableOpacity>
            {/* <Slider /> */}
          </View>
        )}
      />
      {/* <Slider /> */}
    </View>
  );
};

const Slider = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          height: 140,
          width: 100,
          position: 'absolute',
          bottom: 20,
          backgroundColor: 'red',
          marginRight: 10,
        }}>
        <Text>`${item}`</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={['', '']}
        // horizontal
        nestedScrollEnabled
        contentContainerStyle={{borderWidth: 1}}
        renderItem={renderItem}
        style={{
          borderWidth: 1,
          height: 200,
        }}
      />
    </View>
  );
};
export default MinisNew;
