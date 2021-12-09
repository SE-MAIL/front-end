import React from 'react';
import Login from '../screen/login/login';
import SignUp from '../screen/signUp/signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from '../screen/first/first';
import Join from '../screen/signUp/join';
import SignUp2 from '../screen/signUp/signup2';

const LoginStack = createNativeStackNavigator();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="First"
        component={First}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen
        name="Join"
        component={Join}
        options={{
          headerShown: false,
        }}
      />
      <LoginStack.Screen
        name="SignUp2"
        component={SignUp2}
        options={{
          headerShown: false,
        }}
      />
    </LoginStack.Navigator>
  );
}

export default LoginNavigator;
