import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, Header} from '@react-navigation/stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Appointment from './screens/Appointment';
import Completed from './screens/Completed';
import Checked from './screens/Checked';
import Ambulance from './screens/Ambulance';
import Pending from './screens/Pending';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Appointment}
          name="Appointment"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Checked}
          name="Checked"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Ambulance}
          name="Ambulance"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Pending}
          name="Pending"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Completed}
          name="Completed"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
