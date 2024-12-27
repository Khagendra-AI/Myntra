import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container:{flex:1,
    alignItems:'center'
  },
  item: {
    width:SCREEN_WIDTH*.49,
    flexDirection: 'column',
    // padding: 15,
    // borderWidth: 1,
    // borderBottomColor: '#ddd',
    margin:2,
    height:SCREEN_HEIGHT*.4
  },
  infoView:{
    margin:2,
    justifyContent:'space-between',
    flexDirection:'row',
    // backgroundColor:'red'

  },
  image: {
    borderRadius:5,
    backgroundColor:'grey',
    // resizeMode:'',
    width: SCREEN_WIDTH*.49,
    height: SCREEN_HEIGHT*.3,
    marginRight: 15,
  },
  heartImage:{
    height:20,
    width:20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 14,
    color: '#777',
  },
  priceView:{
    textDecorationLine:'line-through',
    alignItems:'center',
    flexDirection:'row'
  },
  priceBefore:{
    fontSize:12,
    color:'grey',
    textDecorationLine:'line-through',
  },
  price: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },

})
export default styles