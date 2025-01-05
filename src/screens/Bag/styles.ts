import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5,
    // backgroundColor:'red',
    alignContent:'center'
  },
  leftHeader:{
    // backgroundColor:'green',
    alignItems:'center',
    flexDirection:'row',
  },
  rightHeader:{
    // backgroundColor:'yellow',
  },
  backImage:{
    height:20,
    width:20,
  },
  emptycartView:{
    paddingVertical:'20%',
    flex:1,
    // backgroundColor:'red'
  },
  shoppingText:{
    marginHorizontal:'10%',
    fontWeight:'700'
  },
  emptycartImage:{
    resizeMode:'stretch',
    alignSelf:'center',
    height:'41%',
    width:'49%',
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
  scrollStyle:{
    flex:1,
  },
  flatlist:{
    flex:1,
    
  },
  footer:{
    justifyContent:'center',
    height:SCREEN_HEIGHT*.07,
    alignItems:'center',
    backgroundColor:'red'
  },
  placeorderText:{
    color:'white',
  },
})
export default styles