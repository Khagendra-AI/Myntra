import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  mainImage:{
    resizeMode:'stretch',
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT*.5,
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
  },
  dataView:{
    flex:1,

  },
  dataTextView:{
    padding:10,
    // marginTop:'2%',
  },
  brandText:{
    fontSize:16,
    fontWeight:'700'
  },
  descriptionText:{
    fontWeight:'400'
  },
  productNameText:{},
  priceText:{
    color:'grey'
  },
  price:{
    color:'black',
    fontWeight:'800',
    fontSize:16,
  },
  footerView:{
    backgroundColor:'white',
    borderWidth:.5,
    borderColor:'grey',
    width:SCREEN_WIDTH,
    padding:'3%',
    paddingBottom:'6%',
    paddingHorizontal:'4%',
    justifyContent:'space-between',
    // position:'absolute',
    bottom:0,
    flexDirection:'row',
  },
  wishlistView:{
    alignItems:'center',
    width:'48%',
    justifyContent:'center',
    borderRadius:10,
    padding:10,
    borderWidth:.5,
    borderColor:'grey',
    flexDirection:'row',
  },
  addbagView:{
    alignItems:'center',
    backgroundColor:'red',
    width:'48%',
    justifyContent:'center',
    borderRadius:10,
    padding:10,
    borderWidth:.5,
    borderColor:'red',
    flexDirection:'row',
  },
  heartImage:{
    marginHorizontal:6,
    height:20,
    width:20,
  },
  wishlistText:{
    fontWeight:'800',
  },
  addbagText:{
    color:'white',
    fontWeight:'800',
  },
})
export default styles