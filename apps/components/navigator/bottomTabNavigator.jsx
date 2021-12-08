import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/home/home';
import Recommendation from '../screen/recommendation/recommendation';
import Profile from '../screen/profile/profile';
import Graph from '../screen/graph/graph';
import Ionicons from 'react-native-vector-icons';

const bottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <bottomTab.Navigator
      backBehavior={'history'}
      tabBarS
      tabBarOptions={{
        activeBackgroundColor: 'gray',
        activeTintColor: 'white',
        inactiveTintColor: '#3a3b3c',
        style: {
          backgroundColor: 'black'
        },
        labelPosition: 'beside-icon'
      }}
      screenOptions={{
        tabBarStyle: {backgroundColor: 'black'},
        tabBarShowLabel: false,
      }}>
      <bottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <bottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="Recommendation"
        component={Recommendation}
      />
      <bottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="Graph"
        component={Graph}
      />
      <bottomTab.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={Profile}
      />
    </bottomTab.Navigator>
  );
}
