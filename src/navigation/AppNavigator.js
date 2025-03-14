// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '../screens/core/LoadingScreen';
import HomeScreen from '../screens/core/HomeScreen';
import DashboardScreen from '../screens/core/Dashboard';
import SignupScreen from '../screens/account/SignupScreen';
import LoginScreen from '../screens/account/LoginScreen';
import ForgotPasswordScreen from '../screens/account/ForgotPasswordScreen';
import VerifyEmailScreen from '../screens/account/VerifyEmailScreen';
import BuyGiftcardScreen from '../screens/giftcard/Buygiftcard';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} /> */}
        {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
        <Stack.Screen name="Home" component={BuyGiftcardScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


