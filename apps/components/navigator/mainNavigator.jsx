import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginNavigator from './loginNavigator';
import {BottomTabNavigator} from './bottomTabNavigator';

const MainStackNavigator = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator>
        <MainStackNavigator.Screen
          name="LoginNavigator"
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}
        />
        <MainStackNavigator.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
