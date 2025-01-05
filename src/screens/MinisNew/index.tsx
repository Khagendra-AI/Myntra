import React, { useState } from 'react';
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

import { Icon } from '../../assets';
import styles from './styles';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const videos = [
  { video: require('../../assets/Reels/video1.mp4'), author: 'Kiara Advani' },
  { video: require('../../assets/Reels/video2.mp4'), author: 'Jass Sabharwal' },
  { video: require('../../assets/Reels/video3.mp4'), author: 'Delta Fashion' },
  { video: require('../../assets/Reels/video4.mp4'), author: 'Ethnic Fashion' },
  { video: require('../../assets/Reels/video5.mp4'), author: 'Virushka' },
];

const MinisNew = ({ navigation }: { navigation: any }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [likes, setLikes] = useState(new Array(videos.length).fill(0));

   
  const [following, setFollowing] = useState(new Array(videos.length).fill(false));

  const handleScroll = (e: any) => {
    const index = Math.round(e.nativeEvent.contentOffset.y / SCREEN_HEIGHT);
    setSelectedIndex(index);
  };

  const handleGoBack = () => {
    setSelectedIndex(-1);
    navigation.goBack();
  };

  const handleHeartPress = (index: number) => {
    const newLikes = [...likes];
    newLikes[index] = newLikes[index] > 0 ? newLikes[index] - 1 : newLikes[index] + 1;
    setLikes(newLikes);
  };

  const handleFollowPress = (index: number) => {
    const newFollowing = [...following];
    newFollowing[index] = !newFollowing[index];  
    setFollowing(newFollowing);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        hitSlop={{ top: 17, bottom: 18, right: 39, left: 39 }}
        style={styles.backButton}
        onPress={() => handleGoBack()}
      >
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
        renderItem={({ item, index }) => (
          <View style={styles.videoContainer}>
            <Video
              style={styles.video}
              paused={selectedIndex !== index}
              source={item.video}
              resizeMode="cover"
              repeat
            />

            <TouchableOpacity
              style={styles.overlay}
              onPress={() => setSelectedIndex(selectedIndex === -1 ? index : -1)}
            >
              {selectedIndex === -1 && (
                <Image source={Icon.pause} style={styles.pauseIcon} />
              )}
            </TouchableOpacity>

            <View style={styles.optionsView}>
              <TouchableOpacity
                style={styles.touchableoptions}
                onPress={() => handleHeartPress(index)}
              >
                <Image
                  source={likes[index] > 0 ? Icon.favorite : Icon.heart}
                  style={[styles.heartImage]}
                />
              </TouchableOpacity>

              <Text style={styles.optionText}>{likes[index]}</Text>

              <TouchableOpacity style={styles.touchableoptions}>
                <Image source={Icon.bookmark} style={styles.heartImage} />
              </TouchableOpacity>
              <Text style={styles.optionText}></Text>

              <TouchableOpacity style={styles.touchableoptions}>
                <Image source={Icon.share} style={styles.heartImage} />
              </TouchableOpacity>
            </View>

             
            <View style={styles.authorView}>
             
              <Text style={styles.textauthor}>{item.author}</Text>
              <TouchableOpacity
                onPress={() => handleFollowPress(index)}
                style={styles.followButton}
              >
                <Text style={styles.followText}>
                  {following[index] ? 'Following' : 'Follow'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MinisNew;
