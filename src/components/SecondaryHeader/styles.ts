import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    // padding:15,
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  leftView:{
    paddingVertical:10,
    marginLeft:5,
    justifyContent:"space-between",
    alignItems:'center',
    width:'42%',
    // backgroundColor:'red',
    flexDirection:'row',
  },
  rightView:{
    paddingVertical:10,
    paddingHorizontal:'3%',
    alignItems:'center',
    justifyContent:"space-between",
    width:'40%',
    // backgroundColor:'red',
    flexDirection:'row',
  },
  backImage:{
    height:25,
    width:25,
  },
  leftSubView:{
    
    // justifyContent:'center',

  },
  categorySubText:{},
  categoryText:{
    fontWeight:'600',
    fontSize:16,
  },
});
export default styles