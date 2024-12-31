import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { useSharedValue } from 'react-native-reanimated'

import Carousel from 'react-native-reanimated-carousel'
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const Banner: FC<{ adData: any }> = ({ adData }) => {
  const progressvalue = useSharedValue(0)
  const baseOptions = {
    vertical: false,
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 0.5,
  }
  return (
    <View style={styles.container}>
      <Carousel
        {...baseOptions}
        loop
        pagingEnabled
        snapEnabled
        autoPlay
        autoPlayInterval={3000}
        mode='parallax'
        data={adData}
        modeConfig={{
          parallaxScrollingOffset: 0,
          parallaxScrollingScale: 0.94,
        }}
        renderItem={({ item }: any) => {
          return (
           
              <Image
                source={item}
                style={styles.img}
              />
            
          )
        }}
      />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({

  container:
  {
    left: -20,
    marginVertical: 20

  },
  imageContainer:
  {
    width: '100%',
    height: '100%',

  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20
  }
})