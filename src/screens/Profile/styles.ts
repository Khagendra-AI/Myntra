import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f8f9f9',
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
    backgroundColor:'#36454F',
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
  profileImageView:{
    borderRadius:4,
    width:SCREEN_WIDTH*.35,
    height:SCREEN_HEIGHT*.15,
    backgroundColor:'white',
    borderWidth:.5,
    borderColor:'grey',
    position:'absolute',
    top:'30%',
    left:'9%',
    zIndex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  profileImage:{
    resizeMode:'contain',
    height:SCREEN_HEIGHT*.09,
    width:SCREEN_WIDTH*.29,

  },
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
orderView:{
  marginVertical:'5%',
},
couponView:{},
FAQView:{
  marginTop:'5%',
  backgroundColor:'white',
  paddingHorizontal:'10%',
  paddingTop:'5%',
},
FAQText:{
  marginVertical:10,
  fontWeight:'600',
  color:'grey',
},

})
export default styles