import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'white',
    justifyContent:'space-between',
    flexDirection:'row',
    marginVertical:1,
  },
  leftView:{
    // backgroundColor:'red',
    flexDirection:'row',
  },
  rightView:{
    justifyContent:'center',
  },
  arrowImage:{
    height:25,
    width:25,
  },
  mainImage:{
    height:25,
    width:25,
  },
  imageView:{
    justifyContent:'center',
    // backgroundColor:'yellow'
  },
  textView:{
    
    marginLeft:10,
  },
  subheading:{
    marginTop:2,
    fontSize:12,
    color:'grey',
  },
  heading:{
    fontSize:16,
    fontWeight:'700'
  },
})
export default styles