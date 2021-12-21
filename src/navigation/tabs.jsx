import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import {BallIcon, CardIcon, FireIcon, MenuIcon} from '../assets/icons';
import BallScreen from '../screens/live/BallScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'black',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home0"
        options={{
          tabBarIcon: ({color}) => {
            return <FireIcon fill={color} stroke={color} />;
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color}) => {
            return <BallIcon fill={color} stroke={color} />;
          },
        }}
        component={BallScreen}
      />
      <Tab.Screen
        name="Home2"
        options={{
          tabBarIcon: ({color}) => {
            return <MenuIcon fill={color} stroke={color} />;
          },
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
