import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/home/home';
import Recommendation from '../screen/recommendation/recommendation';
import Profile from '../screen/profile/profile';

const bottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <bottomTab.Navigator
      backBehavior="history"
      activeColor="#00203f"
      inactiveColor="#a9a9a9"
      barStyle={{backgroundColor: '#ffffff'}}
      labeled={false}>
      <bottomTab.Screen name="Home" component={Home} />
      <bottomTab.Screen name="Recommendation" component={Recommendation} />
      <bottomTab.Screen name="Profile" component={Profile} />
    </bottomTab.Navigator>
  );
}
