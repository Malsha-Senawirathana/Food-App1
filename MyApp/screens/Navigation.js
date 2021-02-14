import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-natigation/stack';

import SignUp from './SignUp';
import Login from './Login';

const Stack = createStackNavigator();
const Navigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initial RouteName="Home">
        <Stack.Screen
          name="Home"
          component={Login}
          options={{headerShow: fales}}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{headerShow: fales}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
