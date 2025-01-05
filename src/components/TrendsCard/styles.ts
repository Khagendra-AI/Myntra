import { Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH ,
    height: SCREEN_HEIGHT * 0.55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
    marginVertical: 15,
  },

  headingText: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginLeft:10,
  },

  subcontainer: {
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: SCREEN_HEIGHT * 0.4,
    width: '100%',
    padding: 10,
  },

  leftView: {
    justifyContent: 'space-between',
    height: SCREEN_HEIGHT * 0.37,
    width: SCREEN_WIDTH * 0.4,
  },

  rightView: {
    marginLeft:6,
    justifyContent: 'center',
    height: SCREEN_HEIGHT * 0.37,
    width: SCREEN_WIDTH * 0.4,
    borderRadius: 10,
    overflow: 'hidden',
  },

  upperView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: SCREEN_HEIGHT * 0.18,
    width: SCREEN_WIDTH * 0.4,
  },

  lowerView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: SCREEN_HEIGHT * 0.18,
    width: SCREEN_WIDTH * 0.4,
  },

  leftImage: {
    height: SCREEN_HEIGHT * 0.18,
    width: SCREEN_WIDTH * 0.19,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  rightImage: {
    height: SCREEN_HEIGHT * 0.37,
    width: SCREEN_WIDTH * 0.4,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#f0f0f0',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Subtle overlay effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  viewall:{
    backgroundColor:'#D3D3D3',
    height: SCREEN_HEIGHT * 0.04,
    width: SCREEN_WIDTH *.8,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',

  },
  viewText:{
    fontWeight:'600'
  },
});

export default styles;
