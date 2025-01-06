import {Dimensions, StyleSheet} from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  searchbox: {
    
    borderWidth:1,
    borderRadius: 10,
    padding: 15,
    paddingRight:40,
    width: '100%',
    backgroundColor: 'white',
  },
  touchableCancel: {},
  cancelText: {
    color: '#3E8EDE',
  },
  trendingView: {
    margin: 9,
  },
  trendingText: {
    fontSize: 19,
    fontWeight: '500',
    color: 'grey',
  },
  trendingTextView: {
    padding: 10,
    backgroundColor: '#E1F8DC',
    margin: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  trendingSubView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 40,
  },
  trendingEleText: {
    color: 'ACDDDE',
  },
  cancelImage: {
    height: 25,
    width: 25,
  },
  touchableCancelImage: {
    position: 'absolute',
    // right:2,
    right: 10,
    top: 10,
    // backgroundColor: 'red',
  },
  flatlistView:{
    flex:1
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

});
export default styles;