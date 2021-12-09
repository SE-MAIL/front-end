import React from 'react';
import Login from '../screen/login/login';
import SignUp from '../screen/signUp/signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Graph from '../screen/graph/graph';
import GraphDetails from '../screen/graph/graphDetails';
import GraphDetailsMonth from '../screen/graph/graphDetailsMonth';

const GraphStack = createNativeStackNavigator();

function GraphDetailsNavigator() {
  return (
    <GraphStack.Navigator>
      <GraphStack.Screen
        name="Graph"
        component={Graph}
        options={{
          headerShown: false,
        }}
      />
      <GraphStack.Screen
        name="GraphDetails"
        component={GraphDetails}
        options={{
          headerShown: false,
        }}
      />
      <GraphStack.Screen
        name="GraphDetailsMonth"
        component={GraphDetailsMonth}
        options={{
          headerShown: false,
        }}
      />
    </GraphStack.Navigator>
  );
}

export default GraphDetailsNavigator;
