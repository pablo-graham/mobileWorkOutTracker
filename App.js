import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import React, { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
// import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignupScreen";
import LandingScreen from "./screens/LandingScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown :false}} name="LandingScreen" component={LandingScreen} />
          <Stack.Screen options={{headerShown :false}} name="LoginScreen" component={LoginScreen} />
          {/* <Stack.Screen options={{headerShown :false}} name="HomeScreen" component={HomeScreen} /> */}
          <Stack.Screen options={{headerShown :false}} name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator> 
      </NavigationContainer> 
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
