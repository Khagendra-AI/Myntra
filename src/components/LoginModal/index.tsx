import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import styles from './styles';
import {Icon} from '../../assets';

interface ModalsProps {
  visible: boolean;
  onclose: () => void;
  newchat: () => void;
}

const LoginModal = (props: ModalsProps) => {
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const isButtonDisabled = !email.trim() || !password.trim();
  const handleLogin = async () => {
    // setloading(true)
    // try {
    //   const userCredential = await auth().signInWithEmailAndPassword(
    //     email,
    //     password,
    //   );
    //   const user = userCredential.user;
    //   dispatch(addLoginToken(user?.uid));
    //   const usersRef = firestore().collection('users').doc(user?.uid);
    //   usersRef
    //   .get()
    //   .then(documentSnapshot => {
    //     setloading(false)
    //     if (documentSnapshot.exists) {
    //       // console.log('usersRef', documentSnapshot);
    //       // setUserData(documentSnapshot.data());
    //       dispatch(addUserData(documentSnapshot.data()));
    //       console.log(documentSnapshot.data(),"home snapshop")
    //     } else {
    //       console.log('No such document!');
    //     }
    //   })
    //   .catch(error => {
    //     setloading(false)
    //     //false
    //     console.error('Error getting document:', error);
    //   });
    //   dispatch(getProductsAction())
    //     .unwrap()
    //     .then(() => {
    //       navigation.reset({
    //         index: 0,
    //         routes: [{name: 'BottomNav'}],
    //       });
    //     })
    //     .catch(({err}: any) => {
    //       console.error('Error fetching products', err);
    //     });
    // } catch (error) {
    //   setloading(false)
    //   Alert.alert('Login Error', 'Something went wrong. Please try again.');
  };

  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <Pressable style={styles.modalContainer} onPress={props.onclose}>
        <View style={styles.modalContent}>
          <View style={styles.headerView}>
            <Image source={Icon.home} style={styles.logoImage} />
            <Image source={Icon.close} style={styles.closeImage} />
          </View>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Login</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email"
                placeholderTextColor="#B0B0B0"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
                placeholderTextColor="#B0B0B0"
                secureTextEntry={showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.toggleEye}
                onPress={togglePassword}>
                {showPassword ? (
                  <Image source={Icon.eye} style={styles.eyeIcon} />
                ) : (
                  <Image source={Icon.eyeoff} style={styles.eyeIcon} />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={[styles.button, isButtonDisabled && {opacity: 0.6}]}
              onPress={handleLogin}
              disabled={isButtonDisabled}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <TouchableOpacity style={styles.linkButton}>
                <Text style={styles.linkText}>Create an Account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkButton}>
                <Text style={styles.linkText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default LoginModal;
