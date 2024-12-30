import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f8f9f9',
    padding:5,
    marginVertical:2,
    flexDirection:'row',
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT*.25,
    alignItems:'center',
  },
  cancelView:{
    position:'absolute',
    zIndex:1,
    top:2,
    right:2,
  },
  closeImage:{
    height:20,
    width:20,
  },
  imageView:{},
  itemImage:{
    height:SCREEN_HEIGHT*.23,
    width:SCREEN_WIDTH*.32,
  },
  dataView:{
    width:SCREEN_WIDTH*.6,
    justifyContent:'center',
    marginLeft:'3%',
    // backgroundColor:'green',
    height:SCREEN_HEIGHT*.23,
  },
  brandText:{
    fontSize:16,
    fontWeight:'700',
  },
  infoText:{
    color:'grey',
  },
  itemText:{

    marginTop:'4%',
  },
  quantityText:{
    padding:2,
    paddingHorizontal:5,
    marginTop:'4%',
    backgroundColor:'#D3D3D3',
    fontSize:16,
    alignSelf:'center'
  },
  priceText:{
    
    fontWeight:'400',
    color:'grey',
    textDecorationLine:'line-through',
  },
  disPriceText:{
    marginTop:'4%',
    fontWeight:'700',

  },
  deliveryText:{},

})
export default styles