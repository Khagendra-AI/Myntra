import { StyleSheet } from "react-native";

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
    alignSelf:'center',
    height:'37.5%',
    width:'45%',
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
})
export default styles