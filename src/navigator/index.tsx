import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Home from '../screens/Home';
import BottomNav from './RootNavigation';
import Profile from '../screens/Profile';
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
import Bag from '../screens/Bag';
import WishList from '../screens/WishList';
import LoginPage from '../screens/LoginPage';
import CreateAccount from '../screens/CreateAccount';
import ForgotPassword from '../screens/ForgotPassword';
import Minis from '../screens/Minis';
import MinisNew from '../screens/MinisNew';



const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bag"
          component={Bag}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="WishList"
          component={WishList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="MinisNew"
          component={MinisNew}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
