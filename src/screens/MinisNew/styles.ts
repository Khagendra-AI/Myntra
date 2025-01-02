import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 100,
    backgroundColor: '#11151c',
    borderRadius: 100,
    opacity: 0.5,
    padding: 10,
  },
  backArrowIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  video: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  overlay: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pauseIcon: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    tintColor: 'white',
  },
})
export default styles