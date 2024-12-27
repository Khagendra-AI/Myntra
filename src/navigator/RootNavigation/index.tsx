import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet} from 'react-native';
import Home from '../../screens/Home';
import Minis from '../../screens/Minis';
import Trends from '../../screens/Trends';
import Bag from '../../screens/Bag';
import {Icon} from '../../assets';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
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
          component={Minis}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Icon.Minis}
                style={[
                  styles.icon,
                  {tintColor: color, width: size, height: size},
                ]}
              />
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
});
