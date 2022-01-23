import {KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import LoginSignupTop from "../components/loginSignupTop";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.landingScreen}>
      <View style={styles.landingScreenContent}>
        <View style={styles.top}>
          <LoginSignupTop />
          <Text style={styles.appNameText}>Workout Tracker</Text>
        </View>
        <View style={styles.aboutUs}>
          <Text style={styles.landingScreenText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
        </View>
        <View style={styles.getStarted}>
          <View style={styles.getStartedButton}>
            <Text style={styles.getStartedButtonText} onPress={() => navigation.navigate('SignUpScreen')}>Get Started!</Text>
          </View>
          <Text style={styles.logInButton} onPress={() => navigation.navigate("LoginScreen")}> LOG IN </Text>
        </View>
      </View>
    </View>
  );
}
  
  

const styles = StyleSheet.create({
  landingScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "white",
  },
  top: {
    flex: 1
  },
  appNameText: {
    fontSize: 25,
    alignSelf: "center",
  },
  aboutUs: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20
  },
  landingScreenText: {
    textAlign: "center"
  },
  getStarted: {
    flex: 2
  },
  getStartedButton: {
    backgroundColor: "#6D98F4",
    alignSelf: "center",
    width: 256,
    height: 46,
    borderRadius: 10,
    justifyContent: "center"
  },
  getStartedButtonText: {
    color: "#FFFDFD",
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  logInButton: {
    alignSelf: "center",
    marginTop: 25
  },
  landingScreenContent: {
    marginTop: 150
  }
});