import {Dimensions, StyleSheet} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  flatlistView:{
    // backgroundColor:'red',
    alignItems:'center',
  },
  shoppingText:{
    marginHorizontal:'10%',
    fontWeight:'700'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    // backgroundColor:'red',
    alignContent: 'center',
  },
  leftHeader: {
    // backgroundColor:'green',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightHeader: {
    // backgroundColor:'yellow',
  },
  backImage: {
    marginRight:3,
    height: 20,
    width: 20,
  },
  item: {
    // padding:2,
    width:SCREEN_WIDTH*.453,
    flexDirection: 'column',
    // padding: 15,
    borderWidth: .5,
    borderColor:'grey',
    // borderBottomColor: '#ddd',
    margin:5,
    // height:SCREEN_HEIGHT*.42

  },
  infoView:{
    margin:2,
    justifyContent:'space-between',
    flexDirection:'row',
    // backgroundColor:'red'

  },
  image: {
    // borderRadius:5,
    backgroundColor:'grey',
    resizeMode:'stretch',
    width: SCREEN_WIDTH*.45,
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
  addBagView:{
    height:SCREEN_HEIGHT*.05,
    // width:SCREEN_WIDTH*.1,
    // borderTopWidth:1,
    alignItems:'center',
    justifyContent:'center',
    borderTopWidth:.5,
    borderTopColor:'grey',
    // padding:5,
  },
  moveBagText:{
    color:"red",
    fontWeight:'600'
  },
  upperFlatView:{
    // backgroundColor:'green',
    flex:1,
    alignItems:'center',

  },
  emptycartView:{
    paddingVertical:'20%',
    flex:1,
    // backgroundColor:'red'
  },
  emptycartImage:{
    resizeMode:'stretch',
    alignSelf:'center',
    height:'41%',
    width:'60%',
  },
  subheadingEmpty:{
    marginTop:'2%',
    alignSelf:'center',
    color:'grey',
  },
  headingEmpty:{
    marginTop:'5%',
    fontSize:18,
    fontWeight:'700',
    alignSelf:'center',
  },

});
export default styles;
