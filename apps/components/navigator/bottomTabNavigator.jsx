import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/home/home';
import Recommendation from '../screen/recommendation/recommendation';
import Profile from '../screen/profile/profile';
import Graph from '../screen/graph/graph';
import {
  faHome,
  faMale,
  faCalendar,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const bottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <bottomTab.Navigator
      backBehavior={'history'}
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: 'black'},
        tabBarShowLabel: false,
        activeBackgroundColor: 'gray',
        activeTintColor: 'white',
        inactiveTintColor: '#3a3b3c',
        tabBarIcon: ({color}) => bottomTabIconOption(route, color),
      })}>
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

const bottomTabIconOption = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = faHome;
      break;
    case 'Recommendation':
      iconName = faTasks;
      break;
    case 'Graph':
      iconName = faCalendar;
      break;
    case 'Profile':
      iconName = faMale;
      break;
    default:
      iconName = faHome;
      break;
  }
  return <FontAwesomeIcon icon={iconName} size={30} color={color} />;
};
