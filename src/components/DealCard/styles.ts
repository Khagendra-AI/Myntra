import {Dimensions, StyleSheet} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingHorizontal: 9,
    paddingVertical:5,
    height: SCREEN_HEIGHT * 0.27,
    width: SCREEN_WIDTH * 0.35,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'grey',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dataView: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'red',
    // alignSelf:'flex-end',
  },
  imageView: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,

  },
  logo: {
    height: 40,
    width: 50,
  },
  topText:{
    fontSize:14,
    color:'white',
    fontWeight:'900'
  },
  midText:{
    fontSize:14,
    color:'yellow',
    fontWeight:'900'
  },
  botText:{
    fontSize:10,
  },
});
export default styles;
