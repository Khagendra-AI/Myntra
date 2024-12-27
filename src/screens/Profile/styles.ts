import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{},
  subHeader:{
    padding:5,
    flexDirection:'row',
    // backgroundColor:'red'
  },
  topView:{},
  blackView:{
    width:SCREEN_WIDTH,
    backgroundColor:'black',
    height:SCREEN_HEIGHT*.15,
    },
  whiteView:{
    padding:10,
    justifyContent:'center',
    width:SCREEN_WIDTH,
    backgroundColor:'white',
    height:SCREEN_HEIGHT*.1,
  },
  redView:{
    alignSelf:'flex-end',
    backgroundColor:'red',
    alignItems:'center',
    width:"50%",
    padding:10,
  },
  loginText:{
    color:'white'
  },
  profileImageView:{},
  backImage:{
  height:20,
  width:20,
},
profileText:{
  fontSize:15,
  color:'grey',
  fontWeight:'600',
  marginHorizontal:'5%',
},

})
export default styles