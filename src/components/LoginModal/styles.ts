import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerView: {
    alignItems:'center',
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContent: {
    height: '80%',
    backgroundColor: 'white',
    width: '100%',
    padding: '4%',
  },
  horline: {
    borderBottomWidth: 1,
    width: '100%',
    borderColor: '#E8E8E8',
    marginVertical: '3%',
  },
  logoImage: {
    height: 35,
    width: 35,
  },
  closeImage: {
    height: 20,
    width: 20,
  },
  loginView:{

  },
  loginText:{
    fontWeight:'700',
    fontSize:16,
  },
  orText:{
    fontWeight:'400',
  },
  inputView:{
    marginVertical:5,
    padding:10,
    borderWidth:1,
    borderColor:'grey',
  },
  inputStyles:{},
  container: {
    // flex: 1,
    
    justifyContent: 'center',
    backgroundColor: 'white',  
  },
  header: {
    marginBottom: 40,
  },
  title: {
    color: 'black',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#34495E',  
    borderRadius: 12,
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 55,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2980B9',  
  },
  textInput: {
    paddingRight:'8%',
    color: '#FFFFFF',
    fontSize: 16,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#2980B9',  
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  linkButton: {
    marginVertical: 10,
  },
  linkText: {
    color: '#2980B9',  
    fontSize: 14,
    fontWeight: 'bold',
  },
  toggleEye: {
    position: 'absolute',
    right: 15,
    top: '35%',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#B0B0B0',  
  },
});
export default styles;
