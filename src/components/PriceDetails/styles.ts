import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f8f9f9',
    padding:5,
    marginVertical:2,
    width:SCREEN_WIDTH,
    height:SCREEN_HEIGHT*.3,
    marginBottom:'5%'
  },
  priceText:{
    fontWeight:'700',
  },
  hline:{
    borderBottomWidth:.5,
    borderBottomColor:'GREY',
    marginVertical:'2%',
  },
  commonView:{
    marginVertical:'2%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  commonText:{},
  totalAmount:{
    fontSize:16,
    fontWeight:'800',
  },
})
export default styles