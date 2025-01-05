import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    color:'white',
    flex:1,
    alignItems:'center'
  },
  
  header:{
    width:'100%',
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
  searchtouch:{
    marginLeft:'5%',
  },
  rightHeader:{
    justifyContent:'space-between',
    marginRight:5,
        // width:'5%',
    flexDirection:'row',

    // backgroundColor:'yellow',
  },
  backImage:{
    height:20,
    width:20,
  },
  shoppingText:{
    marginHorizontal:'10%',
    fontWeight:'700'
  },
})
export default styles