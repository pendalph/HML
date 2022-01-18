import React from 'react';

import { EventsDetailScreen } from '_app/screens/EventsDetailScreen';
import { HomeScreen } from '_app/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AppNavigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
        <Stack.Screen
          name="EventsDetailScreen"
          component={EventsDetailScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            title: '',
            headerBackTitle: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
