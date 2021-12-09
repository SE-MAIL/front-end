import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginNavigator from './loginNavigator';
import {BottomTabNavigator} from './bottomTabNavigator';

const GraphStackNavigator = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <GraphStackNavigator.Navigator>
        <GraphStackNavigator.Screen
          name="GraphDetailsNavigator"
          component={GraphDetailsNavigator}
          options={{
            headerShown: false,
          }}
        />
        <GraphStackNavigator.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </GraphStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
