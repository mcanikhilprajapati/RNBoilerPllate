import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home.tsx';
import Profile from '../screens/Profile.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>

      {/*<Stack.Navigator>*/}
      {/*  <Stack.Screen name="Home" component={Home} />*/}
      {/*  <Stack.Screen name="Profile" component={Profile} />*/}
      {/*</Stack.Navigator>*/}
    </NavigationContainer>
  );
};

export default AppNavigation;