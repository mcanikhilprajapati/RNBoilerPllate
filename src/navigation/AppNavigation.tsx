import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home.tsx';
import Profile from '../screens/Profile.tsx';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen/LoginScreen.tsx';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen.tsx';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen.tsx';
// import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      {/*<Drawer.Navigator>*/}
      {/*  <Drawer.Screen name="Home" component={Home} />*/}
      {/*  <Drawer.Screen name="Profile" component={Profile} />*/}
      {/*</Drawer.Navigator>*/}

      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;