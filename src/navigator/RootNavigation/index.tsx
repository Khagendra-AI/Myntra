import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Home from '../../screens/Home';
import Minis from '../../screens/Minis';
import Trends from '../../screens/Trends';
import Bag from '../../screens/Bag';
import {Icon} from '../../assets';
import MinisNew from '../../screens/MinisNew';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1E90FF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          // backgroundColor: 'black',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icon.home}
              style={[
                styles.icon,
                // {tintColor: color, width: size, height: size},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Minis"
        component={MinisNew}
        options={{
          tabBarStyle: {
            display:'none'
          },

          tabBarIcon: ({color, size}) => (
            <TouchableOpacity
              hitSlop={{top: 0, bottom: 50, right: 50, left: 50}}
              style={styles.touchable}
              onPress={() => navigation.navigate('MinisNew')}>
              <Image
                source={Icon.Minis}
                style={[
                  styles.icon,
                  {tintColor: color, width: size, height: size},
                ]}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Trends"
        component={Trends}
        options={{
         
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icon.Trends}
              style={[
                styles.icon,
                {tintColor: color, width: size, height: size},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Bag}
        options={{
          tabBarStyle: {
            display:'none'
          },
          tabBarIcon: ({color, size}) => (
            <Image
              source={Icon.Bag}
              style={[
                styles.icon,
                {tintColor: color, width: size, height: size},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
  touchable: {
    zIndex: 1,
  },
});
