import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'red',
    paddingHorizontal: 10,
  },
  upperView: {
    // backgroundColor:'grey',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftUpperView: {
    // backgroundColor:'orange',
    flexDirection: 'row',
  },
  myntraView: {
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'gold',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#ffe5c8',
    flexDirection: 'row',
  },
  insiderView: {
    marginLeft: 8,
    // backgroundColor:'yellow',
    alignContent: 'center',
    flexDirection: 'row',
  },
  myntraText: {
    fontWeight: '800',
  },
  becomeText: {
    fontSize: 9,
  },
  insiderText: {
    fontSize: 9,
    color: 'gold',
    fontWeight: '600',
  },
  insiderTextView: {
    marginLeft: 4,
    // backgroundColor:'green',
    justifyContent: 'center',
  },
  rightUpperView: {
    justifyContent: 'space-between',
    width: '35%',
    // backgroundColor:'green',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImage: {
    height: 25,
    width: 25,
  },
  lowerView: {
    marginTop: '3%',
  },
  lowerSubView: {
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 20,
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputIcons: {
    // marginRight:3,
    // position:'absolute',
    height: 25,
    width: 25,
  },
  placeholderText: {
    // backgroundColor:'red',
    marginLeft: '2%',
    color: 'grey',
  },
  searchImage: {
    height: 15,
    width: 15,
  },
  touchableView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '2%',
  },
  searchBaricons:{
    flexDirection:'row'
  },
  downarrowImage:{

  },
});
export default styles;
