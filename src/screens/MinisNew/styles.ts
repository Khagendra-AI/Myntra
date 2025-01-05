import {Dimensions, StyleSheet} from 'react-native';
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
    top: '5%',
    left: 20,
    zIndex: 100,

    borderRadius: 100,
    opacity: 0.5,
    padding: 10,
  },
  backArrowIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  heartImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  optionText: {
    color: 'white',
    marginVertical: '20%',
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
  optionsView: {
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    zIndex: 1,
    top: '50%',
  },
  touchableoptions: {
    backgroundColor: '#878787',
    padding: 10,
    borderRadius: 50,
  },
  followButton: {
    zIndex: 1,
    padding: 5,
    backgroundColor: '#878787',
    borderRadius: 2,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followText: {
    zIndex: 1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  authorView: {
    position: 'absolute',
    zIndex: 1,
    top: '6.5%',
    left: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
    paddingHorizontal: 15,
  },
  textauthor: {
    zIndex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default styles;
