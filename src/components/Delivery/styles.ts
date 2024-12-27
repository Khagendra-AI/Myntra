import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:'3%',
    
  },
  topView:{
    marginVertical:'2%',
  },
  middleView:{
    marginVertical:'2%',
    paddingHorizontal:'3%',
    padding:5,
    alignItems:"center",
    borderRadius:8,
    flexDirection:'row',
    backgroundColor:'grey'
  },
  deliverView:{
    flexDirection:'row',
    alignItems:'center'
  },
  deliverText:{
    marginLeft:5,
    fontWeight:'600',
  },
  expressText:{

    marginLeft:5,
    fontWeight:'800',
  },
  lowerView:{
    marginVertical:'4%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  leftView:{
    alignItems:'center',
    // backgroundColor:'green'
  },
  centerView:{
    alignItems:'center',
    // backgroundColor:'red'
  },
  rightView:{
    alignItems:'center',
    // backgroundColor:'green'
  },
  image:{
    height:20,
    width:20,
  },
  text:{},
})
export default styles