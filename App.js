import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
